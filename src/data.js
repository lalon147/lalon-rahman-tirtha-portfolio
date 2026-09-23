// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the
//  site — no need to touch the components.
// ─────────────────────────────────────────────────────────────

import { SiBurpsuite, SiGnubash, SiHackthebox, SiOwasp, SiPfsense, SiPython, SiTryhackme, SiUbuntu, SiCss, SiExpo, SiExpress, SiFigma, SiFirebase, SiGit, SiGithub, SiHtml5, SiJavascript, SiJsonwebtokens, SiKalilinux, SiLinux, SiMetasploit, SiMongodb, SiNetlify, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiRedux, SiStripe, SiTailwindcss, SiTypescript, SiVercel, SiWireshark } from 'react-icons/si'
import { FaFlag, FaNetworkWired, FaPhoneAlt, FaSearch, FaShieldAlt, FaTerminal } from 'react-icons/fa'
import photo from './assets/avatar.jpg'
import smashquote from './assets/projects/smashquote.jpg'
import mbsmash from './assets/projects/mbsmash.jpg'
import goalpath from './assets/projects/goalpath.jpg'
import sekhanei from './assets/projects/sekhanei.jpg'
import masterProgramming from './assets/projects/master-programming.jpg'
import risansCeremony from './assets/projects/risans-ceremony.jpg'
import typingMaster from './assets/projects/typing-master.jpg'
import creativeBrain from './assets/projects/creative-brain.jpg'

export const profile = {
  name: 'Lalon Rahman Tirtha',
  firstName: 'Lalon',
  title: 'Cyber Security & Full-Stack Developer',
  roles: ['Aspiring Penetration Tester', 'Security-Focused Developer', 'CTF Player', 'Full-Stack Developer'],
  photo,
  // Public copy: no address, phone or email — visitors reach out through the contact form.
  resume: '/Lalon-Rahman-Tirtha-Resume.pdf',
  tagline:
    "I break things to learn how to protect them — recon, enumeration and exploitation in the lab, hardened firewalls and servers at home — and I bring that attacker's view to the production apps I build.",
  about: [
    "I've been training on the offensive side of security since 2019: Hack The Box and TryHackMe machines worked end to end — reconnaissance, enumeration, exploitation, privilege escalation — with written walkthroughs. I've completed the TryHackMe Jr Penetration Tester path and I'm working through TCM Security's PNPT, including Active Directory attacks and lateral movement.",
    'I also build and defend real infrastructure: a segmented network behind a pfSense firewall (on-premises and on Azure) and a hardened VoIP/PBX server, kept patched, access-reviewed and scanned from the outside.',
    "My background is full-stack development, and I still ship production software — including a parts-management system a Melbourne repair shop runs on every day. Knowing how applications are built makes me better at finding where they break, and it means auth, input validation and rate limiting come before the first line of any feature.",
  ],
  interests: ['Penetration Testing', 'Active Directory Security', 'Network Defence', 'Web App Security', 'Cloud Security', 'AI & Machine Learning'],
  social: {
    github: 'https://github.com/lalon147',
    linkedin: 'https://www.linkedin.com/in/lalon-rahman-tirtha/',
  },
}

// status: 'done' | 'progress'
export const certifications = [
  { name: 'Jr Penetration Tester learning path', issuer: 'TryHackMe', status: 'done' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', status: 'done' },
  { name: 'Practical Network Penetration Tester (PNPT)', issuer: 'TCM Security', status: 'progress' },
  { name: 'Certified Ethical Hacker — coursework', issuer: 'EC-Council · 2019', status: 'done' },
]

export const securityWork = [
  {
    title: 'Offensive Security Labs',
    icon: SiHackthebox,
    summary:
      'Hack The Box and TryHackMe machines completed end to end — reconnaissance, enumeration, exploitation and privilege escalation — each with a written walkthrough. Now extending into Active Directory post-exploitation through the PNPT course.',
    tags: ['Nmap', 'Burp Suite', 'Metasploit', 'Privilege escalation', 'Active Directory'],
  },
  {
    title: 'pfSense Firewall Network',
    icon: SiPfsense,
    summary:
      'Designed and deployed a segmented network behind pfSense — WAN/LAN interfaces, VLANs, NAT and default-deny rule sets — on-premises and on Azure, then validated it by scanning from outside.',
    tags: ['pfSense', 'VLANs', 'NAT', 'Default-deny', 'Azure'],
  },
  {
    title: 'Hardened VoIP / PBX Server',
    icon: FaPhoneAlt,
    summary:
      'Built a VoIP/PBX server on Ubuntu with SIP extensions and call routing, then hardened it: management access restricted, strong credentials enforced, exposed services kept to a minimum, patched on a routine.',
    tags: ['Ubuntu', 'SIP', 'Hardening', 'Least privilege'],
  },
  {
    title: 'Secure-by-Default Production Apps',
    icon: FaShieldAlt,
    summary:
      'The apps below are built with the same mindset: Postgres row-level security for tenant isolation, signed sessions, database-backed login throttling, field-level audit logs and server-side validation against the OWASP Top 10.',
    tags: ['OWASP Top 10', 'Row-Level Security', 'Rate limiting', 'Audit logging'],
  },
]

// Your hobbies and leisure time. The section appears on the site as soon as
// either list has something in it. Put photos in src/assets/hobbies/ and import
// them at the top of this file, e.g.  import hike from './assets/hobbies/hike.jpg'
export const hobbies = [
  // { title: 'Hiking', text: 'Weekend trails around the Dandenongs.' },
]
export const gallery = [
  // { src: hike, caption: 'Summit of Mt Dandenong' },
]

// Icons come from react-icons (https://react-icons.github.io/react-icons) — import them above.
export const skills = [
  {
    group: 'Offensive Security',
    items: [
      { name: 'Kali Linux', icon: SiKalilinux },
      { name: 'Nmap', icon: FaNetworkWired },
      { name: 'Burp Suite', icon: SiBurpsuite },
      { name: 'Metasploit', icon: SiMetasploit },
      { name: 'Recon & OSINT', icon: FaSearch },
      { name: 'OWASP Top 10', icon: SiOwasp },
      { name: 'Hack The Box', icon: SiHackthebox },
      { name: 'TryHackMe', icon: SiTryhackme },
      { name: 'CTF', icon: FaFlag },
    ],
  },
  {
    group: 'Network & Defence',
    items: [
      { name: 'pfSense', icon: SiPfsense },
      { name: 'Wireshark', icon: SiWireshark },
      { name: 'Network segmentation', icon: FaNetworkWired },
      { name: 'Linux hardening', icon: SiLinux },
      { name: 'Ubuntu Server', icon: SiUbuntu },
      { name: 'Log & traffic analysis', icon: FaTerminal },
    ],
  },
  {
    group: 'Scripting',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'Bash', icon: SiGnubash },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    group: 'Full-Stack Development',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React Native', icon: SiExpo },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Redux Toolkit', icon: SiRedux },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
    ],
  },
  {
    group: 'Data & Auth',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'JWT', icon: SiJsonwebtokens },
      { name: 'Stripe', icon: SiStripe },
    ],
  },
  {
    group: 'Tools & Cloud',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Netlify', icon: SiNetlify },
      { name: 'Figma', icon: SiFigma },
    ],
  },
]

export const projects = [
  {
    title: 'SmashQuote',
    year: '2026',
    featured: true,
    image: smashquote,
    summary:
      'Multi-tenant quoting and estimating platform for smash repair shops. Each shop is an isolated tenant behind Postgres Row-Level Security; the quote builder mixes parts, paint, labour and sublet lines with live GST totals computed by a DB trigger, and produces a printable A4 quote with the shop letterhead. Vehicle photos upload straight from the browser to Cloudflare R2 via presigned URLs.',
    tech: ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'Row-Level Security', 'Cloudflare R2', 'Tailwind'],
  },
  {
    title: 'MB Smash Repair',
    year: '2026',
    featured: true,
    image: mbsmash,
    summary:
      'Parts management and ordering system in daily use at a real Australian smash repair shop. Staff order every part for every car through it, chase overdue deliveries and reconcile invoices into stock — by the owner\'s estimate around $20,000 of parts orders a week. Next.js on PostgreSQL with signed sessions, login throttling and a full change log; ships as an installable Android app via Trusted Web Activity. The live link opens an interactive demo with sample data — the production system stays private.',
    tech: ['Next.js', 'React', 'PostgreSQL', 'Lucide', 'Vercel', 'Android TWA'],
    live: 'https://mbsmash-demo.netlify.app',
    liveLabel: 'Live demo',
    code: 'https://github.com/lalon147/mbsmash',
  },
  {
    title: 'GoalPath (LOCKED IN)',
    year: '2026',
    featured: true,
    image: goalpath,
    summary:
      'Cross-platform goal and habit tracker: set milestones, keep streaks, and watch progress on a live analytics dashboard with AI-generated coaching. React Native/Expo mobile app and React web client sharing one Express + MongoDB API with JWT auth, rate limiting and validation.',
    tech: ['React Native', 'Expo', 'React', 'Redux Toolkit', 'Express', 'MongoDB', 'JWT', 'Claude API'],
    live: 'https://goalpath-web.vercel.app',
    code: 'https://github.com/lalon147/goalpath',
  },
  {
    title: 'Sekhanei Dot Com',
    year: '2022',
    image: sekhanei,
    summary:
      'Marketplace for buying and selling used cars with three roles — admin, buyer and seller. Admin can verify or remove users, sellers list cars, buyers pay via Stripe. Firebase auth with JWT-protected API routes and TanStack Query on the client.',
    tech: ['React', 'Firebase', 'Express', 'MongoDB', 'Stripe', 'TanStack Query', 'JWT', 'DaisyUI'],
    live: 'https://radiant-bavarois-69018a.netlify.app',
    code: 'https://github.com/lalon147/sekhanei-dot-com',
    server: 'https://github.com/lalon147/sekhanei-server',
  },
  {
    title: 'Master Programming',
    year: '2022',
    image: masterProgramming,
    summary:
      'Online course platform. Admins add courses and verify instructors, students enrol and download course modules as PDF, and purchase statistics are charted with Recharts.',
    tech: ['React', 'Firebase', 'Express', 'MongoDB', 'Recharts', 'react-pdf', 'DaisyUI'],
    live: 'https://master-programming-e5574.firebaseapp.com',
    code: 'https://github.com/lalon147/master-programming-project',
    server: 'https://github.com/lalon147/master-programming-server',
  },
  {
    title: "Risan's Ceremony",
    year: '2022',
    image: risansCeremony,
    summary:
      "Service-review site for an event manager (weddings, birthdays, occasions). Logged-in users can add services and create, edit or delete reviews; Firebase auth plus JWT authorisation and paginated data fetching.",
    tech: ['React', 'Firebase', 'Express', 'MongoDB', 'JWT'],
    live: 'https://the-urban-luxary.web.app',
    code: 'https://github.com/lalon147/service-review-client',
    server: 'https://github.com/lalon147/service-review-server',
  },
  {
    title: 'Typing Master',
    year: '2022',
    image: typingMaster,
    summary: 'A small React app for practising and measuring typing speed and accuracy.',
    tech: ['React', 'JavaScript'],
    live: 'https://lalon147.github.io/typing-master/',
    code: 'https://github.com/lalon147/typing-master',
  },
  {
    title: 'Creative Brain',
    year: '2022',
    image: creativeBrain,
    summary: 'Quiz platform for testing your knowledge of React, Git, HTML and CSS, with instant answer feedback.',
    tech: ['React', 'React Router', 'Bootstrap'],
    code: 'https://github.com/lalon147/creative-brain',
  },
]
