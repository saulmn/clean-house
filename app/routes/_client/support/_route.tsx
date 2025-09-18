import type { MetaFunction } from "@remix-run/node";
// components
import { CallToAction } from "../components";
import { Hero, SocialMedia } from "./components";

export const meta: MetaFunction = () => [
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
