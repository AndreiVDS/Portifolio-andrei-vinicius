import type { ImageMetadata } from 'astro'
import eventosRegiao from '../assets/eventos-regiao.jpg'
import micheli from '../assets/micheli.jpg'
import diablo from '../assets/diablo.jpg'

export type Project = {
  title: string
  blurb: string
  stack: string[]
  live?: string
  repo?: string
  image?: ImageMetadata
  featured?: boolean
  caseStudy?: string
}

export const projects: Project[] = [
  {
    title: 'Eventos Região',
    blurb:
      'An inclusive platform to discover and promote local cultural, sporting and community events, organised by city and proximity. Full build: a moderation queue, an organizer area, a metrics panel, geolocation "near me", maps, transactional email, a public read API and an installable PWA.',
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'Supabase (Postgres + Auth + Storage)', 'Vercel serverless', 'Vitest'],
    live: 'https://eventos-regiao.vercel.app',
    repo: 'https://github.com/AndreiVDS/eventos-regiao',
    image: eventosRegiao,
    featured: true,
    caseStudy: '/projects/eventos-regiao',
  },
  {
    title: 'Tarefas API',
    blurb:
      'A REST API for task management, structured the way a real service is: request/response DTOs, bean validation, a service layer, RFC 7807 error responses, OpenAPI docs, layered tests and a one-command Docker setup (app + MySQL).',
    stack: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'Bean Validation', 'OpenAPI', 'Docker', 'JUnit 5'],
    repo: 'https://github.com/AndreiVDS/Desenvolvimento-API',
  },
  {
    title: 'Movidesk → Notion sync',
    blurb:
      'An automation that keeps a Notion database in sync with the Movidesk help-desk and raises Telegram alerts for tickets falling through the cracks. Built for my own team’s workflow; the orchestration takes its I/O as dependencies, so it is covered by 16 tests with no network.',
    stack: ['Python', 'requests', 'Movidesk API', 'Notion API', 'Telegram Bot API', 'pytest', 'CI'],
    repo: 'https://github.com/AndreiVDS/API-chamados-Notion',
  },
  {
    title: 'File Organizer',
    blurb:
      'A CLI that sorts a folder’s files into category subfolders — run once over a mess, or leave it watching for new files. Plan / apply are split (so --dry-run is free), categories are overridable, and name clashes are never overwritten.',
    stack: ['Python', 'argparse', 'watchdog', 'pytest', 'PyInstaller'],
    repo: 'https://github.com/AndreiVDS/Organizador_de_arquivos',
  },
  {
    title: 'Client portfolio — Micheli Raasch',
    blurb:
      'A personal portfolio site built for a client (an education professional): profile, about, skills, project case studies and contact. Responsive from a phone up.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    live: 'https://portfolio-micheli-jy3m.vercel.app',
    repo: 'https://github.com/AndreiVDS/portfolio_micheli',
    image: micheli,
  },
  {
    title: 'Diablo IV — Landing page',
    blurb:
      'A responsive fan landing page for the game: hero, a "buy now" block with a platform-picker dropdown, and contact. A focused study in layout, typography and breakpoints with no framework.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    live: 'https://projeto-diablo-iv.vercel.app',
    repo: 'https://github.com/AndreiVDS/Projeto-Diablo-IV',
    image: diablo,
  },
]
