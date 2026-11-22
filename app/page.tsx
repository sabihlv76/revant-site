import type { CSSProperties } from "react";
import Link from "next/link";
import { Emphasis } from "@/components/emphasis";
import { ArrowIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { experience, profile, projects, skills } from "@/content/site";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function Home() {
  return (
    <>
      <section className="wrap pt-16 pb-24 sm:pt-28 sm:pb-36">
        <p className="rise flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {profile.available && (
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
          )}
          {profile.role} · {profile.location}
        </p>
        <h1
          className="rise mt-8 max-w-[14ch] font-serif text-[clamp(3.25rem,10vw,8.5rem)] leading-[0.92] tracking-[-0.02em] text-balance"
          style={delay(80)}
        >
          <Emphasis text={profile.headline} />
        </h1>
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <p
            className="rise max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            style={delay(160)}
          >
            {profile.intro}
          </p>
          <div className="rise flex flex-wrap gap-3" style={delay(240)}>
            <Link
              href="#work"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              Selected work
              <ArrowIcon className="size-4 rotate-90" />
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center rounded-full border border-line px-6 text-sm font-medium transition-colors hover:border-fg"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="wrap py-16 sm:py-24">
        <SectionHeading index="01" title="Selected work" />
        <ol className="mt-4">
          {projects.map((project, i) => (
            <li key={project.slug} className="border-b border-line">
              <Link
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-[2rem_1fr_auto] items-baseline gap-x-3 py-8 sm:grid-cols-[4rem_1fr_auto] sm:gap-x-6 sm:py-10"
              >
                <span className="font-mono text-[11px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-[clamp(2.25rem,6vw,4.5rem)] leading-none tracking-tight transition-[color,translate] duration-300 group-hover:translate-x-2 group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">
                    {project.tagline}
                  </p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    {project.stack.join(" / ")}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <span className="font-mono text-[11px] text-muted">
                    {project.year}
                  </span>
                  <ArrowIcon className="size-5 transition-[rotate,color] duration-300 group-hover:-rotate-45 group-hover:text-accent" />
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section id="about" className="wrap py-16 sm:py-24">
        <SectionHeading index="02" title="About" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div className="space-y-6 text-lg leading-relaxed sm:text-xl lg:order-2">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="self-start lg:order-1">
            {profile.now.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-4 last:border-b"
              >
                <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {item.label}
                </dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="experience" className="wrap py-16 sm:py-24">
        <SectionHeading index="03" title="Experience" />
        <ol className="mt-4">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="grid gap-3 border-b border-line py-8 md:grid-cols-[10rem_1fr_1.3fr] md:gap-8"
            >
              <span className="pt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {job.period}
              </span>
              <div>
                <h3 className="text-lg font-medium">{job.role}</h3>
                <p className="text-muted">{job.company}</p>
              </div>
              <p className="leading-relaxed text-muted">{job.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="toolkit" className="wrap py-16 sm:py-24">
        <SectionHeading index="04" title="Toolkit" />
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-serif text-2xl leading-tight sm:block sm:space-y-2 sm:text-3xl">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="wrap pt-16 pb-24 sm:pt-24 sm:pb-36">
        <SectionHeading index="05" title="Contact" />
        <p className="mt-12 max-w-[16ch] font-serif text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-balance">
          <Emphasis text={profile.contactHeadline} />
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="group mt-12 inline-flex max-w-full items-center gap-3 border-b border-fg pb-2 text-2xl break-all transition-colors hover:border-accent hover:text-accent sm:text-4xl"
        >
          {profile.email}
          <ArrowIcon className="size-6 shrink-0 transition-[rotate] duration-300 group-hover:-rotate-45 sm:size-8" />
        </a>
        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-fg"
              >
                {social.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
