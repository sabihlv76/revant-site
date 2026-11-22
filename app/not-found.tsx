import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        Error 404
      </p>
      <h1 className="mt-6 font-serif text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-[-0.02em]">
        This page <em className="text-accent">wandered off.</em>
      </h1>
      <Link
        href="/"
        className="mt-10 inline-flex h-12 w-fit items-center rounded-full bg-fg px-6 text-sm font-medium text-bg transition-opacity hover:opacity-85"
      >
        Back to the homepage
      </Link>
    </section>
  );
}
