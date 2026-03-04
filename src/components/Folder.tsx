import { useState, useRef } from "react";

interface Props {
  onOpen?: () => void;
  label: string;
}

export default function Folder({ onOpen, label }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const lastPosRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.button !== 0) return;
    e.preventDefault();
    setIsDragging(true);
    const start = { x: e.clientX, y: e.clientY };
    const last = lastPosRef.current;

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;
      if (buttonRef.current) {
        buttonRef.current.style.left = `${last.x + dx}px`;
        buttonRef.current.style.top = `${last.y + dy}px`;
      }
    };

    const onMouseUp = (e: MouseEvent) => {
      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;
      lastPosRef.current = { x: last.x + dx, y: last.y + dy };
      setIsDragging(false);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <button
      ref={buttonRef}
      onDoubleClick={onOpen ?? undefined}
      onMouseDown={handleMouseDown}
      className="flex flex-col gap-3 folder w-20 m-0.5 relative cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 active:cursor-grabbing"
    >
      {/* CSS Only Folder Icon */}
      <div className="w-full h-16 flex flex-col before:content-[''] before:w-1/2 before:h-2 before:bottom-full before:bg-black before:rounded-t-md after:content-[''] after:h-full after:shadow-block after:rounded-md after:rounded-tl-none after:bg-background"></div>

      {/* Folder Label */}
      <p className="text-center">{label}</p>
    </button>
  );
}
