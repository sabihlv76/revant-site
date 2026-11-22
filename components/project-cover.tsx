import Image from "next/image";
import type { Project } from "@/content/site";

// Shows the project's cover image, or a generated title card when the
// project has no image yet.
export function ProjectCover({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  if (project.cover) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <Image
          src={project.cover}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 76rem) 72rem, 100vw"
          loading="eager"
          className="object-cover"
        />
      </div>
    );
  }

  // Move the accent disc around so each project's card looks different.
  const positions = ["72% 30%", "28% 68%", "80% 75%", "22% 26%"];
  const [x, y] = positions[index % positions.length].split(" ");

  return (
    <div
      aria-hidden
      className="relative aspect-[16/9] overflow-hidden bg-surface"
      style={{
        backgroundImage:
          "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    >
      <div
        className="absolute aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ left: x, top: y }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-serif text-[clamp(3rem,12vw,10rem)] italic leading-none tracking-tight">
          {project.title}
        </span>
      </div>
      <span className="absolute top-4 left-4 font-mono text-[11px] text-muted sm:top-6 sm:left-6">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute right-4 bottom-4 font-mono text-[11px] text-muted sm:right-6 sm:bottom-6">
        {project.year}
      </span>
    </div>
  );
}
