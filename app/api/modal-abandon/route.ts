import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const { title, source, referrer, user_agent, utm_source, utm_medium, utm_campaign, utm_content } = await req.json()

  // Encode UTMs into referrer field since events table doesn't have a metadata column yet
  const utmString = [utm_source, utm_medium, utm_campaign, utm_content]
    .filter(Boolean)
    .join(' | ')

  try {
    await supabase.from('events').insert({
      type: 'modal_abandon',
      source: source || null,
      referrer: utmString || referrer || null,
      user_agent: user_agent || req.headers.get('user-agent') || null,
    })
  } catch (_) {}

  return NextResponse.json({ ok: true })
}
