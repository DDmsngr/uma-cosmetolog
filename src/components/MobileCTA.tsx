import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Send } from 'lucide-react'

export default function MobileCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 600)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <div className="flex gap-2">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white/90 backdrop-blur-md text-[rgba(60,42,25,0.95)] rounded-full py-3.5 shadow-lg shadow-black/15 font-normal"
            >
              <Send className="w-4 h-4" />
              <span className="text-sm">Telegram</span>
            </a>
            <a
              href="#contact"
              className="flex-[1.4] flex items-center justify-center gap-2 bg-[rgba(60,42,25,0.95)] text-white rounded-full py-3.5 shadow-lg shadow-black/20 font-normal"
            >
              <span className="text-sm">Записаться</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
