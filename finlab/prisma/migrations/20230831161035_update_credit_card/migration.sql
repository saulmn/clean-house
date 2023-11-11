/*
  Warnings:

  - You are about to drop the column `cvv` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `expiry` on the `Card` table. All the data in the column will be lost.
  - Added the required column `cvc` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiryDate` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "cvv",
DROP COLUMN "expiry",
ADD COLUMN     "cvc" TEXT NOT NULL,
ADD COLUMN     "expiryDate" TEXT NOT NULL;
