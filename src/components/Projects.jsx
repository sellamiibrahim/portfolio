import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects.js'
import Reveal from './Reveal.jsx'

const accentText = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  'primary-fixed': 'text-primary-fixed',
}

const accentGroupHoverText = {
  primary: 'group-hover:text-primary',
  secondary: 'group-hover:text-secondary',
  tertiary: 'group-hover:text-tertiary',
  'primary-fixed': 'group-hover:text-primary-fixed',
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full max-w-[1440px] mx-auto px-gutter-mobile lg:px-margin py-space-2xl">
      <div className="flex flex-col gap-space-xl">
        <Reveal className="flex flex-col gap-space-xs max-w-2xl">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Selected Projects
          </h2>
          <p className="font-body text-body-md text-on-surface-variant">
            A few things I&apos;ve built, from concept to working application.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.07}>
              <div className="group flex flex-col bg-surface-container hover:bg-surface-container-high transition-all overflow-hidden h-full">
                <div className="relative w-full h-56 overflow-hidden bg-surface-container-lowest">
                  <img
                    src={p.image}
                    alt={`${p.name} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-80" />
                  <div className={`absolute top-4 left-4 px-2 py-1 bg-surface-container-lowest/90 backdrop-blur font-mono text-[11px] uppercase tracking-wider ${accentText[p.accent]}`}>
                    {p.tag}
                  </div>
                </div>
                <div className="p-space-lg flex flex-col justify-between flex-1 gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <h3 className={`font-display text-headline-md text-on-surface transition-colors ${accentGroupHoverText[p.accent]}`}>
                      {p.name}
                    </h3>
                    <p className="font-body text-body-sm text-on-surface-variant">{p.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-space-xs">
                    {p.tech.map((t) => (
                      <span key={t} className="px-space-xs py-0.5 bg-surface-container-lowest font-mono text-[12px] text-on-surface-variant">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-space-md pt-space-xs">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 font-mono text-label-code text-on-surface hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={p.live}
                      className={`flex items-center gap-1 font-mono text-label-code hover:text-secondary transition-colors ${accentText[p.accent]}`}
                    >
                      <ExternalLink size={16} />
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
