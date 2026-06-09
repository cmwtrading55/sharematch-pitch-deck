import StickyNav from "./components/nav/StickyNav";
import HeroSection from "./components/hero/HeroSection";
import InvestmentSection from "./components/investment/InvestmentSection";
import OpportunitySection from "./components/opportunity/OpportunitySection";
import ShariahEdge from "./components/shariah/ShariahEdge";

import ProductSection from "./components/product/ProductSection";
import PartnersSection from "./components/partners/PartnersSection";
import MarketSection from "./components/market/MarketSection";
import RoadmapSection from "./components/roadmap/RoadmapSection";
import TeamSection from "./components/team/TeamSection";
import UseOfProceeds from "./components/proceeds/UseOfProceeds";

import CTASection from "./components/cta/CTASection";

const Divider = () => <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />;

export default function Home() {
  return (
    <main>
      <StickyNav />
      <HeroSection />
      <Divider />
      <OpportunitySection />
      <Divider />
      <ProductSection />
      <Divider />
      <PartnersSection />
      <ShariahEdge />
      <Divider />
      <MarketSection />
      <RoadmapSection />
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
