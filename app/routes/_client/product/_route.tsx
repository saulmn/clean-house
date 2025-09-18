import type { MetaFunction } from "@remix-run/node";
// components
import { CallToAction, Testimonial } from "../components";
import { Benefit, Features, Hero, Solutions } from "./components";

export const meta: MetaFunction = () => [
  { title: "Our product | Remix Template" },
];

export default function _route() {
  return (
    <>
      <Hero />
      <Features />
      <Benefit />
      <Solutions />
      <Testimonial />
      <CallToAction />
    </>
  );
}
