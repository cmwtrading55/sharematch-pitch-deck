"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

const NAV_ITEMS = [
  { id: "opportunity", label: "Opportunity" },
  { id: "product", label: "Product" },
  { id: "shariah", label: "Shariah Edge" },
  { id: "markets", label: "Markets" },
  { id: "roadmap", label: "Roadmap" },
  { id: "investment", label: "Investment" },
  { id: "competitive", label: "Moat" },
];

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-amber-500 origin-left z-60"
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
          }`}
      >
        <div className="section-container flex items-center justify-between">
          <Image
            src="/logos/sharematch-lockup.svg"
            alt="ShareMatch"
            width={200}
            height={48}
            className={`transition-all duration-300 ${scrolled ? "h-12 w-auto" : "h-16 w-auto"
              }`}
          />

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const href = (item as any).href ? (item as any).href : `#${item.id}`;
              return (
                <a
                  key={item.id}
                  href={href}
                  className={`px-3 py-1.5 text-sm rounded-full transition-all duration-300 ${active === item.id
                      ? "text-emerald-400 bg-emerald-500/10"
                      : "text-text-secondary font-medium hover:text-white"
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a
            href="#investment"
            className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full bg-emerald-500 text-bg-primary hover:bg-emerald-400 transition-colors"
          >
            Invest Now
          </a>
        </div>
      </nav>
    </>
  );
}
