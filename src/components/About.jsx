import { Section } from './Section'
import { profile } from '../data'

export function About() {
  return (
    <Section id="about" eyebrow="about" title="A bit about me">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">Interested in</p>
            <ul className="flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <li key={i} className="rounded-full border border-border bg-surface-2 px-3 py-1 text-sm">{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
