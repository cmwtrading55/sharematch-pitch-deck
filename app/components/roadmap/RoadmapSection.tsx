"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";

const milestones = [
  {
    date: "Feb 2026",
    title: "Seed Fundraise",
    detail:
      "£4M raise at £64M post-money valuation. Independent Shariah Fatwa secured. Platform live and trading.",
    valuation: "£64M",
    completed: true,
    highlight: true,
  },
  {
    date: "Mar 2026",
    title: "KSA Platform Launch",
    detail:
      "1,000 VIP users. Invitation-only rollout in Saudi Arabia with STC Pay, urpay, and tiqmo payment rails.",
    users: "1,000",
  },
  {
    date: "Apr 2026",
    title: "App Launch & GCC Expansion",
    detail:
      "Full mobile app release. Wider GCC rollout and Indonesia market entry begins.",
  },
  {
    date: "May 2026",
    title: "E-Sports Markets & Series A",
    detail:
      "E-sports market launch. 78,000 projected users. Series A fundraise targeting £400M valuation.",
    valuation: "£400M",
    users: "78,000",
  },
  {
    date: "Jun 2026",
    title: "FIFA World Cup",
    detail:
      "245,000 active users. Global onboarding funnel via the world's biggest sporting event.",
    users: "245,000",
  },
  {
    date: "Jul 2026",
    title: "E-Sports World Cup",
    detail:
      "Riyadh. Twitch, Discord, and creator collaborations. Series B targeting £1BN valuation.",
    valuation: "£1BN",
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
    <SectionWrapper id="roadmap" className="bg-bg-secondary py-5 md:py-10">
      <div className="text-center mb-5">
        <Badge variant="amber" className="mb-4">
          Roadmap
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          2026: The Inflection Year
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          From seed to Series B in under 12 months. Every milestone is tied to
          user growth, revenue, and market expansion.
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
                key={m.date}
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
                    <p className="text-xs text-text-muted mb-1">{m.date}</p>
                    <h4 className="text-lg font-semibold mb-1">{m.title}</h4>
                    <p className="text-sm text-text-secondary">{m.detail}</p>
                    {(m.valuation || m.users) && (
                      <div className="mt-3 flex gap-2 flex-wrap justify-start md:justify-end">
                        {m.valuation && (
                          <Badge variant="amber">{m.valuation}</Badge>
                        )}
                        {m.users && (
                          <Badge variant="emerald">{m.users} users</Badge>
                        )}
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
