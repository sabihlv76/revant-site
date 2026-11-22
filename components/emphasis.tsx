import { Fragment } from "react";

// Renders text with *asterisk-wrapped* words in italic accent type.
export function Emphasis({ text }: { text: string }) {
  return text.split("*").map((part, i) =>
    i % 2 === 1 ? (
      <em key={i} className="text-accent">
        {part}
      </em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
