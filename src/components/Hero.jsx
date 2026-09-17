import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

const codeLines = [
  { indent: 0, content: <><span className="text-tertiary">const</span> <span className="text-secondary">developer</span> = {'{'}</> },
  { indent: 1, content: <><span className="text-on-surface-variant">name:</span> <span className="text-primary">&quot;Ibrahim Sellami&quot;</span>,</> },
  { indent: 1, content: <><span className="text-on-surface-variant">role:</span> <span className="text-primary">&quot;Full-Stack Developer&quot;</span>,</> },
  { indent: 1, content: <><span className="text-on-surface-variant">status:</span> <span className="text-primary">&quot;Ready for contracts&quot;</span>,</> },
  { indent: 1, content: <><span className="text-on-surface-variant">passion:</span> <span className="text-primary">&quot;Building digital experiences&quot;</span>,</> },
  { indent: 1, content: <><span className="text-on-surface-variant">stack:</span> [<span className="text-secondary">&quot;React&quot;</span>, <span className="text-secondary">&quot;Node.js&quot;</span>, <span className="text-secondary">&quot;Symfony&quot;</span>]</> },
  { indent: 0, content: <>{'}'};</> },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="home" className="relative w-full max-w-[1440px] mx-auto px-gutter-mobile lg:px-margin pt-space-2xl pb-space-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col items-start gap-space-md"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-mono text-label-caps text-primary uppercase tracking-widest pl-1">
              Available for freelance work
            </span>
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-space-xs mt-space-xs">
            <span className="font-display text-headline-sm text-on-surface-variant">
              Hi, I&apos;m Ibrahim Sellami.
            </span>
            <h1 className="font-display text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight leading-[1.05]">
              Full-Stack <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
          </motion.div>

          <motion.p variants={item} className="font-body text-body-lg text-on-surface-variant max-w-xl">
            I build modern, scalable web applications and digital experiences
            for businesses and individuals.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-space-md pt-space-sm w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto px-space-lg py-space-sm bg-primary text-on-primary font-mono text-label-code uppercase tracking-wider font-semibold hover:bg-secondary hover:text-on-secondary transition-colors text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-space-lg py-space-sm bg-surface-container-high text-on-surface hover:text-primary hover:bg-surface-bright font-mono text-label-code uppercase tracking-wider font-semibold transition-colors text-center"
            >
              Let&apos;s Work Together
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-space-lg pt-space-md">
            <a
              href="https://github.com/sellamiibrahim"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              <Github size={18} className="transition-transform group-hover:scale-110" />
              <span className="font-mono text-label-code tracking-wide">sellamiibrahim</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-space-xs text-on-surface-variant hover:text-secondary transition-colors"
            >
              <Linkedin size={18} className="transition-transform group-hover:scale-110" />
              <span className="font-mono text-label-code tracking-wide">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="lg:col-span-5 relative"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full bg-surface-container-lowest/90 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-space-md py-space-xs bg-surface-container-high/70 border-b border-surface-container-highest">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-[#ff5f56] rounded-full inline-block" />
                <span className="w-3 h-3 bg-[#ffbd2e] rounded-full inline-block" />
                <span className="w-3 h-3 bg-[#27c93f] rounded-full inline-block" />
                <span className="ml-2 font-mono text-[12px] text-on-surface-variant">developer.ts</span>
              </div>
            </div>
            <div className="p-space-md font-mono text-[13px] leading-relaxed overflow-x-auto">
              <div className="flex flex-col gap-0.5">
                {codeLines.map((line, i) => (
                  <div key={i} style={{ paddingLeft: line.indent * 16 }}>
                    {line.content}
                  </div>
                ))}
                <div className="mt-2 text-on-surface-variant/60 flex items-center gap-1">
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                    className="text-primary font-bold"
                  >
                    &gt;
                  </motion.span>
                  <span>engine.startProduction()</span>
                </div>
              </div>
            </div>
            <div className="px-space-md py-1.5 bg-surface-container-low flex items-center justify-between text-[11px] font-mono text-on-surface-variant/70">
              <span>UTF-8 // TypeScript</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> active runtime
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
