import { Globe, LayoutGrid, Building2, Plug, Gauge, ArrowRight } from 'lucide-react'
import { services } from '../data/services.js'
import Reveal from './Reveal.jsx'

const icons = { Globe, LayoutGrid, Building2, Plug, Gauge }

const accentText = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  'primary-fixed': 'text-primary-fixed',
}

const accentGroupHoverBg = {
  primary: 'group-hover:bg-primary group-hover:text-on-primary',
  secondary: 'group-hover:bg-secondary group-hover:text-on-secondary',
  tertiary: 'group-hover:bg-tertiary group-hover:text-on-tertiary',
  'primary-fixed': 'group-hover:bg-primary-fixed group-hover:text-surface',
}

export default function Services() {
  return (
    <section id="services" className="relative w-full max-w-[1440px] mx-auto px-gutter-mobile lg:px-margin py-space-2xl">
      <div className="flex flex-col gap-space-xl">
        <Reveal className="flex flex-col gap-space-xs max-w-xl">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            What I Can Build
          </h2>
          <p className="font-body text-body-md text-on-surface-variant">
            Freelance development services for startups, businesses, and
            creators who need reliable execution.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {services.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <Reveal
                key={s.id}
                delay={i * 0.06}
                className={s.wide ? 'lg:col-span-2' : ''}
              >
                <div className="group p-space-lg bg-surface-container hover:bg-surface-container-high transition-colors flex flex-col justify-between gap-space-lg h-full">
                  <div className={`flex flex-col ${s.wide ? 'sm:flex-row sm:items-center' : ''} gap-space-md`}>
                    <div className={`w-12 h-12 bg-surface-container-highest flex items-center justify-center shrink-0 transition-colors ${accentGroupHoverBg[s.accent]}`}>
                      <Icon size={26} className={accentText[s.accent]} />
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-display text-headline-sm text-on-surface">{s.title}</h3>
                      <p className="font-body text-body-sm text-on-surface-variant">{s.description}</p>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className={`flex items-center justify-between pt-space-md border-t border-surface-container-highest font-mono text-label-code hover:text-secondary transition-colors ${accentText[s.accent]}`}
                  >
                    <span>{s.cta}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
