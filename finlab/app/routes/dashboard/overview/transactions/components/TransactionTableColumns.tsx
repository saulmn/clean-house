import type { TransactionStatus, TransactionType } from "@prisma/client";
import type { Column, ColumnDef } from "@tanstack/react-table";
// components
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Checkbox,
} from "~/components/ui";
import DeleteTransactionDialog from "./DeleteTransactionDialog";
// utils
import { formatDate, formatTime } from "~/utils/formatDate";
import { formatCurrency } from "~/utils/formatNumber";
import { cn } from "~/utils/cn";
// types
import type { Status } from "~/types/status";
import { getStatusColor } from "~/utils/getStatusColor";

export type Transaction = {
  id: string;
  number: string;
  amount: number;
  status: TransactionStatus;
  type: TransactionType;
  createdAt: string;
  company: string;
  companyLogo: string;
  companyIndustry: string;
  subRows?: { user: string; createdAt: string };
};

export const transactionsTableColumns: ColumnDef<Transaction>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "number",
    header: ({ column }) => {
      return <FilterHeaderButton title="Transaction No." column={column} />;
    },
  },
  {
    accessorKey: "company",
    header: ({ column }) => {
      return <FilterHeaderButton title="Business" column={column} />;
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <Avatar
            className={cn(
              row.original.companyIndustry === "Personal"
                ? "h-12 w-12"
                : "h-12 w-12 bg-[#F4F4F7] p-[14px]"
            )}
          >
            <AvatarImage src={row.original.companyLogo} />
            <AvatarFallback>{row.getValue("company")}</AvatarFallback>
          </Avatar>{" "}
          <div>
            <div>{row.getValue("company")}</div>
            <div className="mt-1 text-sm font-medium capitalize text-secondary-300">
              {row.original.companyIndustry}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Transaction Type",
    cell: ({ row }) => {
      return (
        <div>
          <Badge variant="secondary" size="lg">
            {row.getValue("type")}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return <FilterHeaderButton title="Date & Time" column={column} />;
    },
    cell: ({ row }) => {
      return (
        <div>
          <div className="pb-1 text-base font-semibold text-secondary-500">
            {formatDate({ date: row.getValue("createdAt") })}
          </div>
          <div className="text-sm font-medium text-secondary-300">
            {formatTime(row.getValue("createdAt"))}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return <FilterHeaderButton title="Amount" column={column} />;
    },
    cell: ({ row }) => {
      return (
        <div>
          {row.original.type === "Receive"
            ? `+${formatCurrency(row.getValue("amount"))}`
            : `-${formatCurrency(row.getValue("amount"))}`}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <Badge
          variant={getStatusColor(row.getValue("status")) as Status}
          size="lg"
        >
          {row.getValue("status")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => (
      <>
        <div className="flex">
          {row.getCanExpand() ? (
            <Button
              variant="link"
              size="icon"
              {...{
                onClick: row.getToggleExpandedHandler(),
                style: { cursor: "pointer" },
              }}
              className="group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="fill-secondary-300 duration-200 group-hover:fill-primary"
              >
                <path d="M17.7087 7.62506C15.7837 4.60006 12.967 2.8584 10.0003 2.8584C8.51699 2.8584 7.07533 3.29173 5.75866 4.10007C4.44199 4.91673 3.25866 6.1084 2.29199 7.62506C1.45866 8.9334 1.45866 11.0584 2.29199 12.3667C4.21699 15.4001 7.03366 17.1334 10.0003 17.1334C11.4837 17.1334 12.9253 16.7001 14.242 15.8917C15.5587 15.0751 16.742 13.8834 17.7087 12.3667C18.542 11.0667 18.542 8.9334 17.7087 7.62506ZM10.0003 13.3667C8.13366 13.3667 6.63366 11.8584 6.63366 10.0001C6.63366 8.14173 8.13366 6.6334 10.0003 6.6334C11.867 6.6334 13.367 8.14173 13.367 10.0001C13.367 11.8584 11.867 13.3667 10.0003 13.3667Z" />
                <path d="M10 7.61621C8.69167 7.61621 7.625 8.68288 7.625 9.99954C7.625 11.3079 8.69167 12.3745 10 12.3745C11.3083 12.3745 12.3833 11.3079 12.3833 9.99954C12.3833 8.69121 11.3083 7.61621 10 7.61621Z" />
              </svg>
            </Button>
          ) : null}{" "}
          <DeleteTransactionDialog transactionId={row.getValue("id")} />
        </div>
      </>
    ),
  },
];

type FilterHeaderButtonProps = {
  title: string;
  column: Column<Transaction, unknown>;
};

function FilterHeaderButton({ title, column }: FilterHeaderButtonProps) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className="whitespace-nowrap text-base font-semibold text-secondary-400 hover:bg-transparent"
    >
      {title}
      <img
        src="/icons/filter.svg"
        alt="filter table"
        className="ml-2 h-4 w-4"
      />
    </Button>
  );
}
