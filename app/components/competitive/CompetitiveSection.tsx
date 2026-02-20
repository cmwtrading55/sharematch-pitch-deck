"use client";

import SectionWrapper from "../common/SectionWrapper";
import GlowCard from "../common/GlowCard";
import Badge from "../common/Badge";
import {
  Shield,
  Building2,
  Trophy,
  CreditCard,
  Coins,
  Rocket,
} from "lucide-react";

const moats = [
  {
    icon: Shield,
    title: "Regulatory Moat",
    description:
      "Formal Fatwa plus regulated operations across UK, UAE, Poland (VASP), and Canada (MSB). Years of scholarly and regulatory work already banked.",
  },
  {
    icon: Building2,
    title: "Government Distribution",
    description:
      "Pakistan Ministry of Interior, PTA whitelisting, KSA EWC ecosystem, PIF-supported channels. Reduced marketing friction and trust uplift.",
  },
  {
    icon: Trophy,
    title: "Sports Ecosystem Access",
    description:
      "ACC endorsement across 30 nations, SPL connectivity, Liga 1 league-wide strategy, BeIN Sports stadium exposure.",
  },
  {
    icon: CreditCard,
    title: "Native Payment Rails",
    description:
      "MPESA (Africa), GoPay & DANA (Indonesia), STC Pay, urpay & tiqmo (KSA/GCC). Higher deposit conversion in every target market.",
  },
  {
    icon: Coins,
    title: "Tokenised Loyalty (SSC)",
    description:
      "Gamified onboarding, streak incentives, Shariah tutorials, real-time alerts. SSC credits for activation, retention, and referrals.",
  },
  {
    icon: Rocket,
    title: "First-Mover Advantage",
    description:
      "Category creator with patent protection on core logic. Head start compounds &mdash; every new user, market, and jurisdiction widens the gap.",
  },
];

export default function CompetitiveSection() {
  return (
    <SectionWrapper id="competitive" className="py-5 md:py-10">
      <div className="text-center mb-5">
        <Badge variant="emerald" className="mb-4">
          Defensibility
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          The Compound Moat
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Six reinforcing advantages that compound over time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moats.map((m, i) => (
          <GlowCard key={m.title} delay={i * 0.1} className="p-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
              <m.icon className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {m.description}
            </p>
          </GlowCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
