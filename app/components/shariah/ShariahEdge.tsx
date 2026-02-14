"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import GlowCard from "../common/GlowCard";
import Badge from "../common/Badge";
import { Shield, ArrowLeftRight, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fatwa Backed & Haqq Mali",
    description:
      "Independent Shariah Fatwa recognises our tokens as Haqq Mali — a legitimate financial asset that can be possessed, transferred, inherited, and traded under Islamic law.",
  },
  {
    icon: ArrowLeftRight,
    title: "Secondary Trading Approved",
    description:
      "Full secondary market explicitly approved by scholars. This endorsement is globally unique and structurally impossible for incumbents to replicate.",
  },
  {
    icon: Lock,
    title: "Patent-Protected IP",
    description:
      "Smart-contract logic, compliance workflows, and settlement mechanisms are patent-filed. Global trademark filings across EU, US, Canada, GCC, and UK.",
  },
];

const jurisdictions = [
  { label: "UK", detail: "Regulated" },
  { label: "UAE", detail: "Compliant" },
  { label: "Poland", detail: "VASP" },
  { label: "Canada", detail: "MSB" },
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
          Shariah scholarship, multi-jurisdiction regulatory approvals, and
          patent protection &mdash; a moat that compounds with time.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Features - left 3 cols */}
        <div className="lg:col-span-3 space-y-6">
          {features.map((f, i) => (
            <GlowCard key={f.title} delay={i * 0.15} className="p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
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
                <span className="text-xs text-text-muted">{j.detail}</span>
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
          <div className="relative p-8 rounded-2xl bg-bg-elevated border border-emerald-500/10">
            {/* Top accent border */}
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full" />

            <div className="text-6xl text-emerald-500/30 font-serif leading-none mb-4">
              &ldquo;
            </div>
            <blockquote className="text-text-secondary text-sm leading-relaxed mb-6 italic">
              These tokens constitute a recognised financial asset&hellip; Each
              token represents a fully defined contractual entitlement (haqq
              mali) that may be possessed, transferred, inherited and traded in
              accordance with Shariah principles.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-medium">Independent Shariah Board</p>
                <p className="text-xs text-text-muted">Formal Fatwa Ruling</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
