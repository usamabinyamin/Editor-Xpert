import { CALENDLY_URL } from '../data/site'

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'

export function loadCalendlyScript() {
  return new Promise((resolve) => {
    if (window.Calendly) {
      resolve(window.Calendly)
      return
    }

    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
    if (existing) {
      if (window.Calendly) {
        resolve(window.Calendly)
        return
      }
      existing.addEventListener('load', () => resolve(window.Calendly))
      return
    }

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.onload = () => resolve(window.Calendly)
    document.body.appendChild(script)
  })
}

/** Scroll to the inline booking widget on the home page. */
export function navigateToBook(e) {
  e?.preventDefault?.()

  if (window.location.pathname === '/') {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }

  window.location.href = '/#book'
}

export function openCalendlyPopup(e) {
  e?.preventDefault?.()
  loadCalendlyScript().then((Calendly) => {
    Calendly.initPopupWidget({ url: CALENDLY_URL })
  })
}
