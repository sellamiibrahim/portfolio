import Reveal from './Reveal.jsx'

export default function CTA() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-gutter-mobile lg:px-margin py-space-xl">
      <Reveal>
        <div className="relative overflow-hidden p-space-xl bg-surface-container-high flex flex-col md:flex-row items-start md:items-center justify-between gap-space-xl">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-20 -mb-20" />
          <div className="flex flex-col gap-space-xs max-w-2xl relative z-10">
            <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
              Have an idea? <span className="text-primary">Let&apos;s build it.</span>
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant">
              Whether you need a website, a web application or a custom
              digital solution, let&apos;s turn your idea into something real.
            </p>
          </div>
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full md:w-auto px-space-xl py-space-md bg-primary text-on-primary font-mono text-label-code uppercase tracking-wider font-semibold hover:bg-secondary hover:text-on-secondary transition-colors"
            >
              Start a Project
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
