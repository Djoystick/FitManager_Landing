"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import dynamic from "next/dynamic";

const CyberPitchBackground = dynamic(() => import("./CyberPitchBackground"), { ssr: false });

const STATS = [
  { key: "stat_tiers",  value: "10",  unit: "" },
  { key: "stat_traits", value: "7",   unit: "" },
  { key: "stat_mins",   value: "90",  unit: "min" },
  { key: "stat_squad",  value: "16",  unit: "" },
];

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen pt-12 pb-0 overflow-hidden"
      aria-label="Hero"
    >
      <CyberPitchBackground />

      {/* ── Top ambient glow ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(102,58,243,0.22) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Corner accent lines ── */}
      <div
        className="absolute top-12 left-6 w-8 h-px pointer-events-none"
        style={{ background: "var(--border-strong)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-12 left-6 w-px h-8 pointer-events-none"
        style={{ background: "var(--border-strong)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-12 right-6 w-8 h-px pointer-events-none"
        style={{ background: "var(--border-strong)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-12 right-6 w-px h-8 pointer-events-none"
        style={{ background: "var(--border-strong)" }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10 flex flex-col items-center text-center">

        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="badge mb-5"
          style={{ gap: "6px" }}
        >
          <span className="glow-dot" style={{ width: "5px", height: "5px" }} />
          {t("hero.badge")}
        </motion.div>

        {/* ── Title ── */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className="text-display-xl font-bold mb-2"
          style={{ maxWidth: "760px" }}
        >
          <span style={{ color: "var(--text-primary)" }}>
            {t("hero.title_1")}{" "}
          </span>
          <span
            style={{
              background:
                "linear-gradient(135deg, #a78bfa 0%, #663af3 60%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t("hero.title_2")}
          </span>
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-body-lg mb-8"
          style={{
            color: "var(--text-muted)",
            maxWidth: "540px",
          }}
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-10"
        >
          <Link
            href="https://t.me/fitmanager_game_bot/app"
            target="_blank"
            className="btn-primary"
          >
            <Send size={14} />
            {t("hero.cta_primary")}
            <ArrowRight size={14} />
          </Link>
          <Link
            href="https://t.me/FitManagerWeb3"
            target="_blank"
            className="btn-outline"
          >
            {t("hero.cta_secondary")}
          </Link>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-xl mb-10"
        >
          {STATS.map(({ key, value, unit }) => (
            <div
              key={key}
              className="card-glass flex flex-col items-center justify-center py-3 px-2 rounded-lg"
            >
              <span className="stat-value text-2xl">{value}{unit}</span>
              <span
                className="text-caption mt-0.5 text-center"
                style={{ color: "var(--text-dim)" }}
              >
                {t(`hero.${key}`)}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Bottom decorative divider ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full max-w-xl section-divider"
          style={{ transformOrigin: "center" }}
        />
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <div
          className="w-px h-8"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--border-strong))",
          }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--border-strong)" }}
        />
      </motion.div>
    </section>
  );
}
