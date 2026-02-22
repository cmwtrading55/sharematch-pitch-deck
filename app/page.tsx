import StickyNav from "./components/nav/StickyNav";
import HeroSection from "./components/hero/HeroSection";
import InvestmentSection from "./components/investment/InvestmentSection";
import OpportunitySection from "./components/opportunity/OpportunitySection";
import ShariahEdge from "./components/shariah/ShariahEdge";

import ProductSection from "./components/product/ProductSection";
import MarketSection from "./components/market/MarketSection";
import RoadmapSection from "./components/roadmap/RoadmapSection";

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
      <ShariahEdge />
      <Divider />
      <MarketSection />
      <RoadmapSection />
      <InvestmentSection />
      <Divider />
      <CTASection />
    </main>
  );
}
