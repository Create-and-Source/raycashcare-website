import { motion } from 'framer-motion'
import { ArrowRight, Shield, Users, Dumbbell, Brain, Flame, CheckCircle } from 'lucide-react'
import Section from '../components/Section'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'
import { StaggerContainer, StaggerItem } from '../components/StaggerChildren'

const benefits = [
  'Daily accountability and discipline framework',
  'Weekly live training sessions with Ray',
  'Access to the CONQUER workout programming',
  'Private community of high performers',
  'Monthly challenges that push your limits',
  'Direct mentorship and Q&A with Ray',
  'Exclusive content and behind-the-scenes access',
  'Brotherhood that holds you to a higher standard',
]

const pillars = [
  { icon: Brain, title: 'Mindset', desc: 'Develop the mental toughness of a SEAL. Learn to embrace discomfort, silence excuses, and operate at your peak.' },
  { icon: Dumbbell, title: 'Fitness', desc: 'Physical discipline fuels everything else. Structured training that builds resilience, not just muscle.' },
  { icon: Users, title: 'Community', desc: 'You are the average of the five people you spend the most time with. Surround yourself with warriors.' },
  { icon: Flame, title: 'Accountability', desc: 'No hiding. No excuses. The community holds you accountable to the standards you set for yourself.' },
]

export default function Conquer() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-mountains.webp)', filter: 'brightness(0.35)' }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/pullups-bw.png)', filter: 'brightness(0.3) contrast(1.2)', opacity: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-4">Community</motion.p>
            <TextReveal delay={1.6}>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">CONQUER</h1>
            </TextReveal>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }} className="text-gray-3 text-lg leading-relaxed mb-8">
              CONQUER is more than a community — it's a commitment. Founded by Ray "Cash" Care,
              CONQUER is a brotherhood of individuals who refuse to settle for mediocrity.
              Daily discipline. Physical fitness. Mental toughness. Accountability.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }}>
              <MagneticButton>
                <a
                  href="https://raycashcarecommunity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:shadow-lg hover:shadow-green/20"
                >
                  Join CONQUER <ArrowRight size={16} />
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <Section dark>
        <div className="text-center mb-16">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Foundation</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            The four pillars
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-2 border border-green/40 p-8 text-center shadow-[0_0_20px_rgba(90,122,43,0.3)]"
            >
              <div className="w-14 h-14 bg-green/10 flex items-center justify-center mx-auto mb-4">
                <Icon size={28} className="text-green" />
              </div>
              <h3 className="text-lg font-bold uppercase text-white mb-2">{title}</h3>
              <p className="text-gray-3 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <TextReveal><p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Membership</p></TextReveal>
            <TextReveal delay={0.1}><h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">What you get</h2></TextReveal>
            <StaggerContainer className="space-y-4">
              {benefits.map((benefit) => (
                <StaggerItem key={benefit}>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-green shrink-0 mt-0.5" />
                    <p className="text-gray-3 text-sm">{benefit}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img src="/images/conquer-app.webp" alt="CONQUER Community App" className="w-full rounded-lg shadow-2xl shadow-black/50" />
            <motion.img
              src="/images/inner-circle.png"
              alt="Inner Circle Program"
              className="absolute -bottom-6 -left-6 w-40 rounded-lg shadow-xl shadow-black/50 border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            />
          </motion.div>
        </div>
      </Section>

      {/* Join CTA */}
      <Section dark>
        <div className="text-center">
          <TextReveal><h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">Stop making excuses</h2></TextReveal>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-gray-3 text-lg max-w-2xl mx-auto mb-10">
            Join a community that will hold you to the standard you know you're capable of. 301 members and growing.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <MagneticButton>
              <a
                href="https://raycashcarecommunity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:shadow-lg hover:shadow-green/20"
              >
                Join CONQUER Now <ArrowRight size={16} />
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
