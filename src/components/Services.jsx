import { motion } from 'framer-motion'
import { HiArrowRight, HiChartBar, HiLightBulb, HiTrendingUp } from 'react-icons/hi'
import {
  FaYoutube,
  FaSearch,
  FaPenFancy,
  FaMicrophone,
  FaCut,
  FaImage,
  FaClipboardList,
  FaTags,
  FaChartLine,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaPalette,
  FaShareAlt,
  FaFilm,
} from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { easeSmooth } from './MotionSection'
import { SERVICES_HERO_IMAGE, SERVICE_IMAGES } from '../data/media'

const ease = [0.22, 1, 0.36, 1]

/** Full-stack YouTube automation stack (topics aligned with professional automation offerings). */
const services = [
  {
    title: 'YouTube automation',
    desc: 'Own a faceless or brand channel while we run research, planning, production rhythm, and publishing—so you scale a digital asset without being on camera daily.',
    icon: FaYoutube,
  },
  {
    title: 'Profitable niche & keyword research',
    desc: 'Data-led niche selection and keyword strategy aimed at strong CPM potential, sensible competition, and topics that support long-term growth and monetization.',
    icon: FaSearch,
  },
  {
    title: 'Strategic script writing',
    desc: 'Hook-first, retention-aware scripts with SEO-aware phrasing so each video is built to hold attention and earn reach from the algorithm.',
    icon: FaPenFancy,
  },
  {
    title: 'Voiceover production',
    desc: 'Professional human or natural AI-style voiceover options with clear delivery that matches your channel tone and production level.',
    icon: FaMicrophone,
  },
  {
    title: 'High-end video editing',
    desc: 'Fast-paced cuts, motion graphics, b-roll, and storytelling polish—edited for watch time so the feed treats your uploads as high-signal content.',
    icon: FaCut,
  },
  {
    title: 'Viral thumbnail design',
    desc: 'High-contrast, scroll-stopping thumbnails using layout and contrast principles that support stronger CTR in crowded search and browse surfaces.',
    icon: FaImage,
  },
  {
    title: 'Channel management & scheduling',
    desc: 'Upload logistics, community touchpoints, and a consistent release cadence so your channel stays active and professional without you micromanaging.',
    icon: FaClipboardList,
  },
  {
    title: 'YouTube SEO & metadata',
    desc: 'Titles, descriptions, tags, and packaging aligned to intent and discovery—structured to support impressions, clicks, and sustained sessions.',
    icon: FaTags,
  },
  {
    title: 'Monetization & growth strategy',
    desc: 'Roadmaps toward monetization eligibility plus ongoing performance thinking so the goal is durable revenue, not one-off viral spikes.',
    icon: FaChartLine,
  },
  {
    title: 'Copyright-safe production',
    desc: 'Licensed or royalty-free music, cleared stock, and original scripts—built so your catalog stays policy-safe and monetization-ready.',
    icon: FaShieldAlt,
  },
  {
    title: 'Publishing & optimization',
    desc: 'Hands-on publishing support: timing, metadata checks, and iteration loops so every upload lands with your strategy intact.',
    icon: FaCloudUploadAlt,
  },
  {
    title: 'Graphic design & brand visuals',
    desc: 'Channel art, end screens, lower thirds, and campaign creatives that keep your automation output visually cohesive at scale.',
    icon: FaPalette,
  },
  {
    title: 'Social clips & cross-platform',
    desc: 'Shorts, reels, and cut-downs that repurpose long-form into platform-native formats and extend reach beyond the main channel.',
    icon: FaShareAlt,
  },
  {
    title: 'Documentary & long-form',
    desc: 'Premium long-form and documentary-style edits when your automation lane needs deeper narrative structure and cinematic pacing.',
    icon: FaFilm,
  },
]

const whyChoose = [
  {
    title: 'Data-driven growth',
    desc: 'Keyword strategy, retention thinking, and packaging decisions informed by what the YouTube algorithm rewards—not guesswork.',
    icon: HiChartBar,
  },
  {
    title: 'Built for faceless & brand channels',
    desc: 'Repeatable content systems, strong hooks, and production volume so you can scale output like a media company—not a solo editor.',
    icon: HiLightBulb,
  },
  {
    title: 'End-to-end partnership',
    desc: 'From niche clarity to uploads and monetization planning—we handle the heavy lifting so your time goes to strategy and ownership.',
    icon: HiTrendingUp,
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Niche research & channel strategy',
    desc: 'High-CPM, lower-competition angles and a clear positioning plan based on demand, trends, and long-term revenue potential.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: '02',
    title: 'Content planning & script creation',
    desc: 'Topic pipelines and engaging, SEO-aware scripts designed to lift watch time, retention, and discovery.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: '03',
    title: 'Voiceover & video editing',
    desc: 'Human-like voiceover plus polished editing, stock, transitions, and motion—built for clarity and retention.',
    image:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: '04',
    title: 'Thumbnail design & YouTube SEO',
    desc: 'Click-optimized thumbnails and metadata that improve CTR, search visibility, and suggested traffic.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: '05',
    title: 'Uploading, monetization & scaling',
    desc: 'Scheduling, performance reviews, and iteration so the channel compounds into a sustainable asset.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
]

const industries = [
  'Course editing',
  'Ad creatives',
  'Travel',
  'Real estate',
  'Business & finance',
  'Tech & AI',
  'Travel & tourism',
  'True crime & mystery',
  'Crypto',
  'Documentary',
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.45, ease },
  }),
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-violet-200/40 bg-gradient-to-b from-canvas-bright via-white/40 to-violet-100/30 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36"
        aria-labelledby="services-hero-heading"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_70%_-10%,rgba(144,137,252,0.18),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_100%,rgba(230,1,28,0.06),transparent_50%)]"
        />

        <div className="layout-shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 shadow-sm shadow-violet-200/20">
                <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
                YouTube automation
              </span>
              <h1
                id="services-hero-heading"
                className="mt-5 scroll-mt-28 font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]"
              >
                Professional YouTube automation —{' '}
                <span className="bg-gradient-to-r from-brand to-violet bg-clip-text text-transparent">
                  end-to-end channel growth
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Build a high-yielding digital asset with workflows that cover niche research, scripts, voiceover, editing,
                thumbnails, SEO, publishing, and monetization strategy—without you living in the timeline every day.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.a
                  href="/#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-bright px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25 ring-1 ring-black/5"
                >
                  Free consultation
                  <HiArrowRight className="h-5 w-5" />
                </motion.a>
                <a
                  href="#service-deliverables"
                  className="text-center text-sm font-semibold text-violet transition hover:text-brand-dark sm:text-left"
                >
                  Explore deliverables ↓
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.08, ease }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand/20 via-violet/15 to-fuchsia-200/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-violet-200/80 bg-white shadow-2xl shadow-violet-300/30 ring-1 ring-white/80">
                <img
                  src={SERVICES_HERO_IMAGE}
                  alt="Video production workspace with editing setup"
                  className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent p-6 pt-20">
                  <p className="font-display text-lg font-semibold text-white drop-shadow-sm">
                    Custom workflows · Policy-safe assets · Publishing support
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="relative border-b border-violet-200/35 bg-gradient-to-b from-white/80 to-canvas-bright py-16 sm:py-20">
        <div className="layout-shell">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h2 className="bg-gradient-to-r from-slate-900 via-violet-950 to-slate-900 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Why teams choose full-stack automation
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The right partner is the difference between inconsistent uploads and a channel that compounds. We optimize for
              retention, discovery, and monetization—not vanity metrics.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {whyChoose.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.08, duration: 0.45, ease }}
                className="group relative overflow-hidden rounded-2xl border border-violet-100/90 bg-white/95 p-6 shadow-md shadow-violet-200/20 transition hover:border-brand/35 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/12 to-violet/15 text-brand ring-1 ring-violet-100">
                  <item.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative border-b border-violet-200/35 bg-gradient-to-b from-violet-100/25 via-canvas to-fuchsia-50/20 py-16 sm:py-20">
        <div className="layout-shell">
          <SectionHeading
            eyebrow="Process"
            title="Our YouTube automation pipeline"
            subtitle="A result-driven flow built for quality, audience retention, and policy-safe scale."
          />

          <div className="mt-4 space-y-8">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: easeSmooth }}
                className={`grid items-center gap-6 rounded-2xl border border-violet-100/90 bg-white/90 p-5 shadow-md shadow-violet-200/15 backdrop-blur-sm sm:p-6 lg:grid-cols-12 lg:gap-8 ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="overflow-hidden rounded-xl border border-violet-100/80 shadow-inner">
                    <img
                      src={s.image}
                      alt=""
                      className="aspect-[16/10] w-full object-cover transition duration-500 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="font-display text-sm font-bold text-brand">{s.step}</span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-slate-900 sm:text-2xl">{s.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries + service grid */}
      <section
        id="services"
        className="relative scroll-mt-28 border-t border-violet-200/30 bg-gradient-to-b from-canvas-bright/90 via-violet-50/30 to-canvas py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent" />

        <div className="layout-shell">
          <div id="service-deliverables" className="scroll-mt-28">
            <SectionHeading
              eyebrow="Deliverables"
              title="Everything we execute under YouTube automation"
              subtitle="Modular services you can think of as your off-camera production and growth department."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease }}
            className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            <p>
              We deliver scalable{' '}
              <span className="font-semibold text-slate-800">YouTube automation solutions</span> tailored to your niche—
              custom content workflows, stronger channel authority, and packaging that supports search and suggested traffic.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mb-14"
          >
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-violet">Industries we serve</p>
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-violet-200/70 bg-white/85 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm shadow-violet-200/15 backdrop-blur-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-violet-100/90 bg-white/95 shadow-md shadow-violet-200/15 backdrop-blur-sm transition-colors hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10"
              >
                <div className="relative h-40 overflow-hidden sm:h-44">
                  <img
                    src={SERVICE_IMAGES[i]}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-brand shadow-md ring-1 ring-white/50 backdrop-blur-sm">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-violet-200/80 to-transparent" />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease }}
            className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-violet-200/90 bg-gradient-to-br from-white via-violet-50/50 to-fuchsia-50/40 p-8 text-center shadow-xl shadow-violet-200/30 sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 top-0 h-40 w-40 rounded-full bg-brand/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 bottom-0 h-36 w-36 rounded-full bg-violet/15 blur-3xl"
            />
            <h2 className="relative font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Ready to scope your automation workflow?
            </h2>
            <p className="relative mx-auto mt-3 max-w-lg text-slate-600">
              Tell us your niche, cadence, and revenue goals—we’ll map a production and publishing plan that fits.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-bright px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25 ring-1 ring-black/5"
            >
              Book a free consultation
              <HiArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
