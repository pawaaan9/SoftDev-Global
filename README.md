# SoftDevGlobal website

Marketing site for SoftDevGlobal's business app solutions, built with Next.js 15 (App Router), React 19, Tailwind CSS v4 and react-icons. It reuses the layout and components of the Alpha 4 Labs site, with SoftDevGlobal's content and colours.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages are static)
npm start
```

## Where things live

| What | File |
| --- | --- |
| Company details: phone, email, address, reply time | `src/app/data/site.ts` |
| The 8 solutions: copy, screenshots, live-preview links, videos, demo logins | `src/app/data/solutions.ts` |
| Services (mega menu, home cards, `/services/[slug]`) | `src/app/data/services.ts` |
| Tech stack tabs and logo strip | `src/app/data/tech.ts` |
| FAQ | `src/app/data/faq.ts` |
| Main navigation | `src/app/data/nav.ts` |
| Colours, fonts, animations | `src/app/globals.css` |
| Logo (SVG wizard-hat mark) | `src/app/components/logo.tsx`, `src/app/icon.svg` |
| Product screenshots | `public/solutions/<slug>/` |

## Pages

- `/`: hero, tech strip, solutions, services, process, why us, industries, tech stack, ways to work, FAQ, CTA
- `/solutions`: every solution with the category filter from softdev.global
- `/solutions/[slug]`: modules with live previews, demo logins and videos, plus key features
- `/services/[slug]`: six service pages
- `/about`, `/contact`

## Brand colours

Taken from the softdev.global theme and set on a deep navy background:

| Token | Hex | Use |
| --- | --- | --- |
| `primary` | `#2196f3` | SoftDev azure: buttons, highlights |
| `royal` | `#3252b8` | SoftDev royal blue: large panels with white text |
| `accent` | `#64b5f6` | Light azure for text and icons on dark |
| `ink` | `#04101f` | Text on azure |
| `background` | `#050a14` | Page background |

## Contact form

There is no backend yet. The form opens the visitor's email app with the message pre-filled and addressed to `site.email`. Replace `handleSubmit` in `src/app/contact/contact-form.tsx` with an API call when one is ready. A solution page's "Contact us for a quote" button links to `/contact?solution=<slug>`, which pre-selects that solution.
