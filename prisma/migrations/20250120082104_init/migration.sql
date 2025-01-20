-- CreateEnum
CREATE TYPE "GenderOfCustomers" AS ENUM ('men', 'women', 'both');

-- CreateTable
CREATE TABLE "Business" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name_ar" TEXT,
    "name_en" TEXT,
    "description_ar" TEXT,
    "description_en" TEXT,
    "website_url" TEXT,
    "capacity" INTEGER,
    "category_id" INTEGER,
    "gender_of_customers" "GenderOfCustomers",

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessService" (
    "id" SERIAL NOT NULL,
    "businessId" INTEGER NOT NULL,
    "service_id" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "BusinessService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessLocation" (
    "id" SERIAL NOT NULL,
    "businessId" INTEGER NOT NULL,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "place_id" TEXT,
    "address" TEXT,
    "district" TEXT,
    "city" TEXT,
    "country" TEXT,
    "directions" TEXT,
    "street" TEXT,
    "apartment" TEXT,
    "building" TEXT,
    "online_business" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "BusinessLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Business_userId_key" ON "Business"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessService_businessId_service_id_key" ON "BusinessService"("businessId", "service_id");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessLocation_businessId_key" ON "BusinessLocation"("businessId");

-- AddForeignKey
ALTER TABLE "BusinessService" ADD CONSTRAINT "BusinessService_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessLocation" ADD CONSTRAINT "BusinessLocation_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
