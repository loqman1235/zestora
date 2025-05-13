/*
  Warnings:

  - Made the column `orderId` on table `orders` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "orderId" SET NOT NULL;
