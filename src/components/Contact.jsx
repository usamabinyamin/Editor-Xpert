import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone } from 'react-icons/hi'
import { easeSmooth, staggerContainer, staggerItem } from './MotionSection'
import SectionHeading from './SectionHeading'
import { CONTACT } from '../data/site'
import { MEDIA } from '../data/media'

export default function Contact() {
  const [status, setStatus] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const subject = encodeURIComponent(`Editor Xpert inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
    )
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    setStatus('opened')
  }

  return (
    <section
      id="contact"
      className="relative border-b border-violet-200/35 bg-gradient-to-b from-canvas-bright/95 via-white/60 to-violet-100/45 py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 max-h-64 bg-gradient-to-t from-violet-100/50 via-rose-50/20 to-transparent" />

      <div className="relative layout-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Grow Your Channel"
          subtitle="Tell us about your niche, posting schedule, and goals—we’ll respond with next steps."
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.58, ease: easeSmooth }}
            className="lg:col-span-2"
          >
            <div className="group mb-6 overflow-hidden rounded-2xl border border-violet-100/90 bg-white/95 shadow-md shadow-violet-200/15">
              <img
                src={MEDIA.contact}
                alt="Video editing studio setup for YouTube automation"
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="border-t border-violet-100/80 bg-canvas-bright/80 px-4 py-3 text-sm font-medium text-slate-700">
                Dedicated support for creators and brands
              </div>
            </div>
            <p className="text-lg text-slate-600">
              Prefer direct lines? Reach us anytime for a discovery call or scope questions.
            </p>

            <motion.ul
              className="mt-8 space-y-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.li variants={staggerItem}>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-start gap-4 rounded-xl border border-violet-100/90 bg-violet-50/50 p-4 transition hover:border-brand/40 hover:bg-white hover:shadow-md hover:shadow-violet-200/20"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <HiMail className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Email
                    </div>
                    <div className="mt-1 font-medium text-slate-900 group-hover:text-brand-dark">
                      {CONTACT.email}
                    </div>
                  </div>
                </a>
              </motion.li>
              <motion.li variants={staggerItem}>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="group flex items-start gap-4 rounded-xl border border-violet-100/90 bg-violet-50/50 p-4 transition hover:border-violet/40 hover:bg-white hover:shadow-md hover:shadow-violet-200/20"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet/10 text-violet">
                    <HiPhone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Phone
                    </div>
                    <div className="mt-1 font-medium text-slate-900 group-hover:text-violet">
                      {CONTACT.phoneDisplay}
                    </div>
                  </div>
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.58, ease: easeSmooth }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-violet-100/90 bg-white/95 p-6 shadow-xl shadow-violet-200/25 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-xl border border-violet-100/80 bg-violet-50/40 px-4 py-3 text-slate-900 outline-none ring-brand/25 transition placeholder:text-slate-400 focus:border-brand/50 focus:bg-white focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-violet-100/80 bg-violet-50/40 px-4 py-3 text-slate-900 outline-none ring-brand/25 transition placeholder:text-slate-400 focus:border-brand/50 focus:bg-white focus:ring-2"
                  placeholder="you@example.com"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full resize-y rounded-xl border border-violet-100/80 bg-violet-50/40 px-4 py-3 text-slate-900 outline-none ring-brand/25 transition placeholder:text-slate-400 focus:border-brand/50 focus:bg-white focus:ring-2"
                  placeholder="Channel link, niche, and what you need day-to-day…"
                />
              </label>
            </div>

            {status === 'opened' && (
              <p className="mt-4 text-sm text-violet">
                If your mail client did not open, email us directly at {CONTACT.email}
              </p>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="mt-6 w-full rounded-full bg-gradient-to-r from-brand to-brand-bright py-3.5 text-sm font-bold tracking-wide text-white shadow-md shadow-brand/25 ring-1 ring-black/5 transition hover:brightness-110 sm:py-4 sm:text-base"
            >
              Let’s Grow Your Channel
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
