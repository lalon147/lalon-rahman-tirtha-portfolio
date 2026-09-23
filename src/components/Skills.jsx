import { Section } from './Section'
import { SkillSphere } from './SkillSphere'
import { skills } from '../data'

// Tilt the card toward the pointer; CSS vars feed the transform in index.css (.tilt).
function tilt(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--rx', `${((e.clientY - r.top) / r.height - 0.5) * -10}deg`)
  e.currentTarget.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - 0.5) * 10}deg`)
}
function untilt(e) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="skills" title="What I work with">
      <div className="mb-14">
        <SkillSphere />
      </div>

      <div className="grid gap-6 [perspective:1000px] sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ group, items }) => (
          <div
            key={group}
            onPointerMove={tilt}
            onPointerLeave={untilt}
            className="tilt rounded-xl border border-border bg-surface p-5 hover:border-accent/40"
          >
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
