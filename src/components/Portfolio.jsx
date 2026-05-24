import { motion } from 'framer-motion'
import { HiFilm, HiSparkles, HiVideoCamera, HiDesktopComputer } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import { PORTFOLIO_IMAGES } from '../data/media'
import { fadeInLeft, fadeInRight, staggerContainer, easeSmooth } from './MotionSection'

const items = [
  {
    title: 'Documentary edits',
    desc: 'Cinematic pacing and narrative structure for long-form stories.',
    icon: HiFilm,
  },
  {
    title: 'YouTube automation channels',
    desc: 'Systems-led channels with repeatable formats and fast throughput.',
    icon: HiDesktopComputer,
  },
  {
    title: 'Shorts / Reels editing',
    desc: 'Hook-first edits built for retention and platform-native energy.',
    icon: HiSparkles,
  },
  {
    title: 'Long-form videos',
    desc: 'Deep dives, explainers, and interviews polished to broadcast feel.',
    icon: HiVideoCamera,
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative border-t border-violet-200/40 bg-gradient-to-br from-violet-100/55 via-fuchsia-50/35 to-canvas-bright py-20 sm:py-24"
    >
      <div className="layout-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Work that spans formats and ambitions"
          subtitle="Placeholder previews below—swap in your best thumbnails and embeds when ready."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
              whileHover={{ y: -8, transition: { duration: 0.28, ease: easeSmooth } }}
              className="group overflow-hidden rounded-2xl border border-violet-100/90 bg-white/95 shadow-md shadow-violet-200/15 transition hover:border-violet-300/70 hover:shadow-xl"
            >
              <motion.div className="relative aspect-video overflow-hidden bg-slate-100">
                <motion.img
                  src={PORTFOLIO_IMAGES[i % PORTFOLIO_IMAGES.length]}
                  alt={`${item.title} portfolio example`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.55, ease: easeSmooth }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.58),transparent_55%)]" />
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/35 bg-white/20 text-white backdrop-blur"
                >
                  <item.icon className="h-5 w-5" aria-hidden />
                </motion.div>
                <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                  Real edit style
                </span>
              </motion.div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
