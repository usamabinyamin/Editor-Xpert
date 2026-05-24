import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import { PRICING_HERO_IMAGE } from '../data/media'
import { easeSmooth, scaleIn, staggerContainer, staggerItemSoft } from './MotionSection'

const ease = easeSmooth

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease } },
}

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
    <>
      {/* Hero — full-width background */}
      <section
        id="pricing-plan"
        className="relative scroll-mt-28 overflow-hidden border-b border-violet-200/40"
        aria-labelledby="pricing-plan-heading"
      >
        <img
          src={PRICING_HERO_IMAGE}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-slate-950/75"
        />
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(15,23,42,0.15),transparent_65%)]"
        />

        <motion.div
          className="relative layout-shell flex min-h-[16rem] flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[18rem] sm:py-16 md:min-h-[20rem] md:py-20"
          variants={heroStagger}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={heroItem}
            className="text-xs font-bold uppercase tracking-[0.22em] text-brand-bright sm:text-sm"
          >
            Pricing Plan
          </motion.span>
          <motion.h1
            variants={heroItem}
            id="pricing-plan-heading"
            className="mt-4 max-w-3xl font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Choose the plan that matches your growth stage
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg"
          >
            From focused editing support to full channel management.
          </motion.p>
        </motion.div>
      </section>

      <section className="relative border-b border-violet-200/35 bg-gradient-to-b from-canvas via-violet-50/35 to-canvas-bright py-20 sm:py-24">
        <div className="layout-shell">
        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.title}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
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
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-full bg-white/20"
                      animate={{ opacity: [0, 0.35, 0], scale: [1, 1.15, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-display text-xl font-bold text-slate-900">{plan.title}</h3>
                <p className="mt-2 text-3xl font-bold text-brand">{plan.price}</p>
              </div>

              <motion.ul
                className="space-y-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {plan.features.map((feature) => (
                  <motion.li
                    key={feature}
                    variants={staggerItemSoft}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                  >
                    <HiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          ))}
        </motion.div>

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
    </>
  )
}
