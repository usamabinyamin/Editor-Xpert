import { motion } from 'framer-motion'
import { HiArrowRight, HiPlay } from 'react-icons/hi'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-transparent pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(230,1,28,0.06),transparent_50%)]"
      />

      <div className="relative layout-shell text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-violet-200/70 bg-canvas-bright/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 shadow-md shadow-violet-200/25 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
          Video editing · YouTube automation
        </motion.div>

        <div className="-mx-1 mt-6 overflow-x-auto px-1 sm:mx-0 sm:overflow-x-visible sm:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.5, ease }}
            className="flex min-w-0 flex-col gap-0.5 text-center font-display font-bold leading-[1.08] tracking-tight md:gap-1"
          >
            {/* Exactly two lines: nowrap + fluid clamp (never wraps mid-sentence) */}
            <span className="whitespace-nowrap text-[clamp(0.8125rem,2vw+0.35rem,3.75rem)] text-slate-900">
              Scale your channel with{' '}
              <span className="bg-gradient-to-r from-brand to-violet bg-clip-text text-transparent">
                pro video editing
              </span>
            </span>
            <span className="whitespace-nowrap text-[clamp(0.8125rem,2vw+0.35rem,3.75rem)] text-slate-900">
              — not a full-time hire.
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.45, ease }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl"
        >
          Daily edits, thumbnails, publishing, and growth support — so you can stay focused on
          ideas and strategy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.45, ease }}
          className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center"
        >
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('contact')
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-bright px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25 sm:min-w-[200px]"
          >
            Book free call
            <HiArrowRight className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('portfolio')
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-violet-300/60 bg-canvas-bright/85 px-8 py-3.5 text-base font-semibold text-slate-800 shadow-md shadow-violet-200/20 backdrop-blur-sm transition hover:border-brand/40 hover:bg-white/95 sm:min-w-[200px]"
          >
            <HiPlay className="h-5 w-5 text-brand" />
            View portfolio
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.06, delayChildren: 0.28 },
            },
          }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {['Daily editing', 'Publishing', 'Thumbnails', 'Channel growth'].map((t) => (
            <motion.span
              key={t}
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease } },
              }}
              whileHover={{ scale: 1.04, y: -2 }}
              className="rounded-full border border-violet-200/60 bg-violet-50/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-8 text-sm text-slate-500"
        >
          Flagship automation from <span className="font-semibold text-slate-700">$1,500/mo</span>
        </motion.p>

      </div>
    </section>
  )
}
