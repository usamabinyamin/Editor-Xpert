import { useEffect, useRef, useState } from 'react'
import { CALENDLY_URL } from '../data/site'
import { initCalendlyInline } from '../utils/calendly'

export default function CalendlyEmbed({ minHeight = 700, className = '' }) {
  const containerRef = useRef(null)
  const initializedRef = useRef(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let cancelled = false

    const mountWidget = () => {
      if (cancelled || initializedRef.current || !containerRef.current) return

      initCalendlyInline(containerRef.current)
        .then(() => {
          if (!cancelled) initializedRef.current = true
        })
        .catch(() => {
          if (!cancelled) setFailed(true)
        })
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

    const onOpenBooking = () => mountWidget()
    window.addEventListener('editorxpert:open-booking', onOpenBooking)

    // Direct visits to /#book should load immediately even before scroll.
    if (window.location.hash === '#book') {
      mountWidget()
    }

    return () => {
      cancelled = true
      observer.disconnect()
      window.removeEventListener('editorxpert:open-booking', onOpenBooking)
    }
  }, [])

  if (failed) {
    return (
      <div
        className="flex min-h-[320px] flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-violet-200 bg-violet-50/40 p-8 text-center"
        style={{ minHeight: `${minHeight}px` }}
      >
        <p className="max-w-md text-sm text-slate-600 sm:text-base">
          The scheduler could not load here. You can still book your 30-minute discovery call
          directly on Calendly.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand/25 transition hover:bg-brand-bright"
        >
          Book on Calendly
        </a>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget w-full ${className}`.trim()}
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: `${minHeight}px` }}
    />
  )
}
