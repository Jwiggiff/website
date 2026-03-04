import { useRef, useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  initialPosition: { x: number; y: number };
  initialMaximized: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export default function Window({
  title,
  children,
  initialPosition = { x: 0, y: 0 },
  initialMaximized = false,
  isOpen = false,
  onClose,
}: Props) {
  const [isMaximized, setIsMaximized] = useState(initialMaximized);
  const [isDragging, setIsDragging] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastPosRef = useRef(initialPosition);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== sectionRef.current?.firstChild) return;
    if (e.button !== 0) return;
    e.preventDefault();
    setIsMaximized(false);
    setIsDragging(true);
    const start = { x: e.clientX, y: e.clientY };
    const last = lastPosRef.current;

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;
      if (sectionRef.current) {
        sectionRef.current.style.left = `${last.x + dx}px`;
        sectionRef.current.style.top = `${last.y + dy}px`;
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

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-white text-black border-2 border-surface-1 rounded-md absolute w-96 h-64 grid grid-rows-[auto_minmax(0,1fr)] ${isOpen ? "block" : "hidden"} ${isMaximized ? "w-full h-full" : ""}`}
      style={{
        left: isMaximized ? 0 : lastPosRef.current.x,
        top: isMaximized ? 0 : lastPosRef.current.y,
      }}
    >
      {/* Toolbar */}
      <div
        onMouseDown={handleMouseDown}
        className="bg-surface-1 h-8 flex items-center justify-between px-2 cursor-grab active:cursor-grabbing"
      >
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="w-4 h-4 bg-red-500 rounded-full cursor-pointer"
          ></button>
          <button className="w-4 h-4 bg-yellow-500 rounded-full"></button>
          <button
            onClick={handleMaximize}
            className="w-4 h-4 bg-green-500 rounded-full cursor-pointer"
          ></button>
        </div>
        <h3 className="text-xl text-white/25">{title}</h3>
        <div></div>
      </div>

      <div className="overflow-y-auto @container">{children}</div>
    </section>
  );
}
