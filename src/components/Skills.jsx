import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MonitorSmartphone, Server, Database, Wrench } from 'lucide-react'
import { skillCategories } from '../data/skills.js'
import Reveal from './Reveal.jsx'

const icons = { MonitorSmartphone, Server, Database, Wrench }

const accentText = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  'primary-fixed': 'text-primary-fixed',
}

export default function Skills() {
  const [active, setActive] = useState('all')
  const visible =
    active === 'all' ? skillCategories : skillCategories.filter((c) => c.id === active)

  return (
    <section id="skills" className="relative w-full max-w-[1440px] mx-auto px-gutter-mobile lg:px-margin py-space-2xl">
      <div className="flex flex-col gap-space-xl">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
              Technical Arsenal
            </h2>
            <p className="font-body text-body-md text-on-surface-variant">
              The stack I reach for when building applications end to end.
            </p>
          </div>
          <div className="flex flex-wrap gap-1 p-1 bg-surface-container-lowest">
            <button
              onClick={() => setActive('all')}
              className={`px-space-md py-1 font-mono text-label-code transition-colors ${
                active === 'all' ? 'bg-surface-container-high text-on-surface' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              All
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-space-md py-1 font-mono text-label-code transition-colors ${
                  active === cat.id ? 'bg-surface-container-high text-on-surface' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <AnimatePresence mode="popLayout">
            {visible.map((cat, i) => {
              const Icon = icons[cat.icon]
              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="p-space-lg bg-surface-container hover:bg-surface-container-high transition-colors flex flex-col gap-space-md"
                >
                  <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-highest">
                    <div className="flex items-center gap-space-xs">
                      <Icon className={accentText[cat.accent]} size={20} />
                      <span className="font-display text-headline-sm text-on-surface">{cat.label}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="p-space-sm bg-surface-container-lowest flex items-center justify-between"
                      >
                        <span className="font-mono text-label-code text-on-surface font-semibold">
                          {item.name}
                        </span>
                        <span className={`font-mono text-label-caps ${accentText[cat.accent]}`}>
                          {item.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
