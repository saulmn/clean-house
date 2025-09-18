import { Paragraph } from "../ui";

type NotificationItemProps = {
  iconSrc: string;
  title: string;
  time: string;
  message: string;
};

export default function NotificationItem({
  iconSrc,
  title,
  time,
  message,
}: NotificationItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100">
          <img src={iconSrc} alt={title} />
        </div>
      </div>

      <div className="w-full">
        <Paragraph
          variant="body2"
          className="flex items-center justify-between pb-1 font-semibold text-secondary-500"
        >
          <span>{title}</span>
          <span className="text-sm font-normal text-secondary-300">{time}</span>
        </Paragraph>
        <Paragraph variant="body3" className="text-medium text-secondary-400">
          {message}
        </Paragraph>
      </div>
    </div>
  );
}
