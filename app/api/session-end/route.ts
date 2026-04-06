import { NextResponse } from 'next/server'

// Session emails disabled — only modal-open and lead-form emails are sent
export async function POST() {
  return NextResponse.json({ skipped: true })
}
