import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react'
import Section from '../components/Section'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'
import { StaggerContainer, StaggerItem } from '../components/StaggerChildren'

const upcomingEvents = [
  {
    title: 'CONQUER Training Weekend',
    date: 'Coming Soon',
    location: 'TBA',
    type: 'Live Training',
    desc: 'A full weekend of SEAL-inspired physical and mental challenges. Push your limits alongside Ray and the CONQUER community.',
  },
  {
    title: 'Corporate Leadership Summit',
    date: 'Coming Soon',
    location: 'TBA',
    type: 'Keynote',
    desc: 'Ray delivers a keynote on building elite teams and leading under pressure. Contact for availability.',
  },
]

const pastHighlights = [
  { title: 'Senior All-America Lacrosse Games', desc: 'Keynote speaker in front of over 2,000 athletes and their families.' },
  { title: 'ConnectWise IT Nation', desc: 'Delivered leadership training to thousands of IT professionals.' },
  { title: 'BNSF Railway Leadership Conference', desc: 'Team building and accountability workshop for executive leadership.' },
  { title: 'Plexus National Conference', desc: 'High-energy keynote on resilience and peak performance.' },
  { title: 'TSA Training Event', desc: 'Mental toughness and leadership for federal security professionals.' },
  { title: 'Youth Motivational Events', desc: 'Inspiring the next generation across schools and youth organizations nationwide.' },
]

export default function Events() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/q-course-wide.webp)', filter: 'brightness(0.35) contrast(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-4">Events</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
              Live training<br />&amp; events
            </h1>
            <p className="text-gray-3 text-lg leading-relaxed">
              From intimate team-building experiences to large-scale keynotes — Ray brings the energy
              and intensity that transforms organizations. Check upcoming events or book Ray for yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming */}
      <Section dark>
        <div className="text-center mb-16">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Upcoming</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            What's next
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map(({ title, date, location, type, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-2 border border-green/40 shadow-[0_0_60px_rgba(90,122,43,0.6),0_0_120px_rgba(90,122,43,0.3)] p-8"
            >
              <span className="text-green text-xs font-bold uppercase tracking-widest">{type}</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">{title}</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-3 text-sm">
                  <Calendar size={14} /> {date}
                </div>
                <div className="flex items-center gap-2 text-gray-3 text-sm">
                  <MapPin size={14} /> {location}
                </div>
              </div>
              <p className="text-gray-3 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Past Events */}
      <Section>
        <div className="text-center mb-16">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Track Record</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Past highlights
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastHighlights.map(({ title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-dark border border-green/40 shadow-[0_0_60px_rgba(90,122,43,0.6),0_0_120px_rgba(90,122,43,0.3)] p-6"
            >
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-gray-3 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            Want Ray at your event?
          </h2>
          <p className="text-gray-3 text-lg max-w-2xl mx-auto mb-10">
            Corporate conferences, team retreats, community events, youth organizations — Ray brings it all.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all"
          >
            Book Ray <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  )
}
