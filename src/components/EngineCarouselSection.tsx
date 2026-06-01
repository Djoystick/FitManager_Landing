"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Матч-движок v3.0",
    description: "Сложная симуляция, где исход матча решают тактика и физическая форма, а не донат.",
    details: "Наш движок (Match Engine v3.0) симулирует матчи пофазово. Учитывается расстановка, любимые позиции игроков, химия между связками (Trait Resonance), текущая выносливость (стамина) и скрытые перки. Выигрывает тот, кто лучше читает игру и грамотно проводит ротацию состава.",
    color: "from-neon-cyan to-green-500",
  },
  {
    id: 2,
    title: "Walk-to-Earn (Синхронизация шагов)",
    description: "Ваши реальные шаги напрямую влияют на успех вашей цифровой команды.",
    details: "FitManager интегрируется с фитнес-трекерами. Вы совершаете пробежку в реальном мире и получаете Sweat Points (SP). Без физической активности ваши звезды начнут терять форму (Form Decay), а вы не сможете тренировать игроков с рейтингом выше 70 OVR.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 3,
    title: "Anti-P2W Экономика",
    description: "Стеклянный потолок и Экспоненциальные зарплаты не дадут 'китам' купить победу.",
    details: "Вы не можете просто купить топ-состав за TON. Высокорейтинговые игроки требуют огромных зарплат в FanCoins за каждый матч, а их тренировка невозможна за деньги — только за реальный пот (Sweat Points). 'Киты' вынуждены играть вдолгую и двигаться физически.",
    color: "from-red-600 to-orange-500",
  },
  {
    id: 4,
    title: "Трансферный Рынок",
    description: "Живая P2P экономика. Цены формируются балансом спроса и предложения. Никакой инфляции.",
    details: "Каждый игрок в FitManager — это уникальный цифровой актив. Вы можете покупать перспективных юниоров за FanCoins, тренировать их, и продавать клубам из высшей лиги за криптовалюту TON. Ценность игрока зависит от его навыков, потенциала и возраста.",
    color: "from-purple-600 to-pink-500",
  },
  {
    id: 5,
    title: "Prize Waterfall (Пул Наград)",
    description: "Глобальные лиги с реальным распределением TON-казны среди лучших менеджеров.",
    details: "По завершении каждого сезона, наша система (Prize Waterfall) автоматически переводит часть Глобальной Казны (составленной из налогов рынка) на TON-кошельки топ-менеджеров в высших лигах. Ваша стратегия приносит реальный доход.",
    color: "from-yellow-400 to-neon-yellow",
  }
];

export default function EngineCarouselSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedSlide, setSelectedSlide] = useState<typeof slides[0] | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedSlide) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedSlide]);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden border-t border-white/5">
      <div className="w-full relative z-10">
        <div className="container mx-auto px-4 md:px-6 text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Интерфейс и <span className="text-neon-cyan text-glow">Механики</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative w-full">
          <div className="overflow-hidden px-4 md:px-12 lg:px-24" ref={emblaRef}>
            <div className="flex backface-hidden touch-pan-y -ml-4 md:-ml-6">
              {slides.map((slide) => (
                <div 
                  key={slide.id} 
                  className="flex-[0_0_90%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0 pl-4 md:pl-6"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer h-[400px] rounded-2xl p-1 bg-gradient-to-br border-transparent box-glow transition-all"
                    style={{ backgroundImage: `linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(0,0,0,0.8))` }}
                    onClick={() => setSelectedSlide(slide)}
                  >
                    <div className={`w-full h-full rounded-xl bg-black flex flex-col justify-end p-8 relative overflow-hidden`}>
                      {/* Abstract decoration */}
                      <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${slide.color} rounded-full blur-[50px] opacity-30`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-8 h-1 bg-white/20 rounded-full" />
                          <span className="text-xs tracking-widest text-white/50 uppercase font-mono">Module 0{slide.id}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">{slide.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                          {slide.description}
                        </p>
                        <div className="mt-6 text-neon-cyan text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                          Подробнее <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={scrollPrev} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white border border-white/10">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={scrollNext} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white border border-white/10">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedSlide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedSlide(null)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative z-10 w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className={`h-32 w-full bg-gradient-to-r ${selectedSlide.color} opacity-20`} />
            <button 
              onClick={() => setSelectedSlide(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black rounded-full text-white transition-colors border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8 md:p-10 -mt-16 relative">
              <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-xl">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500">
                  0{selectedSlide.id}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{selectedSlide.title}</h3>
              <p className="text-xl text-gray-300 mb-6 font-medium">
                {selectedSlide.description}
              </p>
              <div className="w-full h-px bg-white/10 mb-6" />
              <p className="text-gray-400 leading-relaxed text-lg">
                {selectedSlide.details}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
