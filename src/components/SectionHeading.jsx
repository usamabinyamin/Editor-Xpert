import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto'

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-violet"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="bg-gradient-to-r from-slate-950 via-violet-950 to-slate-950 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-lg text-slate-600"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
