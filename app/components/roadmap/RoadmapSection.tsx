"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";

const milestones = [
  {
    phase: "Live Now",
    title: "Platform Live & Trading",
    detail:
      "Built on Solana, with real users trading asset-backed performance tokens. Fatwa secured, seed round open.",
    valuation: "£64M",
    completed: true,
    highlight: true,
  },
  {
    phase: "Next",
    title: "KSA Launch & Mobile App",
    detail:
      "Invitation-only Saudi Arabia rollout via MeshPay, with the full mobile app release.",
  },
  {
    phase: "Scaling",
    title: "GCC Expansion & Esports",
    detail: "Wider GCC rollout, Indonesia market entry, and esports markets live.",
  },
  {
    phase: "Global Moment",
    title: "FIFA World Cup Onboarding",
    detail: "Global onboarding via the world's biggest sporting event.",
  },
  {
    phase: "Beyond",
    title: "Esports World Cup, Riyadh",
    detail: "Twitch, Discord and creator collaborations at the world's largest esports event.",
  },
];

export default function RoadmapSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <SectionWrapper id="roadmap" className="bg-bg-secondary py-5 md:py-10 xl:pt-4">
      <div className="text-center mb-5 xl:mb-4">
        <Badge variant="amber" className="mb-4">
          Roadmap
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          The Road Ahead
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Live and trading today. From here, every milestone is tied to user
          growth, revenue, and market expansion, not a fixed calendar.
        </p>
      </div>

      <div ref={containerRef} className="relative max-w-3xl mx-auto">
        {/* Animated line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-emerald-500 to-amber-500 origin-top"
          />
        </div>

        {/* Milestones */}
        <div className="space-y-12">
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
          <motion.div
                key={m.phase}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                className={`relative flex items-start gap-6 ${
                  isLeft
                    ? "md:flex-row md:text-right"
                    : "md:flex-row-reverse md:text-left"
                } pl-12 md:pl-0`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`p-5 rounded-xl glass-card ${
                      m.highlight ? "border-amber-500/30 glow-amber" : ""
                    }`}
                  >
                    <p className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${m.completed ? "text-emerald-400" : "text-amber-400"}`}>{m.phase}</p>
                    <h3 className="text-lg font-semibold mb-1">{m.title}</h3>
                    <p className="text-sm text-text-secondary">{m.detail}</p>
                    {m.valuation && (
                      <div className="mt-3 flex gap-2 flex-wrap justify-start md:justify-end">
                        <Badge variant="amber">{m.valuation}</Badge>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      m.completed
                        ? "bg-emerald-500 border-emerald-400"
                        : m.highlight
                        ? "bg-amber-500 border-amber-400"
                        : "bg-bg-elevated border-white/20"
                    }`}
                  />
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
