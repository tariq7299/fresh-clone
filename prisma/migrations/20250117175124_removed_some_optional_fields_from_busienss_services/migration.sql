/*
  Warnings:

  - Made the column `service_id` on table `BusinessService` required. This step will fail if there are existing NULL values in that column.
  - Made the column `duration` on table `BusinessService` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `BusinessService` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BusinessService" ALTER COLUMN "service_id" SET NOT NULL,
ALTER COLUMN "duration" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL;
