import StickyNav from "./nav/StickyNav";
import HeroSection from "./hero/HeroSection";
import InvestmentSection from "./investment/InvestmentSection";
import OpportunitySection from "./opportunity/OpportunitySection";
import ShariahEdge from "./shariah/ShariahEdge";

import ProductSection from "./product/ProductSection";
import PartnersSection from "./partners/PartnersSection";
import MarketSection from "./market/MarketSection";
import RoadmapSection from "./roadmap/RoadmapSection";
import TeamSection from "./team/TeamSection";
import UseOfProceeds from "./proceeds/UseOfProceeds";

import CTASection from "./cta/CTASection";

const Divider = () => <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />;

// Partner naming lives here (a server component) so the named variant's strings
// never ship in the public page's HTML, RSC payload, or shared JS chunks.
const copy = {
  public: {
    distributionPartner: "A Leading MENA Football Media Group",
    distributionBlurb:
      "Our signed MOU with one of MENA's largest football media groups opens access to a 145M+ monthly football audience across 12 MENA markets. Activation is timed to the 2026/27 season kickoff, with the full commercial agreement in negotiation.",
    distributionStats: [
      { value: "145M+", label: "Monthly football audience" },
      { value: "12", label: "MENA markets" },
      { value: "2026/27", label: "Season activation" },
    ],
    seasonDetail:
      "Onboarding at scale as the EPL, La Liga, Champions League and Saudi Pro League seasons kick off, driven by our B2C partnership with one of MENA's largest football media groups.",
  },
  named: {
    distributionPartner: "FootballCo (Kooora)",
    distributionBlurb:
      "FootballCo has committed to bringing ShareMatch its first 10 million customers. Our signed MOU with FootballCo, owner of Kooora, MENA's biggest football media network, opens access to a 145M+ monthly football audience across 12 MENA markets. Activation is timed to the 2026/27 season kickoff, with the full commercial agreement in negotiation.",
    distributionStats: [
      { value: "10M", label: "Customer commitment" },
      { value: "145M+", label: "Monthly football audience" },
      { value: "12", label: "MENA markets" },
    ],
    seasonDetail:
      "Onboarding at scale as the EPL, La Liga, Champions League and Saudi Pro League seasons kick off, driven by our B2C partnership with FootballCo, who have committed to bringing ShareMatch its first 10 million customers from Kooora's 145M+ monthly football audience.",
  },
};

export default function Deck({ named = false }: { named?: boolean }) {
  const c = named ? copy.named : copy.public;
  return (
    <main>
      <StickyNav />
      <HeroSection />
      <Divider />
      <OpportunitySection />
      <Divider />
      <ProductSection />
      <Divider />
      <PartnersSection
        distributionPartner={c.distributionPartner}
        distributionBlurb={c.distributionBlurb}
        distributionStats={c.distributionStats}
      />
      <ShariahEdge />
      <Divider />
      <MarketSection />
      <RoadmapSection seasonDetail={c.seasonDetail} />
      <Divider />
      <TeamSection />
      <Divider />
      <UseOfProceeds />
      <InvestmentSection />
      <Divider />
      <CTASection />
    </main>
  );
}
