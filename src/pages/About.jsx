import { motion } from 'framer-motion'
import { Shield, Target, Heart, Star } from 'lucide-react'
import Section from '../components/Section'

const timeline = [
  { year: 'Early Life', title: 'Against the Odds', desc: 'Grew up facing adversity that would have broken most people. Instead, it forged the foundation of an unbreakable mindset.' },
  { year: 'U.S. Navy', title: '12 Years of Service', desc: 'Joined the United States Navy and spent 10 years on SEAL teams, completing some of the most demanding training and missions in military history.' },
  { year: 'CIA', title: '8 Years Overseas', desc: 'Served as an overseas security officer for the CIA and other government agencies, providing high- and low-profile protection in Iraq and Afghanistan.' },
  { year: 'Hollywood', title: 'Captain Phillips', desc: 'Starred alongside Tom Hanks in the critically acclaimed film Captain Phillips. Selected by the U.S. Navy as the ambassador for the "Indoctrination" film shown to all recruits.' },
  { year: 'Television', title: 'The Selection & Ultimate Hell Week', desc: 'Featured on History Channel\'s The Selection and BBC\'s Ultimate Hell Week, bringing SEAL-level intensity to national audiences.' },
  { year: 'Today', title: 'Speaker & Coach', desc: 'Travels across America speaking to Fortune 500 companies, youth groups, and organizations. Founded CONQUER to help people break through their limits.' },
]

const values = [
  { icon: Shield, title: 'Discipline', desc: 'Freedom comes from discipline. Every day is a choice to show up and do the work.' },
  { icon: Target, title: 'Accountability', desc: 'No excuses. Own your actions, own your results, own your life.' },
  { icon: Heart, title: 'Service', desc: 'True strength is using what you have to lift others up.' },
  { icon: Star, title: 'Excellence', desc: 'Good enough never is. Push for better every single day.' },
]

export default function About() {
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
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-4">About</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
              The man behind<br />the mission
            </h1>
            <p className="text-gray-3 text-lg leading-relaxed">
              Ray "Cash" Care is a 12-year Navy veteran, 10 of which were spent on SEAL teams.
              After his military career, he served 8 years as an overseas security officer for the CIA
              and other government agencies in Iraq and Afghanistan. Today, he channels that
              experience into helping people and organizations perform at their highest level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo + Bio */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-dark-2 border border-white/5 aspect-[3/4] flex items-center justify-center">
            <img
              src="https://www.executivespeakers.com/images/speakers/Ray%20Care%20Cash/2025244161049Ray-Care-photo.png"
              alt="Ray Cash Care"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">
              From the teams to the stage
            </h2>
            <div className="space-y-4 text-gray-3 leading-relaxed">
              <p>
                Ray didn't come from privilege. He came from pain. And that pain became the
                fuel for a career that most people can't even imagine — BUD/S, SEAL team
                deployments, CIA protection details in active war zones.
              </p>
              <p>
                But what sets Ray apart isn't just what he survived. It's what he does with it.
                Every keynote, every training, every conversation is designed to take the
                principles that kept him alive and apply them to your life, your team,
                your organization.
              </p>
              <p>
                His speaking topics center around the Four F-Bombs — <span className="text-white font-semibold">Family,
                Fitness, Finance, and Faith</span> — and the Three R's — <span className="text-white font-semibold">Resilience,
                Resourcefulness, and Relentlessness</span>.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <div className="text-center mb-16">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Journey</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            The path
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {timeline.map(({ year, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-green rounded-full shrink-0 mt-2" />
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-white/10 mt-2" />}
              </div>
              <div className="pb-8">
                <p className="text-green text-xs font-bold uppercase tracking-widest mb-1">{year}</p>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-3 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <div className="text-center mb-16">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Philosophy</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            What I stand for
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }, i) => (
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
    </>
  )
}
