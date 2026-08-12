import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface Props {
  eyebrow: string
  children: ReactNode
  className?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, children, className = '', align = 'left' }: Props) {
  const text = String(children)
  const words = text.split(' ')

  return (
    <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="inline-block text-xs md:text-sm uppercase tracking-[0.2em] text-[rgba(60,42,25,0.5)]"
      >
        {eyebrow}
      </motion.span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[rgba(60,42,25,0.95)] mt-3 leading-[1.1] tracking-tight">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </h2>
    </div>
  )
}
