"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";

type Partner = {
  name: string;
  category: string;
  logo?: string;
  logoHeight?: number;
  wordmark?: string;
};

const partners: Partner[] = [
  { name: "MeshPay", category: "Payments", logo: "/logos/partners/meshpay.svg", logoHeight: 30 },
  { name: "Solana", category: "Blockchain", logo: "/logos/partners/solana.svg", logoHeight: 26 },
  { name: "Sumsub", category: "KYC & AML", wordmark: "Sumsub" },
  { name: "My Inbox Media", category: "Communications", wordmark: "My Inbox Media" },
  { name: "Ear to the Ground", category: "Brand Strategy", wordmark: "Ear to the Ground" },
];

export default function PartnersSection() {
  return (
    <SectionWrapper id="partners" className="py-5 md:py-10 xl:pt-4">
      <div className="text-center mb-12">
        <Badge variant="amber" className="mb-4">
          Partners &amp; Integrations
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Built with Best-in-Class Partners
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          One unified stack, not a patchwork of local rails. Payments, blockchain,
          identity, communications and brand, each handled by a category leader.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            className="group relative rounded-2xl glass-card glass-card-hover overflow-hidden flex flex-col"
          >
            <div className="hairline-gold" />
            <div className="flex-1 flex items-center justify-center px-5 py-9 min-h-[96px]">
              {p.logo ? (
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={140}
                  height={p.logoHeight ?? 28}
                  style={{ height: p.logoHeight ?? 28, width: "auto" }}
                  className="opacity-90 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="font-display text-lg md:text-xl font-bold text-white/90 group-hover:text-white text-center leading-tight tracking-tight transition-colors">
                  {p.wordmark}
                </span>
              )}
            </div>
            <div className="px-5 py-3 border-t border-white/5 text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                {p.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-text-muted max-w-2xl mx-auto mt-8">
        Global fiat and crypto on-ramps via MeshPay. On-chain settlement on Solana.
        Identity and AML verification by Sumsub. Member communications by My Inbox
        Media. Brand and fan strategy by Ear to the Ground.
      </p>
    </SectionWrapper>
  );
}
