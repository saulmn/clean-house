import type { MetaFunction } from "@remix-run/node";
// components
import { CallToAction, Testimonial } from "../../components";
import { Benefit, Hero } from "./components";

export const meta: MetaFunction = () => [
  { title: "Finlab for Start Up | Remix Template" },
];

export default function _route() {
  return (
    <>
      <Hero />
      <Benefit />
      <Testimonial />
      <CallToAction />
    </>
  );
}
