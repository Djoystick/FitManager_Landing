"use client";

import { motion } from "framer-motion";
import { TerminalSquare, Target, Rocket, Activity, Box, Database, Sparkles } from "lucide-react";

export default function RoadmapSection() {
  const steps = [
    { icon: <Database className="w-5 h-5" />, title: "Supabase Core", active: false },
    { icon: <TerminalSquare className="w-5 h-5" />, title: "Match Engine v3", active: false },
    { icon: <Activity className="w-5 h-5" />, title: "Walk-to-Earn", active: true },
    { icon: <Sparkles className="w-5 h-5" />, title: "Form Decay", active: false },
    { icon: <Box className="w-5 h-5" />, title: "TON Connect", active: false },
    { icon: <Rocket className="w-5 h-5" />, title: "Public Release", active: false },
  ];

  return (
    <section className="py-24 relative z-10 border-t border-white/5 bg-[#05060f]">
      
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-[#080911] shadow-subtle">
             <div className="w-3 h-3 rounded-full bg-midnight-abyss border border-white/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
             </div>
             <span className="text-sm font-medium text-ghost-white">Roadmap flow supported.</span>
             <div className="w-3 h-3 rounded-full bg-midnight-abyss border border-white/30"></div>
          </div>
        </div>

        {/* Roadmap Chain */}
        <div className="relative mt-20 mb-10 flex flex-col md:flex-row items-center justify-center w-full">
           
           {/* Desktop Connecting Line */}
           <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0"></div>
           
           {/* Mobile Connecting Line */}
           <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2 z-0"></div>

           <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0 z-10">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col items-center group relative"
                >
                  {/* Icon Box */}
                  <div className={`w-16 h-16 md:w-14 md:h-14 rounded-2xl md:rounded-xl flex items-center justify-center shadow-subtle-5 border relative overflow-hidden transition-all duration-300
                    ${step.active ? 'bg-white/10 border-white/30 text-ghost-white shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'bg-[#0a0c16] border-white/10 text-white/40 hover:bg-[#121524] hover:text-white/80'}`}>
                    
                    {/* Inner glowing effect for active */}
                    {step.active && <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50 pointer-events-none"></div>}
                    {step.icon}
                  </div>

                  {/* Connecting dots (desktop only, between items) */}
                  {idx !== steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-[50%] translate-x-1/2 -translate-y-1/2 z-10 w-3 h-3 rounded-full border border-white/30 bg-midnight-abyss"></div>
                  )}

                  <div className={`mt-4 text-center text-sm font-medium ${step.active ? 'text-ghost-white' : 'text-comet/60'}`}>
                    {step.title}
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
