import GalleryLight from "./GalleryLight";

interface Props {
  title: string;
  description: string;
  url: string;
  embedUrl: string;
  aspectRatio: string;
  scale?: number;
}

export default function GalleryItem({
  title,
  description,
  url,
  embedUrl,
  aspectRatio,
  scale = 1,
}: Props) {
  return (
    <a
      className="flex flex-col items-center group relative h-full"
      href={url ?? "#"}
      target={url ? "_blank" : undefined}
    >
      <GalleryLight />

      {/* Content */}
      <div className="group-hover:scale-105 transition-transform duration-300 relative">
        <div
          className="relative mb-4 overflow-hidden rounded-md shadow-xl/25 h-110 z-10"
          style={{ aspectRatio }}
        >
          <iframe
            className="absolute top-0 left-0 brightness-50 rounded-md pointer-events-none"
            style={{
              width: `${100 / scale}%`,
              height: `${100 / scale}%`,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
            src={embedUrl}
            title={title}
          />

          <div className="absolute right-0 bottom-0 bg-background px-2 py-1 rounded-tl-2xl">
            <p className="text-white/25 text-xs">View on</p>
            <svg
              id="embed-codepen-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 138 26"
              fill="none"
              stroke="#fff"
              stroke-width="2.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              role="img"
              aria-label="CodePen"
            >
              <path d="M80 6h-9v14h9m34-14h-9v14h9m-3-7h-6m-28 0h-6m51 7V6l11 14V6M22 16.7L33 24l11-7.3V9.3L33 2 22 9.3v7.4zm22 0L33 9.3l-11 7.4m0-7.4l11 7.3 11-7.3M33 2v7.3m0 7.4V24m55-10h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14M15 8c-1.3-1.3-3-2-5-2-4 0-7 3-7 7s3 7 7 7c2 0 3.7-.8 5-2m49-5c0 4-3 7-7 7h-5V6h5c4 0 7 3 7 7z"></path>
            </svg>
          </div>
        </div>

        <h3 className="z-0 text-2xl font-bold uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {title}
        </h3>
        <p className="z-0 opacity-0 transition-opacity duration-300 delay-75 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </a>
  );
}
