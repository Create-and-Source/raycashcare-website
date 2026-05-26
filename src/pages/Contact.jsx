import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, ExternalLink } from 'lucide-react'
import Section from '../components/Section'

const eventTypes = [
  'Corporate Keynote',
  'Team Building / Workshop',
  'Conference / Summit',
  'Youth / School Event',
  'Military / Government',
  'Podcast / Media Appearance',
  'Private Coaching',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    eventType: '',
    date: '',
    audienceSize: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block">
          <img src="/images/portrait-dark-blazer.webp" alt="Ray Cash Care" className="h-full w-full object-contain object-right-bottom opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-4">Contact</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
              Book Ray
            </h1>
            <p className="text-gray-3 text-lg leading-relaxed">
              Ready to bring Ray's intensity and message to your organization? Fill out the form
              below and our team will get back to you within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-dark-2 border border-green/30 p-12 text-center"
              >
                <div className="w-16 h-16 bg-green/10 flex items-center justify-center mx-auto mb-6">
                  <Send size={28} className="text-green" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Received</h3>
                <p className="text-gray-3">
                  Thanks for reaching out. Ray's team will review your inquiry and get back to you
                  within 48 hours. Get ready to conquer.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-3 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-dark-2 border border-white/10 text-white px-4 py-3 text-sm focus:border-green focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-3 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-dark-2 border border-white/10 text-white px-4 py-3 text-sm focus:border-green focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-3 mb-2">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    className="w-full bg-dark-2 border border-white/10 text-white px-4 py-3 text-sm focus:border-green focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-3 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      required
                      value={form.eventType}
                      onChange={handleChange}
                      className="w-full bg-dark-2 border border-white/10 text-white px-4 py-3 text-sm focus:border-green focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">Select...</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-3 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-dark-2 border border-white/10 text-white px-4 py-3 text-sm focus:border-green focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-3 mb-2">
                      Audience Size
                    </label>
                    <input
                      type="text"
                      name="audienceSize"
                      placeholder="e.g. 500"
                      value={form.audienceSize}
                      onChange={handleChange}
                      className="w-full bg-dark-2 border border-white/10 text-white px-4 py-3 text-sm focus:border-green focus:outline-none transition-colors placeholder:text-gray-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-3 mb-2">
                    Tell us about your event *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you looking for? What does your audience need to hear?"
                    className="w-full bg-dark-2 border border-white/10 text-white px-4 py-3 text-sm focus:border-green focus:outline-none transition-colors resize-none placeholder:text-gray-2"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 border-none cursor-pointer transition-all"
                >
                  Submit Inquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-dark-2 border border-white/5 p-8">
              <h3 className="text-lg font-bold text-white mb-4 uppercase">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:info@raycashcare.com"
                  className="flex items-center gap-3 text-gray-3 hover:text-green text-sm no-underline transition-colors"
                >
                  <Mail size={16} /> info@raycashcare.com
                </a>
                <a
                  href="https://www.instagram.com/raycashcare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-3 hover:text-green text-sm no-underline transition-colors"
                >
                  <ExternalLink size={16} /> @raycashcare
                </a>
                <a
                  href="https://www.youtube.com/@raycashcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-3 hover:text-green text-sm no-underline transition-colors"
                >
                  <ExternalLink size={16} /> YouTube
                </a>
              </div>
            </div>

            <div className="bg-dark-2 border border-white/5 p-8">
              <h3 className="text-lg font-bold text-white mb-4 uppercase">Speaker Bureaus</h3>
              <div className="space-y-3">
                {[
                  { name: 'Executive Speakers', href: 'https://www.executivespeakers.com/speaker/ray-cash-care' },
                  { name: 'Eagle Rise Speakers', href: 'https://eaglerisespeakers.com/speakers/ray-cash-care/' },
                  { name: 'All American Speakers', href: 'https://www.allamericanspeakers.com/celebritytalentbios/Ray+%22Cash%22+Care/465274' },
                ].map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-3 hover:text-green text-sm no-underline transition-colors"
                  >
                    {name} →
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-dark-2 border border-green/20 p-8">
              <h3 className="text-lg font-bold text-white mb-2 uppercase">Quick Response</h3>
              <p className="text-gray-3 text-sm leading-relaxed">
                Ray's team typically responds within 48 hours. For urgent inquiries,
                reach out via Instagram DM.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
