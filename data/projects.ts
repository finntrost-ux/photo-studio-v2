export type ProjectName = "home" | "japan" | "italy" | "denmark";

export type PhotoItem = {
  id: string;
  src: string;
  alt: string;
  project: ProjectName;
  orientation: "landscape" | "portrait";
};

/** Curated strip on `/` — not listed under Films */
export const homeFeaturedPhotos: PhotoItem[] = [
  {
    id: "home-1",
    src: "/uploads/home/01.png",
    alt: "Vintage turquoise Fiat 500 in a narrow cobblestone alley",
    project: "home",
    orientation: "landscape",
  },
  {
    id: "home-2",
    src: "/uploads/home/02.png",
    alt: "Espresso and pastries on a sunlit outdoor table",
    project: "home",
    orientation: "landscape",
  },
  {
    id: "home-3",
    src: "/uploads/home/03.png",
    alt: "Pantheon portico and inscription against a clear sky",
    project: "home",
    orientation: "landscape",
  },
  {
    id: "home-4",
    src: "/uploads/home/04.png",
    alt: "Pedestrians on a zebra crossing seen from above",
    project: "home",
    orientation: "landscape",
  },
];

const JAPAN_COUNT = 25;
const ITALY_COUNT = 26;
const DENMARK_COUNT = 12;

/** Matches on-disk order: three 3:2 first, then alternating 2:3 / 3:2 (see `scripts/reorder-gallery-mix.py`). */
const japanOrientations = [
  "landscape",
  "landscape",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "portrait",
  "portrait",
  "portrait",
  "portrait",
  "portrait",
  "portrait",
  "portrait",
  "portrait",
  "portrait",
  "portrait",
  "portrait",
] as const;

const italyOrientations = [
  "landscape",
  "landscape",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "portrait",
  "portrait",
  "portrait",
  "portrait",
] as const;

const denmarkOrientations = [
  "landscape",
  "landscape",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "landscape",
  "landscape",
  "landscape",
] as const;

const japanPhotos: PhotoItem[] = Array.from({ length: JAPAN_COUNT }, (_, index) => {
  const n = index + 1;
  const file = `${String(n).padStart(2, "0")}.png`;
  return {
    id: `japan-${n}`,
    src: `/uploads/japan/${file}`,
    alt: `Japan #${n}`,
    project: "japan",
    orientation: japanOrientations[index],
  };
});

const italyPhotos: PhotoItem[] = Array.from({ length: ITALY_COUNT }, (_, index) => {
  const n = index + 1;
  const file = `${String(n).padStart(2, "0")}.png`;
  return {
    id: `italy-${n}`,
    src: `/uploads/italy/${file}`,
    alt: `Italy #${n}`,
    project: "italy",
    orientation: italyOrientations[index],
  };
});

const denmarkPhotos: PhotoItem[] = Array.from({ length: DENMARK_COUNT }, (_, index) => {
  const n = index + 1;
  const file = `${String(n).padStart(2, "0")}.png`;
  return {
    id: `denmark-${n}`,
    src: `/uploads/denmark/${file}`,
    alt: `Denmark #${n}`,
    project: "denmark",
    orientation: denmarkOrientations[index],
  };
});

export const allPhotos: PhotoItem[] = [
  ...homeFeaturedPhotos,
  ...japanPhotos,
  ...italyPhotos,
  ...denmarkPhotos,
];

/** Order defines dropdown numbering: #1, #2, #3 */
export const projects = [
  { slug: "japan", label: "Japan" },
  { slug: "italy", label: "Italy" },
  { slug: "denmark", label: "Denmark" },
] as const;

export const photosByProject = (project: ProjectName) =>
  allPhotos.filter((photo) => photo.project === project);
