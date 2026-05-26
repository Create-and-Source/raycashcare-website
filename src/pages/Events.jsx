import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, Clock, Users, Ticket } from 'lucide-react'
import Section from '../components/Section'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'
import { StaggerContainer, StaggerItem } from '../components/StaggerChildren'

const upcomingEvents = [
  {
    title: 'CONQUER Training Weekend',
    date: 'July 18-20, 2026',
    location: 'Scottsdale, AZ',
    time: 'Friday 6PM - Sunday 12PM',
    type: 'Live Training',
    spots: 'Limited to 30',
    desc: 'A full weekend of SEAL-inspired physical and mental challenges. Push your limits alongside Ray and the CONQUER community.',
    featured: true,
  },
  {
    title: 'Corporate Leadership Summit',
    date: 'August 14, 2026',
    location: 'Dallas, TX',
    time: '9AM - 4PM',
    type: 'Keynote + Workshop',
    spots: 'Open Enrollment',
    desc: 'Full-day leadership intensive. Morning keynote followed by team-building workshop and accountability framework training.',
    featured: false,
  },
  {
    title: 'CONQUER Morning Formation',
    date: 'Every Saturday',
    location: 'Virtual / In-Person (Scottsdale)',
    time: '5:30 AM MST',
    type: 'Community',
    spots: 'Open to Members',
    desc: 'Weekly accountability session. Physical training, mindset work, and goal-setting with the CONQUER community.',
    featured: false,
  },
]

const pastHighlights = [
  { title: 'Senior All-America Lacrosse Games', desc: 'Keynote speaker in front of over 2,000 athletes and their families.', attendees: '2,000+' },
  { title: 'ConnectWise IT Nation', desc: 'Delivered leadership training to thousands of IT professionals.', attendees: '5,000+' },
  { title: 'BNSF Railway Leadership Conference', desc: 'Team building and accountability workshop for executive leadership.', attendees: '300+' },
  { title: 'Plexus National Conference', desc: 'High-energy keynote on resilience and peak performance.', attendees: '3,000+' },
  { title: 'TSA Training Event', desc: 'Mental toughness and leadership for federal security professionals.', attendees: '500+' },
  { title: 'Youth Motivational Events', desc: 'Inspiring the next generation across schools and youth organizations nationwide.', attendees: '10,000+' },
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

      {/* Upcoming Events */}
      <Section dark>
        <div className="text-center mb-16">
          <TextReveal><p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Upcoming</p></TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">What's next</h2>
          </TextReveal>
        </div>
        <div className="space-y-6">
          {upcomingEvents.map(({ title, date, location, time, type, spots, desc, featured }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border shadow-[0_0_25px_rgba(90,122,43,0.35),0_0_60px_rgba(90,122,43,0.15)] p-6 md:p-8 ${
                featured
                  ? 'bg-dark-2 border-green/50'
                  : 'bg-dark-2 border-green/30'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Date badge */}
                <div className="shrink-0 w-20 h-20 bg-green/10 border border-green/30 flex flex-col items-center justify-center">
                  <Calendar size={20} className="text-green mb-1" />
                  <span className="text-green text-xs font-bold uppercase tracking-wider">{type}</span>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    {featured && (
                      <span className="text-xs font-bold uppercase tracking-widest bg-green/20 text-green px-3 py-1">Featured</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-3 text-sm">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {date}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {time}</span>
                    <span className="flex items-center gap-1.5"><Ticket size={14} /> {spots}</span>
                  </div>
                  <p className="text-gray-3 text-sm leading-relaxed">{desc}</p>
                </div>
                {/* CTA */}
                <div className="shrink-0">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-xs uppercase tracking-widest px-6 py-3 no-underline transition-all"
                  >
                    Register <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Past Events */}
      <Section>
        <div className="text-center mb-16">
          <TextReveal><p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Track Record</p></TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">Past highlights</h2>
          </TextReveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {pastHighlights.map(({ title, desc, attendees }, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-dark border border-green/30 shadow-[0_0_25px_rgba(90,122,43,0.35),0_0_60px_rgba(90,122,43,0.15)] p-6 h-full"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Users size={16} className="text-green" />
                  <span className="text-green text-xs font-bold uppercase tracking-widest">{attendees} attendees</span>
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-3 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
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
          <MagneticButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:shadow-[0_0_35px_rgba(90,122,43,0.45),0_0_80px_rgba(90,122,43,0.2)]"
            >
              Book Ray <ArrowRight size={16} />
            </Link>
          </MagneticButton>
        </div>
      </Section>
    </>
  )
}
