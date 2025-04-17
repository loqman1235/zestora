import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const body = await req.text();

  if (!sig) {
    return new Response("Missing Stripe signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
    console.log("Event received:", event);
  } catch (error) {
    console.log("Error creating Stripe event:", error);
    return new Response("Invalid Stripe signature", { status: 400 });
  }

  //   TODO: handle (checkout.session.completed, payment_intent.succeeded) events
  try {
    switch (event.type) {
      case "checkout.session.completed":
        //   TODO: handle checkout.session.completed
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutSessionCompleted(session);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (error) {
    console.log("Error handling Stripe event:", error);
    return new Response("Error handling Stripe event", { status: 500 });
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutSessionCompleted(
  session: Stripe.Checkout.Session,
) {
  //   TODO: handle checkout.session.completed
  console.log("Checkout session", session);
  //   console.log("Checkout completed:", session.id, session.metadata);
  //   console.log("Handled checkout session:", session.id);
}
