"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Трансферный Рынок",
    description: "Живая P2P экономика. Цены формируются балансом спроса и предложения. Никакой инфляции.",
    details: "Каждый игрок в FitManager — это уникальный цифровой актив. Вы можете покупать перспективных юниоров за FanCoins, тренировать их, и продавать клубам из высшей лиги за криптовалюту TON. Ценность игрока зависит от его навыков, потенциала и возраста.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Матч-движок",
    description: "Более 20 переменных в реальном времени определяют исход каждого столкновения на поле.",
    details: "Наш движок не использует примитивный 'кубик'. Учитывается расстановка, любимые позиции игроков, химия между связками, текущая выносливость (стамина) и скрытые перки вроде 'Лидер' или 'Плеймейкер'. Выигрывает тот, кто лучше читает игру.",
    color: "from-neon-cyan to-green-500",
  },
  {
    id: 3,
    title: "Инфраструктура",
    description: "Апгрейд базы ускоряет тренировки и открывает доступ к элитным юниорам в Академии.",
    details: "Инвестируйте FanCoins в постройку Тренировочного лагеря, Медицинского центра и Молодежной Академии. Улучшение инфраструктуры экспоненциально увеличивает ваши шансы на победу и снижает риск травм у возрастных игроков.",
    color: "from-purple-600 to-pink-500",
  }
];

export default function EngineCarouselSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
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
    <section className="py-24 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Интерфейс и <span className="text-neon-cyan text-glow">Механики</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex backface-hidden touch-pan-y">
              {slides.map((slide) => (
                <div 
                  key={slide.id} 
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0 pl-4 pr-4"
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
