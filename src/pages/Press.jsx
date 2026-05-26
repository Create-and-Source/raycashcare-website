import { motion } from 'framer-motion'
import { ExternalLink, Film, Tv, Radio } from 'lucide-react'
import Section from '../components/Section'
import LazyYouTube from '../components/LazyYouTube'
import TextReveal from '../components/TextReveal'
import { StaggerContainer, StaggerItem } from '../components/StaggerChildren'

const majorAppearances = [
  {
    icon: Film,
    title: 'Captain Phillips',
    subtitle: 'Feature Film — 2013',
    desc: 'Starred alongside Tom Hanks in the critically acclaimed biographical action film directed by Paul Greengrass.',
    image: '/images/captain-phillips.webp',
  },
  {
    icon: Tv,
    title: 'The Selection',
    subtitle: 'History Channel',
    desc: 'Featured as an instructor on the History Channel\'s intense military training competition series.',
    image: '/images/the-selection.webp',
  },
  {
    icon: Tv,
    title: 'Ultimate Hell Week',
    subtitle: 'BBC',
    desc: 'Brought SEAL-level intensity to the BBC\'s grueling military challenge show.',
    image: null,
  },
  {
    icon: Film,
    title: 'Navy Indoctrination Film',
    subtitle: 'U.S. Navy Official',
    desc: 'Selected by the United States Navy as the ambassador featured in the official "Indoctrination" film shown to all recruits at Great Lakes Naval Recruit Training Command.',
    image: null,
  },
  {
    icon: Tv,
    title: 'Fox News Features',
    subtitle: 'Fox News Channel',
    desc: 'Featured alongside Pete Hegseth and other Fox News personalities discussing military service, leadership, and the warrior mindset.',
    image: '/images/pete-hegseth.webp',
  },
]

const podcasts = [
  { title: 'Drinkin\' Bros Podcast — Ep. 1179', id: 'g0u2nfNDffc' },
  { title: 'Navy SEAL Reveals #1 Rule To Stay Alive', id: '7FqDLgh1HkA' },
  { title: 'SURVIVING BUD/S — Nick Koumalatsos', id: 'a_ErZI4RjnM' },
  { title: 'THE MDK PROJECT', id: 'vBM1N7OpcDo' },
  { title: 'OVERCOME & CONQUER — Ep. 003', id: '-Av-HG86KVA' },
  { title: 'NFM Salute Tribute', id: 'XQou7D2t14k' },
]

const allPress = [
  'History Channel', 'BBC', 'Discovery', 'Muscle & Fitness',
  'We Are The Mighty', 'NFM Lending', 'Sony Pictures', 'U.S. Navy', 'SEALgrinderPT',
]

export default function Press() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-mountains.webp)', filter: 'brightness(0.35)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-4">Press</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
              In the<br />spotlight
            </h1>
            <p className="text-gray-3 text-lg leading-relaxed">
              From Hollywood films to national television to top podcasts — Ray's message
              reaches millions. Here's where you've seen him.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Major Appearances */}
      <Section dark>
        <div className="text-center mb-16">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Featured</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Major appearances
          </h2>
        </div>
        <StaggerContainer className="grid grid-cols-2 gap-4 md:gap-8">
          {majorAppearances.map(({ icon: Icon, title, subtitle, desc, image }) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-dark-2 border border-green/15 shadow-[0_0_3px_rgba(90,122,43,0.15)] hover:border-green/20 overflow-hidden transition-colors"
              >
                {image && (
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="w-12 h-12 bg-green/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-green" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                  <p className="text-green text-xs font-bold uppercase tracking-widest mb-3">{subtitle}</p>
                  <p className="text-gray-3 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Press Logos */}
      <Section>
        <div className="text-center mb-12">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">As Seen On</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Featured in
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {allPress.map((name) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.05, boxShadow: '0 0 5px rgba(90,122,43,0.2)' }}
              className="bg-dark-2 border border-green/15 shadow-[0_0_3px_rgba(90,122,43,0.15)] px-6 py-4 cursor-default"
            >
              <span className="text-white text-sm font-bold uppercase tracking-wider">{name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Podcast Feature Image */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/podcast-bedros.webp)', filter: 'brightness(0.2) contrast(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">On Air</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
              100+ podcast appearances
            </h2>
            <p className="text-gray-3 leading-relaxed">
              Ray has been a guest on over 100 podcasts, sharing his story and message with millions of listeners.
              From military-focused shows to business and entrepreneurship podcasts, Ray brings raw authenticity
              and actionable wisdom to every conversation.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: '/images/podcast-drinkin-bros.webp', name: "Drinkin' Bros" },
              { src: '/images/podcast-modern-warrior.webp', name: 'Modern Warrior' },
              { src: '/images/podcast-money-mondays.jpg', name: 'Money Mondays' },
            ].map(({ src, name }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.05 }}
                className="bg-dark-2 border border-white/10 rounded-lg overflow-hidden"
              >
                <img src={src} alt={name} className="w-full aspect-square object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts & Interviews */}
      <Section dark>
        <div className="text-center mb-12">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Interviews</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Podcasts &amp; features
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {podcasts.map(({ title, id }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-dark-2 border border-green/15 shadow-[0_0_3px_rgba(90,122,43,0.15)]"
            >
              <LazyYouTube id={id} title={title} />
              <div className="p-4">
                <p className="text-white text-sm font-bold">{title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}
