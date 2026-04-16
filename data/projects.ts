export type ProjectName = "japan" | "berlin" | "copenhagen";

export type PhotoItem = {
  id: string;
  src: string;
  alt: string;
  project: ProjectName;
  orientation: "landscape" | "portrait";
};

export const allPhotos: PhotoItem[] = [
  {
    id: "japan-1",
    src: "/uploads/01.png",
    alt: "Coastline with portrait silhouette",
    project: "japan",
    orientation: "landscape",
  },
  {
    id: "japan-2",
    src: "/uploads/02.png",
    alt: "Bird above dark rocks",
    project: "japan",
    orientation: "landscape",
  },
  {
    id: "japan-3",
    src: "/uploads/03.png",
    alt: "Small boat near rocky shore",
    project: "japan",
    orientation: "landscape",
  },
  {
    id: "berlin-1",
    src: "/uploads/04.png",
    alt: "Coffee and pastries on wooden table",
    project: "berlin",
    orientation: "landscape",
  },
  {
    id: "berlin-2",
    src: "/uploads/05.png",
    alt: "Harbor street and yellow building",
    project: "berlin",
    orientation: "landscape",
  },
  {
    id: "berlin-3",
    src: "/uploads/06.png",
    alt: "Workshop interior",
    project: "berlin",
    orientation: "landscape",
  },
  {
    id: "copenhagen-1",
    src: "/uploads/07.png",
    alt: "Autumn alley in old quarter",
    project: "copenhagen",
    orientation: "portrait",
  },
  {
    id: "copenhagen-2",
    src: "/uploads/08.png",
    alt: "Stone pier and open water",
    project: "copenhagen",
    orientation: "landscape",
  },
  {
    id: "copenhagen-3",
    src: "/uploads/09.png",
    alt: "Warm fire in a room",
    project: "copenhagen",
    orientation: "portrait",
  },
  {
    id: "copenhagen-4",
    src: "/uploads/10.png",
    alt: "Blue ocean and rocky coast",
    project: "copenhagen",
    orientation: "landscape",
  },
];

export const projects = [
  { slug: "japan", label: "Japan" },
  { slug: "berlin", label: "Berlin" },
  { slug: "copenhagen", label: "Copenhagen" },
] as const;

export const photosByProject = (project: ProjectName) =>
  allPhotos.filter((photo) => photo.project === project);
