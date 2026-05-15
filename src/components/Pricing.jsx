import { motion } from 'framer-motion'
import { HiCheck, HiLightningBolt } from 'react-icons/hi'
import SectionHeading from './SectionHeading'

const features = [
  'Daily video editing',
  'Unlimited revisions',
  'Thumbnail design',
  'Publishing support',
  'Social media graphics',
  'Channel management',
  'Fast turnaround',
  'Dedicated support',
]

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative border-y border-violet-200/35 bg-gradient-to-b from-canvas via-violet-50/40 to-canvas-bright py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/8 blur-[120px]" />

      <div className="relative layout-shell">
        <SectionHeading
          eyebrow="Pricing"
          title="One premium partnership. Predictable investment."
          subtitle="Everything included for channels ready to scale with daily output."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-lg"
        >
          <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-b from-white to-violet-50/60 p-1 shadow-xl shadow-violet-300/35 ring-1 ring-violet/25">
            <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-rose-accent/10 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-brand/15 blur-3xl" />

            <div className="relative rounded-[1.35rem] bg-white p-8 sm:p-10">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
                <HiLightningBolt className="h-4 w-4" />
                Flagship
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                YouTube Automation Package
              </h3>
              <p className="mt-2 text-slate-600">Full-stack channel operations for serious growth.</p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                  $1,500
                </span>
                <span className="text-lg text-slate-500">/month</span>
              </div>

              <ul className="mt-10 space-y-4">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-bright">
                      <HiCheck className="h-3.5 w-3.5 text-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button
                type="button"
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 w-full rounded-full bg-gradient-to-r from-brand to-brand-bright py-4 text-center text-base font-bold text-white shadow-lg shadow-brand/25 ring-1 ring-black/5 transition hover:brightness-110"
              >
                Start Scaling Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
