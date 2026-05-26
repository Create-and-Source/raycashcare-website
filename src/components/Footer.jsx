import { Link } from 'react-router-dom'

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/raycashcare/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@raycashcare' },
  { label: 'Facebook', href: 'https://www.facebook.com/Frogmindset' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ray-cash-care-aaa75326/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@raycashcare' },
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
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

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-2 text-xs">
            &copy; {new Date().getFullYear()} Ray "Cash" Care. All rights reserved.
          </p>
          <p className="text-gray-2 text-xs">
            Built by{' '}
            <a
              href="https://createandsource-website.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-3 hover:text-green no-underline transition-colors"
            >
              Create &amp; Source
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
