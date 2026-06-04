import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa'
import { HiArrowRight, HiMail, HiPhone } from 'react-icons/hi'
import { easeSmooth } from './MotionSection'
import { BRAND_LOGO_SRC, NAV_ITEMS, SOCIAL, CONTACT } from '../data/site'
import { navigateToBook } from '../utils/calendly'

const EXTRA_LINKS = [{ href: '#pricing', label: 'Pricing' }]

const LINK_COL_A = NAV_ITEMS.slice(0, 4)
const LINK_COL_B = [...NAV_ITEMS.slice(4), ...EXTRA_LINKS]

function navigateTo(href) {
  if (href.startsWith('#')) {
    if (window.location.pathname === '/') {
      const id = href.slice(1)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.location.href = `/${href}`
    }
    return
  }

  if (href.startsWith('/#')) {
    if (window.location.pathname === '/') {
      const id = href.slice(2)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.location.href = href
    }
    return
  }

  window.location.href = href
}

function FooterLink({ item }) {
  return (
    <a
      href={item.href}
      onClick={(e) => {
        e.preventDefault()
        navigateTo(item.href)
      }}
      className="group flex items-center gap-2 rounded-lg py-2.5 pl-2 pr-3 text-[15px] text-slate-600 transition hover:bg-violet-100/70 hover:text-slate-900"
    >
      <span className="h-px w-0 bg-brand transition-all group-hover:w-3 group-hover:opacity-100 opacity-0" />
      {item.label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="relative border-t border-violet-300/45 bg-gradient-to-br from-violet-200/50 via-fuchsia-100/35 to-band/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent"
      />

      <div className="layout-shell py-10 sm:py-11">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: easeSmooth }}
          >
            <a
              href="/"
              className="inline-block"
              onClick={(e) => {
                e.preventDefault()
                navigateTo('/')
              }}
            >
              <span className="relative block h-14 w-[9.5rem] overflow-hidden sm:h-16 sm:w-[10.75rem] md:h-[4.25rem] md:w-[11.5rem]">
                <img
                  src={BRAND_LOGO_SRC}
                  alt="Editor Xpert"
                  width={400}
                  height={100}
                  className="absolute left-0 top-0 h-full w-auto max-w-none -translate-x-[32.5%]"
                  decoding="async"
                />
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-slate-600">
              Premium YouTube automation, editing, and publishing—so you can scale without hiring
              an in-house team.
            </p>
            <a
              href="#book"
              onClick={navigateToBook}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-dark"
            >
              Free Consultation
              <HiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease: easeSmooth }}
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Sitemap</h2>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-0">
              <nav aria-label="Footer primary" className="flex flex-col">
                {LINK_COL_A.map((item) => (
                  <FooterLink key={item.href} item={item} />
                ))}
              </nav>
              <nav aria-label="Footer secondary" className="flex flex-col">
                {LINK_COL_B.map((item) => (
                  <FooterLink key={item.href} item={item} />
                ))}
              </nav>
            </div>
          </motion.div>

          <motion.div
            className="flex min-w-0 flex-col lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16, ease: easeSmooth }}
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Contact</h2>
            <div className="mt-5 grid w-full grid-cols-1 gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="box-border flex min-h-[4.25rem] w-full min-w-0 items-center gap-3 rounded-xl border border-violet-100/90 bg-white/95 px-4 py-3 shadow-md shadow-violet-200/20 transition hover:border-brand/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <HiMail className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block text-xs text-slate-500">Email</span>
                  <span className="mt-0.5 block truncate text-sm font-medium text-slate-900 sm:text-[15px]">
                    {CONTACT.email}
                  </span>
                </span>
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="box-border flex min-h-[4.25rem] w-full min-w-0 items-center gap-3 rounded-xl border border-violet-100/90 bg-white/95 px-4 py-3 shadow-md shadow-violet-200/20 transition hover:border-violet/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet/10 text-violet">
                  <HiPhone className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block text-xs text-slate-500">Phone</span>
                  <span className="mt-0.5 block truncate text-sm font-medium text-slate-900 sm:text-[15px]">
                    {CONTACT.phoneDisplay}
                  </span>
                </span>
              </a>
            </div>
            <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Social
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-100/90 bg-white/95 text-slate-600 shadow-md shadow-violet-200/15 transition hover:border-pink-400 hover:text-pink-500"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-100/90 bg-white/95 text-slate-600 shadow-md shadow-violet-200/15 transition hover:border-violet hover:text-violet"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-100/90 bg-white/95 text-slate-600 shadow-md shadow-violet-200/15 transition hover:border-brand hover:text-brand"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-sm" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 flex flex-col gap-2 border-t border-violet-200/50 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1, ease: easeSmooth }}
        >
          <p className="text-center text-sm text-slate-500 sm:text-left">
            © {new Date().getFullYear()} Editor Xpert. All rights reserved.
          </p>
          <p className="text-center text-sm text-slate-500 sm:text-right">
            Founder:{' '}
            <span className="font-medium text-slate-700">Muhammad Usama</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
