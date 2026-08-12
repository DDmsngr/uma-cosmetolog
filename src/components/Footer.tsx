export default function Footer() {
  return (
    <footer className="bg-[rgba(60,42,25,0.95)] text-[#EDE4D3] px-6 md:px-10 py-12 md:py-16">
      <div className="max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        <div>
          <div className="text-2xl font-normal tracking-tight mb-3">УМА</div>
          <p className="text-sm text-[#EDE4D3]/60 leading-relaxed max-w-xs">
            Косметология эстетическая. Индивидуальный подход, безопасные препараты,
            видимый результат.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#EDE4D3]/50 mb-4">Разделы</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">Обо мне</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
            <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#EDE4D3]/50 mb-4">Контакты</div>
          <ul className="space-y-2 text-sm">
            <li><a href="tel:+79000000000" className="hover:text-white transition-colors">+7 (900) 000-00-00</a></li>
            <li><a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a></li>
            <li><a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
            <li className="text-[#EDE4D3]/60">Москва, центр</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1536px] mx-auto mt-12 pt-8 border-t border-[#EDE4D3]/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-[#EDE4D3]/50">
        <div>© {new Date().getFullYear()} УМА · Косметолог. Все права защищены.</div>
        <div>Дизайн и разработка — Алексей Евтушенко</div>
      </div>
    </footer>
  )
}
