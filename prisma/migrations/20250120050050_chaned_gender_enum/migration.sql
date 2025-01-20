/*
  Warnings:

  - The values [male,female] on the enum `GenderOfCustomers` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "GenderOfCustomers_new" AS ENUM ('men', 'women', 'both');
ALTER TABLE "Business" ALTER COLUMN "gender_of_customers" TYPE "GenderOfCustomers_new" USING ("gender_of_customers"::text::"GenderOfCustomers_new");
ALTER TYPE "GenderOfCustomers" RENAME TO "GenderOfCustomers_old";
ALTER TYPE "GenderOfCustomers_new" RENAME TO "GenderOfCustomers";
DROP TYPE "GenderOfCustomers_old";
COMMIT;
