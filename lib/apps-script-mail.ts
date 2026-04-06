const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxGi9HPOKY4W0jTKs0NmAuCVDau1GyDUeQOaVrJY6li07Ye1AAAo4jTyA22cNOPLfd78A/exec'

type AppsScriptMail = {
  subject: string
  body: string
  html: string
}

export async function sendMailViaAppsScript(payload: AppsScriptMail) {
  const res = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    throw new Error(`Apps Script mail error: ${res.status}`)
  }

  const result = await res.json().catch(() => null)

  if (result && result.ok === false) {
    throw new Error(result.error || 'Apps Script mail error')
  }
}
