import type { V2_MetaFunction } from "@remix-run/node";
// components
import { CallToAction, Testimonial } from "../components";
import { Benefit, Features, Hero, Solutions } from "./components";

export const meta: V2_MetaFunction = () => [
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
