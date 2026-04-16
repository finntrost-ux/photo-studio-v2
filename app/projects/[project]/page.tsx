import { notFound } from "next/navigation";
import PhotoGrid from "@/components/PhotoGrid";
import { photosByProject, projects, type ProjectName } from "@/data/projects";

type ProjectGalleryPageProps = {
  params: Promise<{ project: string }>;
};

export default async function ProjectGalleryPage({ params }: ProjectGalleryPageProps) {
  const { project } = await params;
  const projectExists = projects.some((entry) => entry.slug === project);

  if (!projectExists) {
    notFound();
  }

  const projectPhotos = photosByProject(project as ProjectName);

  return (
    <section className="pt-2">
      <PhotoGrid
        photos={projectPhotos}
        hrefBuilder={(index) => `/projects/${project}/${index}`}
      />
    </section>
  );
}
