# Chanel Holt — Portfolio

A static portfolio site for Chanel Holt, a digital marketing student at Utah Valley University.
The experience opens with a phone-ringing intro, lands on a "what's in my bag" hub, and fans
out to dedicated pages for each section of her story.

## Preview

| Section | Page |
|---|---|
| Landing + hero | `index.html` |
| About | `about.html` |
| Experience | `experience.html` |
| Skills & Certifications | `skills.html` |
| Education | `education.html` |
| Content | `content.html` |
| Resume | `resume.html` |
| Contact | `contact.html` |

## Tech

- Pure static HTML, CSS, and JavaScript — no build step, no framework
- Shared design system via CSS custom properties in `shared.css`
- Shared page bootstrap (nav, hamburger, page-enter animation) in `shared.js`
- Tool logos on the Skills page are pulled from the [Iconify](https://iconify.design) CDN
- Google Fonts: Bodoni Moda, Cormorant Garamond, Pinyon Script, Inter

## Structure

```
.
├── index.html          # intro → hero → "what's in my bag" hub
├── about.html          # bio and story
├── experience.html     # work history
├── skills.html         # certifications + tools & software grid
├── education.html      # schooling
├── content.html        # content reel and event coverage
├── resume.html         # embedded resume
├── contact.html        # contact form + links
├── bag.js              # renders the 6-item bag hub on index.html
├── shared.css          # design tokens + nav + shared page chrome
├── shared.js           # nav bootstrap (active link + hamburger)
└── assets/             # photos, product PNGs, videos, resume PDF
```

## Running locally

No build step required — any static server works:

```bash
npx serve -l 5173
```

Then open [http://localhost:5173](http://localhost:5173).

If you have the [Claude Code](https://claude.com/claude-code) CLI with the preview plugin,
`.claude/launch.json` is preconfigured — run `preview_start chanel-portfolio`.

## Editing

- **Design tokens** (colors, fonts, spacing) live in the `:root` block of `shared.css`
- **Nav links** are defined in each HTML file's `<nav>` — update in all seven pages when adding a section
- **Bag hub items** (the six floating icons around the Chanel tote) are configured in `bag.js`
- **Tool logos** on the Skills page are plain `<img>` tags pointing at `api.iconify.design` — swap the `src` to change a logo

## Deploy

The site is plain static files, so any static host works. See the repo owner's Netlify / Cloudflare
Pages setup for the live URL and auto-deploy-on-push configuration.
