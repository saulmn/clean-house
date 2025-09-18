import type { MetaFunction } from "@remix-run/node";
// components
import { CallToAction } from "../../components";
import { Benefit, FAQ, Hero, PartnerForm } from "./components";

export const meta: MetaFunction = () => [
  { title: "Partner | Remix Template" },
];

export default function _route() {
  return (
    <>
      <Hero />
      <Benefit />
      <PartnerForm />
      <FAQ />
      <CallToAction />
    </>
  );
}
