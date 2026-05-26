import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mic, Users, Target, Dumbbell, Brain, Flame } from 'lucide-react'
import Section from '../components/Section'
import LazyYouTube from '../components/LazyYouTube'

const topics = [
  { icon: Target, title: 'Leadership Under Pressure', desc: 'How SEAL team principles translate to corporate leadership. Decision-making, composure, and leading from the front when everything is on the line.' },
  { icon: Users, title: 'Building Elite Teams', desc: 'Breaking silos, eliminating complacency, and creating teams that communicate, trust, and perform at the highest level.' },
  { icon: Brain, title: 'Mental Toughness', desc: 'The mindset that gets you through BUD/S gets you through anything. Resilience, resourcefulness, and relentlessness — the Three R\'s.' },
  { icon: Dumbbell, title: 'Physical & Mental Fitness', desc: 'The connection between physical discipline and peak mental performance. How fitness transforms leadership capability.' },
  { icon: Flame, title: 'The Four F-Bombs', desc: 'Family, Fitness, Finance, and Faith — the four pillars that create a balanced, powerful, unstoppable life.' },
  { icon: Mic, title: 'Organizational Transformation', desc: 'Taking teams from good to extraordinary. Culture change, accountability systems, and operational excellence.' },
]

const clients = [
  'Plexus', 'BNSF Railway', 'ConnectWise', 'TSA', 'DogWatch', 'Youth Villages',
  'Fortune 500 Companies', 'National Conferences', 'Military Organizations', 'Youth Groups',
]

const videos = [
  { id: '75JPtmco4IU', title: 'Speaking Engagements Promo' },
  { id: '5Aux2TSNi3Q', title: 'What It Takes To Be A Navy SEAL' },
  { id: 'fUyc4HyFIh8', title: 'The Power of Pain' },
]

export default function Speaking() {
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
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-4">Speaking</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
              Ignite your<br />organization
            </h1>
            <p className="text-gray-3 text-lg leading-relaxed mb-8">
              Ray delivers high-energy, high-impact keynotes that don't just motivate — they transform.
              From Fortune 500 boardrooms to military bases to youth conferences, Ray brings the
              intensity and authenticity that only a decade on SEAL teams can forge.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all"
            >
              Inquire About Booking <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Topics */}
      <Section dark>
        <div className="text-center mb-16">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Topics</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            What Ray speaks on
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-2 border border-white/5 p-8"
            >
              <div className="w-12 h-12 bg-green/10 flex items-center justify-center mb-5">
                <Icon size={24} className="text-green" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-3">{title}</h3>
              <p className="text-gray-3 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Video Clips */}
      <Section>
        <div className="text-center mb-12">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Watch</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Ray on stage
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map(({ id, title }) => (
            <div key={id} className="bg-dark border border-white/5">
              <LazyYouTube id={id} title={title} />
              <div className="p-4">
                <p className="text-white text-sm font-bold">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Past Clients */}
      <Section dark>
        <div className="text-center mb-12">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Trusted By</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Organizations that book Ray
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {clients.map((client) => (
            <div key={client} className="bg-dark-2 border border-white/5 px-6 py-4">
              <span className="text-gray-3 text-sm font-bold uppercase tracking-wider">{client}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            Bring Ray to your event
          </h2>
          <p className="text-gray-3 text-lg max-w-2xl mx-auto mb-10">
            Whether it's a corporate conference, team retreat, or community event — Ray brings
            the fire. Fill out the inquiry form and let's make it happen.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all"
          >
            Book Ray Now <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  )
}
