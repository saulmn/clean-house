import type { TransactionStatus, TransactionType } from "@prisma/client";
import { getTransactionNumber } from "@/utils/getTransactionNumber";

export const TRANSACTIONS = [
  {
    number: getTransactionNumber(),
    amount: 39.99,
    type: "Subscribe" as TransactionType,
    status: "Success" as TransactionStatus,
    createdAt: new Date(new Date().getFullYear(), 0, 5),
  },
  {
    number: getTransactionNumber(),
    amount: 55,
    type: "Transfer" as TransactionType,
    status: "Canceled" as TransactionStatus,
    createdAt: new Date(new Date().getFullYear(), 0, 20),
  },
  {
    number: getTransactionNumber(),
    amount: 189,
    type: "Subscribe" as TransactionType,
    status: "Pending" as TransactionStatus,
    createdAt: new Date(new Date().getFullYear(), 1, 15),
  },
  {
    number: getTransactionNumber(),
    amount: 14.55,
    type: "Transfer" as TransactionType,
    status: "Pending" as TransactionStatus,
    createdAt: new Date(new Date().getFullYear(), 2, 1),
  },
  {
    number: getTransactionNumber(),
    amount: 98.99,
    type: "Receive" as TransactionType,
    status: "Canceled" as TransactionStatus,
    createdAt: new Date(new Date().getFullYear(), 3, 20),
  },
  {
    number: getTransactionNumber(),
    amount: 588,
    type: "Receive" as TransactionType,
    status: "Success" as TransactionStatus,
    createdAt: new Date(new Date().getFullYear(), 2, 2),
  },
  {
    number: getTransactionNumber(),
    amount: 78,
    type: "Transfer" as TransactionType,
    status: "Success" as TransactionStatus,
    createdAt: new Date(new Date().getFullYear(), 1, 29),
  },
  {
    number: getTransactionNumber(),
    amount: 99,
    type: "Subscribe" as TransactionType,
    status: "Canceled" as TransactionStatus,
    createdAt: new Date(new Date().getFullYear(), 5, 11),
  },
  {
    number: getTransactionNumber(),
    amount: 45.08,
    type: "Receive" as TransactionType,
    status: "Pending" as TransactionStatus,
    createdAt: new Date(new Date().getFullYear(), 0, 5),
  },
  {
    number: getTransactionNumber(),
    amount: 99,
    type: "Subscribe" as TransactionType,
    status: "Canceled" as TransactionStatus,
    createdAt: new Date(new Date().getFullYear(), 6, 5),
  },
];
