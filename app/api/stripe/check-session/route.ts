import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await auth();
  const userId = session?.user?.id;
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");

  if (!userId || !sessionId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const completedCheckoutSession =
    await prisma.completedCheckoutSession.findFirst({
      where: {
        stripeSessionId: sessionId,
        userId,
        used: false,
        expiresAt: { gt: new Date() },
      },
    });

  if (completedCheckoutSession) {
    await prisma.completedCheckoutSession.update({
      where: { id: completedCheckoutSession.id },
      data: { used: true },
    });
  }

  return NextResponse.json({ isCompleted: !!completedCheckoutSession });
}
