import GalleryItem from "./GalleryItem";
import type { CollectionEntry } from "astro:content";

interface Props {
  items: {
    title: string;
    description: string;
    url: string;
    embedUrl: string;
    aspectRatio: string;
    scale?: number;
  }[];
}

export default function Gallery({ items }: Props) {
  return (
    <section
      id="gallery"
      className="h-full bg-linear-to-b from-yellow-50 via-yellow-50 via-90% to-gray-700 to-92% overflow-y-hidden overflow-x-auto p-16 flex flex-row items-center gap-64"
    >
      {items.map((item) => (
        <GalleryItem
          title={item.title}
          description={item.description}
          url={item.url}
          embedUrl={item.embedUrl}
          aspectRatio={item.aspectRatio}
          scale={item.scale}
        />
      ))}
    </section>
  );
}
