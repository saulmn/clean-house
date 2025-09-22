import {
  Paragraph,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";

export default function InfoTooltip({
  message,
  onClick,
  icon,
}: {
  message: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={onClick}>
          {icon ? (
            icon
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M9 17C13.125 17 16.5 13.625 16.5 9.5C16.5 5.375 13.125 2 9 2C4.875 2 1.5 5.375 1.5 9.5C1.5 13.625 4.875 17 9 17Z"
                stroke="#6C7278"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 6.5V10.25"
                stroke="#6C7278"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.99609 12.5H9.00283"
                stroke="#6C7278"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <Paragraph variant="caption">{message}</Paragraph>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
