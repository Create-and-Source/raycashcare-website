import { motion } from 'framer-motion'
import Section from '../components/Section'
import LazyYouTube from '../components/LazyYouTube'
import TextReveal from '../components/TextReveal'
import { StaggerContainer, StaggerItem } from '../components/StaggerChildren'

const mainReel = { id: '75JPtmco4IU', title: 'Ray Cash Care — Speaking Engagements Promo Reel' }

const clips = [
  { id: '7FqDLgh1HkA', title: 'Navy SEAL Reveals #1 Rule To Stay Alive', topic: 'Mental Toughness' },
  { id: '5Aux2TSNi3Q', title: 'What It Takes To Be A Navy SEAL', topic: 'Leadership' },
  { id: 'fUyc4HyFIh8', title: 'The Power of Pain', topic: 'Discipline' },
]

export default function Reel() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/on-stage.png)', filter: 'brightness(0.25) contrast(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-4">Watch</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
              Speaking reel
            </h1>
            <p className="text-gray-3 text-lg leading-relaxed max-w-2xl mx-auto">
              See the energy, the intensity, and the impact Ray brings to every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Reel */}
      <Section>
        <div className="text-center mb-8">
          <TextReveal>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
              The sizzle reel
            </h2>
          </TextReveal>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto border border-green/30 shadow-[0_0_25px_rgba(90,122,43,0.35),0_0_60px_rgba(90,122,43,0.15)]"
        >
          <LazyYouTube id={mainReel.id} title={mainReel.title} />
        </motion.div>
      </Section>

      {/* Clips by Topic */}
      <Section dark>
        <div className="text-center mb-16">
          <TextReveal>
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Clips</p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              By topic
            </h2>
          </TextReveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {clips.map(({ id, title, topic }) => (
            <StaggerItem key={id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-dark border border-green/30 shadow-[0_0_25px_rgba(90,122,43,0.35),0_0_60px_rgba(90,122,43,0.15)] hover:border-green/30 transition-colors overflow-hidden"
              >
                <LazyYouTube id={id} title={title} />
                <div className="p-5">
                  <span className="text-green text-xs font-bold uppercase tracking-widest">{topic}</span>
                  <h3 className="text-white font-bold mt-2">{title}</h3>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </>
  )
}
