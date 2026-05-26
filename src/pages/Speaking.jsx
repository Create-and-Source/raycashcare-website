import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mic, Users, Target, Dumbbell, Brain, Flame } from 'lucide-react'
import Section from '../components/Section'
import LazyYouTube from '../components/LazyYouTube'
import TextReveal from '../components/TextReveal'
import LineReveal from '../components/LineReveal'
import MagneticButton from '../components/MagneticButton'
import { StaggerContainer, StaggerItem } from '../components/StaggerChildren'

const topics = [
  { icon: Target, title: 'Leadership Under Pressure', desc: 'How SEAL team principles translate to corporate leadership. Decision-making, composure, and leading from the front when everything is on the line.' },
  { icon: Users, title: 'Building Elite Teams', desc: 'Breaking silos, eliminating complacency, and creating teams that communicate, trust, and perform at the highest level.' },
  { icon: Brain, title: 'Mental Toughness', desc: 'The mindset that gets you through BUD/S gets you through anything. Resilience, resourcefulness, and relentlessness — the Three R\'s.' },
  { icon: Dumbbell, title: 'Physical & Mental Fitness', desc: 'The connection between physical discipline and peak mental performance. How fitness transforms leadership capability.' },
  { icon: Flame, title: 'The Four F-Bombs', desc: 'Family, Fitness, Finance, and Faith — the four pillars that create a balanced, powerful, unstoppable life.' },
  { icon: Mic, title: 'Organizational Transformation', desc: 'Taking teams from good to extraordinary. Culture change, accountability systems, and operational excellence.' },
]

const clientLogos = [
  { name: 'Chevrolet', src: '/images/logo-chevrolet.webp' },
  { name: 'Comcast', src: '/images/logo-comcast.webp' },
  { name: 'UCLA', src: '/images/logo-ucla.webp' },
  { name: 'Fit Body Boot Camp', src: '/images/logo-fitbody.webp' },
  { name: 'NFM Lending', src: '/images/logo-nfm.webp' },
  { name: 'Sansone Group', src: '/images/logo-sansone.webp' },
  { name: 'SEAL Future Foundation', src: '/images/logo-seal-future.webp' },
  { name: 'Heart of a Lion Foundation', src: '/images/logo-heart-lion.webp' },
]

const clientNames = [
  'Plexus', 'BNSF Railway', 'ConnectWise', 'TSA', 'DogWatch', 'Youth Villages',
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
      <section className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block">
          <img src="/images/portrait-blazer.webp" alt="Ray Cash Care" className="h-full w-full object-cover object-top opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-4">Speaking</motion.p>
            <TextReveal delay={1.6}>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-2">Ignite your</h1>
            </TextReveal>
            <TextReveal delay={1.8}>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">organization</h1>
            </TextReveal>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }} className="text-gray-3 text-lg leading-relaxed mb-8">
              Ray delivers high-energy, high-impact keynotes that don't just motivate — they transform.
              From Fortune 500 boardrooms to military bases to youth conferences, Ray brings the
              intensity and authenticity that only a decade on SEAL teams can forge.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }}>
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:shadow-lg hover:shadow-green/20"
                >
                  Inquire About Booking <ArrowRight size={16} />
                </Link>
              </MagneticButton>
            </motion.div>
            <LineReveal className="mt-8" delay={2.4} />
          </motion.div>
        </div>
      </section>

      {/* Topics */}
      <Section dark>
        <div className="text-center mb-16">
          <TextReveal><p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Topics</p></TextReveal>
          <TextReveal delay={0.1}><h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">What Ray speaks on</h2></TextReveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(90,122,43,0.3)' }}
                transition={{ duration: 0.2 }}
                className="bg-dark-2 border border-white/5 p-8 h-full"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="w-12 h-12 bg-green/10 flex items-center justify-center mb-5"
                >
                  <Icon size={24} className="text-green" />
                </motion.div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-3">{title}</h3>
                <p className="text-gray-3 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Video Clips */}
      <Section>
        <div className="text-center mb-12">
          <TextReveal><p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Watch</p></TextReveal>
          <TextReveal delay={0.1}><h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">Ray on stage</h2></TextReveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map(({ id, title }) => (
            <StaggerItem key={id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-dark border border-white/5 hover:border-green/20 transition-colors"
              >
                <LazyYouTube id={id} title={title} />
                <div className="p-4">
                  <p className="text-white text-sm font-bold">{title}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Past Clients */}
      <Section dark>
        <div className="text-center mb-12">
          <TextReveal><p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Trusted By</p></TextReveal>
          <TextReveal delay={0.1}><h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">Organizations that book Ray</h2></TextReveal>
        </div>
        {/* Logo grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          {clientLogos.map(({ name, src }) => (
            <StaggerItem key={name}>
              <motion.div
                whileHover={{ scale: 1.05, borderColor: 'rgba(90,122,43,0.3)' }}
                className="bg-dark-2 border border-white/5 p-6 flex items-center justify-center h-24 cursor-default"
              >
                <img src={src} alt={name} className="max-h-12 max-w-full object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        {/* Text names */}
        <StaggerContainer className="flex flex-wrap items-center justify-center gap-4">
          {clientNames.map((client) => (
            <StaggerItem key={client}>
              <div className="bg-dark-2 border border-white/5 px-6 py-3">
                <span className="text-gray-3 text-sm font-bold uppercase tracking-wider">{client}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <TextReveal>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              Bring Ray to your event
            </h2>
          </TextReveal>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-3 text-lg max-w-2xl mx-auto mb-10"
          >
            Whether it's a corporate conference, team retreat, or community event — Ray brings
            the fire. Fill out the inquiry form and let's make it happen.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:shadow-lg hover:shadow-green/20"
              >
                Book Ray Now <ArrowRight size={16} />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
