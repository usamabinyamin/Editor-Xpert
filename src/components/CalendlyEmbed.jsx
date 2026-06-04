import { useEffect, useRef } from 'react'
import { CALENDLY_URL } from '../data/site'
import { loadCalendlyScript } from '../utils/calendly'

export default function CalendlyEmbed({ minHeight = 700, className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    loadCalendlyScript().then((Calendly) => {
      if (cancelled || !containerRef.current) return

      Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: containerRef.current,
      })
    })

    return () => {
      cancelled = true
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
