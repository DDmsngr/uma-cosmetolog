import { motion } from 'motion/react'

const TAGS = [
  'Аппаратная чистка',
  'Химический пилинг',
  'Ботулинотерапия',
  'Мезотерапия',
  'Биоревитализация',
  'Уходовые протоколы',
  'Инъекционная косметология',
  'Онлайн-консультации',
]

export default function Marquee() {
  const items = [...TAGS, ...TAGS]
  return (
    <div className="py-8 md:py-10 bg-[#EDE4D3] overflow-hidden border-y border-[rgba(60,42,25,0.08)]">
      <motion.div
        className="flex gap-4 md:gap-6 whitespace-nowrap will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {items.map((tag, i) => (
          <div key={`${tag}-${i}`} className="flex items-center gap-4 md:gap-6 shrink-0">
            <span className="text-lg md:text-2xl font-normal text-[rgba(60,42,25,0.75)] tracking-tight">
              {tag}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8B863] shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
