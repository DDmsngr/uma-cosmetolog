import { motion } from 'motion/react'
import Navbar from './Navbar'
import HeroBadge from './HeroBadge'
import BottomLeftCard from './BottomLeftCard'
import BottomRightCorner from './BottomRightCorner'

const HERO_IMAGE = 'https://images.pexels.com/photos/37229305/pexels-photo-37229305.jpeg?auto=compress&cs=tinysrgb&w=1920'

export default function Hero() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#EDE4D3]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="Косметологический уход"
            className="w-full h-full object-cover object-[65%] lg:object-center ken-burns"
            style={{ filter: 'contrast(1.15) saturate(1.4) sepia(0.35) brightness(0.62) hue-rotate(-6deg)' }}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(20,10,5,0.55)_100%)] z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/40 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#EDE4D3]/25 via-transparent to-transparent z-[1]" />

        <div className="relative z-10 w-full h-full flex flex-col items-center">
          <Navbar />

          <div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl">
            <HeroBadge />
            <motion.h1
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal mb-4 tracking-tight leading-[1.05] gold-shimmer"
            >
              Гладкая кожа. Уверенный взгляд.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal text-[#F5EBD5] [text-shadow:_0_0_20px_rgba(245,235,213,0.25),_0_1px_12px_rgba(0,0,0,0.55)]"
            >
              Индивидуальные протоколы ухода, безопасные препараты, видимый результат.
              Москва и онлайн-консультации.
            </motion.p>
          </div>

          <BottomLeftCard />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  )
}
