import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useSearchParams } from "@remix-run/react";
import type { DateRange } from "react-day-picker";
// components
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  ScrollArea,
  ScrollBar,
} from "~/components/ui";
// utils
import { cn } from "~/utils/cn";

export default function TransactionTableFilterInputs() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <ScrollArea className="h-full w-full">
      <div className="flex w-full justify-between gap-4 lg:gap-6">
        <div className="basis-1/4">
          <Select
            onValueChange={(value) => {
              const newSP = addParamToSet(
                new URLSearchParams(searchParams),
                "type",
                value
              );
              setSearchParams(newSP);
            }}
          >
            <SelectTrigger className="h-12 w-40 rounded-full lg:w-full">
              <SelectValue placeholder="Transaction type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Transaction Type</SelectLabel>
                <SelectItem value="Subscribe">Subscribe</SelectItem>
                <SelectItem value="Receive">Receive</SelectItem>
                <SelectItem value="Transfer">Transfer</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="basis-1/4">
          <Select
            onValueChange={(value) => {
              const newSP = addParamToSet(
                new URLSearchParams(searchParams),
                "industry",
                value.toLowerCase()
              );
              setSearchParams(newSP);
            }}
          >
            <SelectTrigger className="h-12 w-40 rounded-full lg:w-full">
              <SelectValue placeholder="Business type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Business Type</SelectLabel>
                <SelectItem value="Software">Software</SelectItem>
                <SelectItem value="Ecommerce">Ecommerce</SelectItem>
                <SelectItem value="Food">Food</SelectItem>
                <SelectItem value="Freelance">Freelance</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="basis-1/4">
          <DatePickerWithRange />
        </div>

        <div className="basis-1/4">
          <Select
            onValueChange={(value) => {
              const newSP = addParamToSet(
                new URLSearchParams(searchParams),
                "status",
                value
              );
              setSearchParams(newSP);
            }}
          >
            <SelectTrigger className="h-12 w-40 rounded-full lg:w-full">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Success">Success</SelectItem>
                <SelectItem value="Canceled">Canceled</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (date?.from) {
      const newSP = addParamToSet(
        new URLSearchParams(searchParams),
        "date",
        `${date.from.toISOString()}${
          date.to ? `to=${date.to.toISOString()}` : ""
        }`
      );
      setSearchParams(newSP);
    }
  }, [date, searchParams, setSearchParams]);

  return (
    <div className={cn("grid h-12 gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "h-12 w-40 justify-between rounded-full text-left font-normal lg:w-full",
              !date && "text-muted-foreground"
            )}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Date Range</span>
            )}
            <img
              src="/icons/calendar.svg"
              alt="calendar icon"
              className="h-5 w-5"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function addParamToSet(
  searchParams: URLSearchParams,
  key: string,
  value: string
) {
  searchParams.delete(key);
  searchParams.append(key, value);

  return searchParams;
}
