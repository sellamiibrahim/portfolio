# Ibrahim Sellami — Portfolio

A freelance developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL to view it. To build for production:

```bash
npm run build
```

Output goes to `dist/`.

## Project structure

```
src/
  components/   UI sections (Navbar, Hero, About, Skills, Projects, Services, CTA, Contact, Footer)
  data/         Editable content: projects.js, skills.js, services.js
  App.jsx       Page layout
  main.jsx      Entry point
  index.css     Tailwind + base styles
```

## Editing content

- **Projects**: edit `src/data/projects.js` — swap images, descriptions, tech tags, GitHub/live links.
- **Skills**: edit `src/data/skills.js`.
- **Services**: edit `src/data/services.js`.
- Contact email, LinkedIn URL, and other placeholders live directly in `src/components/Contact.jsx` and `src/components/Footer.jsx` — replace them once you have real values.

## Contact form

The contact form currently only simulates a submission in the browser — no
email is actually sent. To make it functional, connect it to a backend route,
a form service (e.g. Formspree, Resend, EmailJS), or a serverless function,
then replace the `handleSubmit` logic in `src/components/Contact.jsx`.

## Design system

Colors, type scale, and spacing tokens follow the "Terminal Obsidian" design
system, configured in `tailwind.config.js`.
