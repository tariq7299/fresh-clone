/*
  Warnings:

  - You are about to drop the column `address` on the `Business` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Business" DROP COLUMN "address";

-- CreateTable
CREATE TABLE "BusinessLocation" (
    "id" SERIAL NOT NULL,
    "businessId" INTEGER NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "place_id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "apt" TEXT,
    "district" TEXT,
    "city" TEXT,
    "country" TEXT NOT NULL,
    "directions" TEXT,

    CONSTRAINT "BusinessLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BusinessLocation_businessId_key" ON "BusinessLocation"("businessId");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessLocation_place_id_key" ON "BusinessLocation"("place_id");

-- AddForeignKey
ALTER TABLE "BusinessLocation" ADD CONSTRAINT "BusinessLocation_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
