import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { PROCESS_IMAGES } from '../data/media'
import { fadeUp, staggerContainer, easeSmooth } from './MotionSection'

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
      <motion.div className="layout-shell">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from onboarding to daily output"
          subtitle="Transparent steps so you always know what happens next."
        />

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {steps.map((s, i) => (
            <motion.div key={s.step} variants={fadeUp} className="relative">
              <motion.div
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25, ease: easeSmooth } }}
                className="relative z-10 rounded-2xl border border-violet-100/90 bg-white/95 p-6 shadow-md shadow-violet-200/20 backdrop-blur-sm transition hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
              >
                <motion.div className="mb-4 overflow-hidden rounded-xl border border-violet-100/80">
                  <motion.img
                    src={PROCESS_IMAGES[i % PROCESS_IMAGES.length]}
                    alt={`${s.title} process step`}
                    className={
                      i === 3
                        ? 'h-28 w-full object-cover object-[center_15%]'
                        : 'h-28 w-full object-cover object-center'
                    }
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.45, ease: easeSmooth }}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ rotate: [0, -4, 4, 0] }}
                  transition={{ duration: 0.4 }}
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-bright font-display text-lg font-bold text-white shadow-md ring-1 ring-black/5"
                >
                  {s.step}
                </motion.div>
                <h3 className="font-display text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="my-4 flex origin-top justify-center lg:hidden"
                >
                  <motion.div className="h-8 w-px bg-gradient-to-b from-violet/40 to-transparent" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
