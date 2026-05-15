import { motion } from 'framer-motion'
import { HiFilm, HiSparkles, HiVideoCamera, HiDesktopComputer } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import { PORTFOLIO_IMAGES } from '../data/media'

const items = [
  {
    title: 'Documentary edits',
    desc: 'Cinematic pacing and narrative structure for long-form stories.',
    icon: HiFilm,
    gradient: 'from-amber-100 to-orange-50',
  },
  {
    title: 'YouTube automation channels',
    desc: 'Systems-led channels with repeatable formats and fast throughput.',
    icon: HiDesktopComputer,
    gradient: 'from-red-50 to-slate-100',
  },
  {
    title: 'Shorts / Reels editing',
    desc: 'Hook-first edits built for retention and platform-native energy.',
    icon: HiSparkles,
    gradient: 'from-fuchsia-50 to-purple-50',
  },
  {
    title: 'Long-form videos',
    desc: 'Deep dives, explainers, and interviews polished to broadcast feel.',
    icon: HiVideoCamera,
    gradient: 'from-violet-50 to-slate-50',
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

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-2xl border border-violet-100/90 bg-white/95 shadow-md shadow-violet-200/15 transition hover:border-violet-300/70 hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                  src={PORTFOLIO_IMAGES[i % PORTFOLIO_IMAGES.length]}
                  alt={`${item.title} portfolio example`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.58),transparent_55%)]" />
                <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/35 bg-white/20 text-white backdrop-blur">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                  Real edit style
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
