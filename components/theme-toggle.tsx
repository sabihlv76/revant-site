"use client";

import { useLayoutEffect } from "react";
import { MoonIcon, SunIcon } from "./icons";

function currentTheme() {
  const chosen = document.documentElement.getAttribute("data-theme");
  if (chosen === "light" || chosen === "dark") return chosen;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  // React's dev-mode remount clears the attribute the inline script in the
  // root layout set on <html>, so re-apply it. A no-op in production.
  useLayoutEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) document.documentElement.setAttribute("data-theme", saved);
    } catch {
      // Storage unavailable: fall back to the system theme.
    }
  }, []);

  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable: the choice lasts until the page reloads.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch color theme"
      className="ml-1 grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-fg hover:text-fg"
    >
      <SunIcon className="theme-icon-light size-4" />
      <MoonIcon className="theme-icon-dark size-4" />
    </button>
  );
}
