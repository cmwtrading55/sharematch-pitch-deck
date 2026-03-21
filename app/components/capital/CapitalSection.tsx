"use client";

import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import SectionWrapper from "../common/SectionWrapper";
import AnimatedCounter from "../common/AnimatedCounter";
import Badge from "../common/Badge";

const allocation = [
  {
    name: "KSA & GCC Acquisition",
    value: 35,
    amount: 1.8,
    color: "#10b981",
    detail: "Performance marketing, influencer networks, stadium exposure",
  },
  {
    name: "Liquidity & Market Making",
    value: 25,
    amount: 1.3,
    color: "#047857",
    detail: "Order book depth, settlement reserves, treasury management",
  },
  {
    name: "Engineering & Product",
    value: 25,
    amount: 1.3,
    color: "#34d399",
    detail: "Mobile app, trading engine, AI features, infrastructure",
  },
  {
    name: "Shariah & Regulatory",
    value: 15,
    amount: 0.8,
    color: "#f59e0b",
    detail: "Ongoing Shariah compliance, licensing, legal, audit",
  },
];

const cacSteps = [
  { period: "Launch to May 2026", cac: 33 },
  { period: "Jun 2026 to May 2027", cac: 65 },
  { period: "Jun 2027 onwards", cac: 98 },
];

const partners = [
  "Pakistan Ministry of Interior",
  "PCB",
  "ACC (30 nations)",
  "Esports World Cup",
  "SPL Ecosystem",
  "Liga 1 Indonesia",
  "Muslim Pro (180M+)",
  "BeIN Sports",
  "Wamad VIP",
];

export default function CapitalSection() {
  return (
    <SectionWrapper id="capital">
      <div className="text-center mb-16">
        <Badge variant="emerald" className="mb-4">
          Capital Deployment
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          How the <span className="text-emerald-400">$5.2M</span> Gets Deployed
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Every dollar is tied to verified users, deposits, and active trading
          behaviour.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Donut Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={allocation}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {allocation.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "#0D2626",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  color: "#F8FFFE",
                  fontSize: "13px",
                }}
                formatter={(value) => `${value}%`}
              />
            </PieChart>
          </ResponsiveContainer>
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-3xl font-bold">$5.2M</p>
              <p className="text-xs text-text-muted">Total Raise</p>
            </div>
          </div>
        </motion.div>

        {/* Allocation breakdown */}
        <div className="space-y-4">
          {allocation.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-4 rounded-xl glass-card"
            >
              <div
                className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                style={{ background: item.color }}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm">{item.name}</h4>
                  <span className="text-emerald-400 font-bold">
                    ${item.amount}M
                  </span>
                </div>
                <p className="text-xs text-text-muted mt-1">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CAC Progression */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-6 text-center">
          CAC Strategy, Efficient Early, Scales With Category
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {cacSteps.map((step, i) => (
            <motion.div
              key={step.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="text-center p-5 rounded-2xl glass-card min-w-[160px]">
                <AnimatedCounter
                  target={step.cac}
                  prefix="$"
                  className="text-3xl font-bold text-amber-400"
                />
                <p className="text-xs text-text-muted mt-1">{step.period}</p>
              </div>
              {i < cacSteps.length - 1 && (
                <svg
                  className="w-6 h-6 text-text-muted hidden md:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Strategic Partnerships Grid */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-center">
          Strategic Distribution Partners
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="px-4 py-2.5 rounded-xl glass-card text-sm text-text-secondary"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
