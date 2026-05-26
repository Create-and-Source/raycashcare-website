import { motion } from 'framer-motion'

export default function LineReveal({ className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`h-px bg-green origin-left ${className}`}
    />
  )
}
