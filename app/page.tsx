import type { Metadata } from "next";
import Deck from "./components/Deck";

// FootballCo naming approved for fundraising surfaces (Andy Jackson's consent,
// relayed by Paul in #gtm-footballco, 15 Jul 2026). Flip to false to revert the
// public deck to the unnamed copy if that consent changes pre-press-release.
const named = true;

// deck.sharematch.me (the DECK_VARIANT=named direct-upload build) stays
// noindexed so the two hosts never compete in search.
const privateAlias = process.env.DECK_VARIANT === "named";

export function generateMetadata(): Metadata {
  if (!privateAlias) return {};
  return {
    title: "ShareMatch · Investor Deck",
    robots: { index: false, follow: false },
  };
}

export default function Home() {
  return <Deck named={named} />;
}
