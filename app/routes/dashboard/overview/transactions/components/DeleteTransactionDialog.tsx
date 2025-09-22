import { useEffect, useState } from "react";
import { useFetcher } from "@remix-run/react";
import { Loader2 } from "lucide-react";
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
} from "@/components/ui";

export default function DeleteTransactionDialog({
  transactionId,
}: {
  transactionId: string;
}) {
  const [open, setOpen] = useState(false);
  const deleteTransactionFetcher = useFetcher<{ success?: boolean }>();
  const actionData = deleteTransactionFetcher.data;
  const isDeleting = deleteTransactionFetcher.state !== "idle";

  useEffect(() => {
    if (actionData?.success && !isDeleting) {
      setOpen(false);
    }
  }, [actionData?.success, isDeleting]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link" size="icon" className="group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="fill-secondary-300 duration-200 group-hover:fill-primary"
          >
            <path d="M17.5584 4.35866C16.2167 4.22533 14.875 4.12533 13.525 4.05033V4.04199L13.3417 2.95866C13.2167 2.19199 13.0334 1.04199 11.0834 1.04199H8.90005C6.95838 1.04199 6.77505 2.14199 6.64172 2.95033L6.46672 4.01699C5.69172 4.06699 4.91672 4.11699 4.14172 4.19199L2.44172 4.35866C2.09172 4.39199 1.84172 4.70033 1.87505 5.04199C1.90838 5.38366 2.20838 5.63366 2.55838 5.60033L4.25838 5.43366C8.62505 5.00033 13.0251 5.16699 17.4417 5.60866C17.4667 5.60866 17.4834 5.60866 17.5084 5.60866C17.8251 5.60866 18.1 5.36699 18.1334 5.04199C18.1584 4.70033 17.9084 4.39199 17.5584 4.35866Z" />
            <path d="M16.0254 6.78301C15.8254 6.57467 15.5504 6.45801 15.2671 6.45801H4.73378C4.45044 6.45801 4.16711 6.57467 3.97544 6.78301C3.78378 6.99134 3.67544 7.27467 3.69211 7.56634L4.20878 16.1163C4.30044 17.383 4.41711 18.9663 7.32544 18.9663H12.6754C15.5838 18.9663 15.7004 17.3913 15.7921 16.1163L16.3088 7.57467C16.3254 7.27467 16.2171 6.99134 16.0254 6.78301ZM11.3838 14.7913H8.60878C8.26711 14.7913 7.98378 14.508 7.98378 14.1663C7.98378 13.8247 8.26711 13.5413 8.60878 13.5413H11.3838C11.7254 13.5413 12.0088 13.8247 12.0088 14.1663C12.0088 14.508 11.7254 14.7913 11.3838 14.7913ZM12.0838 11.458H7.91711C7.57544 11.458 7.29211 11.1747 7.29211 10.833C7.29211 10.4913 7.57544 10.208 7.91711 10.208H12.0838C12.4254 10.208 12.7088 10.4913 12.7088 10.833C12.7088 11.1747 12.4254 11.458 12.0838 11.458Z" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent
        onPointerDownOutside={(e) => (isDeleting ? e.preventDefault() : null)}
        className="flex flex-col items-center justify-center gap-8 p-8 sm:max-w-[480px]"
      >
        <div className="flex h-[91px] w-[91px] items-center justify-center rounded-full bg-error-500 p-5 shadow-[0px_24px_34px_-10px_rgba(133,46,61,0.30)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="51"
            viewBox="0 0 52 51"
            fill="none"
          >
            <path
              d="M45.2735 11.1138C41.8523 10.7738 38.431 10.5188 34.9885 10.3275V10.3062L34.521 7.54375C34.2023 5.58875 33.7348 2.65625 28.7623 2.65625H23.1948C18.2435 2.65625 17.776 5.46125 17.436 7.5225L16.9898 10.2425C15.0135 10.37 13.0373 10.4975 11.061 10.6888L6.72604 11.1138C5.83354 11.1988 5.19604 11.985 5.28104 12.8563C5.36604 13.7275 6.13104 14.365 7.02354 14.28L11.3585 13.855C22.4935 12.75 33.7135 13.175 44.976 14.3013C45.0398 14.3013 45.0823 14.3013 45.146 14.3013C45.9535 14.3013 46.6548 13.685 46.7398 12.8563C46.8035 11.985 46.166 11.1988 45.2735 11.1138Z"
              fill="white"
            />
            <path
              d="M41.3639 17.2975C40.8539 16.7663 40.1527 16.4688 39.4302 16.4688H12.5702C11.8477 16.4688 11.1252 16.7663 10.6365 17.2975C10.1477 17.8288 9.87145 18.5512 9.91395 19.295L11.2315 41.0975C11.4652 44.3275 11.7627 48.365 19.1789 48.365H32.8214C40.2377 48.365 40.5352 44.3488 40.7689 41.0975L42.0864 19.3163C42.1289 18.5513 41.8527 17.8288 41.3639 17.2975ZM29.5277 37.7188H22.4514C21.5802 37.7188 20.8577 36.9962 20.8577 36.125C20.8577 35.2538 21.5802 34.5312 22.4514 34.5312H29.5277C30.3989 34.5312 31.1214 35.2538 31.1214 36.125C31.1214 36.9962 30.3989 37.7188 29.5277 37.7188ZM31.3127 29.2188H20.6877C19.8164 29.2188 19.0939 28.4962 19.0939 27.625C19.0939 26.7538 19.8164 26.0312 20.6877 26.0312H31.3127C32.1839 26.0312 32.9064 26.7538 32.9064 27.625C32.9064 28.4962 32.1839 29.2188 31.3127 29.2188Z"
              fill="white"
            />
          </svg>
        </div>

        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-[32px] font-bold">
            Delete Transaction ?
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this transaction history?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="w-full">
          <deleteTransactionFetcher.Form
            method="DELETE"
            className="flex  w-full gap-6"
          >
            <DialogPrimitive.Close asChild className="basis-1/2">
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="w-full"
                disabled={isDeleting}
              >
                Cancel
              </Button>
            </DialogPrimitive.Close>

            <input type="hidden" name="transactionId" value={transactionId} />
            <Button
              name="intent"
              value="delete-transaction"
              type="submit"
              size="lg"
              className="w-full basis-1/2"
              disabled={isDeleting}
            >
              {isDeleting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Yes"
              )}
            </Button>
          </deleteTransactionFetcher.Form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
