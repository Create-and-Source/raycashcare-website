import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Counter({ end, suffix = '', prefix = '', duration = 2, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = Date.now()
    const durationMs = duration * 1000

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(tick)
  }, [isInView, end, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-6xl font-black text-white tracking-tight">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-green text-xs font-bold uppercase tracking-[0.2em] mt-2">{label}</div>
    </motion.div>
  )
}
