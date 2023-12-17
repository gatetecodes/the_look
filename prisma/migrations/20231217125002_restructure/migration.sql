/*
  Warnings:

  - Added the required column `price` to the `Glass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diagnosis` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `glassId` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeForPickup` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Glass" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "diagnosis" TEXT NOT NULL,
ADD COLUMN     "glassId" INTEGER NOT NULL,
ADD COLUMN     "timeForPickup" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_glassId_fkey" FOREIGN KEY ("glassId") REFERENCES "Glass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
