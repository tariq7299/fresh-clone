/*
  Warnings:

  - You are about to drop the column `genderOfCustomers` on the `Business` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Business" DROP COLUMN "genderOfCustomers",
ADD COLUMN     "gender_of_customers" "GenderOfCustomers";
