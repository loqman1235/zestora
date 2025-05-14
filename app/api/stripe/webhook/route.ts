import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { generateOrderId } from "@/lib/utils";
import { CartItemType } from "@/types/cart";
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
    // console.log("Event received:", event);
  } catch (error) {
    console.log("Error creating Stripe event:", error);
    return new Response("Invalid Stripe signature", { status: 400 });
  }

  //   TODO: handle (checkout.`session`.completed, payment_intent.succeeded) events
  try {
    switch (event.type) {
      case "checkout.session.completed":
        //   TODO: handle checkout.session.completed
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutSessionCompleted(session);
        break;

      // TODO: HANDLE CHECKOUT FAILURE

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
  const userId = session.metadata?.userId;

  if (!userId) {
    console.log("No user ID found in session metadata");
    return;
  }

  // Retreive session with line items
  const stripeSession = await stripe.checkout.sessions.retrieve(session.id, {
    expand: ["line_items"],
  });

  if (!stripeSession) {
    console.log("No Stripe session found");
    return;
  }

  console.log(
    "STRIPE SESSION",
    stripeSession.collected_information?.shipping_details?.address,
  );

  // extract cart items from line items
  const cartItems =
    stripeSession.line_items?.data
      .filter((item) => item.description !== "Shipping Fee")
      .map((item) => ({
        id: item.id,
        name: item.description,
        quantity: item.quantity || 1,
        price: item.price?.unit_amount || 0,
      })) || ([] as CartItemType[]);

  // Save order
  await prisma.order.create({
    data: {
      userId,
      stripeSessionId: session.id,
      paymentIntentId: session.payment_intent as string,
      totalAmount: stripeSession.amount_total || 0,
      status: "PROCESSING",
      items: cartItems,
      orderId: generateOrderId(),
    },
  });

  // Upsert CompletedCheckoutSession to ensure token, expiresAt, and used are set
  await prisma.completedCheckoutSession.upsert({
    where: { stripeSessionId: session.id },
    update: { userId },
    create: {
      stripeSessionId: session.id,
      userId,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      used: false,
    },
  });

  // console.log("Order saved successfully:", session.id, session.metadata);
}
