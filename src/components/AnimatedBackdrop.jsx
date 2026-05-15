import { motion, useReducedMotion } from 'framer-motion'

export default function AnimatedBackdrop() {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-canvas"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 120% 80% at 50% -15%, rgba(144, 137, 252, 0.14), transparent 55%),
            radial-gradient(ellipse 90% 60% at 100% 0%, rgba(230, 1, 28, 0.07), transparent 50%),
            radial-gradient(ellipse 70% 50% at 0% 80%, rgba(255, 128, 181, 0.1), transparent 48%)
          `,
        }}
      />
    )
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 130% 70% at 50% -20%, rgba(144, 137, 252, 0.2), transparent 58%),
            radial-gradient(ellipse 100% 60% at 100% 0%, rgba(230, 1, 28, 0.08), transparent 52%),
            radial-gradient(ellipse 85% 55% at 0% 100%, rgba(255, 128, 181, 0.12), transparent 48%)
          `,
        }}
      />

      <motion.div
        className="absolute -left-[15%] top-[-5%] h-[55vmin] w-[55vmin] rounded-full bg-violet/28 blur-[90px]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-[10%] top-[30%] h-[50vmin] w-[50vmin] rounded-full bg-brand/16 blur-[100px]"
        animate={{ x: [0, -25, 0], y: [0, 30, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[25%] h-[42vmin] w-[42vmin] rounded-full bg-fuchsia-400/12 blur-[85px]"
        animate={{ x: [0, 20, 0], y: [0, -15, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
    </div>
  )
}
