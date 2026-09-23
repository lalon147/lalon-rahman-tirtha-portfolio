import { FaGithub, FaLinkedin, FaArrowRight, FaFileDownload } from 'react-icons/fa'
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
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              {profile.name}
            </span>
            .
          </h1>

          {/* Screen readers get the static list; the animated text is decorative. */}
          <p className="mt-4 font-mono text-xl text-muted sm:text-2xl">
            <span className="sr-only">{profile.roles.join(', ')}</span>
            <span className="caret" aria-hidden="true">{role}</span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#security"
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
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-semibold transition hover:border-accent/60 hover:bg-surface"
            >
              <FaFileDownload /> Resume
            </a>
            <div className="ml-1 flex items-center gap-4 text-xl text-muted">
              <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-text"><FaGithub /></a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-text"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-56 sm:w-72 md:w-full md:max-w-xs">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/40 to-accent-2/40 blur-2xl" />
          <img
            src={profile.photo}
            alt={`${profile.name} avatar`}
            width="800"
            height="800"
            fetchPriority="high"
            decoding="async"
            className="relative aspect-square w-full rounded-3xl border border-border object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
