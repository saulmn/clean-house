import type { V2_MetaFunction } from "@remix-run/node";
// components
import { CallToAction } from "../components";
import { Hero, SocialMedia } from "./components";

export const meta: V2_MetaFunction = () => [
  { title: "Support | Remix Template" },
];

export default function _route() {
  return (
    <>
      <Hero />
      <SocialMedia />
      <CallToAction />
    </>
  );
}
