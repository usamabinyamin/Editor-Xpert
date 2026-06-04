import { motion, useReducedMotion } from 'framer-motion'
import { HiArrowRight, HiPlay } from 'react-icons/hi'
import { MEDIA } from '../data/media'
import { CALENDLY_URL } from '../data/site'
import { Floaty } from './MotionSection'

import { navigateToBook } from '../utils/calendly'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-transparent pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24"
    >
      <motion.div
        aria-hidden
        initial={false}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(230,1,28,0.06),transparent_50%)]"
      />

      <div className="relative layout-shell">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="grid items-start gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-16"
        >
          {/* Left — content */}
          <div className="flex flex-col justify-start text-center lg:text-left">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
                show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease } },
              }}
              className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-violet-200/70 bg-canvas-bright/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 shadow-md shadow-violet-200/25 backdrop-blur-sm lg:self-start"
            >
              <motion.span
                className="h-2 w-2 rounded-full bg-brand"
                aria-hidden
                animate={reduce ? {} : { scale: [1, 1.35, 1], opacity: [1, 0.65, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              Video editing · YouTube automation
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
              }}
              className="mt-6 font-display text-[clamp(1.75rem,4vw+0.5rem,3.25rem)] font-bold leading-[1.12] tracking-tight text-slate-900 xl:text-[3.25rem]"
            >
              Scale your channel with{' '}
              <span className="text-brand">pro video editing</span>{' '}
              — not a full-time hire.
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.48, ease } },
              }}
              className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl lg:mx-0"
            >
              Daily edits, thumbnails, publishing, and growth support — so you can stay focused on
              ideas and strategy.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.48, ease } },
              }}
              className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            >
              <motion.a
                href={CALENDLY_URL}
                onClick={navigateToBook}
                whileHover={{ scale: 1.03, boxShadow: '0 16px 40px -12px rgba(230,1,28,0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-bright px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25 sm:min-w-[200px]"
              >
                Book free call
                <motion.span
                  className="inline-flex"
                  animate={reduce ? {} : { x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <HiArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </motion.span>
              </motion.a>
              <motion.a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo('portfolio')
                }}
                whileHover={{ scale: 1.03, borderColor: 'rgba(230,1,28,0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-violet-300/60 bg-canvas-bright/85 px-8 py-3.5 text-base font-semibold text-slate-800 shadow-md shadow-violet-200/20 backdrop-blur-sm transition hover:bg-white/95 sm:min-w-[200px]"
              >
                <HiPlay className="h-5 w-5 text-brand" />
                View portfolio
              </motion.a>
            </motion.div>

            <motion.div
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
              }}
              className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {['Daily editing', 'Publishing', 'Thumbnails', 'Channel growth'].map((t) => (
                <motion.span
                  key={t}
                  variants={{
                    hidden: { opacity: 0, y: 12, scale: 0.92 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.38, ease } },
                  }}
                  whileHover={{ scale: 1.06, y: -3 }}
                  className="rounded-full border border-violet-200/60 bg-violet-50/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.45, delay: 0.1 } },
              }}
              className="mt-8 text-sm text-slate-500"
            >
              Flagship automation from <span className="font-semibold text-slate-700">$1,500/mo</span>
            </motion.p>
          </div>

          {/* Right — image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40, scale: 0.96 },
              show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.65, ease } },
            }}
            className="relative min-h-0 w-full lg:min-h-full"
          >
            <Floaty className="relative h-full w-full" y={8} duration={7}>
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/12 via-violet/8 to-fuchsia-200/20 blur-lg lg:-inset-3"
              />
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.35, ease }}
                className="relative mx-auto h-56 max-w-sm overflow-hidden rounded-2xl border border-violet-200/80 bg-white shadow-xl shadow-violet-300/20 ring-1 ring-white/80 sm:h-64 sm:max-w-md lg:absolute lg:inset-0 lg:mx-0 lg:h-auto lg:max-w-none"
              >
                <motion.img
                  src={MEDIA.hero}
                  alt="Professional video editing workstation with timeline and color grading panel"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease }}
                />
              </motion.div>
            </Floaty>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
