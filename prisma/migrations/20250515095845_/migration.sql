-- CreateTable
CREATE TABLE "shipping_address" (
    "id" TEXT NOT NULL,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT,
    "zip" TEXT,
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "orderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shipping_address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "shipping_address_orderId_key" ON "shipping_address"("orderId");

-- AddForeignKey
ALTER TABLE "shipping_address" ADD CONSTRAINT "shipping_address_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
