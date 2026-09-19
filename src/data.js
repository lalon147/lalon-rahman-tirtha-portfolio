// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the
//  site — no need to touch the components.
// ─────────────────────────────────────────────────────────────

import { SiBurpsuite, SiCss, SiExpo, SiExpress, SiFigma, SiFirebase, SiGit, SiGithub, SiHtml5, SiJavascript, SiJsonwebtokens, SiKalilinux, SiLinux, SiMetasploit, SiMongodb, SiNetlify, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiRedux, SiStripe, SiTailwindcss, SiTypescript, SiVercel, SiWireshark } from 'react-icons/si'
import { FaFlag, FaNetworkWired } from 'react-icons/fa'
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
  title: 'Full-Stack Developer',
  roles: ['Full-Stack Developer', 'React & Next.js Developer', 'React Native Developer', 'Security Enthusiast'],
  photo,
  tagline:
    'I build web and mobile products end to end — React and Next.js on the front, Node.js, Express and MongoDB/PostgreSQL behind — and I like to break them too, with a Kali box always within reach.',
  about: [
    "I'm a developer currently completing a BSc (Hons) in Applied Mathematics at the University of Dhaka. I started with the MERN stack in 2022 and have since shipped full products: marketplaces, learning platforms, an auto-repair parts management system and a cross-platform goal-tracking app.",
    'Outside of building things I spend time on the offensive side of security — CTFs, network scanning and web app testing with Nmap, Burp Suite and Metasploit. It makes me a more careful engineer: I think about auth, input validation and rate limiting before the first line of a feature is written.',
    "I'm open to full-time, contract and freelance work, remote or on-site.",
  ],
  interests: ['Machine Learning', 'Artificial Intelligence', 'Cloud Computing', 'Cyber Security', 'Robotics'],
  education: {
    degree: 'BSc (Hons) in Applied Mathematics',
    school: 'University of Dhaka',
    period: '2022 — Present',
  },
  social: {
    github: 'https://github.com/lalon147',
    linkedin: 'https://www.linkedin.com/in/lalon-rahman-tirtha/',
  },
}

// Icons come from react-icons (https://react-icons.github.io/react-icons) — import them above.
export const skills = [
  {
    group: 'Frontend',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Redux Toolkit', icon: SiRedux },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
    ],
  },
  {
    group: 'Backend & Data',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'JWT', icon: SiJsonwebtokens },
      { name: 'Stripe', icon: SiStripe },
    ],
  },
  {
    group: 'Mobile',
    items: [
      { name: 'React Native', icon: SiReact },
      { name: 'Expo', icon: SiExpo },
    ],
  },
  {
    group: 'Security',
    items: [
      { name: 'Kali Linux', icon: SiKalilinux },
      { name: 'Nmap', icon: FaNetworkWired },
      { name: 'Burp Suite', icon: SiBurpsuite },
      { name: 'Metasploit', icon: SiMetasploit },
      { name: 'Wireshark', icon: SiWireshark },
      { name: 'CTF', icon: FaFlag },
    ],
  },
  {
    group: 'Tools',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Netlify', icon: SiNetlify },
      { name: 'Figma', icon: SiFigma },
      { name: 'Linux', icon: SiLinux },
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
      'Parts management and ordering system for an auto-body repair shop. Staff log in, browse vehicles by make/model, manage the parts catalogue and place orders; invoices can be parsed straight into stock. Ships as an installable Android app via Trusted Web Activity.',
    tech: ['Next.js', 'React', 'PostgreSQL', 'Lucide', 'Vercel', 'Android TWA'],
    live: 'https://mbsmash.vercel.app',
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
