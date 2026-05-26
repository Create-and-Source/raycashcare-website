import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Crosshair } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        <div className="w-20 h-20 bg-green/10 flex items-center justify-center mx-auto mb-8">
          <Crosshair size={40} className="text-green" />
        </div>
        <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-4">Error 404</p>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
          Mission<br />Not Found
        </h1>
        <p className="text-gray-3 text-lg leading-relaxed mb-10">
          This position has been compromised. Fall back to base and regroup.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-sm uppercase tracking-widest px-8 py-4 no-underline transition-all"
        >
          <ArrowLeft size={16} /> Return to Base
        </Link>
      </motion.div>
    </section>
  )
}
