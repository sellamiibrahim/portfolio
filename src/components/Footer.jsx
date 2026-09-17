import { Github, Linkedin } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-highest">
      <div className="max-w-[1440px] mx-auto px-gutter-mobile lg:px-margin py-space-2xl flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-xl">
          <div className="flex flex-col gap-space-sm max-w-md">
            <span className="font-display text-headline-sm text-on-surface tracking-tight">
              Ibrahim Sellami
            </span>
            <span className="font-mono text-label-code text-on-surface-variant">
              Full-Stack Developer
            </span>
            <p className="font-body text-body-sm text-on-surface-variant">
              Building digital experiences that solve real problems.
            </p>
            <div className="flex items-center gap-space-md pt-space-xs">
              <a
                href="https://github.com/sellamiibrahim"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-on-surface-variant hover:text-secondary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-mono text-label-caps text-on-surface uppercase tracking-wider">
              Navigation
            </span>
            <div className="flex flex-col gap-space-xs font-mono text-label-code">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-lg border-t border-surface-container-highest">
          <span className="font-mono text-label-code text-on-surface-variant">
            © 2026 Ibrahim Sellami. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
