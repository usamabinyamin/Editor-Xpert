import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { PROCESS_IMAGES } from '../data/media'

const steps = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'Understand goals and niche',
  },
  {
    step: '02',
    title: 'Strategy Planning',
    desc: 'Create content workflow',
  },
  {
    step: '03',
    title: 'Editing & Production',
    desc: 'Daily editing + graphics',
  },
  {
    step: '04',
    title: 'Publishing & Growth',
    desc: 'Upload + optimize content',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="relative border-t border-violet-200/35 bg-gradient-to-b from-canvas-bright/95 via-white/50 to-canvas/90 py-20 sm:py-24"
    >
      <div className="layout-shell">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from onboarding to daily output"
          subtitle="Transparent steps so you always know what happens next."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="relative z-10 rounded-2xl border border-violet-100/90 bg-white/95 p-6 shadow-md shadow-violet-200/20 backdrop-blur-sm transition hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
              >
                <div className="mb-4 overflow-hidden rounded-xl border border-violet-100/80">
                  <img
                    src={PROCESS_IMAGES[i % PROCESS_IMAGES.length]}
                    alt={`${s.title} process step`}
                    className="h-28 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-bright font-display text-lg font-bold text-white shadow-md ring-1 ring-black/5">
                  {s.step}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="my-4 flex justify-center lg:hidden">
                  <div className="h-8 w-px bg-gradient-to-b from-violet/40 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
