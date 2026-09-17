import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Send, CalendarCheck, Loader2 } from 'lucide-react'
import Reveal from './Reveal.jsx'

const projectTypes = ['Web Application', 'Custom Website', 'API/Backend', 'Optimization']

export default function Contact() {
  const [projectType, setProjectType] = useState(projectTypes[0])
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // No backend or email service is connected yet. This simulates the
    // interaction so the form can be wired up to a real service later
    // (e.g. an API route, Formspree, or a serverless function).
    setTimeout(() => {
      setStatus('sent')
      setShowToast(true)
      e.target.reset()
      setProjectType(projectTypes[0])
      setTimeout(() => setShowToast(false), 4500)
      setTimeout(() => setStatus('idle'), 1200)
    }, 800)
  }

  return (
    <section id="contact" className="relative w-full max-w-[1440px] mx-auto px-gutter-mobile lg:px-margin py-space-2xl">
      <div className="flex flex-col gap-space-xl">
        <Reveal className="flex flex-col gap-space-xs max-w-xl">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="font-body text-body-md text-on-surface-variant">
            Have a project in mind? I&apos;d love to hear about it. Fill out
            the brief below or reach out directly.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <Reveal delay={0.05} className="lg:col-span-5 flex flex-col justify-between gap-space-xl">
            <div className="flex flex-col gap-space-md">
              <div className="p-space-lg bg-surface-container flex flex-col gap-space-xs">
                <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-wider">
                  Direct Contact
                </span>
                <a
                  href="mailto:hello@ibrahimsellami.dev"
                  className="font-display text-headline-sm text-on-surface hover:text-primary transition-colors truncate"
                >
                  hello@ibrahimsellami.dev
                </a>
                <span className="font-body text-body-sm text-on-surface-variant/70">
                  Placeholder address &mdash; update with your real inbox.
                </span>
              </div>

              <div className="p-space-lg bg-surface-container flex flex-col gap-space-md">
                <span className="font-mono text-label-caps text-on-surface-variant uppercase tracking-wider">
                  Find Me Online
                </span>
                <div className="flex flex-col gap-space-sm font-mono text-label-code">
                  <a
                    href="https://github.com/sellamiibrahim"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-space-xs bg-surface-container-lowest hover:bg-surface-container-high transition-colors text-on-surface group"
                  >
                    <span className="flex items-center gap-space-xs">
                      <Github size={18} className="text-primary" />
                      <span>github.com/sellamiibrahim</span>
                    </span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-space-xs bg-surface-container-lowest hover:bg-surface-container-high transition-colors text-on-surface group"
                  >
                    <span className="flex items-center gap-space-xs">
                      <Linkedin size={18} className="text-secondary" />
                      <span>linkedin.com/in/ibrahim-sellami</span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="p-space-lg bg-surface-container-low border-l-2 border-primary flex items-start gap-space-md">
                <CalendarCheck className="text-primary shrink-0" size={24} />
                <div className="flex flex-col gap-0.5">
                  <span className="font-display text-headline-sm text-on-surface">
                    Available for new projects
                  </span>
                  <p className="font-body text-body-sm text-on-surface-variant">
                    Currently accepting freelance inquiries and full-stack
                    consulting work.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 bg-surface-container p-space-lg md:p-space-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-space-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label htmlFor="contact-name" className="font-mono text-label-code text-on-surface-variant">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Alex Mercer"
                    className="w-full px-space-md py-space-sm bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/40 font-body text-body-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label htmlFor="contact-email" className="font-mono text-label-code text-on-surface-variant">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-space-md py-space-sm bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/40 font-body text-body-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-space-xs">
                <span className="font-mono text-label-code text-on-surface-variant">Project Type *</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`p-space-sm font-mono text-body-sm text-center transition-colors focus:outline-none ${
                        projectType === type
                          ? 'bg-surface-container-lowest text-primary ring-1 ring-primary'
                          : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="projectType" value={projectType} />
              </div>

              <div className="flex flex-col gap-space-xs">
                <label htmlFor="contact-message" className="font-mono text-label-code text-on-surface-variant">
                  Message &amp; Details *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your timeline, goals, and technical requirements..."
                  className="w-full px-space-md py-space-sm bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/40 font-body text-body-md focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                <span className="font-mono text-label-caps text-on-surface-variant/60">
                  Goes straight to my inbox, once connected
                </span>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-space-xl py-space-md bg-primary text-on-primary font-mono text-label-code uppercase tracking-wider font-semibold hover:bg-secondary hover:text-on-secondary transition-colors flex items-center justify-center gap-space-xs disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-space-sm px-space-md py-space-sm bg-surface-container-highest border-l-4 border-primary text-on-surface shadow-2xl max-w-sm"
          >
            <div className="flex flex-col">
              <span className="font-mono text-label-code text-primary font-semibold">MESSAGE READY</span>
              <span className="font-body text-body-sm text-on-surface">
                This form isn&apos;t wired to a live inbox yet &mdash; connect it to an
                email service to start receiving real messages.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
