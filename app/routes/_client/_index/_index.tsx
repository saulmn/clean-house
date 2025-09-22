import type { MetaFunction } from "@remix-run/node";

import { Hero } from "./Components";

export const meta: MetaFunction = () => [
  { title: "Finlab - Remix Full Stack Client and Admin Finance Template" },
  {
    name: "theme-color",
    content: "#31B099",
  },
];

export default function Index() {
  return (
    <>
      <Hero />
    </>
  );
}
