import { useState } from "react";
import {
  Button,
  Heading,
  Paragraph,
  ScrollArea,
  ScrollBar,
} from "@/components/ui";
// utils
import { cn } from "@/utils/cn";

type QuestionProps = {
  item: {
    question: string;
    answer: string;
    likes: number;
    tags: string[];
  };
};

export default function QuestionCard({ item }: QuestionProps) {
  const [like, setLike] = useState(false);

  return (
    <div className="flex flex-col gap-2 rounded-[20px] border border-secondary-200 p-6">
      <div className="pb-8">
        <Heading variant="h6" className="pb-4 text-lg font-semibold lg:text-lg">
          {item.question}
        </Heading>
        <Paragraph variant="body3" className="text-secondary-300">
          {item.answer}
        </Paragraph>
      </div>

      <div className="flex items-center justify-between gap-5">
        <ScrollArea className="flex whitespace-nowrap">
          {item.tags.map((topic, index) => (
            <Button
              variant="outline"
              key={index}
              className="mr-1.5 inline-block"
            >
              {topic}
            </Button>
          ))}

          <ScrollBar orientation="horizontal" className="md:hidden" />
        </ScrollArea>

        <button
          onClick={() => setLike(!like)}
          className={cn(
            like
              ? "fill-primary-500 stroke-primary-500 text-primary-500"
              : "fill-none stroke-secondary-500 text-secondary-500",
            "flex items-center gap-2 font-semibold"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.48047 18.3505L10.5805 20.7505C10.9805 21.1505 11.8805 21.3505 12.4805 21.3505H16.2805C17.4805 21.3505 18.7805 20.4505 19.0805 19.2505L21.4805 11.9505C21.9805 10.5505 21.0805 9.35046 19.5805 9.35046H15.5805C14.9805 9.35046 14.4805 8.85046 14.5805 8.15046L15.0805 4.95046C15.2805 4.05046 14.6805 3.05046 13.7805 2.75046C12.9805 2.45046 11.9805 2.85046 11.5805 3.45046L7.48047 9.55046"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.37988 18.3504V8.55039C2.37988 7.15039 2.97988 6.65039 4.37988 6.65039H5.37988C6.77988 6.65039 7.37988 7.15039 7.37988 8.55039V18.3504C7.37988 19.7504 6.77988 20.2504 5.37988 20.2504H4.37988C2.97988 20.2504 2.37988 19.7504 2.37988 18.3504Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {like ? item.likes + 1 : item.likes}
        </button>
      </div>
    </div>
  );
}
