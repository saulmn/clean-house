import { useState } from "react";
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

  let countries = await prisma.country.findMany({
    where: {
      name: {
        contains: query.toLowerCase(),
        mode: "insensitive",
      },
    },
  });
  return json({ countries });
}

type CountriesComboboxProps = {
  value: string;
  setValue: (value: string) => void;
};

export function CountriesCombobox({ value, setValue }: CountriesComboboxProps) {
  const [open, setOpen] = useState(false);

  const countriesFetcher = useFetcher<typeof loader>();
  let countries = countriesFetcher.data?.countries ?? [];

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
            {value ? (
              value
            ) : (
              <span className="font-normal text-muted-foreground">
                Select country...
              </span>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className=" p-0">
          <Command>
            <CommandInput
              onValueChange={(event) => {
                countriesFetcher.submit(
                  { query: event },
                  { method: "GET", action: "/resources/countries-combobox" }
                );
              }}
              name="country"
              placeholder="Search country..."
            />
            <CommandEmpty>No country found.</CommandEmpty>
            {countries.length > 0 && (
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.id}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    value={country.name}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === country.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <img
                      src={country.image}
                      alt="flag"
                      className="mr-2 h-5 w-5"
                    />{" "}
                    <span>{country.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
