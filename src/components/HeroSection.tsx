"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TerminalSquare } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden bg-midnight-abyss">
      
      {/* Subtle atmospheric glow based on Twilight Gradient Overlay */}
      <div 
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[120px] opacity-[0.08] pointer-events-none"
        style={{
          background: "linear-gradient(0deg, rgb(216, 236, 248) 0%, rgb(152, 192, 239) 100%)"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-5xl text-center">
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-10 rounded-md bg-midnight-abyss shadow-subtle text-arctic-mist text-caption font-medium uppercase tracking-wider"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-violet opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-violet"></span>
          </span>
          Alpha Version Live
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-display sm:text-display-xl font-bold tracking-tight mb-6 text-ghost-white leading-tight"
        >
          Хватит просто тапать. <br className="hidden sm:block" />
          <span className="text-comet">Пора управлять.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-body-lg sm:text-subheading text-comet mb-12 max-w-2xl mx-auto leading-relaxed opacity-90"
        >
          Первый футбольный Web3-менеджер в Telegram, где побеждает интеллект, а не случайность. Строй инфраструктуру, тренируй игроков и конвертируй физическую активность в TON.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Solid Primary Button */}
          <Link
            href="https://t.me/fitmanager_game_bot/FitManager"
            target="_blank"
            className="w-full sm:w-auto"
          >
            <button className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-neon-violet text-ghost-white font-medium rounded-pill text-body-lg hover:bg-neon-violet/90 transition-colors shadow-md">
              Играть в Telegram
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>

          {/* Secondary Outline Button */}
          <Link href="https://t.me/FitManagerWeb3" target="_blank" className="w-full sm:w-auto">
            <button className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-transparent border border-white/10 text-arctic-mist font-medium rounded-pill text-body-lg hover:bg-white/5 transition-colors shadow-subtle">
              <TerminalSquare className="w-5 h-5 opacity-70" />
              Наш Dev-Блог
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
