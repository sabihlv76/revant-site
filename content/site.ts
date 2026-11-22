// Everything the site says lives in this file. The details below are
// placeholders — replace them with your own and every page updates.

export type Link = { label: string; href: string };

export type Project = {
  slug: string; // used in the URL: /projects/<slug>
  title: string;
  tagline: string; // one line, shown in the work list
  year: string;
  role: string;
  stack: string[];
  summary: string; // opening paragraph of the case study
  links?: Link[];
  cover?: string; // optional image in /public, e.g. "/projects/ledger.jpg"
  sections: { heading: string; body: string[] }[];
};

export type Job = {
  period: string;
  role: string;
  company: string;
  description: string;
};

export const profile = {
  name: "Revant",
  role: "Software Engineer",
  location: "Remote",
  available: true,
  email: "hello@example.com",
  // Wrap words in *asterisks* to set them in italic accent type.
  headline: "I design and build *calm, fast* software for the web.",
  intro:
    "I'm a software engineer who cares about the details people feel but rarely notice — load times, clear interfaces, and code the next person can read.",
  contactHeadline: "Have a project in mind? *Let's talk.*",
  description:
    "Portfolio of Revant, a software engineer building fast, thoughtful products for the web.",
  about: [
    "I started programming by taking apart websites I liked to see how they worked. That curiosity turned into a career building products end to end — from database schemas to the last pixel of an interface.",
    "Today I work mostly with TypeScript, React and Node, and I'm happiest on small teams where engineers talk directly to the people who use what we build.",
    "Outside of work I contribute to open source, write about what I learn, and spend too long choosing fonts.",
  ],
  now: [
    { label: "Currently", value: "Open to new projects" },
    { label: "Focus", value: "Product engineering, design systems" },
    { label: "Learning", value: "Rust and systems programming" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X / Twitter", href: "https://x.com/" },
  ] satisfies Link[],
};

export const projects: Project[] = [
  {
    slug: "ledger",
    title: "Ledger",
    tagline: "A personal finance dashboard that makes spending legible",
    year: "2026",
    role: "Design & full-stack development",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    summary:
      "Ledger pulls transactions from several bank accounts into one calm view, groups them automatically, and answers the question most budgeting apps bury: where did the money actually go this month?",
    links: [
      { label: "Live site", href: "https://example.com" },
      { label: "Source code", href: "https://github.com/" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Most finance tools show every number at once. People I interviewed said they opened them, felt overwhelmed, and closed them again within a minute.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "A single monthly view with three numbers up front — in, out, and left over — and categories that expand only when you ask. Transactions are categorised by a small rules engine users can teach by correcting it once.",
          "The app is server-rendered with Next.js, stores data in PostgreSQL, and syncs accounts in a background job so the dashboard always loads instantly.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Early users checked their dashboard four times a week on average, compared with roughly once a month for the tools they used before.",
        ],
      },
    ],
  },
  {
    slug: "atlas",
    title: "Atlas",
    tagline: "Collaborative trip planning with a shared, live itinerary",
    year: "2025",
    role: "Front-end lead",
    stack: ["React", "TypeScript", "WebSockets", "Mapbox"],
    summary:
      "Atlas lets groups plan a trip together in real time: drop places on a map, drag them into days, and see everyone's changes as they happen.",
    links: [{ label: "Case study", href: "https://example.com" }],
    sections: [
      {
        heading: "The problem",
        body: [
          "Group trips are usually planned across a chat thread, a spreadsheet and a dozen screenshots. Nothing stays in sync and decisions get lost.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "I led the front end: a map and itinerary that stay in sync over WebSockets, with optimistic updates so every drag feels instant, and conflict handling when two people move the same stop.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The real-time editor became the product's main selling point and cut the average time to a finished itinerary roughly in half.",
        ],
      },
    ],
  },
  {
    slug: "pulse",
    title: "Pulse",
    tagline: "An open-source CLI for monitoring uptime from your terminal",
    year: "2024",
    role: "Creator & maintainer",
    stack: ["Go", "SQLite", "GitHub Actions"],
    summary:
      "Pulse is a tiny command-line tool that checks your sites on a schedule, keeps a local history, and tells you when something breaks — no account or dashboard required.",
    links: [{ label: "GitHub", href: "https://github.com/" }],
    sections: [
      {
        heading: "Why I made it",
        body: [
          "I wanted uptime monitoring for side projects without signing up for yet another service. Pulse is a single binary you can run anywhere.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Checks run concurrently, results are stored in SQLite, and notifications go out through a simple webhook so they land in Slack, Discord or email.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The project has grown a small community of contributors, and it taught me a lot about writing software other people depend on.",
        ],
      },
    ],
  },
  {
    slug: "studio-notes",
    title: "Studio Notes",
    tagline: "A minimal writing app for designers' project journals",
    year: "2023",
    role: "Solo project",
    stack: ["SvelteKit", "IndexedDB", "PWA"],
    summary:
      "Studio Notes is an offline-first journal for logging design decisions as you make them, so the reasoning behind a project is never lost.",
    sections: [
      {
        heading: "The idea",
        body: [
          "Designers make hundreds of small decisions a week and forget why by the next review. A fast, quiet place to jot them down helps.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "An installable web app that works fully offline, stores everything locally in IndexedDB, and exports a tidy project log as Markdown.",
        ],
      },
    ],
  },
];

export const experience: Job[] = [
  {
    period: "2024 — Now",
    role: "Senior Software Engineer",
    company: "Company Name",
    description:
      "Lead engineer on the core product. Rebuilt the front end on Next.js and cut median page load time by 60%.",
  },
  {
    period: "2022 — 2024",
    role: "Software Engineer",
    company: "Another Company",
    description:
      "Built customer-facing features across a React and Node stack, and set up the team's component library.",
  },
  {
    period: "2020 — 2022",
    role: "Junior Developer",
    company: "First Company",
    description:
      "Shipped marketing sites and internal tools, and learned how real software gets made.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "SQL", "HTML & CSS"],
  },
  {
    group: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS", "SvelteKit"],
  },
  {
    group: "Tools",
    items: ["PostgreSQL", "Docker", "Git", "Figma", "Vercel"],
  },
];

// The public address of the site, used for SEO tags and the sitemap.
// Set SITE_URL when you deploy (Vercel sets its own URL automatically).
export const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
