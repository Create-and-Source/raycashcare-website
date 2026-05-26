import { motion } from 'framer-motion'
import { ArrowRight, Shield, Users, Dumbbell, Brain, Flame, CheckCircle } from 'lucide-react'
import Section from '../components/Section'

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
      <section className="pt-32 pb-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-4">Community</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
              CONQUER
            </h1>
            <p className="text-gray-3 text-lg leading-relaxed mb-8">
              CONQUER is more than a community — it's a commitment. Founded by Ray "Cash" Care,
              CONQUER is a brotherhood of individuals who refuse to settle for mediocrity.
              Daily discipline. Physical fitness. Mental toughness. Accountability.
            </p>
            <a
              href="https://raycashcarecommunity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all"
            >
              Join CONQUER <ArrowRight size={16} />
            </a>
          </motion.div>
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
              className="bg-dark-2 border border-white/5 p-8 text-center"
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
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Membership</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">
              What you get
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green shrink-0 mt-0.5" />
                  <p className="text-gray-3 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-dark border border-white/5 p-10 text-center">
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-2">Join the Brotherhood</p>
            <h3 className="text-4xl font-black text-white mb-2">CONQUER</h3>
            <p className="text-gray-3 text-sm mb-8">
              Stop making excuses. Start making progress. Join a community
              that will hold you to the standard you know you're capable of.
            </p>
            <a
              href="https://raycashcarecommunity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all w-full justify-center"
            >
              Join Now <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
