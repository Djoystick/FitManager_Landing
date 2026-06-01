"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Trophy, Cpu, Activity } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-24 overflow-hidden z-10">
      
      <div className="container mx-auto px-4 relative z-10 text-center mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block relative"
        >
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 -z-10 w-[200%] -translate-x-1/4"></div>
          <span className="bg-midnight-abyss px-4 text-xs font-medium text-interstellar-gray tracking-widest uppercase">
            Introducing
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-display sm:text-[80px] font-bold tracking-tight mt-6 mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70"
        >
          FitManager
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-heading text-comet/80 max-w-2xl mx-auto font-medium"
        >
          Управляй кибер-командой. <br className="sm:hidden" />
          Побеждай за счет интеллекта.
        </motion.p>
      </div>

      {/* Overlapping Cards Composition (Главные особенности) */}
      <div className="relative w-full max-w-5xl mx-auto px-4 h-auto md:h-[450px] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mt-8 md:mt-0">
        
        {/* Left Card - Web3 Economy */}
        <motion.div 
          initial={{ opacity: 0, x: 20, rotateY: 0, z: 0 }}
          animate={{ opacity: 1, x: 0, rotateY: 10, z: -50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-[320px] md:absolute md:left-[5%] md:top-[10%] p-6 rounded-2xl bg-[#0a0c16]/80 backdrop-blur-md border border-white/5 shadow-subtle-5 flex flex-col hidden md:flex"
          style={{ transformPerspective: 1000, transformOrigin: 'right center' }}
        >
          {/* Dots in corners */}
          <div className="absolute top-2 left-2 w-1 h-1 bg-white/20 rounded-full" />
          <div className="absolute top-2 right-2 w-1 h-1 bg-white/20 rounded-full" />
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/20 rounded-full" />
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/20 rounded-full" />

          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-4 mx-auto">
            <Trophy className="w-6 h-6 text-white/50" />
          </div>
          <h3 className="text-center font-bold text-ghost-white mb-2 text-subheading">TON Economy</h3>
          <p className="text-center text-sm text-comet/60">
            Реальный рынок игроков, турниры с наградами в TON и честная экономика без инфляции.
          </p>
        </motion.div>

        {/* Center Card - Main CTA & Core Tech */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-[400px] relative z-20 p-8 md:p-10 rounded-2xl bg-[#0e101d]/90 backdrop-blur-xl border border-white/10 shadow-subtle-4 flex flex-col items-center"
        >
          {/* Dots in corners */}
          <div className="absolute top-3 left-3 w-1 h-1 bg-white/30 rounded-full" />
          <div className="absolute top-3 right-3 w-1 h-1 bg-white/30 rounded-full" />
          <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/30 rounded-full" />
          <div className="absolute bottom-3 right-3 w-1 h-1 bg-white/30 rounded-full" />

          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/20 mb-6 shadow-md">
            <Cpu className="w-8 h-8 text-ghost-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          </div>
          <h2 className="text-center font-bold text-ghost-white mb-2 text-heading-lg">Smart Engine</h2>
          <p className="text-center text-body text-comet/80 mb-8">
            Микро-дуэли характеристик. Учитываем мораль, стамину и сыгранность состава в реальном времени.
          </p>
          
          <Link href="https://t.me/fitmanager_game_bot/FitManager" target="_blank" className="w-full">
            <button className="w-full py-4 bg-neon-violet hover:bg-neon-violet/90 transition-colors rounded-pill text-ghost-white font-medium shadow-[0_0_20px_rgba(102,58,243,0.3)] flex items-center justify-center gap-2">
              Запустить игру
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          
          <div className="w-full h-px bg-white/10 my-6 relative">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0e101d] px-3 text-xs text-interstellar-gray">ИЛИ</span>
          </div>

          <Link href="https://t.me/FitManagerWeb3" target="_blank" className="w-full">
            <button className="w-full py-3 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-pill text-ghost-white font-medium text-sm flex items-center justify-center gap-2">
              Следить за Dev-Блогом
            </button>
          </Link>
        </motion.div>

        {/* Right Card - Walk to Earn */}
        <motion.div 
          initial={{ opacity: 0, x: -20, rotateY: 0, z: 0 }}
          animate={{ opacity: 1, x: 0, rotateY: -10, z: -50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full md:w-[320px] md:absolute md:right-[5%] md:top-[10%] p-6 rounded-2xl bg-[#0a0c16]/80 backdrop-blur-md border border-white/5 shadow-subtle-5 flex flex-col hidden md:flex"
          style={{ transformPerspective: 1000, transformOrigin: 'left center' }}
        >
          {/* Dots in corners */}
          <div className="absolute top-2 left-2 w-1 h-1 bg-white/20 rounded-full" />
          <div className="absolute top-2 right-2 w-1 h-1 bg-white/20 rounded-full" />
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/20 rounded-full" />
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/20 rounded-full" />

          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-4 mx-auto">
            <Activity className="w-6 h-6 text-white/50" />
          </div>
          <h3 className="text-center font-bold text-ghost-white mb-2 text-subheading">Walk-to-Earn</h3>
          <p className="text-center text-sm text-comet/60">
            Синхронизируй шаги и конвертируй физическую активность в очки тренировок для игроков.
          </p>
        </motion.div>
        
        {/* Mobile Alternative for Hidden Cards */}
        <div className="flex md:hidden flex-col gap-4 w-full mt-4">
          <div className="w-full p-6 rounded-2xl bg-[#0a0c16]/80 backdrop-blur-md border border-white/5 shadow-subtle-5 flex flex-col items-center">
             <Trophy className="w-6 h-6 text-white/50 mb-2" />
             <h3 className="text-center font-bold text-ghost-white mb-2">TON Economy</h3>
             <p className="text-center text-sm text-comet/60">Реальный рынок игроков, турниры с наградами в TON и честная экономика без инфляции.</p>
          </div>
          <div className="w-full p-6 rounded-2xl bg-[#0a0c16]/80 backdrop-blur-md border border-white/5 shadow-subtle-5 flex flex-col items-center">
             <Activity className="w-6 h-6 text-white/50 mb-2" />
             <h3 className="text-center font-bold text-ghost-white mb-2">Walk-to-Earn</h3>
             <p className="text-center text-sm text-comet/60">Синхронизируй шаги и конвертируй физическую активность в очки тренировок.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
