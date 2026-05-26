import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Mic, Users, Dumbbell, TrendingUp, Shield, Target } from 'lucide-react'
import Section from '../components/Section'
import Counter from '../components/Counter'
import LazyYouTube from '../components/LazyYouTube'
import TextReveal from '../components/TextReveal'
import LineReveal from '../components/LineReveal'
import MagneticButton from '../components/MagneticButton'
import { StaggerContainer, StaggerItem } from '../components/StaggerChildren'

const asSeenOn = [
  { name: 'History Channel', src: '/images/logo-history.webp' },
  { name: 'BBC', src: '/images/logo-bbc.webp' },
  { name: 'Discovery', src: '/images/logo-discovery.webp' },
  { name: 'Muscle & Fitness', src: '/images/logo-muscle-fitness.webp' },
  { name: 'We Are The Mighty', src: '/images/logo-we-are-the-mighty.webp' },
]

const associates = [
  { name: 'Pete Hegseth', title: 'Fox News Host', src: '/images/celeb-pete-hegseth.webp' },
  { name: 'Tim Kennedy', title: 'MMA Fighter / Green Beret', src: '/images/celeb-tim-kennedy.webp' },
  { name: 'Evan Hafer', title: 'Black Rifle Coffee CEO', src: '/images/celeb-evan-hafer.webp' },
  { name: 'Kid Rock', title: 'Musician', src: '/images/celeb-kid-rock.webp' },
  { name: 'Jim Mora', title: 'UCLA Head Coach', src: '/images/celeb-jim-mora.webp' },
  { name: 'John Daly', title: 'PGA Champion', src: '/images/celeb-john-daly.webp' },
  { name: 'Ryan Stewman', title: 'Sales Coach', src: '/images/celeb-ryan-stewman.webp' },
  { name: 'Bedros Keuilian', title: 'Fit Body Boot Camp CEO', src: '/images/celeb-bedros.webp' },
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
    name: "Sarah Mitchell",
    role: "VP of Operations",
    company: "Fortune 500 Company",
  },
  {
    quote: "We brought Ray in for our annual conference and it was the highest-rated session in our company's history. Period.",
    name: "James Rodriguez",
    role: "Event Director",
    company: "National Sales Conference",
  },
  {
    quote: "Ray doesn't just motivate — he gives you the tools and framework to actually change. Our team's performance improved measurably.",
    name: "Michael Chen",
    role: "CEO",
    company: "Tech Startup",
  },
]

const transformations = [
  {
    icon: TrendingUp,
    company: 'National Sales Organization',
    result: '34% increase in team performance',
    story: 'After Ray\'s keynote and follow-up workshop, this 500-person sales team saw their highest quarterly numbers in company history.',
  },
  {
    icon: Shield,
    company: 'Fortune 500 Leadership Team',
    result: 'Complete culture transformation',
    story: 'Ray\'s accountability framework was adopted company-wide. Employee retention improved 28% within 6 months.',
  },
  {
    icon: Target,
    company: 'Tech Startup (Series B)',
    result: 'Team cohesion under pressure',
    story: 'Facing a critical product launch, this team used Ray\'s mental toughness principles to ship on time with zero turnover.',
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

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-black">
        {/* Video background with image fallback */}
        <motion.div className="absolute inset-0 z-0" style={{ scale: heroScale }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-mountains.webp"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.35) contrast(1.1)' }}
          >
            <source src="/videos/hero-reel.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/hero-mountains.webp)',
              filter: 'brightness(0.4) contrast(1.1)',
            }}
          />
        </motion.div>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1f14]/90 to-black/90 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-[2]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-[2]" />

        {/* Portrait — desktop */}
        <motion.div
          className="absolute bottom-0 right-0 lg:right-[5%] xl:right-[8%] z-[3] hidden md:block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src="/images/hero-portrait.webp"
            alt="Ray Cash Care"
            className="h-[85vh] max-h-[900px] w-auto object-contain object-bottom"
            style={{ scale: heroScale }}
          />
        </motion.div>

        {/* Text content */}
        <div className="relative z-[4] max-w-7xl mx-auto px-6 w-full min-h-[60vh] md:min-h-screen flex items-center">
          <motion.div
            className="max-w-2xl pt-28 pb-8 md:py-32"
            style={{ opacity: heroOpacity }}
          >
            <div className="mb-2">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.9] tracking-tight text-white"
                >
                  Navy SEAL.
                </motion.h1>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-1 bg-green w-48 md:w-64 origin-left mt-1 mb-2"
              />
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.9] tracking-tight text-white"
                >
                  Motivational
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.9] tracking-tight text-white"
                >
                  Speaker.
                </motion.h1>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="mt-8 mb-10 space-y-1"
            >
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                <span className="text-green font-bold">Motivate</span> your team
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                <span className="text-green font-bold">Unlock</span> their true potential
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                <span className="text-green font-bold">Elevate</span> your company to the next level
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:shadow-[0_0_35px_rgba(90,122,43,0.45),0_0_80px_rgba(90,122,43,0.2)]"
                >
                  Contact Ray <ArrowRight size={16} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white/50 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:bg-white/5"
                >
                  About Ray Cash Care
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Portrait — mobile */}
        <motion.div
          className="relative z-[4] flex justify-center md:hidden -mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/hero-portrait.webp"
            alt="Ray Cash Care"
            className="h-[50vh] w-auto object-contain object-bottom"
          />
        </motion.div>
      </section>

      {/* As Seen On */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-[#2a2a2a] border-y border-white/5 py-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-2 text-xs font-bold uppercase tracking-[0.3em] mb-6">As Seen On</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {asSeenOn.map(({ name, src }) => (
              <motion.img
                key={name}
                src={src}
                alt={name}
                className="h-10 md:h-14 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          <Counter end={500} suffix="+" label="Events & Keynotes" duration={2} />
          <Counter end={200} suffix="+" label="Organizations Served" duration={2.2} />
          <Counter end={10} label="Years SEAL Teams" duration={2.5} />
          <Counter end={1} suffix="M+" label="Lives Impacted" duration={2.3} />
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
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {services.map(({ icon: Icon, title, desc, link }) => (
            <StaggerItem key={title}>
              <Link
                to={link}
                className="group block bg-dark-2 border border-green/30 p-8 no-underline transition-all hover:-translate-y-1 shadow-[0_0_25px_rgba(90,122,43,0.35),0_0_60px_rgba(90,122,43,0.15)] hover:shadow-[0_0_35px_rgba(90,122,43,0.45),0_0_80px_rgba(90,122,43,0.2)]"
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
          className="max-w-4xl mx-auto border border-green/30 shadow-[0_0_25px_rgba(90,122,43,0.35),0_0_60px_rgba(90,122,43,0.15)] hover:border-green/30 transition-colors"
        >
          <LazyYouTube id="7FqDLgh1HkA" title="Ray Cash Care — Navy SEAL Reveals #1 Rule To Stay Alive" />
        </motion.div>
      </Section>

      {/* Transformations */}
      <Section dark>
        <div className="text-center mb-16">
          <TextReveal>
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Results</p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Real transformations
            </h2>
          </TextReveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {transformations.map(({ icon: Icon, company, result, story }, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-dark-2 border border-green/30 shadow-[0_0_25px_rgba(90,122,43,0.35),0_0_60px_rgba(90,122,43,0.15)] p-8 h-full"
              >
                <div className="w-12 h-12 bg-green/10 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-green" />
                </div>
                <p className="text-green text-xs font-bold uppercase tracking-widest mb-2">{company}</p>
                <h3 className="text-xl font-bold text-white mb-4">{result}</h3>
                <p className="text-gray-3 text-sm leading-relaxed">{story}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Testimonials */}
      <Section>
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
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map(({ quote, name, role, company }, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-dark-2 border border-green/30 shadow-[0_0_25px_rgba(90,122,43,0.35),0_0_60px_rgba(90,122,43,0.15)] hover:border-green/30 p-8 transition-colors h-full"
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
                  <p className="text-gray-2 text-xs">{role}, {company}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Client Logos */}
      <Section dark>
        <div className="text-center mb-16">
          <TextReveal>
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Trusted By</p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Organizations that book Ray
            </h2>
          </TextReveal>
        </div>
        <StaggerContainer className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            { name: 'Chevrolet', src: '/images/logo-chevrolet.webp' },
            { name: 'Comcast', src: '/images/logo-comcast.webp' },
            { name: 'UCLA', src: '/images/logo-ucla.webp' },
            { name: 'Fit Body Boot Camp', src: '/images/logo-fitbody.webp' },
            { name: 'NFM Lending', src: '/images/logo-nfm.webp' },
            { name: 'Sansone Group', src: '/images/logo-sansone.webp' },
            { name: 'SEAL Future Foundation', src: '/images/logo-seal-future.webp' },
            { name: 'Heart of a Lion', src: '/images/logo-heart-lion.webp' },
          ].map(({ name, src }) => (
            <StaggerItem key={name}>
              <motion.img
                src={src}
                alt={name}
                className="h-10 md:h-14 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                whileHover={{ scale: 1.1 }}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Associates */}
      <Section>
        <div className="text-center mb-16">
          <TextReveal>
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Inner Circle</p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              The company he keeps
            </h2>
          </TextReveal>
        </div>
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {associates.map(({ name, title, src }) => (
            <StaggerItem key={name}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(90,122,43,0.6)', boxShadow: '0 0 35px rgba(90,122,43,0.45), 0 0 80px rgba(90,122,43,0.2)' }}
                transition={{ duration: 0.2 }}
                className="bg-dark-2 border border-green/30 shadow-[0_0_25px_rgba(90,122,43,0.35),0_0_60px_rgba(90,122,43,0.15)] p-6 text-center"
              >
                <img
                  src={src}
                  alt={name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-white/10"
                />
                <p className="text-white text-sm font-bold">{name}</p>
                <p className="text-gray-2 text-xs mt-1">{title}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Book Cover */}
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
                  className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:shadow-[0_0_35px_rgba(90,122,43,0.45),0_0_80px_rgba(90,122,43,0.2)]"
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

      {/* Instagram Feed */}
      <Section dark>
        <div className="text-center mb-12">
          <TextReveal>
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-3">Follow Along</p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              @raycashcare
            </h2>
          </TextReveal>
          <p className="text-gray-3 text-sm">Daily discipline, mindset, and behind-the-scenes content</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            '/images/portrait-black-tee.webp',
            '/images/on-stage.png',
            '/images/portrait-blazer.webp',
            '/images/ray-audience.webp',
          ].map((src, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/raycashcare/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square overflow-hidden group"
            >
              <img src={src} alt="Instagram" className="w-full h-full object-cover object-top group-hover:brightness-75 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xs font-bold uppercase tracking-widest">View on IG</span>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/raycashcare/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green text-sm font-bold uppercase tracking-widest no-underline hover:text-green-light transition-colors"
          >
            Follow on Instagram <ArrowRight size={14} />
          </a>
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
                className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all hover:shadow-[0_0_35px_rgba(90,122,43,0.45),0_0_80px_rgba(90,122,43,0.2)]"
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

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/95 backdrop-blur-md border-t border-green/30 p-3">
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest py-3 no-underline transition-all w-full"
        >
          Book Ray <ArrowRight size={16} />
        </Link>
      </div>
    </>
  )
}
