import type {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  Row,
  SortingState,
} from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Fragment, useMemo, useState } from "react";
// components
import { DataTablePagination } from "~/components/admin";
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui";
import TransactionTableFilterInputs from "./TransactionTableFilterInputs";
// utils
import { cn } from "~/utils/cn";
import AddTransaction from "./AddTransaction";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  renderSubComponent: (props: { row: Row<TData> }) => React.ReactElement;
  getRowCanExpand: (row: Row<TData>) => boolean;
}

export default function TransactionTable<TData, TValue>({
  columns,
  data,
  renderSubComponent,
  getRowCanExpand,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [isShownFilterInputs, setIsShownFilterInputs] = useState(false);
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    getPaginationRowModel: getPaginationRowModel(),

    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    onRowSelectionChange: setRowSelection,

    onPaginationChange: setPagination,

    getRowCanExpand,
    getExpandedRowModel: getExpandedRowModel(),

    state: {
      sorting,
      pagination,
      columnFilters,
      rowSelection,
    },
    // debugTable: true,
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative hidden basis-1/2 md:block">
          <Input
            placeholder="Filter transaction number..."
            value={
              (table.getColumn("number")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("number")?.setFilterValue(event.target.value)
            }
            className="placeholder:text-[rgba(255, 255, 255, 0.50)] h-12 rounded-full border border-secondary-200 bg-[#FFFFFF]/10 py-2 pl-12 text-secondary-400 md:w-64"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute left-3 top-[50%] -translate-y-1/2 transform"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#1A1C1E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="#1A1C1E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex basis-full justify-between space-x-2 md:basis-1/2 md:justify-end md:space-x-5">
          <Button
            variant="outline"
            className={cn(
              isShownFilterInputs && " bg-secondary-200 ",
              "h-12 w-12 rounded-full p-0 md:h-10 md:w-auto md:px-4 md:py-2"
            )}
            onClick={() => setIsShownFilterInputs(!isShownFilterInputs)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="md:mr-2"
            >
              <path
                d="M5.40002 2.09961H18.6C19.7 2.09961 20.6 2.99961 20.6 4.09961V6.29961C20.6 7.09961 20.1 8.09961 19.6 8.59961L15.3 12.3996C14.7 12.8996 14.3 13.8996 14.3 14.6996V18.9996C14.3 19.5996 13.9 20.3996 13.4 20.6996L12 21.5996C10.7 22.3996 8.90002 21.4996 8.90002 19.8996V14.5996C8.90002 13.8996 8.50002 12.9996 8.10002 12.4996L4.30002 8.49961C3.80002 7.99961 3.40002 7.09961 3.40002 6.49961V4.19961C3.40002 2.99961 4.30002 2.09961 5.40002 2.09961Z"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.93 2.09961L6 9.99961"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden md:block">Filter</span>
          </Button>

          <Button
            variant="outline"
            className="h-12 w-12 rounded-full p-0 md:h-10 md:w-auto md:px-4 md:py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="md:mr-2"
            >
              <path
                d="M9.31995 6.50043L11.8799 3.94043L14.4399 6.50043"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.88 14.1798V4.00977"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12C4 16.42 7 20 12 20C17 20 20 16.42 20 12"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden md:block">Export</span>
          </Button>

          <AddTransaction />
        </div>
      </div>

      {isShownFilterInputs && <TransactionTableFilterInputs />}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Fragment key={row.id}>
                <TableRow data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
                {row.getIsExpanded() && (
                  <tr>
                    <td colSpan={row.getVisibleCells().length}>
                      {renderSubComponent({ row })}
                    </td>
                  </tr>
                )}
              </Fragment>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <DataTablePagination table={table} />
    </div>
  );
}
