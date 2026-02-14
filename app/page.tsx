import StickyNav from "./components/nav/StickyNav";
import HeroSection from "./components/hero/HeroSection";
import InvestmentSection from "./components/investment/InvestmentSection";
import OpportunitySection from "./components/opportunity/OpportunitySection";
import ShariahEdge from "./components/shariah/ShariahEdge";

import MarketSection from "./components/market/MarketSection";
import CapitalSection from "./components/capital/CapitalSection";
import RoadmapSection from "./components/roadmap/RoadmapSection";
import CompetitiveSection from "./components/competitive/CompetitiveSection";
import TeamSection from "./components/team/TeamSection";
import CTASection from "./components/cta/CTASection";

export default function Home() {
  return (
    <main>
      <StickyNav />
      <HeroSection />
      <OpportunitySection />
      <ShariahEdge />

      <MarketSection />
      <RoadmapSection />
      <InvestmentSection />
      <CapitalSection />
      <CompetitiveSection />
      <TeamSection />
      <CTASection />
    </main>
  );
}
