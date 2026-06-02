import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, location, message } = body

    const endpoint = process.env.FORMSPREE_ENDPOINT

    if (!endpoint) {
      // Formspree not configured yet — log submission and return success
      // Setup: go to formspree.io, create a free form, add FORMSPREE_ENDPOINT to Vercel env vars
      console.log('Contact form submission (FORMSPREE_ENDPOINT not configured):', body)
      return NextResponse.json({ success: true })
    }

    // Forward to Formspree — emails chris@arcelectricalandgas.co.uk
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: 'New Enquiry — ARC Electrical & Gas Website',
        _replyto: email,
        name,
        email,
        phone,
        service,
        location,
        message,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Formspree error:', err)
      return NextResponse.json({ success: false }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact route error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
