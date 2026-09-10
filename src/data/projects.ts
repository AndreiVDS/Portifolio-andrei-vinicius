import type { ImageMetadata } from 'astro'
import eventosRegiao from '../assets/eventos-regiao.jpg'

export type Project = {
  title: string
  blurb: string
  stack: string[]
  live?: string
  repo?: string
  image?: ImageMetadata
  featured?: boolean
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
  },
  {
    title: 'Tarefas API',
    blurb:
      'A REST API for task management, with relational data modelling, a full CRUD surface and automated tests.',
    stack: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'MySQL', 'JUnit 5'],
    repo: 'https://github.com/AndreiVDS/Desenvolvimento-API',
  },
  {
    title: 'Movidesk → Notion sync',
    blurb:
      'An automation that keeps a Notion database in sync with the Movidesk help-desk and raises Telegram alerts for tickets falling through the cracks. Built for my own team’s workflow.',
    stack: ['Python', 'requests', 'Movidesk API', 'Notion API', 'Telegram Bot API'],
    repo: 'https://github.com/AndreiVDS/API-chamados-Notion',
  },
  {
    title: 'File Organizer',
    blurb:
      'A desktop tool that sorts a folder’s files into category subfolders — run once over a mess, or leave it running to tidy new files as they land.',
    stack: ['Python', 'watchdog', 'Tkinter', 'PyInstaller'],
    repo: 'https://github.com/AndreiVDS/Organizador_de_arquivos',
  },
  {
    title: 'Client portfolio — Micheli Raasch',
    blurb:
      'A personal portfolio site built for a client (an education professional): profile, about, skills, project case studies and contact. Responsive from a phone up.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    live: 'https://portfolio-micheli-jy3m.vercel.app',
    repo: 'https://github.com/AndreiVDS/portfolio_micheli',
  },
  {
    title: 'Snake',
    blurb:
      'The classic Snake game on an HTML canvas — grid movement, growth, self- and wall-collision, score and a replay screen. A fundamentals exercise, no libraries.',
    stack: ['JavaScript', 'Canvas API'],
    live: 'https://python-serpent.vercel.app',
    repo: 'https://github.com/AndreiVDS/Python-serpent',
  },
]
