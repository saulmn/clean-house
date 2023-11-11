import { useEffect, useMemo, useState } from "react";
import { json } from "@remix-run/node";
import invariant from "tiny-invariant";
import { useFetcher } from "@remix-run/react";
import { Check, ChevronsUpDown } from "lucide-react";
import type { LoaderArgs } from "@remix-run/node";
// components
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui";
// utils
import { cn } from "~/utils/cn";
//
import { prisma } from "~/db.server";

export async function loader({ request }: LoaderArgs) {
  let url = new URL(request.url);
  let query = url.searchParams.get("query");
  invariant(typeof query === "string", "query is required");

  let companies = await prisma.company.findMany({
    where: {
      name: {
        contains: query.toLowerCase(),
        mode: "insensitive",
      },
    },
  });
  return json({ companies });
}

type CompaniesComboboxProps = {
  setCompanyId: (value: string) => void;
};

export function CompaniesCombobox({ setCompanyId }: CompaniesComboboxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const companiesFetcher = useFetcher<typeof loader>();

  const companies = useMemo(() => {
    return companiesFetcher.data?.companies ?? [];
  }, [companiesFetcher.data?.companies]);

  const company = useMemo(() => {
    const company = companies.find(
      (company) => company.name.toLowerCase() === value.toLowerCase()
    );
    return company;
  }, [companies, value]);

  useEffect(() => {
    setCompanyId(company?.id ?? "");
  }, [company, setCompanyId]);

  return (
    <div className="flex h-full flex-col space-y-2 pt-1.5">
      <Label>Country</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="h-14 justify-between font-normal capitalize"
          >
            {company ? (
              <div className="flex items-center">
                <img
                  src={company.logo}
                  alt="company logo"
                  className="mr-2 h-5 w-5"
                />
                <span>{company.name}</span>
              </div>
            ) : (
              <span className="font-normal text-muted-foreground">
                Select company...
              </span>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className=" p-0">
          <Command>
            <CommandInput
              onValueChange={(event) => {
                companiesFetcher.submit(
                  { query: event },
                  { method: "GET", action: "/resources/companies-combobox" }
                );
              }}
              placeholder="Search country..."
            />
            <CommandEmpty>No company found.</CommandEmpty>
            <CommandGroup>
              {companies.map((company) => (
                <CommandItem
                  key={company.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={company.name}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === company.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <img src={company.logo} alt="flag" className="mr-2 h-5 w-5" />{" "}
                  <span>{company.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
