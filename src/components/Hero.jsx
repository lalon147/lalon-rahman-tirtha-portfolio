import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'
import { profile } from '../data'
import { useTypewriter } from '../hooks'

export function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="glow absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 sm:py-32 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to work
            <span className="text-border">|</span>
            <FaMapMarkerAlt className="text-accent" /> {profile.location}
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              {profile.name}
            </span>
            .
          </h1>

          <p className="caret mt-4 font-mono text-xl text-muted sm:text-2xl" aria-live="polite">
            {role}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-bg transition hover:brightness-110"
            >
              See my work <FaArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-semibold transition hover:border-accent/60 hover:bg-surface"
            >
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-4 text-xl text-muted">
              <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-text"><FaGithub /></a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-text"><FaLinkedin /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-text"><FaEnvelope /></a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-56 sm:w-72 md:w-full md:max-w-xs">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/40 to-accent-2/40 blur-2xl" />
          <img
            src={profile.photo}
            alt={profile.name}
            width="640"
            height="640"
            className="relative aspect-square w-full rounded-3xl border border-border object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
