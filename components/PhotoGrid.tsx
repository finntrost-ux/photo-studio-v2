import Image from "next/image";
import Link from "next/link";
import type { PhotoItem } from "@/data/projects";

type PhotoGridProps = {
  photos: PhotoItem[];
  hrefBuilder: (index: number) => string;
};

export default function PhotoGrid({ photos, hrefBuilder }: PhotoGridProps) {
  return (
    <section className="grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, index) => (
        <Link key={photo.id} href={hrefBuilder(index)} className="block">
          <article className="relative aspect-[3/2] w-full">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 30vw"
              className="object-cover"
            />
          </article>
        </Link>
      ))}
    </section>
  );
}
