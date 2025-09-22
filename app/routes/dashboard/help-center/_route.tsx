import { json } from "@remix-run/node";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
// components
import { Breadcrumb, Container } from "@/components/ui";
import { SearchCard } from "./components";
//
import { prisma } from "@/db.server";

export const meta: MetaFunction = () => [
  { title: "Help center | Clean House" },
];

export async function loader({ request }: LoaderFunctionArgs) {
  let url = new URL(request.url);
  let query = url.searchParams.get("query");

  if (query) {
    const faqs = await prisma.faq.findMany({
      where: {
        question: {
          contains: query.toLowerCase(),
          mode: "insensitive",
        },
      },
    });

    return json({ faqs });
  }

  const faqs = await prisma.faq.findMany({});

  return json({ faqs });
}

export default function _route() {
  return (
    <>
      <div className="w-screen bg-[#1C2634]">
        <Container className="pb-40 pt-28 xl:px-0">
          <Breadcrumb
            heading="Help Center"
            links={[
              { name: "Dashboard", href: "/dashboard/overview" },
              { name: "Help Center", href: "" },
            ]}
          />
        </Container>
      </div>

      <Container className="relative -top-32  h-auto w-full xl:px-0">
        <SearchCard />
      </Container>
    </>
  );
}
