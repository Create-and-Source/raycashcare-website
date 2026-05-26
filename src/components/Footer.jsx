import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/raycashcare/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@raycashcare' },
  { label: 'Facebook', href: 'https://www.facebook.com/Frogmindset' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ray-cash-care-aaa75326/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@raycashcare' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer className="bg-dark border-t border-green/30">
      {/* Email Capture */}
      <div className="border-b border-green/30">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                Get after it
              </h3>
              <p className="text-gray-3 text-sm mt-1">
                Weekly discipline, mindset, and leadership insights from Ray.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-green font-bold text-sm uppercase tracking-widest">
                <Check size={18} /> You're in. Stay hard.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-dark-2 border border-white/10 border-r-0 text-white px-4 py-3 text-sm focus:border-green focus:outline-none transition-colors w-full md:w-64 placeholder:text-gray-2"
                />
                <button
                  type="submit"
                  className="bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-6 py-3 border border-green cursor-pointer transition-all flex items-center gap-2 shrink-0"
                >
                  Join <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-black uppercase tracking-tight text-white mb-4">
              Ray <span className="text-green">"Cash"</span> Care
            </h3>
            <p className="text-gray-3 text-sm leading-relaxed">
              Navy SEAL veteran. Motivational speaker. Peak performance coach.
              Helping organizations and individuals conquer their limits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: '/about', label: 'About' },
                { to: '/speaking', label: 'Speaking' },
                { to: '/conquer', label: 'CONQUER' },
                { to: '/events', label: 'Events' },
                { to: '/contact', label: 'Book Ray' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-gray-3 hover:text-green text-sm no-underline transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-3 hover:text-green text-sm no-underline transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-green/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-2 text-xs">
            &copy; {new Date().getFullYear()} Ray "Cash" Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
