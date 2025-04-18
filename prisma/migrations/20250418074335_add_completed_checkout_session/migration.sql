-- CreateTable
CREATE TABLE "completed_checkout_sessions" (
    "id" TEXT NOT NULL,
    "stripeSessionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "completed_checkout_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "completed_checkout_sessions_stripeSessionId_key" ON "completed_checkout_sessions"("stripeSessionId");

-- AddForeignKey
ALTER TABLE "completed_checkout_sessions" ADD CONSTRAINT "completed_checkout_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
