import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/35 backdrop-blur-md border border-white/25 mx-auto mb-5 w-fit shadow-lg shadow-black/20"
    >
      <Sparkles className="w-4 h-4 text-[#E8B863]" />
      <span className="text-[14px] font-normal text-white tracking-wide">Косметология эстетическая</span>
    </motion.div>
  )
}
