import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import {
  easeSmooth,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
  staggerItemSoft,
  Floaty,
} from './MotionSection'
import { navigateToBook } from '../utils/calendly'
import { BOOKING_HREF } from '../data/site'
import { MEDIA, SERVICES_HERO_IMAGE } from '../data/media'
import { ABOUT_PAGE } from '../data/aboutPage'

const viewport = { once: true, margin: '-48px 0px', amount: 0.12 }

const sectionMotion = (direction = 'up', delay = 0) => {
  const offset =
    direction === 'left' ? { x: -44 } : direction === 'right' ? { x: 44 } : { y: 44 }

  return {
    initial: { opacity: 0, ...offset },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, margin: '-72px 0px', amount: 0.08 },
    transition: { duration: 0.58, delay, ease: easeSmooth },
  }
}

const imageZoom = {
  whileHover: { scale: 1.06 },
  transition: { duration: 0.45, ease: easeSmooth },
}

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function TeamRow({ people, size = 'lead', showAccentBar = false }) {
  return (
    <div className="relative">
      {showAccentBar && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[6.75rem] z-0 hidden h-3 rounded-full bg-gradient-to-r from-brand/90 via-violet to-brand/90 shadow-md shadow-brand/20 sm:top-[7.25rem] sm:h-4 lg:block"
        />
      )}

      <motion.div
        className="relative z-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-12"
        variants={staggerContainer}
      >
        {people.map((person) => (
          <motion.div key={person.name} variants={staggerItemSoft} className="flex flex-col items-center">
            <TeamPerson person={person} size={size} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function TeamPortrait({ person, size = 'lead' }) {
  const isLead = size === 'lead'
  const frameClass = isLead
    ? 'h-52 w-52 sm:h-56 sm:w-56'
    : 'h-40 w-40 sm:h-44 sm:w-44'

  return (
    <div className={`relative overflow-hidden rounded-xl border-4 border-white bg-white shadow-lg shadow-violet-200/30 ${frameClass}`}>
      {person.image ? (
        <img
          src={person.image}
          alt={person.name}
          className={`h-full w-full object-cover ${person.imagePosition ?? 'object-center'}`}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-violet/25 via-brand/15 to-fuchsia-200/30 font-display font-bold text-brand ${
            isLead ? 'text-4xl sm:text-5xl' : 'text-3xl'
          }`}
          aria-hidden
        >
          {getInitials(person.name)}
        </div>
      )}
    </div>
  )
}

function TeamPerson({ person, size = 'lead' }) {
  const isLead = size === 'lead'

  return (
    <motion.div
      variants={staggerItemSoft}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: easeSmooth }}
      className="flex flex-col items-center text-center"
    >
      <TeamPortrait person={person} size={size} />
      <h3
        className={`mt-4 font-display font-bold text-slate-900 ${isLead ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}`}
      >
        {person.name}
      </h3>
      <p className={`mt-1 font-medium text-violet ${isLead ? 'text-sm sm:text-base' : 'text-sm'}`}>
        {person.role}
      </p>
    </motion.div>
  )
}

export default function About() {
  const p = ABOUT_PAGE

  return (
    <>
      {/* About us — copy left, branding graphic right */}
      <motion.section
        id="about"
        className="border-t border-violet-200/35 bg-gradient-to-br from-canvas via-canvas-bright to-violet-50/40 py-20 sm:py-24"
        {...sectionMotion('up')}
      >
        <motion.div className="layout-shell">
          <motion.div
            className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={fadeInLeft} className="flex min-h-0 flex-col justify-center">
              <SectionHeading eyebrow="Company" title={p.aboutUs.title} align="left" />
              <motion.p
                variants={staggerItemSoft}
                className="mt-2 max-w-xl text-lg leading-relaxed text-slate-600"
              >
                {p.aboutUs.body}
              </motion.p>
            </motion.div>

            <motion.div variants={fadeInRight} className="flex min-h-[18rem] items-stretch lg:min-h-0">
              <Floaty className="h-full w-full" y={8} duration={7}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 20px 40px -16px rgba(139,92,246,0.25)' }}
                  transition={{ duration: 0.3, ease: easeSmooth }}
                  className="relative flex h-full min-h-[18rem] w-full overflow-hidden rounded-2xl border border-violet-100/90 bg-white/95 shadow-md shadow-violet-200/20 lg:min-h-0"
                >
                  <motion.img
                    {...imageZoom}
                    src={MEDIA.aboutUs}
                    alt="Editor Xpert logo, tagline, and workspace illustration"
                    className="h-full w-full object-contain object-center p-4 sm:p-6"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              </Floaty>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Meet our team — two equal rows of three */}
      <motion.section
        className="border-t border-violet-200/30 bg-gradient-to-b from-canvas-bright via-white/70 to-rose-50/25 py-20 sm:py-24"
        {...sectionMotion('left')}
      >
        <motion.div className="layout-shell">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={staggerItemSoft} className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                {p.team.title}
              </h2>
              <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-brand to-violet" />
              <p className="mt-5 text-lg leading-relaxed text-slate-600">{p.team.subtitle}</p>
            </motion.div>

            <div className="mt-14 space-y-12 sm:mt-16 sm:space-y-14">
              <TeamRow people={p.team.leads} size="lead" showAccentBar />
              <TeamRow people={p.team.members} size="lead" showAccentBar />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* History / journey */}
      <motion.section
        className="border-t border-violet-200/30 bg-gradient-to-b from-white/80 via-canvas-bright to-violet-50/35 py-20 sm:py-24"
        {...sectionMotion('right')}
      >
        <motion.div className="layout-shell">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={staggerItemSoft}>
              <SectionHeading eyebrow={p.history.eyebrow} title={p.history.title} align="left" />
            </motion.div>
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -3, boxShadow: '0 16px 36px -14px rgba(139,92,246,0.2)' }}
              className="relative overflow-hidden rounded-2xl border border-violet-100/90 bg-gradient-to-br from-violet-50/80 via-white to-fuchsia-50/40 p-8 shadow-md shadow-violet-200/20 sm:p-10"
            >
              <div className="absolute -right-20 top-0 h-40 w-40 rounded-full bg-violet/10 blur-3xl" />
              <p className="relative text-lg leading-relaxed text-slate-700">{p.history.body}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Tools */}
      <motion.section
        className="border-t border-violet-200/30 bg-gradient-to-br from-canvas-bright via-violet-50/25 to-canvas py-20 sm:py-24"
        {...sectionMotion('up')}
      >
        <motion.div className="layout-shell">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={staggerItemSoft}>
              <SectionHeading title={p.tools.title} subtitle={p.tools.subtitle} eyebrow="Production" />
            </motion.div>
            <motion.div
              className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3"
              variants={staggerContainer}
            >
              {p.tools.items.map((tool) => (
                <motion.span
                  key={tool}
                  variants={staggerItemSoft}
                  whileHover={{ y: -3, scale: 1.04, borderColor: 'rgba(230,1,28,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full border border-violet-200/60 bg-violet-50/70 px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition-colors hover:bg-white"
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* The process */}
      <motion.section
        className="border-t border-violet-200/30 bg-gradient-to-b from-canvas-bright via-white/80 to-orange-50/25 py-20 sm:py-24"
        {...sectionMotion('left')}
      >
        <motion.div className="layout-shell">
          <motion.div
            className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={fadeInLeft} className="flex min-h-0 flex-col justify-center">
              <SectionHeading eyebrow={p.process.eyebrow} title={p.process.title} align="left" />
              <motion.p
                variants={staggerItemSoft}
                className="mt-2 max-w-xl text-lg leading-relaxed text-slate-600"
              >
                {p.process.body}
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              whileHover={{ y: -4, boxShadow: '0 20px 40px -16px rgba(15,23,42,0.35)' }}
              className="relative aspect-[4/3] min-h-0 w-full overflow-hidden rounded-2xl border border-slate-900/10 bg-zinc-950 shadow-lg shadow-slate-900/15 sm:aspect-[16/10] lg:aspect-auto lg:h-full"
            >
              <motion.img
                {...imageZoom}
                src={MEDIA.aboutProcess}
                alt="3D YouTube play button icons representing channel production"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Principles */}
      <motion.section
        className="border-t border-violet-200/30 bg-gradient-to-b from-orange-50/35 via-white/80 to-canvas-bright py-20 sm:py-24"
        {...sectionMotion('right')}
      >
        <motion.div className="layout-shell">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={staggerItemSoft}>
              <SectionHeading
                eyebrow={p.principles.eyebrow}
                title={p.principles.title}
                subtitle={p.principles.subtitle}
              />
            </motion.div>

            <motion.div
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
              variants={staggerContainer}
            >
              {p.pillars.map((block) => (
                <motion.article
                  key={block.title}
                  variants={staggerItem}
                  whileHover={{ y: -6, boxShadow: '0 18px 36px -14px rgba(15,23,42,0.16)' }}
                  className="flex h-full flex-col rounded-2xl border border-slate-100/90 bg-white p-6 shadow-[0_4px_20px_-10px_rgba(15,23,42,0.12)] transition-shadow sm:p-7"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -6, 6, 0], scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand font-display text-base font-bold text-white shadow-sm shadow-brand/25"
                  >
                    {block.step}
                  </motion.div>
                  <h3 className="mt-5 font-display text-sm font-bold uppercase tracking-[0.12em] text-slate-900 sm:text-[15px]">
                    {block.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{block.text}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Quote + closing CTA */}
      <motion.section
        className="border-t border-violet-200/30 bg-gradient-to-b from-canvas-bright via-white/90 to-canvas py-20 sm:py-24"
        {...sectionMotion('up')}
      >
        <motion.div className="layout-shell">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.35, ease: easeSmooth }}
              className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-zinc-950 shadow-2xl shadow-slate-900/20"
            >
              <motion.img
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: easeSmooth }}
                src={SERVICES_HERO_IMAGE}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
                loading="lazy"
                decoding="async"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/92 to-zinc-950/45"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand/25 via-transparent to-transparent"
              />
              <div className="relative px-8 py-12 sm:px-12 sm:py-16 lg:max-w-3xl lg:px-14 lg:py-20">
                <motion.blockquote
                  variants={staggerItem}
                  className="font-display text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-[2rem] lg:leading-tight"
                >
                  {p.closing.quote}
                </motion.blockquote>
                <motion.p
                  variants={staggerItemSoft}
                  className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-amber-400/95 sm:text-[15px]"
                >
                  {p.closing.quoteLabel}
                </motion.p>
              </div>
            </motion.div>

            <motion.div variants={staggerItemSoft} className="mx-auto mt-14 max-w-3xl text-center sm:mt-16">
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {p.closing.ctaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {p.closing.ctaSubtitle}
              </p>
              <motion.div
                className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
                variants={staggerContainer}
              >
                <motion.a
                  variants={staggerItem}
                  href={BOOKING_HREF}
                  onClick={navigateToBook}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex min-w-[168px] items-center justify-center rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-bright"
                >
                  Book a Call
                </motion.a>
                <motion.a
                  variants={staggerItem}
                  href="/#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex min-w-[168px] items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition hover:border-slate-300"
                >
                  Get a Quote
                </motion.a>
                <motion.a
                  variants={staggerItem}
                  href="/"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex min-w-[168px] items-center justify-center rounded-full border-2 border-brand/80 bg-white px-7 py-3.5 text-base font-semibold text-brand transition hover:bg-brand/5"
                >
                  Back to home
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}
