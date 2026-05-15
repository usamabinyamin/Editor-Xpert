import { useId } from 'react'
import { motion } from 'framer-motion'
import { HiChartBar, HiFilm, HiLightBulb, HiTrendingUp } from 'react-icons/hi'
import { easeSmooth } from './MotionSection'

const ICONS = [HiLightBulb, HiFilm, HiChartBar, HiTrendingUp]
const GRADIENTS = [
  'from-teal-400 via-emerald-400 to-cyan-500',
  'from-orange-400 via-amber-400 to-yellow-500',
  'from-violet-500 via-purple-500 to-indigo-600',
  'from-rose-500 via-pink-500 to-fuchsia-600',
]

const VB_W = 1200
const VB_H = 280

/** Wave passes through anchor centers (icon sits on the curve) */
const WAVE_PATH =
  'M 48 140 C 130 140, 190 48, 278 48 C 370 48, 405 232, 478 232 C 552 232, 615 48, 682 48 C 752 48, 815 232, 918 232 C 1005 232, 1060 140, 1148 140'

const anchors = [
  { x: 278, y: 48 },
  { x: 478, y: 232 },
  { x: 682, y: 48 },
  { x: 918, y: 232 },
]

function pctX(x) {
  return `${(x / VB_W) * 100}%`
}

function pctY(y) {
  return `${(y / VB_H) * 100}%`
}

/** Clearance from icon edge to copy (matches sm ~56px circles; avoid wave overlap) */
const ICON_RADIUS_PX = 28
const TEXT_GAP_PX = 20

export default function StrategicApproach({ title, steps }) {
  const uid = useId().replace(/:/g, '')

  return (
    <motion.section
      className="relative overflow-x-hidden border-t border-violet-200/40 bg-gradient-to-b from-violet-200/45 via-fuchsia-100/35 to-canvas-bright py-20 sm:py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px 0px', amount: 0.1 }}
      transition={{ duration: 0.6, ease: easeSmooth }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_0%,rgba(230,1,28,0.08),transparent_55%)]" />

      <div className="relative layout-shell">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl text-center font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h2>

        {/* Mobile */}
        <div className="mx-auto mt-14 max-w-lg space-y-10 md:hidden">
          {steps.map((s, i) => {
            const Icon = ICONS[i % ICONS.length]
            const g = GRADIENTS[i % GRADIENTS.length]
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="relative flex gap-4"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${g} text-white shadow-lg shadow-sky-500/15 ring-2 ring-white ring-offset-2 ring-offset-white`}
                >
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-slate-900">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute left-7 top-14 h-[calc(100%+1.25rem)] w-px bg-gradient-to-b from-sky-400/45 to-sky-300/10" />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Desktop — wave scales to full layout width (viewBox 1200×280 → aspect ratio) */}
        <div className="relative mx-auto mt-14 hidden min-h-0 w-full md:block">
          {/* Vertical padding: room for titles above peaks and copy below troughs */}
          <div className="relative pt-28 pb-32 lg:pt-36 lg:pb-40">
            <div className="relative mx-auto w-full max-w-none aspect-[1200/280]">
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                viewBox={`0 0 ${VB_W} ${VB_H}`}
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                <defs>
                  <linearGradient id={`${uid}-wave`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="40%" stopColor="#00d4ff" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                  <filter id={`${uid}-glow`} x="-35%" y="-35%" width="170%" height="170%">
                    <feGaussianBlur stdDeviation="2" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <circle cx="48" cy="140" r="4.5" fill="#00d4ff" className="drop-shadow-[0_0_8px_rgba(0,212,255,0.75)]" />

                <path
                  d={WAVE_PATH}
                  fill="none"
                  stroke={`url(#${uid}-wave)`}
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter={`url(#${uid}-glow)`}
                />

                <path
                  d="M 1144 134 L 1174 140 L 1144 146 Z"
                  fill="#38bdf8"
                  className="drop-shadow-[0_0_6px_rgba(56,189,248,0.55)]"
                />
              </svg>

              {/* Icons centered on curve anchors */}
              {steps.map((s, i) => {
                const ax = anchors[i].x
                const ay = anchors[i].y
                const Icon = ICONS[i % ICONS.length]
                const g = GRADIENTS[i % GRADIENTS.length]

                return (
                  <motion.div
                    key={`icon-${s.title}`}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute z-20 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br ${g} text-white shadow-lg shadow-slate-400/25 ring-2 ring-white sm:h-14 sm:w-14`}
                    style={{
                      left: pctX(ax),
                      top: pctY(ay),
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
                  </motion.div>
                )
              })}

              {/* Copy sits in clear bands: peaks → above icon (upper channel); troughs → below icon (lower channel) */}
              {steps.map((s, i) => {
                const ax = anchors[i].x
                const ay = anchors[i].y
                const isPeak = s.peak

                return (
                  <motion.div
                    key={`txt-${s.title}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                    className="pointer-events-none absolute z-[15] flex max-w-[min(22vw,280px)] flex-col items-center gap-1.5 text-center sm:max-w-[240px] xl:max-w-[300px]"
                    style={{
                      left: pctX(ax),
                      ...(isPeak
                        ? {
                            top: `calc(${pctY(ay)} - ${ICON_RADIUS_PX + TEXT_GAP_PX}px)`,
                            transform: 'translate(-50%, -100%)',
                          }
                        : {
                            top: `calc(${pctY(ay)} + ${ICON_RADIUS_PX + TEXT_GAP_PX}px)`,
                            transform: 'translateX(-50%)',
                          }),
                    }}
                  >
                    <p className="font-display text-[13px] font-semibold leading-snug text-slate-900 sm:text-sm">
                      {s.title}
                    </p>
                    <p className="text-[11px] leading-snug text-slate-600 sm:text-xs">{s.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
