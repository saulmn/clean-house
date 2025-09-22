import type { Row } from "@tanstack/react-table";
// type
import type { Transaction } from "./TransactionTableColumns";
// utils
import { formatDate } from "@/utils/formatDate";

export default function RenderRowDetails({ row }: { row: Row<Transaction> }) {
  return (
    <div className="flex justify-between px-8 py-5 text-base font-semibold">
      <div>
        <div className="pb-1.5 text-sm font-medium text-secondary-300">
          Paid By
        </div>
        <div>{row.original.subRows?.user}</div>
      </div>
      <div>
        <div className="pb-1.5 text-sm font-medium text-secondary-300">
          Account Type
        </div>
        <div>Corporate Business</div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-primary-500" />
          <span>Transfer send</span>
        </div>
        <div className="pt-1.5 text-sm font-medium text-secondary-300">
          {row.original.subRows?.createdAt
            ? formatDate({ date: row.original.subRows?.createdAt })
            : "N/A"}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-primary-500" />
          <span>Transfer Receive</span>
        </div>
        <div className="pt-1.5 text-sm font-medium text-secondary-300">
          {row.original.subRows?.createdAt
            ? formatDate({ date: row.original.subRows?.createdAt })
            : "N/A"}
        </div>
      </div>
      <div>
        <div className="pb-1.5 text-sm font-medium text-secondary-300">
          Transaction Id
        </div>
        <div>{row.original.id}</div>
      </div>
    </div>
  );
}
