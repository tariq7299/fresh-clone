/*
  Warnings:

  - A unique constraint covering the columns `[businessId,service_id]` on the table `BusinessService` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BusinessService_businessId_service_id_key" ON "BusinessService"("businessId", "service_id");
