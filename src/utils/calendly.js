import { CONTACT } from '../data/site'

/** Email consultation request with optional form details. */
export function buildConsultationMailto({ name, email, message } = {}) {
  const subject = encodeURIComponent(
    `Consultation request${name ? ` — ${name}` : ''}`,
  )
  const body = encodeURIComponent(
    [`Name: ${name || '—'}`, `Email: ${email || '—'}`, '', message || ''].join('\n'),
  )
  return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
}

export function buildWhatsAppUrl({ name, message } = {}) {
  const text = [
    'Hi Editor Xpert, I would like to book a consultation.',
    name ? `Name: ${name}` : '',
    message || '',
  ]
    .filter(Boolean)
    .join('\n')
  return `https://wa.me/${CONTACT.phone.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`
}

export function openConsultationEmail(details = {}) {
  window.location.href = buildConsultationMailto(details)
}

export function scrollToContact(e) {
  e?.preventDefault?.()
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** Book / consultation CTAs — contact form or prefilled email. */
export function navigateToBook(e, details) {
  e?.preventDefault?.()

  if (details?.name || details?.email || details?.message) {
    openConsultationEmail(details)
    return
  }

  scrollToContact()
}

export function openCalendlyPopup(e, details = {}) {
  navigateToBook(e, details)
}
