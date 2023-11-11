import type { V2_MetaFunction } from "@remix-run/node";
// components
import { CallToAction } from "../../components";
import { Benefit, FAQ, Hero, PartnerForm } from "./components";

export const meta: V2_MetaFunction = () => [
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
