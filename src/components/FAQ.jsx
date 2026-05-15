import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import SectionHeading from './SectionHeading'

const faqs = [
  {
    q: 'What niches do you work with?',
    a: 'We work with faceless channels, brands, educators, documentary-style creators, and entertainment formats. If YouTube is your core platform, we can likely support your workflow.',
  },
  {
    q: 'How fast is turnaround?',
    a: 'Turnaround is built around a daily publishing cadence. Exact timelines depend on video length and complexity, but speed is a core part of the service.',
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes. The flagship package includes unlimited revisions so creative direction stays aligned as you scale output.',
  },
  {
    q: 'Do you manage publishing?',
    a: 'We handle publishing support including uploads, metadata alignment, and optimization as part of the YouTube automation package.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'We work month-to-month with partners who are a mutual fit. Details are confirmed on your discovery call so expectations stay clear on both sides.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section
      id="faq"
      className="relative border-t border-violet-200/35 bg-gradient-to-b from-band/50 via-canvas to-fuchsia-50/30 py-20 sm:py-24"
    >
      <div className="layout-shell">
        <div className="mx-auto w-full max-w-5xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers before you book"
          subtitle="Straightforward responses for high-ticket partnerships."
        />

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={item.q}
                initial={false}
                className="overflow-hidden rounded-xl border border-violet-100/90 bg-white/95 shadow-md shadow-violet-200/15 transition hover:border-violet-300/60"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-slate-900 sm:text-lg">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="shrink-0 text-violet"
                  >
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
                      <p className="border-t border-slate-100 px-5 pb-4 pt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
        </div>
      </div>
    </section>
  )
}
