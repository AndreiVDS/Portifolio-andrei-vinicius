# Personal portfolio — Andrei Vinícius

My portfolio site. Single page: hero, about, selected projects, skills, experience, contact.

**Live:** <https://portifolio-andrei-vinicius.vercel.app>

## Stack

`Astro` · `Tailwind CSS v4` · deployed on **Vercel** (static output). Zero client JS beyond a
tiny scroll-reveal enhancement and the sticky-header toggle. Images optimised at build time
via `astro:assets`.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview
```

## Editing content

Everything is plain data:

| File | What |
|---|---|
| `src/data/site.ts` | name, role, tagline, links |
| `src/data/projects.ts` | the project list (add an entry to add a card) |
| `src/data/skills.ts` | skill groups |
| `src/data/experience.ts` | jobs + education |

Project screenshots live in `src/assets/`.
