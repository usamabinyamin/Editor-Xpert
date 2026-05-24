import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import PricingPlan from '../components/PricingPlan'
import Footer from '../components/Footer'
import AnimatedBackdrop from '../components/AnimatedBackdrop'

export default function PricingPlanPage() {
  return (
    <div className="relative flex min-h-0 min-w-0 w-full flex-1 flex-col text-slate-800 antialiased">
      <AnimatedBackdrop />
      <a
        href="#pricing-plan"
        className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg border border-violet-200/70 bg-canvas-bright/95 px-4 py-2 text-sm font-semibold text-slate-900 opacity-0 shadow-lg shadow-violet-200/25 backdrop-blur-sm transition focus:translate-y-0 focus:opacity-100"
      >
        Skip to pricing plans
      </a>
      <Navbar />

      <motion.main
        className="relative w-full flex-1 pt-[4.25rem] sm:pt-[4.5rem]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <PricingPlan />
      </motion.main>

      <motion.div
        className="mt-auto w-full shrink-0"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Footer />
      </motion.div>
    </div>
  )
}
