"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { Send, ExternalLink } from "lucide-react";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="section relative z-10 overflow-hidden">
      <div className="section-divider mb-12" aria-hidden="true" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(102,58,243,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-elevated flex flex-col items-center text-center p-8 sm:p-12 relative overflow-hidden"
          style={{ borderRadius: "var(--radius-2xl)" }}
        >
          {/* Corner decorations */}
          {[
            "top-3 left-3",
            "top-3 right-3",
            "bottom-3 left-3",
            "bottom-3 right-3",
          ].map((pos) => (
            <div
              key={pos}
              className={`absolute ${pos} w-2 h-2`}
              aria-hidden="true"
            >
              <div
                className="w-full h-px"
                style={{ background: "var(--border-strong)" }}
              />
              <div
                className="w-px h-full"
                style={{ background: "var(--border-strong)" }}
              />
            </div>
          ))}

          {/* Inner glow top edge */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(102,58,243,0.5), transparent)",
            }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="badge badge-accent mb-5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "var(--color-neon-violet)",
                boxShadow: "0 0 6px var(--color-neon-violet)",
              }}
            />
            Beta · Telegram Mini App
          </div>

          <h2
            className="text-heading-lg sm:text-display font-bold mb-3"
            style={{ color: "var(--text-primary)", maxWidth: "520px" }}
          >
            {t("cta.title")}
          </h2>

          <p
            className="text-body-lg mb-8"
            style={{ color: "var(--text-muted)", maxWidth: "440px" }}
          >
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="https://t.me/fitmanager_game_bot"
              target="_blank"
              className="btn-primary text-base px-6 py-3"
            >
              <Send size={16} />
              {t("cta.button")}
            </Link>
            <Link
              href="https://t.me/FitManagerWeb3"
              target="_blank"
              className="btn-outline text-base px-6 py-3"
            >
              <ExternalLink size={15} />
              {t("cta.blog")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
