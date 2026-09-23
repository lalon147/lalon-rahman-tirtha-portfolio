import { useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Section } from './Section'
import { hobbies, gallery } from '../data'

export function Hobbies() {
  const dialog = useRef(null)
  const [active, setActive] = useState(null)

  if (!hobbies.length && !gallery.length) return null

  const open = (photo) => { setActive(photo); dialog.current.showModal() }

  return (
    <Section id="hobbies" eyebrow="off the keyboard" title="Life outside the terminal">
      {hobbies.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map(({ title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-surface p-5">
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      )}

      {gallery.length > 0 && (
        <ul className={`grid grid-cols-2 gap-3 md:grid-cols-3 ${hobbies.length ? 'mt-10' : ''}`}>
          {gallery.map((photo) => (
            <li key={photo.src}>
              <button
                type="button"
                onClick={() => open(photo)}
                className="group block w-full overflow-hidden rounded-xl border border-border focus-visible:outline-2 focus-visible:outline-accent"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Native <dialog>: Escape closes it and focus is trapped for free; clicking the backdrop closes too. */}
      <dialog
        ref={dialog}
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
        className="m-auto max-h-[90vh] max-w-[min(56rem,92vw)] rounded-xl border border-border bg-surface p-0 text-text backdrop:bg-black/80"
      >
        {active && (
          <figure>
            <img src={active.src} alt={active.caption} className="max-h-[80vh] w-full object-contain" />
            <figcaption className="flex items-center justify-between gap-4 px-4 py-3 text-sm text-muted">
              {active.caption}
              <button type="button" onClick={() => dialog.current.close()} aria-label="Close" className="text-lg hover:text-text"><FaTimes /></button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </Section>
  )
}
