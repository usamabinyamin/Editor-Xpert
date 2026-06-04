import { CALENDLY_URL } from '../data/site'

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const STYLE_HREF = 'https://assets.calendly.com/assets/external/widget.css'

function waitForCalendly(timeoutMs = 15000) {
  return new Promise((resolve, reject) => {
    if (window.Calendly) {
      resolve(window.Calendly)
      return
    }

    const started = Date.now()
    const timer = window.setInterval(() => {
      if (window.Calendly) {
        window.clearInterval(timer)
        resolve(window.Calendly)
        return
      }

      if (Date.now() - started > timeoutMs) {
        window.clearInterval(timer)
        reject(new Error('Calendly script timed out'))
      }
    }, 50)
  })
}

function loadCalendlyStyles() {
  return new Promise((resolve) => {
    const existing = document.querySelector(`link[href="${STYLE_HREF}"]`)
    if (existing) {
      resolve()
      return
    }

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = STYLE_HREF
    link.onload = () => resolve()
    link.onerror = () => resolve()
    document.head.appendChild(link)
  })
}

function loadCalendlyScript() {
  const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`)

  if (!existing) {
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    document.head.appendChild(script)
  }

  return waitForCalendly()
}

function buildPrefill({ name, email, message } = {}) {
  const prefill = {}

  if (name) prefill.name = String(name)
  if (email) prefill.email = String(email)
  if (message) prefill.customAnswers = { a1: String(message) }

  return Object.keys(prefill).length ? prefill : undefined
}

function openCalendlyInNewTab({ name, email } = {}) {
  const params = new URLSearchParams()
  if (name) params.set('name', String(name))
  if (email) params.set('email', String(email))
  const query = params.toString()
  window.open(query ? `${CALENDLY_URL}?${query}` : CALENDLY_URL, '_blank', 'noopener,noreferrer')
}

/** Open Calendly scheduling popup (optionally prefilled from the contact form). */
export function openCalendlyPopup(e, details = {}) {
  e?.preventDefault?.()

  const prefill = buildPrefill(details)

  loadCalendlyStyles()
    .then(() => loadCalendlyScript())
    .then((Calendly) => {
      Calendly.initPopupWidget({
        url: CALENDLY_URL,
        ...(prefill ? { prefill } : {}),
      })
    })
    .catch(() => {
      openCalendlyInNewTab(details)
    })
}

/** Used by Free Consultation / Book a Call buttons site-wide. */
export function navigateToBook(e, details) {
  openCalendlyPopup(e, details)
}
