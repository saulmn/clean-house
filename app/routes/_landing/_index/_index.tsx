import type { MetaFunction } from "@remix-run/node";

import { Hero } from "./Components";

export const meta: MetaFunction = () => [
  { title: "Clean House - Your Home Cleaning Partner" },
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
