-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_transactionId_fkey";

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "transactionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
