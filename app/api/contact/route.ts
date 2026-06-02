import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // TODO: wire up email — Formspree, Resend or Nodemailer
    // Send to: chris@arcelectricalandgas.co.uk
    console.log('Contact form submission:', JSON.stringify(body, null, 2))
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
