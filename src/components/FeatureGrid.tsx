"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Zap, Globe2 } from "lucide-react";

import { useLanguage } from "../contexts/LanguageContext";

export default function FeatureGrid() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Globe2 className="w-8 h-8 text-text-muted group-hover:text-text-main transition-colors" />,
      title: t('features.card1_title'),
      description: t('features.card1_desc'),
    },
    {
      icon: <Users className="w-8 h-8 text-text-muted group-hover:text-text-main transition-colors" />,
      title: t('features.card2_title'),
      description: t('features.card2_desc'),
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-text-muted group-hover:text-text-main transition-colors" />,
      title: t('features.card3_title'),
      description: t('features.card3_desc'),
    },
    {
      icon: <Zap className="w-8 h-8 text-text-muted group-hover:text-text-main transition-colors" />,
      title: t('features.card4_title'),
      description: t('features.card4_desc'),
    }
  ];

  return (
    <section className="py-12 relative z-10 border-t border-border-strong">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-border-strong -mt-16"></div>
          <h2 className="text-heading-lg md:text-display font-bold text-text-main mb-4">
            {t('features.title')}
          </h2>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-t from-transparent to-border-strong -mb-12"></div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="group flex flex-col p-8 md:p-10 rounded-3xl bg-bg-card-solid border border-border-strong shadow-subtle-4 relative overflow-hidden h-[300px] items-center justify-center text-center hover:bg-bg-card-hover transition-colors"
            >
              {/* Corner Dots */}
              <div className="absolute top-4 left-4 w-1 h-1 bg-border-strong rounded-full" />
              <div className="absolute top-4 right-4 w-1 h-1 bg-border-strong rounded-full" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-border-strong rounded-full" />
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-border-strong rounded-full" />

              {/* Faint Background Circuitry SVG (Abstract) */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none text-text-main" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 150H100L150 100H250L300 150H400" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M0 200H80L120 160H280L320 200H400" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                <circle cx="150" cy="100" r="4" fill="currentColor"/>
                <circle cx="250" cy="100" r="4" fill="currentColor"/>
              </svg>

              {/* Embossed Center Plaque */}
              <div className="mb-6 p-4 rounded-2xl bg-bg-card shadow-embossed border border-border-strong relative z-10 group-hover:scale-105 transition-transform duration-500">
                <div className="w-16 h-16 rounded-xl bg-bg-main flex items-center justify-center shadow-subtle-5 border border-border-strong">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-heading font-bold text-text-main mb-2 relative z-10 group-hover:text-neon-violet transition-colors">
                {feature.title}
              </h3>
              <p className="text-body text-text-muted max-w-sm relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-border-strong bg-bg-card-solid shadow-subtle text-caption text-text-muted cursor-pointer hover:bg-bg-card-hover transition-colors">
             {t('features.follow')}
          </div>
        </div>

      </div>
    </section>
  );
}
