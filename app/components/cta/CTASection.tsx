"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountdownTimer from "../common/CountdownTimer";
import Badge from "../common/Badge";
import { Shield } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center gradient-mesh overflow-hidden">
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logos/sharematch-mark.svg"
            alt=""
            width={48}
            height={48}
            className="mx-auto mb-8 opacity-60"
          />

          <Badge variant="amber" className="mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
            </span>
            Closing 6th March 2026
          </Badge>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Join the Seed Round
          </h2>

          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
            The round closes{" "}
            <span className="text-amber-400 font-semibold">6th March 2026</span>.
            KSA launch follows immediately. This is the last chance at seed
            pricing.
          </p>

          {/* Countdown */}
          <div className="mb-8">
            <CountdownTimer targetDate="2026-03-06T23:59:59Z" />
          </div>

          {/* EIS callout */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15 mb-10"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-text-secondary">
              <span className="text-emerald-400 font-semibold">EIS Eligible</span>{" "}
              &mdash; UK investors: up to 30% income tax relief
            </span>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:will@sharematch.me?subject=ShareMatch%20Seed%20Round%20Enquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-900 text-white font-medium text-lg hover:bg-emerald-700 transition-all duration-300 hover:-translate-y-0.5 shimmer"
            >
              Express Interest
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#investment"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-text-secondary font-medium hover:border-emerald-500/30 hover:text-text-primary transition-all duration-300"
            >
              Review Terms
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-white/5">
        <div className="section-container">
          <p className="text-xs text-text-muted text-center leading-relaxed max-w-2xl mx-auto">
            This page is for information purposes only and does not constitute
            an offer to sell or a solicitation of an offer to buy any
            securities. All projections and forward-looking statements are
            estimates only and subject to change. Tax reliefs depend on
            individual circumstances and are subject to HMRC approval.
            &copy; {new Date().getFullYear()}{" "}
            ShareMatch. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
