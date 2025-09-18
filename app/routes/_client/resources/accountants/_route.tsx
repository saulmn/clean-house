import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
// components
import { Hero, SearchAccountant } from "./components";

import { prisma } from "~/db.server";

export const meta: MetaFunction = () => [
  { title: "Accountants | Remix Template" },
];

export async function loader() {
  const accountants = await prisma.accountant.findMany({
    select: {
      id: true,
      name: true,
      logo: true,
      description: true,
    },
  });
  return json({ accountants });
}

export default function _route() {
  return (
    <>
      <Hero />
      <SearchAccountant />
    </>
  );
}
