import PhotoGrid from "@/components/PhotoGrid";
import { allPhotos } from "@/data/projects";

export default function AllPhotosPage() {
  return (
    <section className="pt-2">
      <PhotoGrid photos={allPhotos} hrefBuilder={(index) => `/all-photos/${index}`} />
    </section>
  );
}
