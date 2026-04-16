import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPhotos } from "@/data/projects";

type AllPhotosFullscreenPageProps = {
  params: Promise<{ index: string }>;
};

export default async function AllPhotosFullscreenPage({
  params,
}: AllPhotosFullscreenPageProps) {
  const { index } = await params;
  const currentIndex = Number(index);

  if (Number.isNaN(currentIndex) || currentIndex < 0 || currentIndex >= allPhotos.length) {
    notFound();
  }

  const currentPhoto = allPhotos[currentIndex];
  const prevIndex = currentIndex === 0 ? allPhotos.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === allPhotos.length - 1 ? 0 : currentIndex + 1;

  return (
    <section className="fixed inset-0 z-40 bg-white px-4 pb-8 pt-20 sm:px-8 sm:pt-24">
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col">
        <div className="type-meta mb-4 flex items-center justify-between">
          <Link href="/all-photos" className="type-nav">
            Back
          </Link>
          <p>
            {currentIndex + 1} / {allPhotos.length}
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
            href={`/all-photos/${prevIndex}`}
            aria-label="Previous photo"
            className="absolute inset-y-0 left-0 w-1/2 cursor-w-resize"
          />
          <Link
            href={`/all-photos/${nextIndex}`}
            aria-label="Next photo"
            className="absolute inset-y-0 right-0 w-1/2 cursor-e-resize"
          />
        </div>
      </div>
    </section>
  );
}
