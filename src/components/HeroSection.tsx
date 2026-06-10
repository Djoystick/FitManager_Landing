"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import dynamic from "next/dynamic";

const CyberPitchBackground = dynamic(() => import("./CyberPitchBackground"), { ssr: false });

import StatsBar from "./StatsBar";

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

      {/* ── Main Content Container ── */}
      <div className="container-main relative z-10 flex flex-col items-center text-center pb-20 pt-10">

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

        {/* CTAs end */}
      </div>

      {/* ── Stats Bar at the bottom of the first screen ── */}
      <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm border-t border-white/5 z-20">
        <StatsBar />
      </div>

      {/* ── Bottom decorative divider & scroll cue removed/replaced by StatsBar ── */}
    </section>
  );
}
