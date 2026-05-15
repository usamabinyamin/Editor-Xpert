import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import StrategicApproach from './StrategicApproach'
import { easeSmooth } from './MotionSection'
import { MEDIA } from '../data/media'
import { ABOUT_PAGE } from '../data/aboutPage'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px 0px', amount: 0.15 },
}

const sectionReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-72px 0px', amount: 0.08 },
  transition: { duration: 0.58, ease: easeSmooth },
}

export default function About() {
  const p = ABOUT_PAGE

  return (
    <>
      {/* About us — copy left, branding graphic right */}
      <motion.section
        id="about"
        className="border-t border-violet-200/35 bg-gradient-to-br from-canvas via-canvas-bright to-violet-50/40 py-20 sm:py-24"
        {...sectionReveal}
      >
        <div className="layout-shell">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="flex min-h-0 flex-col justify-center"
            >
              <SectionHeading eyebrow="Company" title={p.aboutUs.title} align="left" />
              <p className="mt-2 max-w-xl text-lg leading-relaxed text-slate-600">{p.aboutUs.body}</p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex min-h-[18rem] items-stretch lg:min-h-0"
            >
              <div className="relative flex h-full min-h-[18rem] w-full overflow-hidden rounded-2xl border border-violet-100/90 bg-white/95 shadow-md shadow-violet-200/20">
                <img
                  src={MEDIA.aboutUs}
                  alt="Editor Xpert logo, tagline, and workspace illustration"
                  className="h-full w-full object-contain object-center p-4 sm:p-6"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Founder — text left, portrait right */}
      <motion.section
        className="border-t border-violet-200/30 bg-gradient-to-b from-canvas-bright via-white/70 to-rose-50/25 py-20 sm:py-24"
        {...sectionReveal}
      >
        <div className="layout-shell">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="flex h-full min-h-0 flex-col justify-center lg:py-4"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet">
                {p.founder.roleLabel}
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {p.founder.heading}
              </h2>
              <p className="mt-4 font-display text-2xl font-bold text-brand sm:text-3xl">{p.founder.name}</p>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
                {p.founder.bio.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="flex w-full justify-center lg:justify-end"
            >
              <div className="relative aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-2xl border border-violet-200/50 bg-gradient-to-br from-violet-100/40 to-fuchsia-50/50 shadow-md shadow-violet-200/25 sm:max-w-[380px] lg:max-w-[420px]">
                <img
                  src={MEDIA.founder}
                  alt="Muhammad Usama, Founder and CEO of Editor Xpert"
                  className="h-full w-full object-cover object-[center_22%]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* History / journey */}
      <motion.section
        className="border-t border-violet-200/30 bg-gradient-to-b from-white/80 via-canvas-bright to-violet-50/35 py-20 sm:py-24"
        {...sectionReveal}
      >
        <div className="layout-shell">
          <SectionHeading eyebrow={p.history.eyebrow} title={p.history.title} align="left" />
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-violet-100/90 bg-gradient-to-br from-violet-50/80 via-white to-fuchsia-50/40 p-8 shadow-md shadow-violet-200/20 sm:p-10"
          >
            <div className="absolute -right-20 top-0 h-40 w-40 rounded-full bg-violet/10 blur-3xl" />
            <p className="relative text-lg leading-relaxed text-slate-700">{p.history.body}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Strategic approach — dark wavy roadmap */}
      <StrategicApproach title={p.strategic.title} steps={p.strategicSteps} />

      {/* Tools */}
      <motion.section
        className="border-t border-violet-200/30 bg-gradient-to-br from-canvas-bright via-violet-50/25 to-canvas py-20 sm:py-24"
        {...sectionReveal}
      >
        <div className="layout-shell">
          <SectionHeading title={p.tools.title} subtitle={p.tools.subtitle} eyebrow="Production" />
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {p.tools.items.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="rounded-full border border-violet-200/60 bg-violet-50/70 px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-brand/40 hover:bg-white"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How we make it happen */}
      <motion.section
        className="border-t border-violet-200/35 bg-gradient-to-b from-band/40 via-canvas to-fuchsia-50/25 py-20 sm:py-24"
        {...sectionReveal}
      >
        <div className="layout-shell">
          <SectionHeading eyebrow="The process" title={p.process.title} align="left" />
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-lg leading-relaxed text-slate-600"
          >
            {p.process.body}
          </motion.p>
        </div>
      </motion.section>

      {/* Mission → Results */}
      <motion.section
        className="border-t border-violet-200/30 bg-gradient-to-b from-canvas-bright via-white/65 to-violet-100/30 py-20 sm:py-24"
        {...sectionReveal}
      >
        <div className="layout-shell">
          <SectionHeading
            eyebrow="Principles"
            title="How we think about your channel"
            subtitle="Mission, vision, strategies, and the outcomes we optimize for—aligned with how modern YouTube teams actually ship."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {p.pillars.map((block, i) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="relative rounded-2xl border border-violet-100/90 bg-gradient-to-br from-white via-violet-50/40 to-fuchsia-50/30 p-8 shadow-md shadow-violet-200/15 transition hover:border-brand/35 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-bright font-display text-lg font-bold text-white shadow-md ring-1 ring-black/5">
                  {block.step}
                </div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-slate-900">
                  {block.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{block.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}
