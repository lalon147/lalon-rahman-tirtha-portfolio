import { Section } from './Section'
import { skills } from '../data'

export function Skills() {
  return (
    <Section id="skills" eyebrow="skills" title="What I work with">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ group, items }) => (
          <div key={group} className="rounded-xl border border-border bg-surface p-5">
            <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-muted">{group}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm transition hover:border-accent/50"
                >
                  {Icon && <Icon className="text-xl text-accent" aria-hidden />}
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
