import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const {
    source,
    referrer,
    user_agent,
    userAgent,
    device,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content,
  } = await req.json()

  const effectiveUserAgent =
    user_agent ||
    userAgent ||
    req.headers.get('user-agent') ||
    device ||
    null

  const utmSummary = [utm_campaign, utm_source, utm_medium, utm_content].filter(Boolean).join(' · ')

  try {
    await supabase.from('events').insert({
      type: 'modal_open',
      source: source || null,
      referrer: utmSummary || referrer || null,
      user_agent: effectiveUserAgent,
    })
  } catch (_) {}

  return NextResponse.json({ ok: true })
}
