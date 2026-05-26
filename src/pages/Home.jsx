import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Mic, Users, Dumbbell } from 'lucide-react'
import Section from '../components/Section'

const credentials = [
  'Navy SEAL Veteran',
  'CIA Security Officer',
  'Captain Phillips',
  'History Channel',
  'BBC Ultimate Hell Week',
  'CONQUER Founder',
]

const services = [
  {
    icon: Mic,
    title: 'Keynote Speaking',
    desc: 'High-energy, no-BS talks on leadership, accountability, and building elite teams. Ray brings the intensity of SEAL training to your stage.',
    link: '/speaking',
  },
  {
    icon: Users,
    title: 'CONQUER Community',
    desc: 'Join a brotherhood of high performers committed to daily discipline, physical fitness, and mental toughness.',
    link: '/conquer',
  },
  {
    icon: Dumbbell,
    title: 'Live Training',
    desc: 'Hands-on events that push you physically, mentally, and emotionally. Break through barriers. Find out what you\'re made of.',
    link: '/events',
  },
]

const testimonials = [
  {
    quote: "Ray completely transformed our leadership team. His energy is unmatched and his message hit home for every single person in that room.",
    name: "VP of Operations",
    company: "Fortune 500 Company",
  },
  {
    quote: "We brought Ray in for our annual conference and it was the highest-rated session in our company's history. Period.",
    name: "Event Director",
    company: "National Sales Conference",
  },
  {
    quote: "Ray doesn't just motivate — he gives you the tools and framework to actually change. Our team's performance improved measurably.",
    name: "CEO",
    company: "Tech Startup",
  },
]

const videoId = '7FqDLgh1HkA'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://raycashcare.com/wp-content/uploads/2022/12/hero-bg.webp)',
            filter: 'brightness(0.4) contrast(1.1)',
          }}
        />

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-green font-bold text-sm tracking-[0.3em] uppercase mb-6">
              Navy SEAL Veteran &bull; Speaker &bull; Coach
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight text-white mb-8">
              Conquer<br />
              <span className="text-green">Your Limits</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-3 max-w-2xl mx-auto mb-10 leading-relaxed">
              12 years in the Navy. 10 on SEAL teams. 8 years protecting CIA operatives overseas.
              Now Ray "Cash" Care helps organizations and individuals unlock elite-level performance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all"
              >
                Book Ray <ArrowRight size={16} />
              </Link>
              <Link
                to="/conquer"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all"
              >
                Join CONQUER
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-green rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Credibility Bar */}
      <div className="bg-dark border-y border-white/5 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {credentials.map((cred) => (
              <span key={cred} className="text-xs font-bold uppercase tracking-[0.2em] text-gray-3">
                {cred}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* What I Do */}
      <Section>
        <div className="text-center mb-16">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">What I Do</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Built for the mission
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, link }) => (
            <Link
              key={title}
              to={link}
              className="group bg-dark border border-white/5 hover:border-green/30 p-8 no-underline transition-all"
            >
              <div className="w-12 h-12 bg-green/10 flex items-center justify-center mb-6">
                <Icon size={24} className="text-green" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-3">{title}</h3>
              <p className="text-gray-3 text-sm leading-relaxed mb-6">{desc}</p>
              <span className="text-green text-sm font-bold uppercase tracking-widest group-hover:translate-x-1 inline-flex items-center gap-2 transition-transform">
                Learn More <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured Video */}
      <Section dark>
        <div className="text-center mb-12">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Watch</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            See Ray in action
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video bg-dark-2 border border-white/5">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title="Ray Cash Care Speaking"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="text-center mb-16">
          <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Impact</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            What they say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, company }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-dark border border-white/5 p-8"
            >
              <div className="text-green text-4xl font-black mb-4">"</div>
              <p className="text-gray-3 text-sm leading-relaxed mb-6">{quote}</p>
              <div>
                <p className="text-white text-sm font-bold">{name}</p>
                <p className="text-gray-2 text-xs">{company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Book Cover / Warrior Rising */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">The Book</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              Warrior Rising
            </h2>
            <p className="text-gray-3 leading-relaxed mb-8">
              From the streets to the SEAL teams — Ray's story of transformation, discipline,
              and relentless pursuit of excellence. A raw, unfiltered look at what it takes
              to rise above your circumstances and become the person you were meant to be.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all"
            >
              Get the Book <ArrowRight size={16} />
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.executivespeakers.com/images/book-images/2024135225734Warrior-Rising.jpg"
              alt="Warrior Rising by Ray Cash Care"
              className="w-64 md:w-80 shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            Ready to conquer?
          </h2>
          <p className="text-gray-3 text-lg max-w-2xl mx-auto mb-10">
            Whether you need a keynote that moves the room, a team-building experience
            that breaks barriers, or a community that holds you accountable — Ray's got you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all"
            >
              Book Ray Now <ArrowRight size={16} />
            </Link>
            <Link
              to="/conquer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
