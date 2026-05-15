import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi'
import { easeSmooth } from './MotionSection'
import SectionHeading from './SectionHeading'
import { AVATARS } from '../data/media'

const testimonials = [
  {
    quote: 'Editor Xpert helped us scale our channel consistently.',
    name: 'Michael Thompson',
    role: 'Co-founder, Atlas Faceless Media · Austin, TX',
  },
  {
    quote: 'Their editing quality is top tier.',
    name: 'Jessica Morgan',
    role: 'Head of Content, Northline Studios · Los Angeles, CA',
  },
  {
    quote: 'They handled everything while we focused on content ideas.',
    name: 'Brandon Walsh',
    role: 'Creator & Host, Walsh Weekly · Chicago, IL',
  },
  {
    quote: 'Turnaround and thumbnails alone were worth the partnership.',
    name: 'Ashley Rivera',
    role: 'VP Growth, Summit Digital Group · Miami, FL',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  const current = testimonials[index]

  return (
    <section
      id="reviews"
      className="relative border-t border-violet-200/30 bg-gradient-to-b from-canvas-bright via-rose-50/25 to-violet-100/40 py-20 sm:py-24"
    >
      <div className="layout-shell">
        <SectionHeading
          eyebrow="Reviews"
          title="Trusted by teams who ship daily"
          subtitle="What partners say about working with Editor Xpert."
        />

        <motion.div
          className="relative mx-auto w-full max-w-5xl"
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px 0px', amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeSmooth }}
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand/10 via-violet/10 to-brand/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-violet-100/90 bg-white/95 p-8 shadow-xl shadow-violet-300/25 ring-1 ring-violet-200/40 sm:p-12">
            <div className="mb-6 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <HiStar key={s} className="h-6 w-6 text-brand-bright" aria-hidden />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <p className="font-display text-2xl font-medium leading-snug text-slate-900 sm:text-3xl">
                  “{current.quote}”
                </p>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <img
                      src={AVATARS[index % AVATARS.length]}
                      alt={`${current.name} avatar`}
                      className="mx-auto mb-3 h-12 w-12 rounded-full border border-slate-200 object-cover shadow-sm"
                      loading="lazy"
                    />
                    <span className="block text-sm font-semibold text-violet">{current.name}</span>
                    <span className="mt-1 block text-sm text-slate-600">{current.role}</span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="rounded-full border border-violet-200/70 bg-canvas-bright/90 p-3 text-slate-700 shadow-md shadow-violet-200/20 transition hover:bg-white"
                aria-label="Previous testimonial"
              >
                <HiChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? 'w-8 bg-brand-bright' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                className="rounded-full border border-violet-200/70 bg-canvas-bright/90 p-3 text-slate-700 shadow-md shadow-violet-200/20 transition hover:bg-white"
                aria-label="Next testimonial"
              >
                <HiChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
