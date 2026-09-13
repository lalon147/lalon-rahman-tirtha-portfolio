import { profile } from '../data'

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono text-xs">Built with React, Vite &amp; Tailwind · Hosted on Netlify</p>
      </div>
    </footer>
  )
}
