import { useEffect, useState } from "react";
import { useFetcher } from "@remix-run/react";
import { Loader2, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
// components
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  ScrollArea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { CompaniesCombobox } from "@/routes/resources/companies-combobox/_route";
// utils
import { cn } from "@/utils/cn";

export default function AddTransaction() {
  const [companyId, setCompanyId] = useState("");
  const [open, setOpen] = useState(false);
  const transactionFetcher = useFetcher<{ success?: boolean; error?: string | boolean }>();
  const actionData = transactionFetcher.data;

  const isSubmitting = transactionFetcher.state !== "idle";

  useEffect(() => {
    if (actionData?.success && !isSubmitting) {
      setOpen(false);
    }
  }, [actionData?.success, isSubmitting]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="whitespace-nowrap rounded-full"
        >
          New transaction
        </Button>
      </DialogTrigger>

      <DialogContent
        onPointerDownOutside={(e) => (isSubmitting ? e.preventDefault() : null)}
        className="p-6 sm:max-w-[480px] lg:p-8"
      >
        <DialogHeader className="flex w-full items-center justify-center">
          <div className="w-full">
            <DialogPrimitive.Close asChild>
              <Button
                variant="link"
                size="icon"
                className="text-secondary-500 hover:text-primary-500"
              >
                <X />
              </Button>
            </DialogPrimitive.Close>
          </div>

          <DialogTitle className="text-[32px] font-bold">
            New Transaction
          </DialogTitle>

          <DialogDescription className="text-center">
            Make a new transaction for your business
          </DialogDescription>
        </DialogHeader>

        <ScrollArea>
          <transactionFetcher.Form method="POST" className="mx-auto w-full">
            <fieldset
              className="w-full space-y-6 pt-6 disabled:opacity-70"
              disabled={isSubmitting}
            >
              <Select name="transactionType">
                <SelectTrigger className="placeholder:text-muted-foreground">
                  <SelectValue
                    placeholder="Select a transaction type"
                    className="placeholder:text-muted-foreground"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Transactions types</SelectLabel>
                    <SelectItem value="Subscribe">Subscribe</SelectItem>
                    <SelectItem value="Receive">Receive</SelectItem>
                    <SelectItem value="Transfer">Transfer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <CompaniesCombobox setCompanyId={setCompanyId} />

              <input type="hidden" name="companyId" value={companyId} />

              <div className="relative">
                <img
                  src="/icons/dollar.svg"
                  alt="dollar"
                  className={cn(
                    false ? "top-[53%]" : "top-[67%]",
                    "absolute left-3 -translate-y-1/2 transform"
                  )}
                />
                <Input
                  name="amount"
                  label="Enter amount"
                  placeholder="Amount"
                  className="w-full pl-10"
                  error={actionData?.error ? String(actionData.error) : undefined}
                />
              </div>

              <DialogFooter className="w-full pt-4">
                <Button
                  name="intent"
                  value="add-transaction"
                  size="lg"
                  type="submit"
                  className="w-full"
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    "Confirm"
                  )}
                </Button>
              </DialogFooter>
            </fieldset>
          </transactionFetcher.Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
