/*
  Warnings:

  - You are about to drop the column `gender` on the `Business` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "GenderOfCustomers" AS ENUM ('male', 'female', 'both');

-- AlterTable
ALTER TABLE "Business" DROP COLUMN "gender",
ADD COLUMN     "genderOfCustomers" "GenderOfCustomers";

-- DropEnum
DROP TYPE "Gender";
