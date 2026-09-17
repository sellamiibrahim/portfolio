import { Layers, Lightbulb, Terminal, BookOpen } from 'lucide-react'
import Reveal from './Reveal.jsx'

const concepts = [
  {
    icon: Layers,
    title: 'Full-Stack Development',
    description:
      'End-to-end work, from componentized UI to backend services and databases.',
    color: 'text-primary',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description:
      'Pragmatic engineering focused on the actual problem, not just the tech.',
    color: 'text-secondary',
  },
  {
    icon: Terminal,
    title: 'Modern Web Technologies',
    description:
      'Component-based workflows, REST conventions, and reliable persistence.',
    color: 'text-tertiary',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description:
      'Keeping up with frameworks, standards, and better ways to build things.',
    color: 'text-primary-fixed',
  },
]

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-[1440px] mx-auto px-gutter-mobile lg:px-margin py-space-2xl">
      <div className="flex flex-col gap-space-xl">
        <Reveal>
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            About Me
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <Reveal delay={0.05} className="lg:col-span-5 flex flex-col justify-between gap-space-lg">
            <div className="flex flex-col gap-space-md text-on-surface-variant font-body text-body-md leading-relaxed">
              <p className="text-on-surface font-body text-body-lg">
                I&apos;m a Full-Stack Developer who likes building complete
                web applications, not just pieces of them.
              </p>
              <p>
                My focus is on solving real problems with pragmatic
                engineering &mdash; whether that means an early-stage idea
                that needs a first working version, or an existing product
                that needs a feature done properly. I work across both the
                interface and the systems behind it.
              </p>
              <p>
                I care about writing code that is easy to read, easy to
                change, and does what it says it does.
              </p>
            </div>
            <div className="p-space-md bg-surface-container-low flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-mono text-label-caps text-on-surface-variant uppercase">Approach</span>
                <span className="font-display text-headline-sm text-primary">Systemic &amp; Robust</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-mono text-label-caps text-on-surface-variant uppercase">Commitment</span>
                <span className="font-display text-headline-sm text-secondary">Zero-Bloat Code</span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {concepts.map((c, i) => (
              <Reveal key={c.title} delay={0.1 + i * 0.06}>
                <div className="group p-space-lg bg-surface-container hover:bg-surface-container-high transition-colors flex flex-col gap-space-md h-full">
                  <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
                    <c.icon className={c.color} size={22} />
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-display text-headline-sm text-on-surface">{c.title}</h3>
                    <p className="font-body text-body-sm text-on-surface-variant">{c.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
