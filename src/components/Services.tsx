import { motion } from 'motion/react'
import { ArrowUpRight, Droplet, Sparkles, Syringe, Flame, Wind, Leaf } from 'lucide-react'
import SectionHeading from './SectionHeading'

const SERVICES = [
  {
    icon: Droplet,
    title: 'Аппаратная чистка',
    desc: 'Ультразвуковая, вакуумная, комбинированная. Мягкое глубокое очищение без травм.',
    price: 'от 4 000 ₽',
  },
  {
    icon: Sparkles,
    title: 'Химический пилинг',
    desc: 'Обновление кожи, борьба с пигментацией, постакне и первыми морщинами.',
    price: 'от 6 500 ₽',
  },
  {
    icon: Syringe,
    title: 'Ботулинотерапия',
    desc: 'Расслабление мимических мышц, коррекция лба, межбровья, «гусиных лапок».',
    price: 'от 15 000 ₽',
  },
  {
    icon: Flame,
    title: 'Мезотерапия',
    desc: 'Инъекции витаминных коктейлей — увлажнение, тонус, свежий цвет лица.',
    price: 'от 8 000 ₽',
  },
  {
    icon: Wind,
    title: 'Биоревитализация',
    desc: 'Гиалуроновая кислота глубоко в ткани — работает изнутри, эффект накапливается.',
    price: 'от 12 000 ₽',
  },
  {
    icon: Leaf,
    title: 'Уходовые протоколы',
    desc: 'Индивидуальный уход по типу кожи: маски, массаж, сыворотки, домашняя рутина.',
    price: 'от 5 500 ₽',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10 bg-[#F0EAD8]">
      <div className="max-w-[1536px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="Услуги">Процедуры, за которыми возвращаются</SectionHeading>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm md:text-base text-[rgba(60,42,25,0.7)] hover:text-[rgba(60,42,25,1)] transition-colors self-start md:self-end"
          >
            Записаться на консультацию
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              style={{ transformPerspective: 800 }}
              className="group relative bg-white/60 backdrop-blur-sm rounded-[1.5rem] p-6 md:p-7 border border-white/50 hover:bg-white/85 hover:shadow-xl hover:shadow-[rgba(60,42,25,0.08)] transition-all cursor-pointer"
            >
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-[#E8B863]/0 via-transparent to-[#E8B863]/0 group-hover:from-[#E8B863]/10 group-hover:to-[#E8B863]/5 transition-opacity pointer-events-none" />
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-full bg-[rgba(60,42,25,0.08)] flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-[rgba(60,42,25,0.8)]" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-[rgba(60,42,25,0.4)] group-hover:text-[rgba(60,42,25,0.9)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-xl md:text-2xl font-normal text-[rgba(60,42,25,0.95)] mb-2 tracking-tight">
                {s.title}
              </h3>
              <p className="text-sm md:text-base text-[rgba(60,42,25,0.65)] leading-relaxed mb-5">
                {s.desc}
              </p>
              <div className="text-sm md:text-base font-medium text-[rgba(60,42,25,0.9)]">{s.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
