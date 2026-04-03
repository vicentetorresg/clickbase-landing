'use client'

import { useEffect } from 'react'

export function MetaPixel() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any
    if (w.__cbPixelLoaded) return
    w.__cbPixelLoaded = true

    // Define fbq shim
    const fbq = function (...args: unknown[]) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(fbq as any).callMethod
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ? (fbq as any).callMethod(...args)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        : (fbq as any).queue.push(args)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(fbq as any).push = fbq
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(fbq as any).loaded = true
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(fbq as any).version = '2.0'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(fbq as any).queue = []
    w.fbq = fbq
    if (!w._fbq) w._fbq = fbq

    // Load fbevents.js
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)

    // Init + PageView
    w.fbq('init', '1241207074763520')
    w.fbq('track', 'PageView')
  }, [])

  return null
}
