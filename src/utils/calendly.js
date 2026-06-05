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

export function loadCalendlyStyles() {
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

export function loadCalendlyScript() {
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

export function initCalendlyInline(parentElement, details = {}) {
  if (!parentElement) return Promise.reject(new Error('Missing Calendly container'))

  const prefill = buildPrefill(details)

  return loadCalendlyStyles().then(() =>
    loadCalendlyScript().then((Calendly) => {
      parentElement.innerHTML = ''
      Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement,
        resize: true,
        ...(prefill ? { prefill } : {}),
      })
      return Calendly
    }),
  )
}

/** Opens Calendly as a modal overlay on the current page (no new tab). */
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
      document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.dispatchEvent(new CustomEvent('editorxpert:open-booking', { detail: details }))
    })
}

export function scrollToBook(e) {
  e?.preventDefault?.()
  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.dispatchEvent(new CustomEvent('editorxpert:open-booking'))
}

/** Book / consultation CTAs — popup on this page, or scroll to inline scheduler on home. */
export function navigateToBook(e, details) {
  e?.preventDefault?.()

  if (window.location.pathname === '/' && document.getElementById('book') && !details) {
    scrollToBook()
    return
  }

  openCalendlyPopup(e, details)
}
