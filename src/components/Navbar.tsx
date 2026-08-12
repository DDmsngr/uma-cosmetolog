import { motion } from 'motion/react'
import { ArrowUpRight, ChevronRight } from 'lucide-react'

const NAV_ITEMS: { label: string; href: string; hasDropdown?: boolean }[] = [
  { label: 'Услуги', href: '#services', hasDropdown: true },
  { label: 'Обо мне', href: '#about' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
      <div className="flex-1 hidden md:flex items-center">
        <a href="#" className="font-regular tracking-tighter text-xl text-[rgba(60,42,25,0.9)]">УМА</a>
      </div>

      <ul className="hidden md:flex items-center gap-8 text-[rgb(60,42,25)] font-normal text-sm">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.label}
            className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
          >
            <a href={item.href}>{item.label}</a>
            {item.hasDropdown && (
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <a href="#" className="font-regular tracking-tighter text-xl text-[rgba(60,42,25,0.9)]">УМА</a>
      </div>

      <div className="flex-1 flex justify-end">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(60,42,25,0.9)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(60,42,25,1)] transition-colors group"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xs md:text-sm font-normal">Записаться</span>
        </motion.a>
      </div>
    </nav>
  )
}
