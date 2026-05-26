import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Mic, Users, Dumbbell } from 'lucide-react'
import Section from '../components/Section'
import Counter from '../components/Counter'
import LazyYouTube from '../components/LazyYouTube'
import TextReveal from '../components/TextReveal'
import LineReveal from '../components/LineReveal'
import MagneticButton from '../components/MagneticButton'
import { StaggerContainer, StaggerItem } from '../components/StaggerChildren'

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

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden bg-black">
        {/* Background image — on stage */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/on-stage.png)',
            filter: 'brightness(0.15) contrast(1.3) saturate(0.8)',
            scale: heroScale,
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-[1]" />

        {/* Content grid — text left, portrait right */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 items-end gap-8 pb-16 pt-32 lg:pt-0 lg:pb-0">
          {/* Left — Text */}
          <motion.div
            className="flex flex-col justify-center lg:min-h-screen py-12"
            style={{ opacity: heroOpacity }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-green font-bold text-sm tracking-[0.3em] uppercase mb-6"
            >
              Navy SEAL Veteran &bull; Speaker &bull; Coach
            </motion.p>

            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tight text-white"
              >
                Conquer
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tight text-green"
              >
                Your Limits
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.3 }}
              className="text-lg md:text-xl text-gray-3 max-w-xl mb-10 leading-relaxed"
            >
              12 years in the Navy. 10 on SEAL teams. 8 years protecting CIA operatives overseas.
              Now Ray "Cash" Care helps organizations and individuals unlock elite-level performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:shadow-lg hover:shadow-green/20"
                >
                  Book Ray <ArrowRight size={16} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  to="/conquer"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:bg-white/5"
                >
                  Join CONQUER
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right — Portrait cutout */}
          <motion.div
            className="hidden lg:flex items-end justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src="/images/hero-portrait.webp"
              alt="Ray Cash Care"
              className="w-full max-w-md xl:max-w-lg object-contain drop-shadow-[0_0_60px_rgba(90,122,43,0.15)]"
              style={{ scale: heroScale }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 3 }, y: { repeat: Infinity, duration: 2 } }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-green rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Credibility Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-dark border-y border-white/5 py-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {credentials.map((cred) => (
              <StaggerItem key={cred}>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-3">
                  {cred}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </motion.div>

      {/* Stats Counter */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          <Counter end={12} suffix="+" label="Years Navy" duration={2} />
          <Counter end={10} label="Years SEAL Teams" duration={2.2} />
          <Counter end={202} suffix="K" label="Instagram Followers" duration={2.5} />
          <Counter end={120} suffix="K" label="TikTok Followers" duration={2.3} />
        </div>
        <LineReveal className="mt-16" delay={0.3} />
      </Section>

      {/* What I Do */}
      <Section dark>
        <div className="text-center mb-16">
          <TextReveal>
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">What I Do</p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Built for the mission
            </h2>
          </TextReveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, link }) => (
            <StaggerItem key={title}>
              <Link
                to={link}
                className="group block bg-dark-2 border border-white/5 hover:border-green/30 p-8 no-underline transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="w-12 h-12 bg-green/10 group-hover:bg-green/20 flex items-center justify-center mb-6 transition-colors"
                >
                  <Icon size={24} className="text-green" />
                </motion.div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-3">{title}</h3>
                <p className="text-gray-3 text-sm leading-relaxed mb-6">{desc}</p>
                <span className="text-green text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 inline-flex items-center gap-2 transition-transform duration-300">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Featured Video */}
      <Section>
        <div className="text-center mb-12">
          <TextReveal>
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Watch</p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              See Ray in action
            </h2>
          </TextReveal>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto border border-white/5 hover:border-green/20 transition-colors"
        >
          <LazyYouTube id="7FqDLgh1HkA" title="Ray Cash Care — Navy SEAL Reveals #1 Rule To Stay Alive" />
        </motion.div>
      </Section>

      {/* Testimonials */}
      <Section dark>
        <div className="text-center mb-16">
          <TextReveal>
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Impact</p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              What they say
            </h2>
          </TextReveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, company }, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-dark-2 border border-white/5 hover:border-green/20 p-8 transition-colors h-full"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 300 }}
                  className="text-green text-4xl font-black mb-4"
                >
                  "
                </motion.div>
                <p className="text-gray-3 text-sm leading-relaxed mb-6">{quote}</p>
                <LineReveal className="mb-4" delay={0.4 + i * 0.1} />
                <div>
                  <p className="text-white text-sm font-bold">{name}</p>
                  <p className="text-gray-2 text-xs">{company}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Book Cover / Warrior Rising */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <TextReveal>
              <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">The Book</p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                Warrior Rising
              </h2>
            </TextReveal>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-3 leading-relaxed mb-8"
            >
              From the streets to the SEAL teams — Ray's story of transformation, discipline,
              and relentless pursuit of excellence. A raw, unfiltered look at what it takes
              to rise above your circumstances and become the person you were meant to be.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <MagneticButton>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:shadow-lg hover:shadow-green/20"
                >
                  Get the Book <ArrowRight size={16} />
                </a>
              </MagneticButton>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: -2, scale: 1.03 }}
            className="flex justify-center"
          >
            <img
              src="https://www.executivespeakers.com/images/book-images/2024135225734Warrior-Rising.jpg"
              alt="Warrior Rising by Ray Cash Care"
              className="w-64 md:w-80 shadow-2xl shadow-black/50"
            />
          </motion.div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/pullups-bw.png)', filter: 'brightness(0.12) contrast(1.2)' }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              Ready to conquer?
            </h2>
          </TextReveal>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-3 text-lg max-w-2xl mx-auto mb-10"
          >
            Whether you need a keynote that moves the room, a team-building experience
            that breaks barriers, or a community that holds you accountable — Ray's got you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:shadow-lg hover:shadow-green/20"
              >
                Book Ray Now <ArrowRight size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/conquer"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:bg-white/5"
              >
                Join the Community
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
