import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Section from '../components/Section'

const posts = [
  {
    url: 'https://raycashcare.com/trust-the-process/',
    title: 'Trust the Process',
    excerpt: 'Success doesn\'t happen overnight. It\'s built one rep, one decision, one day at a time. Trust the grind.',
    category: 'Mindset',
  },
  {
    url: 'https://raycashcare.com/motivation-isnt-enough/',
    title: 'Motivation Isn\'t Enough',
    excerpt: 'Motivation fades. Discipline stays. Here\'s why you need to stop waiting to feel like it.',
    category: 'Discipline',
  },
  {
    url: 'https://raycashcare.com/goal-setting/',
    title: 'Goal Setting',
    excerpt: 'How to set goals that actually stick — the SEAL way. Clear targets, relentless execution.',
    category: 'Performance',
  },
  {
    url: 'https://raycashcare.com/fitness-is-a-lifestyle/',
    title: 'Fitness Is a Lifestyle',
    excerpt: 'Fitness isn\'t a hobby or a phase. It\'s the foundation everything else is built on.',
    category: 'Fitness',
  },
  {
    url: 'https://raycashcare.com/rise-and-shine-navy-seal-style/',
    title: 'Rise and Shine — Navy SEAL Style',
    excerpt: 'Your morning sets the tone for your entire day. Here\'s how a Navy SEAL approaches the first hour.',
    category: 'Mindset',
  },
  {
    url: 'https://raycashcare.com/be-a-cockweed/',
    title: 'Be a Cockweed',
    excerpt: 'The cockweed grows through concrete. It doesn\'t care about conditions. Be that resilient.',
    category: 'Resilience',
  },
  {
    url: 'https://raycashcare.com/a-team-of-quitters-might-not-be-a-bad-thing/',
    title: 'A Team of Quitters Might Not Be a Bad Thing',
    excerpt: 'Sometimes the best thing for your organization is letting the wrong people leave. Here\'s why.',
    category: 'Leadership',
  },
  {
    url: 'https://raycashcare.com/stop-pretending-and-get-right-with-yourself/',
    title: 'Stop Pretending and Get Right With Yourself',
    excerpt: 'The biggest lie you tell is the one you tell yourself. Accountability starts with honesty.',
    category: 'Accountability',
  },
  {
    url: 'https://raycashcare.com/be-your-best-self-show-some-love-to-first-responders-and-our-military/',
    title: 'Be Your Best Self — Show Some Love to First Responders',
    excerpt: 'Honoring those who serve and showing up as your best self every single day.',
    category: 'Service',
  },
  {
    url: 'https://raycashcare.com/are-you-suffering-from-ed-rays-got-the-solution/',
    title: 'Are You Suffering From ED? Ray\'s Got the Solution',
    excerpt: 'Excusitis Disease — the real epidemic holding you back. Here\'s the cure.',
    category: 'Growth',
  },
]

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-4">Blog</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
              Thoughts from<br />the field
            </h1>
            <p className="text-gray-3 text-lg leading-relaxed">
              Unfiltered perspectives on leadership, discipline, fitness, and what it takes
              to conquer your limits. No fluff. No BS. Just the truth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(({ url, title, excerpt, category }, i) => (
            <motion.a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, boxShadow: '0 0 120px rgba(90,122,43,1), 0 0 300px rgba(90,122,43,0.6), 0 0 500px rgba(90,122,43,0.3)' }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-dark-2 border border-green/40 shadow-[0_0_80px_rgba(90,122,43,0.8),0_0_200px_rgba(90,122,43,0.5),0_0_350px_rgba(90,122,43,0.25)] no-underline transition-all overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(90,122,43,0.3) 42%, rgba(90,122,43,0.6) 50%, rgba(90,122,43,0.3) 58%, transparent 65%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }}
              />
              {/* Category banner */}
              <div className="h-32 bg-gradient-to-br from-green/35 via-dark-3 to-dark-2 flex items-center justify-center border-b border-green/20">
                <span className="text-green text-lg font-black uppercase tracking-[0.3em]">{category}</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide group-hover:text-green transition-colors">{title}</h3>
                <p className="text-gray-3 text-base leading-relaxed mb-6">{excerpt}</p>
                <span className="text-green text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 inline-flex items-center gap-2 transition-transform duration-300">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>
    </>
  )
}
