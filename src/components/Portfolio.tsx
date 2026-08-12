import { motion } from 'motion/react'
import SectionHeading from './SectionHeading'

const IMAGES = [
  {
    src: 'https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Маска для лица',
  },
  {
    src: 'https://images.pexels.com/photos/37229299/pexels-photo-37229299.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Спа-процедура',
  },
  {
    src: 'https://images.pexels.com/photos/37229294/pexels-photo-37229294.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Массаж лица',
  },
  {
    src: 'https://images.pexels.com/photos/30809943/pexels-photo-30809943.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Профессиональный уход',
  },
  {
    src: 'https://images.pexels.com/photos/7020247/pexels-photo-7020247.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Нанесение крема',
  },
  {
    src: 'https://images.pexels.com/photos/29755259/pexels-photo-29755259.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Увлажнение',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-10 bg-[#EDE4D3]">
      <div className="max-w-[1536px] mx-auto">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <SectionHeading eyebrow="Портфолио">Результаты, которые говорят сами за себя</SectionHeading>
          <p className="text-base md:text-lg text-[rgba(60,42,25,0.65)] mt-5 leading-relaxed">
            Реальные фото до и после процедур. Все снимки публикуются с согласия клиентов.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="relative overflow-hidden rounded-[1.5rem] group cursor-pointer aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(60,42,25,0.75)] via-[rgba(60,42,25,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white text-sm md:text-base font-normal [text-shadow:_0_1px_8px_rgba(0,0,0,0.4)]">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
