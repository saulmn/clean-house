/*
  Warnings:

  - You are about to drop the column `expiryDate` on the `Card` table. All the data in the column will be lost.
  - Added the required column `expiry` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "expiryDate",
ADD COLUMN     "expiry" TEXT NOT NULL;
