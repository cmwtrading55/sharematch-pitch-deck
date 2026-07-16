import type { Metadata } from "next";
import Deck from "../components/Deck";

export const metadata: Metadata = {
  title: "ShareMatch · Investor Deck",
  robots: { index: false, follow: false },
};

export default function AsgDeck() {
  return <Deck named />;
}
