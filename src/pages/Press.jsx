import { motion } from 'framer-motion'
import { ExternalLink, Film, Tv, Radio } from 'lucide-react'
import Section from '../components/Section'

const majorAppearances = [
  {
    icon: Film,
    title: 'Captain Phillips',
    subtitle: 'Feature Film — 2013',
    desc: 'Starred alongside Tom Hanks in the critically acclaimed biographical action film directed by Paul Greengrass.',
  },
  {
    icon: Tv,
    title: 'The Selection',
    subtitle: 'History Channel',
    desc: 'Featured as an instructor on the History Channel\'s intense military training competition series.',
  },
  {
    icon: Tv,
    title: 'Ultimate Hell Week',
    subtitle: 'BBC',
    desc: 'Brought SEAL-level intensity to the BBC\'s grueling military challenge show.',
  },
  {
    icon: Film,
    title: 'Navy Indoctrination Film',
    subtitle: 'U.S. Navy Official',
    desc: 'Selected by the United States Navy as the ambassador featured in the official "Indoctrination" film shown to all recruits at Great Lakes Naval Recruit Training Command.',
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

const pressLogos = [
  'History Channel', 'BBC', 'Sony Pictures', 'U.S. Navy',
  'Drinkin\' Bros', 'NFM Lending', 'SEALgrinderPT',
]

export default function Press() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {majorAppearances.map(({ icon: Icon, title, subtitle, desc }, i) => (
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
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <p className="text-green text-xs font-bold uppercase tracking-widest mb-3">{subtitle}</p>
              <p className="text-gray-3 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Press Logos */}
      <Section>
        <div className="text-center mb-12">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">As Seen On</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Featured in
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {pressLogos.map((logo) => (
            <div key={logo} className="bg-dark border border-white/5 px-8 py-5">
              <span className="text-gray-3 text-sm font-bold uppercase tracking-wider">{logo}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Podcasts & Interviews */}
      <Section dark>
        <div className="text-center mb-12">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Interviews</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Podcasts &amp; features
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcasts.map(({ title, id }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-dark-2 border border-white/5"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
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
