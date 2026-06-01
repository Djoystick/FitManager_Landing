"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Server, Database, Box, Activity, Users } from "lucide-react";

export default function ArchitectureHub() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16 relative">
          <h2 className="text-heading-lg md:text-display font-bold text-text-main mb-4">
            {t('architecture.title')}
          </h2>
          <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
            {t('architecture.subtitle')}
          </p>
        </div>

        {/* Central Hub Architecture (Screenshot 1 Replication) */}
        <div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center">
          
          {/* Background Circuit SVG */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 dark:opacity-50 pointer-events-none">
             <svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M400 200 L200 200 L150 150 L100 150" stroke="var(--border-strong)" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M400 200 L200 200 L150 250 L100 250" stroke="var(--border-strong)" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M400 200 L600 200 L650 150 L700 150" stroke="var(--border-strong)" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M400 200 L600 200 L650 250 L700 250" stroke="var(--border-strong)" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M400 200 L400 300 L350 350 L300 350" stroke="var(--border-strong)" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M400 200 L400 300 L450 350 L500 350" stroke="var(--border-strong)" strokeWidth="2" strokeLinejoin="round"/>
                
                {/* Dots on paths */}
                <circle cx="100" cy="150" r="3" fill="var(--border-strong)"/>
                <circle cx="100" cy="250" r="3" fill="var(--border-strong)"/>
                <circle cx="700" cy="150" r="3" fill="var(--border-strong)"/>
                <circle cx="700" cy="250" r="3" fill="var(--border-strong)"/>
                <circle cx="300" cy="350" r="3" fill="var(--border-strong)"/>
                <circle cx="500" cy="350" r="3" fill="var(--border-strong)"/>
             </svg>
          </div>

          {/* Center Chip */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute z-20 w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-bg-card-solid border border-border-strong shadow-subtle-4 flex flex-col items-center justify-center p-4 backdrop-blur-xl"
          >
            <div className="absolute inset-0 rounded-3xl border-4 border-bg-main pointer-events-none"></div>
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-b from-neon-violet/20 to-transparent flex items-center justify-center border border-border-strong shadow-subtle-5 mb-4">
               <Server className="w-12 h-12 text-neon-violet drop-shadow-[0_0_15px_rgba(102,58,243,0.8)]" />
            </div>
            <span className="text-text-main font-bold text-lg">{t('architecture.hub_core')}</span>
          </motion.div>

          {/* Top Left (Supabase) */}
          <motion.div 
            initial={{ x: 50, y: 50, opacity: 0 }}
            whileInView={{ x: -220, y: -100, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute z-10 w-32 h-32 rounded-2xl bg-bg-card-hover border border-border-subtle shadow-sm flex flex-col items-center justify-center"
          >
            <Database className="w-8 h-8 text-text-muted mb-2" />
            <span className="text-text-main text-xs font-medium">{t('architecture.hub_supabase')}</span>
          </motion.div>

          {/* Bottom Left (Users) */}
          <motion.div 
            initial={{ x: 50, y: -50, opacity: 0 }}
            whileInView={{ x: -220, y: 100, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute z-10 w-32 h-32 rounded-2xl bg-bg-card-hover border border-border-subtle shadow-sm flex flex-col items-center justify-center"
          >
            <Users className="w-8 h-8 text-text-muted mb-2" />
            <span className="text-text-main text-xs font-medium">{t('architecture.hub_users')}</span>
          </motion.div>

          {/* Top Right (TON) */}
          <motion.div 
            initial={{ x: -50, y: 50, opacity: 0 }}
            whileInView={{ x: 220, y: -100, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute z-10 w-32 h-32 rounded-2xl bg-bg-card-hover border border-border-subtle shadow-sm flex flex-col items-center justify-center"
          >
            <Box className="w-8 h-8 text-text-muted mb-2" />
            <span className="text-text-main text-xs font-medium">{t('architecture.hub_ton')}</span>
          </motion.div>

          {/* Bottom Right (Analytics) */}
          <motion.div 
            initial={{ x: -50, y: -50, opacity: 0 }}
            whileInView={{ x: 220, y: 100, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute z-10 w-32 h-32 rounded-2xl bg-bg-card-hover border border-border-subtle shadow-sm flex flex-col items-center justify-center"
          >
            <Activity className="w-8 h-8 text-text-muted mb-2" />
            <span className="text-text-main text-xs font-medium">{t('architecture.hub_analytics')}</span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
