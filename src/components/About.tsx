import { motion } from 'motion/react'
import { GraduationCap, Award, Clock } from 'lucide-react'

const ABOUT_IMAGE =
  'https://images.pexels.com/photos/6810869/pexels-photo-6810869.jpeg?auto=compress&cs=tinysrgb&w=1200'

const BADGES = [
  { icon: GraduationCap, title: 'Медицинское образование', text: 'Дерматология, косметология' },
  { icon: Award, title: 'Сертифицирована', text: 'Ежегодное повышение квалификации' },
  { icon: Clock, title: 'Опыт 8 лет', text: 'Более 500 постоянных клиентов' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 bg-[#EDE4D3]">
      <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-white/40">
            <img src={ABOUT_IMAGE} alt="Косметолог Ума" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md rounded-2xl p-4 md:p-5 shadow-sm">
            <div className="text-3xl md:text-4xl font-normal text-[rgba(60,42,25,0.95)]">8+</div>
            <div className="text-xs md:text-sm text-[rgba(60,42,25,0.65)] uppercase tracking-wider">
              лет в профессии
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-[rgba(60,42,25,0.5)]">
            Обо мне
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[rgba(60,42,25,0.95)] mt-3 mb-6 leading-[1.1] tracking-tight">
            Ума — ваш личный косметолог
          </h2>
          <p className="text-base md:text-lg text-[rgba(60,42,25,0.75)] leading-relaxed mb-5">
            Работаю с кожей всех типов и возрастов. Строю уход как систему: диагностика, план процедур,
            домашняя рутина. Никакого впаривания «модного» — только то, что работает именно для вас.
          </p>
          <p className="text-base md:text-lg text-[rgba(60,42,25,0.75)] leading-relaxed mb-8">
            Использую препараты сертифицированных марок, работаю на проверенном оборудовании.
            Приём в кабинете в центре Москвы или онлайн-консультация.
          </p>

          <div className="grid gap-4">
            {BADGES.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/40"
              >
                <div className="shrink-0 w-11 h-11 rounded-full bg-[rgba(60,42,25,0.08)] flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-[rgba(60,42,25,0.8)]" />
                </div>
                <div>
                  <div className="text-sm md:text-base font-medium text-[rgba(60,42,25,0.95)]">{b.title}</div>
                  <div className="text-xs md:text-sm text-[rgba(60,42,25,0.6)] mt-0.5">{b.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
