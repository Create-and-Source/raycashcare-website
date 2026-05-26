import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Section from '../components/Section'

const posts = [
  {
    slug: 'rise-and-shine',
    title: 'Rise and Shine — Navy SEAL Style',
    excerpt: 'Your morning sets the tone for your entire day. Here\'s how a Navy SEAL approaches the first hour.',
    category: 'Mindset',
    date: 'Recent',
  },
  {
    slug: 'stop-pretending',
    title: 'Stop Pretending and Get Right With Yourself',
    excerpt: 'The biggest lie you tell is the one you tell yourself. Accountability starts with honesty.',
    category: 'Accountability',
  },
  {
    slug: 'team-of-quitters',
    title: 'A Team of Quitters Might Not Be a Bad Thing',
    excerpt: 'Sometimes the best thing for your organization is letting the wrong people leave. Here\'s why.',
    category: 'Leadership',
  },
  {
    slug: 'be-a-cockweed',
    title: 'Be a Cockweed',
    excerpt: 'The cockweed grows through concrete. It doesn\'t care about conditions. Be that resilient.',
    category: 'Resilience',
  },
  {
    slug: 'four-f-bombs',
    title: 'The Four F-Bombs of Life',
    excerpt: 'Family, Fitness, Finance, and Faith. Master all four and you become unstoppable.',
    category: 'Philosophy',
  },
  {
    slug: 'power-of-pain',
    title: 'The Power of Pain',
    excerpt: 'Pain is not your enemy. It\'s your teacher. Learn how to use it as fuel for transformation.',
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
          {posts.map(({ slug, title, excerpt, category }, i) => (
            <motion.a
              key={slug}
              href={`https://raycashcare.com/${slug}/`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-dark-2 border border-green/20 shadow-lg shadow-green/10 hover:border-green/30 no-underline transition-all"
            >
              <div className="h-48 bg-dark-3 flex items-center justify-center">
                <span className="text-gray-2 text-xs uppercase tracking-widest">{category}</span>
              </div>
              <div className="p-6">
                <span className="text-green text-xs font-bold uppercase tracking-widest">{category}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-3">{title}</h3>
                <p className="text-gray-3 text-sm leading-relaxed mb-4">{excerpt}</p>
                <span className="text-green text-sm font-bold uppercase tracking-widest group-hover:translate-x-1 inline-flex items-center gap-2 transition-transform">
                  Read <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>
    </>
  )
}
