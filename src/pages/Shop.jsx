import { motion } from 'framer-motion'
import { ExternalLink, ShoppingBag } from 'lucide-react'
import Section from '../components/Section'

const products = [
  { name: 'CONQUER Tee — Black', price: '$35', category: 'Apparel' },
  { name: 'CASH Hoodie — OD Green', price: '$65', category: 'Apparel' },
  { name: 'Frog Mindset Hat', price: '$30', category: 'Headwear' },
  { name: 'CONQUER Performance Tank', price: '$28', category: 'Apparel' },
  { name: 'Warrior Rising — Signed Copy', price: '$25', category: 'Books' },
  { name: 'CASH Joggers', price: '$55', category: 'Apparel' },
  { name: 'CONQUER Patch', price: '$12', category: 'Accessories' },
  { name: 'SEAL Mindset Sticker Pack', price: '$8', category: 'Accessories' },
]

export default function Shop() {
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
            <p className="text-green font-bold text-xs tracking-[0.3em] uppercase mb-4">Gear</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
              CASH Gear
            </h1>
            <p className="text-gray-3 text-lg leading-relaxed">
              Rep the CONQUER mindset. Every piece is designed for those who refuse to quit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <Section dark>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(({ name, price, category }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-dark-2 border border-green/40 shadow-[0_0_20px_rgba(90,122,43,0.15)] hover:border-green/30 transition-all cursor-pointer"
            >
              <div className="aspect-square bg-dark-3 flex items-center justify-center relative overflow-hidden">
                <ShoppingBag size={40} className="text-gray-2" />
                <div className="absolute inset-0 bg-green/0 group-hover:bg-green/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Coming Soon</span>
                </div>
              </div>
              <div className="p-4">
                <span className="text-green text-[10px] font-bold uppercase tracking-widest">{category}</span>
                <h3 className="text-white text-sm font-bold mt-1">{name}</h3>
                <p className="text-gray-3 text-sm mt-1">{price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-3 text-sm">
            Full shop launching soon. Follow{' '}
            <a href="https://www.instagram.com/raycashcare/" target="_blank" rel="noopener noreferrer" className="text-green no-underline hover:underline">
              @raycashcare
            </a>{' '}
            for drop announcements.
          </p>
        </div>
      </Section>
    </>
  )
}
