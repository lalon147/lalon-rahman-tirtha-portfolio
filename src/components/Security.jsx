import { FaCheckCircle, FaHourglassHalf } from 'react-icons/fa'
import { Section } from './Section'
import { certifications, securityWork } from '../data'

export function Security() {
  return (
    <Section id="security" eyebrow="security" title="Security work">
      <div className="grid gap-6 md:grid-cols-2">
        {securityWork.map(({ title, icon: Icon, summary, tags }) => (
          <article key={title} className="flex flex-col rounded-xl border border-border bg-surface p-6 transition hover:border-accent/50">
            <div className="flex items-center gap-3">
              <Icon className="text-2xl text-accent" aria-hidden />
              <h3 className="text-lg font-bold">{title}</h3>
            </div>
            <p className="mt-3 flex-1 leading-relaxed text-muted">{summary}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <li key={t} className="rounded bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted">{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="mb-4 mt-14 font-mono text-sm uppercase tracking-wider text-muted">Certifications &amp; training</h3>
      <ul className="grid gap-3 sm:grid-cols-2">
        {certifications.map(({ name, issuer, status }) => (
          <li key={name} className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3">
            {status === 'done'
              ? <FaCheckCircle className="mt-1 shrink-0 text-emerald-400" aria-label="Completed" />
              : <FaHourglassHalf className="mt-1 shrink-0 text-amber-400" aria-label="In progress" />}
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-muted">{issuer}{status === 'progress' && ' · in progress'}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
