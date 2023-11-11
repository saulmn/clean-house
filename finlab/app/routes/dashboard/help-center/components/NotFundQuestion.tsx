import { Heading, Paragraph } from "~/components/ui";

export default function NotFundQuestion() {
  return (
    <div className="flex flex-col gap-2 rounded-[20px] border border-secondary-200 p-6">
      <div className="pb-8">
        <Heading variant="h6" className="pb-4 text-lg font-semibold lg:text-lg">
          No results found
        </Heading>
        <Paragraph variant="body3" className="text-secondary-300">
          Try adjusting your search or filter to find what you are looking for.
        </Paragraph>
      </div>
    </div>
  );
}
