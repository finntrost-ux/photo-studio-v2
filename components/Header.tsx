"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

export default function Header() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!projectsOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!projectsRef.current?.contains(event.target as Node)) {
        setProjectsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [projectsOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <div
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-8
          [&_a]:text-[#FF2800] [&_button]:text-[#FF2800]"
      >
        <Link href="/" className="type-brand">
          Finn Trost
        </Link>
        <nav className="type-nav flex items-center gap-5 sm:gap-8">
          <Link href="/all-photos">All Photos</Link>
          <div ref={projectsRef} className="relative">
            <button
              type="button"
              className="cursor-pointer"
              aria-expanded={projectsOpen}
              aria-haspopup="true"
              onClick={() => setProjectsOpen((open) => !open)}
            >
              Films
            </button>
            <div
              className={`absolute right-0 top-full z-20 min-w-40 pt-3 transition-opacity ${
                projectsOpen
                  ? "visible opacity-100"
                  : "invisible pointer-events-none opacity-0"
              }`}
            >
              <div className="type-nav space-y-1 bg-white p-3 text-left">
                {projects.map((project, index) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="block whitespace-nowrap py-1"
                    onClick={() => setProjectsOpen(false)}
                  >
                    #{index + 1} {project.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
