import type { Metadata } from "next";
import Deck from "./components/Deck";

// DECK_VARIANT=named builds the private investor edition (names FootballCo) at
// the root. The public build leaves the env var unset.
const named = process.env.DECK_VARIANT === "named";

export function generateMetadata(): Metadata {
  if (!named) return {};
  return {
    title: "ShareMatch · Investor Deck",
    robots: { index: false, follow: false },
  };
}

export default function Home() {
  return <Deck named={named} />;
}
