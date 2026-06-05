import { useEffect, useRef } from 'react'
import { initCalendlyInline } from '../utils/calendly'

export default function CalendlyEmbed({ minHeight = 700, className = '' }) {
  const containerRef = useRef(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let cancelled = false

    const mountWidget = (details = {}) => {
      if (cancelled || !containerRef.current) return

      initCalendlyInline(containerRef.current, details)
        .then(() => {
          if (!cancelled) initializedRef.current = true
        })
        .catch(() => {})
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          mountWidget()
          observer.disconnect()
        }
      },
      { rootMargin: '240px 0px', threshold: 0.01 },
    )

    observer.observe(container)

    const onOpenBooking = (event) => {
      mountWidget(event.detail ?? {})
    }
    window.addEventListener('editorxpert:open-booking', onOpenBooking)

    if (window.location.hash === '#book') {
      mountWidget()
    }

    return () => {
      cancelled = true
      observer.disconnect()
      window.removeEventListener('editorxpert:open-booking', onOpenBooking)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: '320px', height: `${minHeight}px` }}
    />
  )
}
