import { useFetcher, useLoaderData } from "@remix-run/react";
// components
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Paragraph,
  ScrollArea,
  ScrollBar,
} from "@/components/ui";
import QuestionCard from "./QuestionCard";
import { InfoTooltip } from "@/components/admin";
//
import type { loader } from "../_route";
import NotFundQuestion from "./NotFundQuestion";

export default function SearchCard() {
  const { faqs } = useLoaderData<typeof loader>();

  const searchQuestionFetcher = useFetcher<typeof loader>();
  console.log("searchQuestionFetcher", searchQuestionFetcher.data);

  const data = searchQuestionFetcher.data
    ? (searchQuestionFetcher.data.faqs as typeof faqs)
    : faqs;
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <Card className="h-min basis-full space-y-8 lg:sticky lg:top-24 lg:basis-4/12">
        <CardHeader>
          <CardTitle>Hi, Can we help you ?</CardTitle>
          <CardDescription>
            Type your question or search by keyword here here
          </CardDescription>
        </CardHeader>

        <CardContent>
          <searchQuestionFetcher.Form method="GET" className="relative w-full">
            <img
              src="/icons/magnifying-glass.svg"
              alt="magnifying-glass"
              className="absolute left-3 top-1/2 -translate-y-1/2 transform"
            />
            <Input
              name="query"
              placeholder="Search here"
              className="w-full pl-12"
              onChange={(event) => {
                searchQuestionFetcher.submit(
                  { query: event.target.value },
                  { method: "GET", action: "/dashboard/help-center" }
                );
              }}
            />
          </searchQuestionFetcher.Form>
        </CardContent>

        <CardFooter className="flex-col items-start ">
          <Paragraph variant="body3">Popular Search</Paragraph>

          <ScrollArea className="flex w-full whitespace-nowrap pt-4">
            {["Transfer", "Change card", "Flow"].map((topic, index) => (
              <Button variant="outline" key={index} className="mr-1.5">
                {topic}
              </Button>
            ))}

            <ScrollBar orientation="horizontal" className="md:hidden" />
          </ScrollArea>
        </CardFooter>
      </Card>

      <Card className="basis-full space-y-8 lg:basis-8/12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>Frequently Asked Questions</span>
            <InfoTooltip message="All faqs" />
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 border-t border-secondary-100 py-8">
          {data.length ? (
            data.map((item) => <QuestionCard key={item.question} item={item} />)
          ) : (
            <NotFundQuestion />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
