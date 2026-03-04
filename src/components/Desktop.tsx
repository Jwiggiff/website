import Folder from "./Folder";
import Window from "./Window";
import { useState } from "react";
import Gallery from "./Gallery";
import type { CollectionEntry } from "astro:content";

interface Props {
  projects: CollectionEntry<"projects">[];
  art: CollectionEntry<"art">[];
}
export default function Desktop({ projects, art }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <main className="flex flex-col justify-start items-start gap-6 p-8 h-screen">
        <Folder label="Projects" />
        <Folder onOpen={() => setIsOpen(true)} label="CSS-Only Art" />
      </main>

      <Window
        initialPosition={{ x: 100, y: 50 }}
        initialMaximized={true}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="CSS-Only Art"
      >
        <Gallery
          items={art.map((item) => ({
            title: item.data.title,
            description: item.data.description,
            url: item.data.url,
            embedUrl: item.data.embedUrl,
            aspectRatio: item.data.aspectRatio,
            scale: item.data.scale,
          }))}
        />
      </Window>
    </>
  );
}
