import { useReveal } from '../hooks'

export function Section({ id, eyebrow, title, children, className = '' }) {
  const ref = useReveal()
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div ref={ref} className="reveal mx-auto max-w-6xl px-5 sm:px-8">
        {eyebrow && (
          <p className="mb-2 font-mono text-sm text-accent">
            <span className="text-muted">//</span> {eyebrow}
          </p>
        )}
        {title && <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>}
        {children}
      </div>
    </section>
  )
}
