import { motion } from 'framer-motion'

// Small helper for one consistent scroll-triggered entrance across sections.
export default function Reveal({ children, delay = 0, className = '', y = 20 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
