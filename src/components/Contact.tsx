import { useState } from 'react'
import { motion } from 'motion/react'
import { Phone, Send, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

const CHANNELS = [
  { icon: Phone, label: 'Телефон', value: '+7 (900) 000-00-00', href: 'tel:+79000000000' },
  { icon: Send, label: 'Telegram', value: '@uma_cosmetolog', href: 'https://t.me/' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+7 (900) 000-00-00', href: 'https://wa.me/79000000000' },
  { icon: MapPin, label: 'Адрес', value: 'Москва, центр', href: '#' },
]

export default function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Здравствуйте! Меня зовут ${name}. Тел: ${phone}. ${message ? '\n\n' + message : ''}`,
    )
    window.open(`https://wa.me/79000000000?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-[#EDE4D3]">
      <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading eyebrow="Контакты" className="mb-6">Запишитесь на первую консультацию</SectionHeading>
          <p className="text-base md:text-lg text-[rgba(60,42,25,0.7)] leading-relaxed mb-10">
            Оставьте заявку — напишу в течение часа. Или напишите мне напрямую в мессенджер, так быстрее.
          </p>

          <div className="grid gap-3">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/40 hover:bg-white/70 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-[rgba(60,42,25,0.08)] flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-[rgba(60,42,25,0.8)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[rgba(60,42,25,0.55)] uppercase tracking-wider">
                    {c.label}
                  </div>
                  <div className="text-sm md:text-base text-[rgba(60,42,25,0.95)] truncate">
                    {c.value}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[rgba(60,42,25,0.4)] group-hover:text-[rgba(60,42,25,0.9)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white/60 backdrop-blur-md rounded-[2rem] p-6 md:p-10 border border-white/50"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-[rgba(60,42,25,0.6)] mb-2 block">
                Ваше имя
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Как к вам обращаться"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/60 focus:outline-none focus:border-[rgba(60,42,25,0.3)] transition-colors text-[rgba(60,42,25,0.95)] placeholder:text-[rgba(60,42,25,0.35)]"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-[rgba(60,42,25,0.6)] mb-2 block">
                Телефон
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="+7 (___) ___-__-__"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/60 focus:outline-none focus:border-[rgba(60,42,25,0.3)] transition-colors text-[rgba(60,42,25,0.95)] placeholder:text-[rgba(60,42,25,0.35)]"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-[rgba(60,42,25,0.6)] mb-2 block">
                Что вас беспокоит (необязательно)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Опишите вкратце — так я лучше подготовлюсь к консультации"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/60 focus:outline-none focus:border-[rgba(60,42,25,0.3)] transition-colors text-[rgba(60,42,25,0.95)] placeholder:text-[rgba(60,42,25,0.35)] resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="mt-2 flex items-center justify-center gap-3 bg-[rgba(60,42,25,0.9)] text-white rounded-full py-3.5 px-6 hover:bg-[rgba(60,42,25,1)] transition-colors font-normal"
            >
              {sent ? 'Открываю мессенджер…' : 'Отправить заявку'}
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
            <p className="text-xs text-[rgba(60,42,25,0.5)] text-center">
              Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
