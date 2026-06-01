"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Trophy } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12 pb-16 md:pt-20 md:pb-20">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-cyan/20 rounded-full blur-[80px] md:blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-[30rem] md:h-[30rem] bg-neon-yellow/10 rounded-full blur-[100px] md:blur-[150px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-6 md:mb-8 text-xs md:text-sm font-medium text-neon-cyan">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
            </span>
            Закрытая Альфа Версия запущена
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight md:leading-tight">
            Хватит просто тапать. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500 text-glow">
              Пора управлять.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2 md:px-0">
            Первый футбольный Web3-менеджер в Telegram, где побеждает интеллект, а не случайность. Строй инфраструктуру, тренируй игроков и конвертируй физическую активность в TON.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://t.me/fitmanager_game_bot/FitManager"
              target="_blank"
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="box-glow flex items-center justify-center gap-2 w-full px-6 py-3 md:px-8 md:py-4 bg-neon-cyan text-black font-bold rounded-xl text-base md:text-lg transition-colors hover:bg-white"
              >
                Играть в Telegram
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link href="https://t.me/FitManagerWeb3" target="_blank" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 md:px-8 md:py-4 border-2 border-gray-800 text-white font-semibold rounded-xl text-base md:text-lg hover:border-gray-600 transition-colors bg-black/50 backdrop-blur-sm"
              >
                Наш Dev-Блог
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Feature Highlights row */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-16 md:mt-24 max-w-5xl mx-auto"
        >
          <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <Trophy className="w-8 h-8 md:w-10 md:h-10 text-neon-yellow mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Smart Match Engine</h3>
            <p className="text-gray-400 text-xs md:text-sm">Сложная математика матчей, учитывающая мораль, стамину и сыгранность состава.</p>
          </div>
          <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-neon-cyan mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Web3 Экономика</h3>
            <p className="text-gray-400 text-xs md:text-sm">Реальный рынок игроков, P2P обмены и турниры с настоящим пулом наград.</p>
          </div>
          <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md sm:col-span-2 md:col-span-1">
            <Activity className="w-8 h-8 md:w-10 md:h-10 text-green-400 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Fitness-to-Earn</h3>
            <p className="text-gray-400 text-xs md:text-sm">Синхронизируй шаги и конвертируй физическую активность в бонусы для своего клуба.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
