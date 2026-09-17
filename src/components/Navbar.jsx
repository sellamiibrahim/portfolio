import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-surface/85 backdrop-blur-xl border-b border-surface-container-highest' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="h-20 max-w-[1440px] mx-auto px-gutter-mobile lg:px-margin flex items-center justify-between gap-space-md">
        <a href="#home" className="font-display text-headline-sm text-on-surface tracking-tight">
          Ibrahim<span className="text-primary">.</span>
        </a>

        <nav className="hidden lg:flex items-center gap-space-xs p-1 bg-surface-container-lowest/50">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-mono text-label-code transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-space-lg py-space-sm bg-primary-container text-on-primary font-mono text-label-code uppercase tracking-wider font-semibold hover:bg-secondary hover:text-on-secondary transition-colors"
          >
            Let&apos;s Work Together
          </a>
          <button
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-10 h-10 bg-surface-container-high text-on-surface"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-surface-container-lowest/95 backdrop-blur-2xl border-b border-surface-container-highest"
          >
            <div className="flex flex-col gap-space-xs px-gutter-mobile py-space-lg">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-space-md py-space-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-mono text-label-code transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-space-sm flex items-center justify-center py-space-md bg-primary-container text-on-primary font-mono text-label-code uppercase tracking-wider font-semibold"
              >
                Let&apos;s Work Together
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
