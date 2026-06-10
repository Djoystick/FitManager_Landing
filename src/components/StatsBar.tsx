"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const STATS = [
  { labelKey: "stats.label_tiers",   value: "10",      suffix: "" },
  { labelKey: "stats.label_traits",  value: "7",       suffix: "" },
  { labelKey: "stats.label_minutes", value: "90",      suffix: " min" },
  { labelKey: "stats.label_squad",   value: "16",      suffix: "" },
  { labelKey: "stats.label_steps",   value: "1k",      suffix: " = 100 SP" },
  { labelKey: "stats.label_cap",     value: "OVR 69",  suffix: "" },
  { labelKey: "stats.label_decay",   value: "78+",     suffix: "" },
  { labelKey: "stats.label_tax",     value: "FC",      suffix: " progressive" },
];

export default function StatsBar() {
  const { t } = useLanguage();

  return (
    <div
      className="relative z-10 border-y"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      {/* Gradient overlay to fade edges on desktop */}
      <div
        className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-10 hidden sm:block"
        style={{
          background: "linear-gradient(to right, var(--bg-page), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-10 hidden sm:block"
        style={{
          background: "linear-gradient(to left, var(--bg-page), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="overflow-x-auto no-scrollbar">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-stretch min-w-max mx-auto justify-center w-full"
        >
          {STATS.map(({ labelKey, value, suffix }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center px-4 py-3 relative"
              style={{
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid var(--border-subtle)"
                    : "none",
                minWidth: "110px",
              }}
            >
              <span
                className="text-mono-sm font-medium mb-0.5"
                style={{ color: "var(--text-primary)" }}
              >
                {value}
                <span style={{ color: "var(--color-neon-violet)" }}>
                  {suffix}
                </span>
              </span>
              <span
                className="text-caption text-center leading-tight"
                style={{ color: "var(--text-dim)", maxWidth: "96px" }}
              >
                {t(labelKey)}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
