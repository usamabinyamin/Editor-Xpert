import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { HiArrowRight, HiCheck, HiChevronDown } from 'react-icons/hi'
import { FaYoutube } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { easeSmooth, Floaty, staggerContainer, staggerItem, staggerItemSoft } from './MotionSection'
import { SERVICES_HERO_IMAGE, SERVICES_DASHBOARD_IMAGE } from '../data/media'
import { SERVICES_PAGE as P } from '../data/servicesPage'

const ease = easeSmooth

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease } },
}

const visualStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const visualItem = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
}

function ServicesFaq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="relative border-t border-violet-200/35 bg-gradient-to-b from-band/40 via-canvas to-fuchsia-50/25 py-20 sm:py-24">
      <motion.div className="layout-shell">
        <SectionHeading eyebrow={P.faq.eyebrow} title={P.faq.title} />

        <motion.div
          className="mx-auto max-w-3xl space-y-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {P.faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={item.q}
                variants={staggerItem}
                initial={false}
                whileHover={{ y: -2 }}
                className="overflow-hidden rounded-xl border border-violet-100/90 bg-white/95 shadow-md shadow-violet-200/15 transition-shadow hover:shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-slate-900 sm:text-lg">{item.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 text-violet">
                    <HiChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="border-t border-violet-100/80 px-5 pb-4 pt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default function Services() {
  const reduce = useReducedMotion()

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-violet-200/40 bg-transparent pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24"
        aria-labelledby="services-hero-heading"
      >
        <motion.div
          aria-hidden
          animate={reduce ? {} : { opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(230,1,28,0.06),transparent_50%)]"
        />
        <motion.div
          aria-hidden
          animate={reduce ? {} : { opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_70%_-10%,rgba(144,137,252,0.14),transparent_55%)]"
        />

        <motion.div className="layout-shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <motion.div variants={heroStagger} initial="hidden" animate="show">
              <motion.span
                variants={heroItem}
                className="text-xs font-bold uppercase tracking-[0.22em] text-brand sm:text-sm"
              >
                {P.hero.eyebrow}
              </motion.span>
              <motion.h1
                variants={heroItem}
                id="services-hero-heading"
                className="mt-4 scroll-mt-28 font-display text-[2.35rem] font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem]"
              >
                {P.hero.title.before}
                <span className="text-brand">{P.hero.title.highlight}</span>
                {P.hero.title.after}
              </motion.h1>
              <motion.p variants={heroItem} className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {P.hero.subtitle}
              </motion.p>

              <motion.div variants={heroItem} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <motion.a
                  href="/#contact"
                  whileHover={{ scale: 1.04, boxShadow: '0 12px 32px -8px rgba(230,1,28,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark"
                >
                  Free Consultation
                </motion.a>
                <motion.a
                  href="/pricing-plan"
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(230,1,28,0.06)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full border-2 border-brand bg-transparent px-7 py-3.5 text-base font-semibold text-brand transition"
                >
                  See Pricing Plan
                </motion.a>
              </motion.div>

              <motion.ul
                variants={heroStagger}
                initial="hidden"
                animate="show"
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2"
              >
                {P.hero.bullets.map((b) => (
                  <motion.li
                    key={b}
                    variants={heroItem}
                    className="flex items-center gap-2 text-sm font-medium text-slate-800 sm:text-[15px]"
                  >
                    <motion.span
                      className="text-brand"
                      aria-hidden
                      animate={reduce ? {} : { scale: [1, 1.2, 1] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      ●
                    </motion.span>
                    {b}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease }}
              className="relative mx-auto w-full max-w-[520px] lg:max-w-none lg:justify-self-end"
            >
              <Floaty className="relative aspect-square w-full max-w-[520px] lg:ml-auto" y={8} duration={7}>
                <motion.div variants={visualStagger} initial="hidden" animate="show" className="relative h-full w-full">
                  <motion.div
                    variants={visualItem}
                    className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-[0_28px_60px_-20px_rgba(18,20,29,0.55)] sm:rounded-[2.25rem]"
                  >
                    <img
                      src={SERVICES_HERO_IMAGE}
                      alt="3D YouTube play button icons representing professional YouTube automation services"
                      className="h-full w-full object-cover object-center"
                      loading="eager"
                    />

                    <motion.div
                      variants={visualItem}
                      className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-md sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-sm"
                    >
                      <motion.span
                        className="h-2 w-2 rounded-full bg-brand"
                        aria-hidden
                        animate={reduce ? {} : { scale: [1, 1.35, 1], opacity: [1, 0.65, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      {P.hero.visualBadge}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={visualItem}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="absolute -right-1 top-8 z-20 max-w-[min(78%,17rem)] rounded-2xl border border-violet-100/90 bg-white/95 p-3.5 shadow-lg shadow-violet-200/25 sm:-right-3 sm:top-10 sm:p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff0000] text-white shadow-md sm:h-11 sm:w-11">
                        <FaYoutube className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                      </span>
                      <motion.div className="min-w-0">
                        <p className="font-display text-sm font-bold leading-tight text-slate-900 sm:text-base">
                          {P.hero.visualTitle}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">{P.hero.visualSubtitle}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </Floaty>
            </motion.div>
          </div>
        </motion.div>
      </section>


      {/* 9-service stack */}
      <section id="services" className="scroll-mt-28 border-b border-violet-200/35 bg-gradient-to-b from-white/90 to-canvas-bright py-20 sm:py-24">
        <motion.div className="layout-shell">
          <SectionHeading eyebrow={P.stack.eyebrow} title={P.stack.title} subtitle={P.stack.subtitle} />

          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {P.stack.items.map((item) => (
              <motion.article
                key={item.step}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-violet-100/90 bg-white/95 p-6 shadow-md shadow-violet-200/15 transition hover:border-brand/30 hover:shadow-lg"
              >
                <span className="font-display text-sm font-bold text-brand">{item.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Industries */}
      <section className="border-b border-violet-200/35 bg-gradient-to-b from-white via-orange-50/20 to-canvas-bright py-16 sm:py-20">
        <motion.div className="layout-shell">
          <SectionHeading
            eyebrow={P.industries.eyebrow}
            title={P.industries.title}
            subtitle={P.industries.subtitle}
          />

          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {P.industries.items.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                whileHover={{ y: -4, boxShadow: '0 12px 28px -10px rgba(15,23,42,0.14)' }}
                className="flex min-h-[7.5rem] flex-col items-center justify-center rounded-xl border border-slate-100/90 bg-white px-3 py-5 text-center shadow-[0_4px_18px_-8px_rgba(15,23,42,0.12)] transition-shadow sm:min-h-[8.25rem] sm:rounded-2xl sm:px-4 sm:py-6"
              >
                <span className="text-[1.75rem] leading-none sm:text-3xl" aria-hidden>
                  {item.emoji}
                </span>
                <p className="mt-3 font-display text-sm font-semibold leading-snug text-slate-900 sm:text-[15px]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why choose + dashboard */}
      <section className="border-b border-violet-200/35 bg-gradient-to-b from-white/80 to-canvas-bright py-20 sm:py-24">
        <motion.div className="layout-shell">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: easeSmooth }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-2xl border border-violet-100/90 bg-white shadow-xl shadow-violet-200/20"
            >
              <motion.img
                src={SERVICES_DASHBOARD_IMAGE}
                alt="Channel performance dashboard with growth charts and analytics"
                className="aspect-[16/10] w-full object-cover object-[center_15%]"
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5, ease: easeSmooth }}
              />
              <div className="border-t border-violet-100/80 bg-slate-900 px-4 py-3">
                <p className="text-sm font-medium text-white/90">Channel performance · growth analytics</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: easeSmooth }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet">{P.whyChoose.eyebrow}</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {P.whyChoose.title}
              </h2>
              {P.whyChoose.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {p}
                </p>
              ))}

              <motion.ul
                className="mt-6 space-y-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
              >
                {P.whyChoose.bullets.map((b) => (
                  <motion.li
                    key={b}
                    variants={staggerItemSoft}
                    className="flex items-start gap-2.5 text-sm text-slate-700 sm:text-base"
                  >
                    <HiCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                    {b}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-bright px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25"
              >
                {P.whyChoose.cta}
                <HiArrowRight className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* AI-powered stack */}
      <section className="border-b border-violet-200/35 bg-gradient-to-b from-violet-100/20 via-canvas to-fuchsia-50/20 py-20 sm:py-24">
        <motion.div className="layout-shell">
          <SectionHeading eyebrow={P.aiStack.eyebrow} title={P.aiStack.title} subtitle={P.aiStack.subtitle} />

          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {P.aiStack.items.map((item) => (
              <motion.article
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="flex flex-col rounded-2xl border border-violet-100/90 bg-white/95 p-5 shadow-md shadow-violet-200/15 transition hover:border-brand/30 hover:shadow-lg sm:p-6"
              >
                <h3 className="font-display text-base font-semibold leading-snug text-slate-900">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Promo CTA */}
      <section className="border-b border-violet-200/35 bg-gradient-to-b from-canvas via-violet-50/30 to-canvas-bright py-16 sm:py-20">
        <motion.div
          className="layout-shell"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeSmooth }}
        >
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-violet-200/90 bg-gradient-to-br from-white via-violet-50/50 to-fuchsia-50/40 p-8 text-center shadow-xl shadow-violet-200/30 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 top-0 h-36 w-36 rounded-full bg-brand/10 blur-3xl"
            />
            <h2 className="relative font-display text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
              {P.promo.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {P.promo.subtitle}
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-bright px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25"
            >
              {P.promo.cta}
            </motion.a>
          </div>
        </motion.div>
      </section>

      <ServicesFaq />

      {/* Bottom CTAs */}
      <section className="bg-gradient-to-b from-canvas-bright to-violet-50/30 py-12 sm:py-16">
        <motion.div
          className="layout-shell flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.a
            variants={staggerItem}
            href="/#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-bright px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25"
          >
            Free Consultation
          </motion.a>
          <motion.a
            variants={staggerItem}
            href="/pricing-plan"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-w-[200px] items-center justify-center rounded-full border-2 border-violet-200/80 bg-white px-8 py-3.5 text-base font-semibold text-slate-800 shadow-sm transition hover:border-brand/40"
          >
            See Pricing Plan
          </motion.a>
          <motion.a
            variants={staggerItem}
            href="/"
            whileHover={{ scale: 1.04, color: '#e6011c' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-w-[200px] items-center justify-center text-base font-semibold text-violet transition"
          >
            Back to home
          </motion.a>
        </motion.div>
      </section>
    </>
  )
}
