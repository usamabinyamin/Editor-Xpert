import { CALENDLY_URL, CONTACT } from '../data/site'

/** Build scheduling URL with optional invitee prefill (name, email, first custom answer). */
export function buildCalendlyUrl({ name, email, message } = {}) {
  const url = new URL(CALENDLY_URL)
  if (name) url.searchParams.set('name', String(name))
  if (email) url.searchParams.set('email', String(email))
  if (message) url.searchParams.set('a1', String(message))
  return url.toString()
}

/** Email fallback when Calendly scheduling is unavailable. */
export function buildConsultationMailto({ name, email, message } = {}) {
  const subject = encodeURIComponent(
    `Consultation request${name ? ` — ${name}` : ''}`,
  )
  const body = encodeURIComponent(
    [`Name: ${name || '—'}`, `Email: ${email || '—'}`, '', message || ''].join('\n'),
  )
  return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
}

/** Open the full Calendly page in a new tab (more reliable than the embed popup). */
export function openCalendlyBooking(details = {}) {
  window.open(buildCalendlyUrl(details), '_blank', 'noopener,noreferrer')
}

/** Used by Free Consultation / Book a Call buttons site-wide. */
export function navigateToBook(e, details) {
  e?.preventDefault?.()
  openCalendlyBooking(details)
}

/** Contact form and legacy callers — opens scheduler in a new tab. */
export function openCalendlyPopup(e, details = {}) {
  navigateToBook(e, details)
}
