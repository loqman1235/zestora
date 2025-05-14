import { auth } from "@/auth";
import { STRIPE_ALLOWED_COUNTRIES } from "@/config/consts";
import { siteConfig } from "@/config/site";
import { stripe } from "@/lib/stripe";
import { CartItemType } from "@/types/cart";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const authResult = await auth();

  if (!authResult) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = authResult?.user?.id;

  try {
    const { cart, shippingFee, discount, subTotal } = await request.json();

    // Validate cart data
    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json({ error: "Invalid cart" }, { status: 400 });
    }

    // Convert prices to cents (assuming cart prices are in dollars)
    const cartInCents = cart.map((item: CartItemType) => ({
      ...item,
      price: Math.round(item.price * 100), // e.g., 17.49 → 1749
    }));

    // Convert shippingFee and discount to cents (assuming they're in dollars)
    const shippingFeeInCents = Math.round(shippingFee * 100); // e.g., 5.00 → 500
    const discountInCents = Math.round(discount * 100); // e.g., 2.00 → 200

    // Verify subtotal (in cents)
    const calculatedSubTotal = cartInCents.reduce(
      (sum: number, item: { price: number; quantity: number }) =>
        sum + item.price * item.quantity,
      0,
    );
    const subTotalInCents = Math.round(subTotal * 100); // Convert subTotal to cents
    if (calculatedSubTotal !== subTotalInCents) {
      return NextResponse.json({ error: "Subtotal mismatch" }, { status: 400 });
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        ...cartInCents.map((item: CartItemType) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              description: `Size: ${item.size || "N/A"} | Color: ${item.color || "N/A"}`,
              // TODO: Add images when implimenting image upload
            },
            unit_amount: item.price, //  in cents (e.g., 1749)
          },
          quantity: item.quantity,
        })),
        // Add shipping fee
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Shipping Fee",
            },
            unit_amount: shippingFeeInCents,
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries:
          STRIPE_ALLOWED_COUNTRIES as Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[],
      },
      billing_address_collection: "required",

      // Apply discount (if any)
      discounts: discountInCents
        ? [
            {
              coupon: await createOrGetCoupon(discountInCents),
            },
          ]
        : [],
      mode: "payment",
      customer_email: authResult?.user?.email || "",
      success_url: `${siteConfig.url}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteConfig.url}/cart`,
      metadata: {
        ...(userId && { userId }),
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}

// Helper function to create or reuse a coupon
async function createOrGetCoupon(amount: number) {
  const couponId = `coupon_${amount}`;
  try {
    await stripe.coupons.retrieve(couponId);
    return couponId;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    const coupon = await stripe.coupons.create({
      id: couponId,
      amount_off: amount, // In cents
      currency: "usd",
      duration: "once",
    });
    return coupon.id;
  }
}
