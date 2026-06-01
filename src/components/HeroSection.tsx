"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Trophy, Cpu, Activity } from "lucide-react";

import { useLanguage } from "../contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-12 md:pb-16 overflow-hidden z-10">
      
      <div className="container mx-auto px-4 relative z-10 text-center mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block relative"
        >
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border-strong -translate-y-1/2 -z-10 w-[200%] -translate-x-1/4"></div>
          <span className="bg-bg-main px-4 text-xs font-medium text-text-muted tracking-widest uppercase">
            {t('hero.introducing')}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-display sm:text-[80px] font-bold tracking-tight mt-6 mb-4 text-transparent bg-clip-text bg-gradient-to-b from-text-main to-text-muted"
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-heading text-text-muted max-w-2xl mx-auto font-medium whitespace-pre-line"
        >
          {t('hero.subtitle')}
        </motion.p>
      </div>

      {/* Overlapping Cards Composition (Главные особенности) */}
      <div className="relative w-full max-w-5xl mx-auto px-4 h-auto md:h-[450px] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mt-8 md:mt-0">
        
        {/* Left Card - Web3 Economy */}
        <motion.div 
          initial={{ opacity: 0, x: 20, rotateY: 0, z: 0 }}
          animate={{ opacity: 1, x: 0, rotateY: 10, z: -50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-[320px] md:absolute md:left-[5%] md:top-[10%] p-6 rounded-2xl bg-bg-card backdrop-blur-md border border-border-strong shadow-subtle-5 flex flex-col hidden md:flex"
          style={{ transformPerspective: 1000, transformOrigin: 'right center' }}
        >
          {/* Dots in corners */}
          <div className="absolute top-2 left-2 w-1 h-1 bg-border-strong rounded-full" />
          <div className="absolute top-2 right-2 w-1 h-1 bg-border-strong rounded-full" />
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-border-strong rounded-full" />
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-border-strong rounded-full" />

          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-border-subtle border border-border-strong mb-4 mx-auto">
            <Trophy className="w-6 h-6 text-text-muted" />
          </div>
          <h3 className="text-center font-bold text-text-main mb-2 text-subheading">{t('hero.card1_title')}</h3>
          <p className="text-center text-sm text-text-muted">
            {t('hero.card1_desc')}
          </p>
        </motion.div>

        {/* Center Card - Main CTA & Core Tech */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-[400px] relative z-20 p-8 md:p-10 rounded-2xl bg-bg-card backdrop-blur-xl border border-border-strong shadow-subtle-4 flex flex-col items-center"
        >
          {/* Dots in corners */}
          <div className="absolute top-3 left-3 w-1 h-1 bg-border-strong rounded-full" />
          <div className="absolute top-3 right-3 w-1 h-1 bg-border-strong rounded-full" />
          <div className="absolute bottom-3 left-3 w-1 h-1 bg-border-strong rounded-full" />
          <div className="absolute bottom-3 right-3 w-1 h-1 bg-border-strong rounded-full" />

          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-b from-border-subtle to-transparent border border-border-strong mb-6 shadow-md">
            <Cpu className="w-8 h-8 text-text-main" />
          </div>
          <h2 className="text-center font-bold text-text-main mb-2 text-heading-lg">{t('hero.card2_title')}</h2>
          <p className="text-center text-body text-text-muted mb-8">
            {t('hero.card2_desc')}
          </p>
          
          <Link href="https://t.me/fitmanager_game_bot/FitManager" target="_blank" className="w-full">
            <button className="w-full py-4 bg-neon-violet hover:opacity-90 transition-opacity rounded-pill text-white font-medium shadow-md flex items-center justify-center gap-2">
              {t('hero.play_button')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          
          <div className="w-full h-px bg-border-strong my-6 relative">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg-card px-3 text-xs text-text-muted">{t('hero.or')}</span>
          </div>

          <Link href="https://t.me/FitManagerWeb3" target="_blank" className="w-full">
            <button className="w-full py-3 bg-border-subtle hover:bg-border-strong transition-colors border border-border-strong rounded-pill text-text-main font-medium text-sm flex items-center justify-center gap-2">
              {t('hero.blog_button')}
            </button>
          </Link>
        </motion.div>

        {/* Right Card - Walk to Earn */}
        <motion.div 
          initial={{ opacity: 0, x: -20, rotateY: 0, z: 0 }}
          animate={{ opacity: 1, x: 0, rotateY: -10, z: -50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full md:w-[320px] md:absolute md:right-[5%] md:top-[10%] p-6 rounded-2xl bg-bg-card backdrop-blur-md border border-border-strong shadow-subtle-5 flex flex-col hidden md:flex"
          style={{ transformPerspective: 1000, transformOrigin: 'left center' }}
        >
          {/* Dots in corners */}
          <div className="absolute top-2 left-2 w-1 h-1 bg-border-strong rounded-full" />
          <div className="absolute top-2 right-2 w-1 h-1 bg-border-strong rounded-full" />
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-border-strong rounded-full" />
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-border-strong rounded-full" />

          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-border-subtle border border-border-strong mb-4 mx-auto">
            <Activity className="w-6 h-6 text-text-muted" />
          </div>
          <h3 className="text-center font-bold text-text-main mb-2 text-subheading">{t('roadmap.step3')}</h3>
          <p className="text-center text-sm text-text-muted">
            {t('features.card1_desc')} {/* Reusing a desc or could add specific one */}
          </p>
        </motion.div>
        
        {/* Mobile Alternative for Hidden Cards */}
        <div className="flex md:hidden flex-col gap-4 w-full mt-4">
          <div className="w-full p-6 rounded-2xl bg-bg-card backdrop-blur-md border border-border-strong shadow-subtle-5 flex flex-col items-center">
             <Trophy className="w-6 h-6 text-text-muted mb-2" />
             <h3 className="text-center font-bold text-text-main mb-2">{t('hero.card1_title')}</h3>
             <p className="text-center text-sm text-text-muted">{t('hero.card1_desc')}</p>
          </div>
          <div className="w-full p-6 rounded-2xl bg-bg-card backdrop-blur-md border border-border-strong shadow-subtle-5 flex flex-col items-center">
             <Activity className="w-6 h-6 text-text-muted mb-2" />
             <h3 className="text-center font-bold text-text-main mb-2">{t('roadmap.step3')}</h3>
             <p className="text-center text-sm text-text-muted">{t('features.card1_desc')}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
