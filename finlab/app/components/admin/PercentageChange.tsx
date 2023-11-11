import { Badge } from "~/components/ui";

type PercentageChangeProps = {
  percentageChange: number;
};

export default function PercentageChange({
  percentageChange,
}: PercentageChangeProps) {
  const isPositiveChange = percentageChange > 0;

  return (
    <div className="flex items-center gap-3 text-base font-medium">
      <Badge size="sm" variant={isPositiveChange ? undefined : "destructive"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          {isPositiveChange ? (
            <>
              <path
                d="M11.4317 8.96514L10.3208 4.81926L6.17488 5.93014"
                stroke="#31B099"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.07082 12.1807L10.2783 4.89307"
                stroke="#31B099"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          ) : (
            <>
              <path
                d="M6.90902 11.382L11.1848 11.756L11.5589 7.48023"
                stroke="#C65468"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.7218 5.24465L11.1309 11.6909"
                stroke="#C65468"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          )}
        </svg>
        {isPositiveChange ? `+${percentageChange}%` : `${percentageChange}%`}
      </Badge>
      <span>vs last month</span>
    </div>
  );
}
