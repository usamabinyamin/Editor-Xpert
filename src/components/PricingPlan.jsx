import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import { MEDIA } from '../data/media'

const plans = [
  {
    title: 'Basic Plan',
    price: '$700',
    features: [
      'Up to 10 edited videos per month',
      'Basic cuts, transitions, color correction',
      'Background music + subtitles',
      '2 revisions per video',
    ],
  },
  {
    title: 'Pro Plan',
    price: '$1000',
    featured: true,
    features: [
      'Up to 15 videos per month',
      'Advanced editing (effects, motion graphics)',
      'Thumbnail design included',
      'Faster delivery (2-3 days per video)',
      'Unlimited revisions (within scope)',
    ],
  },
  {
    title: 'Premium Channel Management',
    price: '$1500',
    features: [
      'Full YouTube channel management',
      'Content strategy + niche planning',
      'Script writing',
      'Video editing (high-end cinematic style)',
      'Thumbnail + SEO titles & descriptions',
      'Uploading & scheduling videos',
      'Channel growth optimization & analytics support',
    ],
  },
]

export default function PricingPlan() {
  return (
    <section
      id="pricing-plan"
      className="relative border-t border-violet-200/35 bg-gradient-to-b from-canvas via-violet-50/35 to-canvas-bright py-20 sm:py-24"
    >
      <div className="layout-shell">
        <SectionHeading
          eyebrow="Pricing Plan"
          title="Choose the plan that matches your growth stage"
          subtitle="From focused editing support to full channel management."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8 overflow-hidden rounded-2xl border border-violet-100/90 bg-white/95 shadow-md shadow-violet-200/20"
        >
          <img
            src={MEDIA.pricing}
            alt="YouTube planning and video production strategy session"
            className="h-44 w-full object-cover sm:h-56"
            loading="lazy"
          />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className={`rounded-2xl border p-6 shadow-sm sm:p-8 ${
                plan.featured
                  ? 'border-brand/40 bg-white/95 pt-5 ring-2 ring-brand/20 shadow-md shadow-violet-200/15'
                  : 'border-violet-100/90 bg-white/95 shadow-md shadow-violet-200/10'
              }`}
            >
              {plan.featured && (
                <div className="relative mb-5 flex justify-center">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-8 top-1/2 h-8 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand/25 via-brand-bright/20 to-violet/25 blur-lg"
                  />
                  <span className="relative inline-flex items-center rounded-full bg-gradient-to-r from-brand to-brand-bright px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_28px_-6px_rgba(230,1,28,0.55)] ring-2 ring-white ring-offset-2 ring-offset-white/80">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-display text-xl font-bold text-slate-900">{plan.title}</h3>
                <p className="mt-2 text-3xl font-bold text-brand">{plan.price}</p>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                    <HiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Limited-time offer CTA — light canvas + violet accents (matches site sections) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 w-full overflow-hidden rounded-3xl border border-violet-200/90 bg-gradient-to-br from-white via-canvas-bright to-violet-100/50 px-6 py-12 text-center shadow-xl shadow-violet-200/30 ring-1 ring-violet-200/40 sm:px-10 sm:py-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_15%_40%,rgba(230,1,28,0.08),transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_90%_20%,rgba(144,137,252,0.14),transparent_50%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(255,128,181,0.08),transparent_45%)]"
          />

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="bg-gradient-to-r from-slate-900 via-violet-950 to-slate-900 bg-clip-text font-display text-2xl font-bold leading-tight tracking-tight text-transparent sm:text-3xl md:text-4xl">
              Get 25% OFF on Your First Project!
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Boost your brand with the Creative Video Editing Service in Pakistan 2026.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-bright px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25 ring-1 ring-black/5 transition hover:brightness-110"
            >
              Grab My 25% Off Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
