import { motion } from 'motion/react'

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
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-[rgba(60,42,25,0.5)]">
            Портфолио
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[rgba(60,42,25,0.95)] mt-3 leading-[1.1] tracking-tight">
            Результаты, которые говорят сами за себя
          </h2>
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
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(60,42,25,0.5)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
