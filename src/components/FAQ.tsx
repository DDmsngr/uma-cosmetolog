import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus } from 'lucide-react'
import SectionHeading from './SectionHeading'

const ITEMS = [
  {
    q: 'Как проходит первая консультация?',
    a: 'Разговариваем о ваших целях и жалобах, оцениваю состояние кожи, назначаю индивидуальный план процедур и домашнего ухода. Занимает 40–60 минут.',
  },
  {
    q: 'Можно ли делать процедуры при чувствительной коже?',
    a: 'Да. Именно поэтому я всегда начинаю с диагностики и подбираю щадящие протоколы. Работаю с гипоаллергенными препаратами.',
  },
  {
    q: 'Есть ли реабилитация после процедур?',
    a: 'Зависит от процедуры. Аппаратная чистка — сразу можно возвращаться к обычной жизни. Пилинги и инъекции — от 1 до 5 дней с ограничениями (без сауны, солнца, спорта).',
  },
  {
    q: 'Как часто нужно ходить к косметологу?',
    a: 'Оптимально — раз в 1–2 месяца для профилактического ухода. Курсовые процедуры (пилинги, мезотерапия) — по индивидуальной схеме.',
  },
  {
    q: 'Работаете ли вы дистанционно?',
    a: 'Да, консультирую онлайн: разбираем ваш уход, подбираю средства, объясняю технику применения. Стоимость онлайн-консультации — 2 500 ₽.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-10 bg-[#F0EAD8]">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12 md:mb-16">
          <SectionHeading eyebrow="FAQ" align="center">Частые вопросы</SectionHeading>
        </div>

        <div className="space-y-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-white/40 transition-colors"
                >
                  <span className="text-base md:text-lg font-normal text-[rgba(60,42,25,0.95)]">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-8 h-8 rounded-full bg-[rgba(60,42,25,0.08)] flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 text-[rgba(60,42,25,0.8)]" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-[rgba(60,42,25,0.7)] leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
