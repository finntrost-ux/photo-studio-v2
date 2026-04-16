import Link from "next/link";
import { projects } from "@/data/projects";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
        <Link
          href="/"
          className="type-brand text-neutral-900"
        >
          Finn Trost
        </Link>
        <nav className="type-nav flex items-center gap-5 text-neutral-900 sm:gap-8">
          <Link href="/all-photos">All Photos</Link>
          <div className="group relative">
            <button className="cursor-default">Projects</button>
            <div className="invisible absolute right-0 top-full z-20 min-w-40 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="type-nav space-y-1 border border-black bg-white p-3 text-left">
                {projects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="block whitespace-nowrap py-1 text-neutral-900"
                  >
                    {project.label}
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
