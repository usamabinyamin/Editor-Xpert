import { motion, useReducedMotion } from 'framer-motion'

/** Premium ease — used across the site */
export const easeSmooth = [0.22, 1, 0.36, 1]

/** Reusable scroll / stagger variants */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: easeSmooth } },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: easeSmooth } },
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: easeSmooth } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.48, ease: easeSmooth } },
}

/** Gentle float — respects reduced motion */
export function Floaty({ children, className = '', y = 10, duration = 6 }) {
  const reduce = useReducedMotion()
  if (reduce) return <motion.div className={className}>{children}</motion.div>

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -y, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Scroll-triggered section reveal. Respects prefers-reduced-motion.
 * @param {'up'|'down'|'left'|'right'|'none'} direction
 * @param {boolean} motionScale subtle zoom-in as section enters
 */
export function ScrollReveal({ children, delay = 0, className = '', direction = 'up', motionScale = false }) {
  const reduce = useReducedMotion()

  const dir =
    direction === 'down'
      ? { y: -44 }
      : direction === 'left'
        ? { x: 36 }
        : direction === 'right'
          ? { x: -36 }
          : direction === 'none'
            ? {}
            : { y: 44 }

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...dir,
        ...(motionScale ? { scale: 0.97 } : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: '-50px 0px -70px 0px', amount: 0.08 }}
      transition={{ duration: 0.58, delay, ease: easeSmooth }}
    >
      {children}
    </motion.div>
  )
}

/** Staggered children — use with initial="hidden" whileInView="show" on parent */
export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeSmooth },
  },
}

export const staggerItemSoft = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeSmooth },
  },
}
