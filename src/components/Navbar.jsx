import { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa'
import { profile, hobbies, gallery } from '../data'

const links = [
  ['About', '#about'],
  ['Security', '#security'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ...(hobbies.length || gallery.length ? [['Hobbies', '#hobbies']] : []),
  ['Contact', '#contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape, and drop its state once the desktop nav takes over.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    const mq = window.matchMedia('(min-width: 48rem)')
    const onResize = () => { if (mq.matches) setOpen(false) }
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onResize)
    return () => { window.removeEventListener('keydown', onKey); mq.removeEventListener('change', onResize) }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? 'border-b border-border bg-bg/80 backdrop-blur' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-lg font-semibold tracking-tight">
          <span className="text-accent">&lt;</span>LT<span className="text-accent">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition hover:text-text">{label}</a>
            </li>
          ))}
          <li>
            <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-lg hover:text-text">
              <FaGithub />
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-xl md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="block rounded-md px-2 py-2 text-muted hover:bg-surface hover:text-text">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
