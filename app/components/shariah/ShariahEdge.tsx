"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import GlowCard from "../common/GlowCard";
import Badge from "../common/Badge";
import { Shield, ArrowLeftRight, Lock, Ban, Megaphone } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fatwa Backed & Haqq Mali",
    description:
      "Independent Shariah Fatwa recognises our tokens as Haqq Mali,a legitimate financial asset that can be possessed, transferred, inherited, and traded under Islamic law.",
  },
  {
    icon: ArrowLeftRight,
    title: "Secondary Trading Approved",
    description:
      "Full secondary market explicitly approved by scholars. All tokens on the platform are structured in accordance with standards published by the AAOIFI (Accounting and Auditing Organisation for Islamic Financial Institutions). This endorsement is globally unique and structurally impossible for incumbents to replicate.",
  },
  {
    icon: Lock,
    title: "Patent-Pending IP",
    description:
      "Smart-contract logic, compliance workflows, and settlement mechanisms are patent-pending. Global trademark applications in progress across GCC, Asia Pacific and Europe.",
  },
];

const moats = [
  {
    icon: Shield,
    title: "Fatwa Approved",
    description:
      "An independent Shariah Fatwa from recognised Islamic scholars,the foundational credential that no competitor can fast-track or replicate.",
  },
  {
    icon: Lock,
    title: "Patent-Pending",
    description:
      "Proprietary technology is patent-pending with global trademark applications in progress. Core smart-contract logic, compliance workflows, and settlement mechanisms are all filed.",
  },
  {
    icon: Ban,
    title: "Competitors Structurally Excluded",
    description:
      "Incumbent platforms operate conventional structures that are fundamentally incompatible with Shariah principles,making credentialed entry into this market structurally unavailable to them.",
  },
  {
    icon: Megaphone,
    title: "Exclusive Shariah-Compliant Marketing Access",
    description:
      "Without Fatwa approval, no existing iGaming or prediction market company can credibly or effectively market to the Muslim audience. ShareMatch holds this approval,giving us a credentialed path to 1.5 billion potential customers that no incumbent can credibly access.",
  },
];

const jurisdictions = [
  { label: "UK" },
  { label: "UAE" },
  { label: "Poland" },
  { label: "BVI" },
];

export default function ShariahEdge() {
  return (
    <SectionWrapper id="shariah" className="bg-bg-secondary">
      <div className="text-center mb-16">
        <Badge variant="emerald" className="mb-4">
          Structural Advantage
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Why Only We Can Own This Segment
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          We are first to market
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Features - left 3 cols */}
        <div className="lg:col-span-3 space-y-6">
          {features.map((f, i) => (
            <GlowCard key={f.title} delay={i * 0.15} className="p-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}

          {/* Jurisdiction badges */}
          <div className="flex flex-wrap gap-3 pt-4">
            {jurisdictions.map((j) => (
              <div
                key={j.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-sm font-medium">{j.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fatwa Quote - right 2 cols */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lg:col-span-2"
        >
          <div className="space-y-4">
            <div className="relative pt-4 px-8 pb-8 rounded-2xl bg-bg-elevated border border-emerald-500/10">
              {/* Top accent border */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full" />

            <div className="text-4xl text-emerald-500/30 font-serif leading-none mb-0">
                &ldquo;
              </div>
            <blockquote className="text-text-secondary text-sm leading-tight mt-0 mb-0 italic">
                These tokens constitute a recognised financial asset&hellip; Each
                token represents a fully defined contractual entitlement (haqq
                mali) that may be possessed, transferred, inherited and traded in
                accordance with Shariah principles.
              </blockquote>
            <div className="flex items-center gap-3 mt-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Independent Shariah Board</p>
                  <p className="text-xs text-text-muted">Formal Fatwa Ruling</p>
                </div>
              </div>
            </div>

            <div className="relative pt-4 px-8 pb-8 rounded-2xl bg-bg-elevated border border-emerald-500/10">
              {/* Top accent border */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full" />

              <div className="text-4xl text-emerald-500/30 font-serif leading-none mb-0">
                &ldquo;
              </div>
              <blockquote className="text-text-secondary text-sm leading-tight mt-0 mb-0 italic">
                The HAL&#x2011;AI Engine is a proprietary, Shariah-compliant utility accessible through IAT holding, enabling users to perform in-app research, analyse event data, and derive contextual insights in accordance with Shariah governance principles.
              </blockquote>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">HAL&#x2011;AI Engine</p>
                  <p className="text-xs text-text-muted">Real-time analytics & scholar-assist</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* The ShareMatch Moat,4-fold */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <Badge variant="emerald" className="mb-4">
            Defensibility
          </Badge>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            The ShareMatch Moat
          </h3>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            First to market means lowest acquisition cost. Four reinforcing advantages that no competitor can replicate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {moats.map((m, i) => (
            <GlowCard key={m.title} delay={i * 0.1} className="p-6 h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <m.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                {m.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
