'use client'
import { useState } from 'react'

const services = ['Electrical Fault Finding','EICR Testing','Fuse Board Upgrade','Lighting Installation','Socket Installation','Cooker Installation','Extractor Fan Installation','Electric Shower Installation','Landlord Electrical Certificate','Boiler Service','Boiler Repair','Boiler Installation','Gas Safety Record (CP12)','Replacement Radiator / Plumbing','Gas Fire Service','Other']

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', location:'', message:'' })
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mqerbwqg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: 'New Enquiry — ARC Electrical & Gas Website',
          _replyto: form.email,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          location: form.location,
          message: form.message,
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch { setStatus('error') }
  }

  if (status === 'success') return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
      <p className="text-gray-600">We&apos;ll get back to you as soon as possible. For urgent work, call <a href="tel:07810413488" className="text-yellow-600 font-semibold">07810 413488</a>.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
          <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy" placeholder="Your phone number" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy" placeholder="your@email.com" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
          <select id="service" name="service" value={form.service} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy bg-white">
            <option value="">Select a service</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Your Location / Postcode</label>
          <input id="location" name="location" type="text" value={form.location} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy" placeholder="e.g. Kippax, LS25" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy resize-none" placeholder="Tell us what you need..." />
      </div>
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          Sorry, there was a problem sending your message. Please call <a href="tel:07810413488" className="font-semibold">07810 413488</a> directly.
        </div>
      )}
      <button type="submit" disabled={status === 'sending'}
        className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-4 rounded-lg transition-colors text-base disabled:opacity-60">
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      <p className="text-xs text-gray-500 text-center">
        We aim to respond within a few hours. For urgent enquiries, call <a href="tel:07810413488" className="text-navy underline">07810 413488</a>.
      </p>
    </form>
  )
}
