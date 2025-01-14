-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'both');

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
    "address" TEXT,
    "gender" "Gender",

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessService" (
    "id" SERIAL NOT NULL,
    "businessId" INTEGER NOT NULL,
    "service_id" INTEGER,
    "duration" INTEGER,
    "price" DOUBLE PRECISION,

    CONSTRAINT "BusinessService_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Business_userId_key" ON "Business"("userId");

-- AddForeignKey
ALTER TABLE "BusinessService" ADD CONSTRAINT "BusinessService_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
