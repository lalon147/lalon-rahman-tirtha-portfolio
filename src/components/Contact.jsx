import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Section } from './Section'
import { profile } from '../data'

export function Contact() {
  const row = 'flex items-center gap-3 text-muted transition hover:text-text'
  return (
    <Section id="contact" eyebrow="contact" title="Let's build something">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="max-w-md text-lg leading-relaxed text-muted">
            Have a project, a role, or just want to talk shop? Send a message below or reach me on LinkedIn — I usually reply within a day.
          </p>
          <ul className="mt-8 space-y-4">
            <li><a className={row} href={profile.social.linkedin} target="_blank" rel="noreferrer"><FaLinkedin className="text-accent" /> linkedin.com/in/lalon-rahman-tirtha</a></li>
            <li><a className={row} href={profile.social.github} target="_blank" rel="noreferrer"><FaGithub className="text-accent" /> github.com/lalon147</a></li>
          </ul>
        </div>

        {/* Handled by Netlify Forms — no backend or API key needed. */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thanks.html"
          className="space-y-4 rounded-xl border border-border bg-surface p-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>

          <Field label="Name" name="name" type="text" required />
          <Field label="Email" name="email" type="email" required />
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-muted">Message</label>
            <textarea id="message" name="message" rows="5" required className={inputCls} />
          </div>
          <button type="submit" className="w-full rounded-md bg-accent px-5 py-2.5 font-semibold text-bg transition hover:brightness-110">
            Send message
          </button>
        </form>
      </div>
    </Section>
  )
}

const inputCls =
  'w-full rounded-md border border-border bg-bg px-3 py-2 text-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30'

function Field({ label, name, type, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-muted">{label}</label>
      <input id={name} name={name} type={type} required={required} className={inputCls} />
    </div>
  )
}
