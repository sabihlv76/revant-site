import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/icons";
import { ProjectCover } from "@/components/project-cover";
import { projects } from "@/content/site";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

// Only the projects in content/site.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.tagline };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="wrap pt-10 sm:pt-14">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-fg"
        >
          <ArrowIcon className="size-4 rotate-180 transition-[translate] group-hover:-translate-x-1" />
          All work
        </Link>
        <p className="rise mt-14 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {project.year} · {project.role}
        </p>
        <h1
          className="rise mt-6 font-serif text-[clamp(3.5rem,12vw,9.5rem)] leading-[0.9] tracking-[-0.02em]"
          style={delay(80)}
        >
          {project.title}
        </h1>
        <p
          className="rise mt-8 max-w-3xl text-xl leading-relaxed sm:text-2xl"
          style={delay(160)}
        >
          {project.summary}
        </p>
      </header>

      <div className="wrap rise mt-14 sm:mt-20" style={delay(240)}>
        <ProjectCover project={project} index={index} />
      </div>

      <div className="wrap grid gap-14 py-16 sm:py-24 lg:grid-cols-[16rem_1fr] lg:gap-20">
        <dl className="self-start lg:sticky lg:top-24">
          <Fact label="Role">{project.role}</Fact>
          <Fact label="Year">{project.year}</Fact>
          <Fact label="Stack">
            <ul>
              {project.stack.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </Fact>
          {project.links && project.links.length > 0 && (
            <Fact label="Links">
              <ul>
                {project.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </Fact>
          )}
        </dl>

        <div className="space-y-14">
          {project.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-4xl leading-tight tracking-tight">
                {section.heading}
              </h2>
              <div className="mt-5 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {next.slug !== project.slug && (
        <nav aria-label="Next project" className="border-t border-line">
          <Link
            href={`/projects/${next.slug}`}
            className="wrap group flex items-end justify-between gap-6 py-14 sm:py-20"
          >
            <span>
              <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Next project
              </span>
              <span className="mt-4 block font-serif text-[clamp(2.75rem,8vw,6rem)] leading-none tracking-tight transition-colors group-hover:text-accent">
                {next.title}
              </span>
            </span>
            <ArrowIcon className="mb-2 size-8 shrink-0 transition-[rotate,color] duration-300 group-hover:-rotate-45 group-hover:text-accent sm:size-12" />
          </Link>
        </nav>
      )}
    </article>
  );
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[6rem_1fr] gap-4 border-t border-line py-4 last:border-b lg:grid-cols-1 lg:gap-1.5">
      <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        {label}
      </dt>
      <dd>{children}</dd>
    </div>
  );
}
