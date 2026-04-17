import Image from "next/image";
import { homeFeaturedPhotos } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  const featuredPhotos = homeFeaturedPhotos;

  return (
    <section className="-mt-9 space-y-16 pt-0 sm:-mt-11 sm:space-y-20">
      {featuredPhotos.map((photo, index) => (
        <Link
          key={photo.id}
          href={`/all-photos/${index}`}
          className="relative mx-auto block aspect-[3/2] w-full max-w-6xl"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            preload={index === 0}
            sizes="(max-width: 1024px) 100vw, 1400px"
            className="object-cover"
          />
        </Link>
      ))}
    </section>
  );
}
