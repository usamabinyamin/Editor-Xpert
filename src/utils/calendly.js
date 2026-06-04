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

export function initCalendlyInline(parentElement) {
  if (!parentElement) return Promise.reject(new Error('Missing Calendly container'))

  return loadCalendlyStyles().then(() =>
    loadCalendlyScript().then((Calendly) => {
      parentElement.innerHTML = ''
      Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement,
        resize: true,
      })
      return Calendly
    }),
  )
}

export function navigateToBook(e) {
  e?.preventDefault?.()

  if (window.location.pathname === '/') {
    const target = document.getElementById('book')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.dispatchEvent(new CustomEvent('editorxpert:open-booking'))
      return
    }
  }

  // Reliable fallback: open Calendly popup from any page.
  openCalendlyPopup()
}

export function openCalendlyPopup(e) {
  e?.preventDefault?.()
  loadCalendlyScript().then((Calendly) => {
    Calendly.initPopupWidget({ url: CALENDLY_URL })
  })
}
