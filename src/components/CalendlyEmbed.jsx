import { useEffect, useRef } from 'react'
import { initCalendlyInline } from '../utils/calendly'

export default function CalendlyEmbed({ minHeight = 700, className = '', details = {} }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let cancelled = false

    initCalendlyInline(container, details)
      .then(() => {
        if (!cancelled) container.dataset.loaded = 'true'
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [details.name, details.email, details.message])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: '320px', height: `${minHeight}px` }}
    />
  )
}
