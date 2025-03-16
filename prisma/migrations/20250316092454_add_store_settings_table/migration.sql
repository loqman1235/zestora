-- CreateTable
CREATE TABLE "store_settings" (
    "id" TEXT NOT NULL,
    "storeName" TEXT NOT NULL,
    "storeEmail" TEXT NOT NULL,
    "storePhone" TEXT,
    "storeAddress" TEXT,
    "storeLogo" TEXT,
    "currencyCode" TEXT NOT NULL DEFAULT 'USD',
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "socialMedia" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "store_settings_pkey" PRIMARY KEY ("id")
);
