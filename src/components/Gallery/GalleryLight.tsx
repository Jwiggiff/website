export default function GalleryLight() {
  return (
    <div className="w-full">
      {/* light bar */}
      <div className="rounded-sm w-3/5 h-8 mx-auto bg-(image:--gradient-lightbar) z-20"></div>

      {/* stem */}
      <div className="w-1 h-8 mx-auto bg-black"></div>

      {/* light */}
      <div className="absolute top-8 bottom-34 left-2 right-2 z-10 bg-(image:--gradient-light) mask-(--gradient-light-mask) [clip-path:var(--clippath-light)] backdrop-brightness-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}
