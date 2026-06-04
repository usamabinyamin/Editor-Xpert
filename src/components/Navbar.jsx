import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { easeSmooth } from './MotionSection'
import { BRAND_LOGO_SRC, NAV_ITEMS } from '../data/site'
import { navigateToBook } from '../utils/calendly'

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

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = 'text-sm font-medium text-slate-600 transition hover:text-slate-900'

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-violet-200/50 bg-canvas-bright/88 shadow-md shadow-violet-200/20 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex layout-shell items-center justify-between gap-4 py-2.5 sm:py-3">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            navigateTo('/')
          }}
          className="group block shrink-0"
        >
          <span className="relative block h-11 w-[7.5rem] overflow-hidden sm:h-12 sm:w-[8.25rem] md:h-[3.25rem] md:w-[9rem]">
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

        <motion.ul
          className="hidden items-center gap-8 lg:flex"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
          }}
        >
          {NAV_ITEMS.map((item) => (
            <motion.li
              key={item.href}
              variants={{
                hidden: { opacity: 0, y: -8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: easeSmooth } },
              }}
            >
              <a
                href={item.href}
                className={`${linkClass} relative py-1`}
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo(item.href)
                }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-brand to-violet"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: '100%', opacity: 1 }}
                  transition={{ duration: 0.25, ease: easeSmooth }}
                />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.a
            href="#book"
            onClick={navigateToBook}
            whileHover={{ scale: 1.04, boxShadow: '0 12px 32px -8px rgba(230,1,28,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-bright px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand/30 ring-1 ring-black/5 transition hover:brightness-110"
          >
            Free Consultation
          </motion.a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX className="h-7 w-7" /> : <HiMenuAlt3 className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-white/98 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-violet-100/60"
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(false)
                      navigateTo(item.href)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#book"
                  className="block rounded-full bg-gradient-to-r from-brand to-brand-bright px-4 py-3 text-center text-sm font-semibold text-white"
                  onClick={(e) => {
                    setOpen(false)
                    navigateToBook(e)
                  }}
                >
                  Free Consultation
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
