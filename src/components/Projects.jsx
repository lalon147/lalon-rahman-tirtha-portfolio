import { FaGithub, FaExternalLinkAlt, FaServer, FaLock } from 'react-icons/fa'
import { Section } from './Section'
import { projects, profile } from '../data'

function Links({ p }) {
  const cls = 'inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-accent'
  return (
    <div className="flex flex-wrap gap-4">
      {p.live && <a className={cls} href={p.live} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live</a>}
      {p.code && <a className={cls} href={p.code} target="_blank" rel="noreferrer"><FaGithub /> {p.server ? 'Client' : 'Code'}</a>}
      {p.server && <a className={cls} href={p.server} target="_blank" rel="noreferrer"><FaServer /> Server</a>}
      {!p.live && !p.code && <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted"><FaLock /> Private · in development</span>}
    </div>
  )
}

function Tech({ tech }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <li key={t} className="rounded bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted">{t}</li>
      ))}
    </ul>
  )
}

function Featured({ p, flip }) {
  const href = p.live || p.code
  const frame = 'group block overflow-hidden rounded-xl border border-border'
  const img = (
    <img
      src={p.image}
      alt={`${p.title} screenshot`}
      loading="lazy"
      className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
    />
  )
  return (
    <article className={`grid items-center gap-8 md:grid-cols-2 ${flip ? 'md:[&>*:first-child]:order-2' : ''}`}>
      {href ? <a href={href} target="_blank" rel="noreferrer" className={frame}>{img}</a> : <div className={frame}>{img}</div>}
      <div>
        <p className="font-mono text-xs text-accent">Featured · {p.year}</p>
        <h3 className="mt-1 text-2xl font-bold">{p.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
        <div className="mt-4"><Tech tech={p.tech} /></div>
        <div className="mt-5"><Links p={p} /></div>
      </div>
    </article>
  )
}

function Card({ p }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition hover:-translate-y-1 hover:border-accent/50">
      <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="aspect-[16/9] w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs text-muted">{p.year}</p>
        <h3 className="mt-1 text-lg font-bold">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
        <div className="mt-4"><Tech tech={p.tech} /></div>
        <div className="mt-4"><Links p={p} /></div>
      </div>
    </article>
  )
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section id="projects" eyebrow="projects" title="Things I've built">
      <div className="space-y-16">
        {featured.map((p, i) => <Featured key={p.title} p={p} flip={i % 2 === 1} />)}
      </div>

      <h3 className="mb-6 mt-20 font-mono text-sm uppercase tracking-wider text-muted">More projects</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => <Card key={p.title} p={p} />)}
      </div>

      <p className="mt-10 text-muted">
        More on{' '}
        <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">
          GitHub →
        </a>
      </p>
    </Section>
  )
}
