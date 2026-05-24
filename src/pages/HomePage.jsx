import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Process from '../components/Process'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AnimatedBackdrop from '../components/AnimatedBackdrop'
import { ScrollReveal } from '../components/MotionSection'

export default function HomePage() {
  return (
    <div className="relative flex min-h-0 min-w-0 w-full flex-1 flex-col text-slate-800 antialiased">
      <AnimatedBackdrop />
      <a
        href="#home"
        className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg border border-violet-200/70 bg-canvas-bright/95 px-4 py-2 text-sm font-semibold text-slate-900 opacity-0 shadow-lg shadow-violet-200/25 backdrop-blur-sm transition focus:translate-y-0 focus:opacity-100"
      >
        Skip to content
      </a>
      <Navbar />
      <motion.main
        className="relative min-w-0 w-full flex-1"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />
        <ScrollReveal delay={0.04} direction="left" motionScale>
          <Process />
        </ScrollReveal>
        <ScrollReveal delay={0.04} direction="right" motionScale>
          <Portfolio />
        </ScrollReveal>
        <ScrollReveal delay={0.06} motionScale>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal delay={0.06} direction="left" motionScale>
          <Contact />
        </ScrollReveal>
      </motion.main>
      <motion.div
        className="mt-auto w-full shrink-0"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -20px 0px', amount: 0.05 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Footer />
      </motion.div>
    </div>
  )
}
