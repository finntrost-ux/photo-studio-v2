import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { photosByProject, projects, type ProjectName } from "@/data/projects";

type ProjectFullscreenPageProps = {
  params: Promise<{ project: string; index: string }>;
};

export default async function ProjectFullscreenPage({
  params,
}: ProjectFullscreenPageProps) {
  const { project, index } = await params;
  const projectExists = projects.some((entry) => entry.slug === project);
  const currentIndex = Number(index);

  if (!projectExists || Number.isNaN(currentIndex)) {
    notFound();
  }

  const projectPhotos = photosByProject(project as ProjectName);

  if (currentIndex < 0 || currentIndex >= projectPhotos.length) {
    notFound();
  }

  const currentPhoto = projectPhotos[currentIndex];
  const prevIndex = currentIndex === 0 ? projectPhotos.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === projectPhotos.length - 1 ? 0 : currentIndex + 1;

  return (
    <section className="fixed inset-0 z-40 bg-white px-4 pb-8 pt-20 sm:px-8 sm:pt-24">
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col">
        <div className="type-meta mb-4 flex items-center justify-between">
          <Link href={`/projects/${project}`} className="type-nav">
            Back
          </Link>
          <p>
            {currentIndex + 1} / {projectPhotos.length}
          </p>
        </div>

        <div className="relative flex-1">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            preload
            sizes="100vw"
            className="object-contain"
          />
          <Link
            href={`/projects/${project}/${prevIndex}`}
            aria-label="Previous photo"
            className="absolute inset-y-0 left-0 w-1/2 cursor-w-resize"
          />
          <Link
            href={`/projects/${project}/${nextIndex}`}
            aria-label="Next photo"
            className="absolute inset-y-0 right-0 w-1/2 cursor-e-resize"
          />
        </div>
      </div>
    </section>
  );
}
