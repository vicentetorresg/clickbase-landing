/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    fbq: (...args: any[]) => void
    _fbq: (...args: any[]) => void
  }
}

export function fbq(...args: any[]) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(...args)
  }
}
