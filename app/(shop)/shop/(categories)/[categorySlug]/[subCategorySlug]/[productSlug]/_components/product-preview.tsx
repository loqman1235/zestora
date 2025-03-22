"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const ProductPreview = ({ images }: { images: string[] }) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [zoomPosition, setZoomPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y, visible: true });
  };

  const handleMouseLeave = () => {
    setZoomPosition((prev) => ({ ...prev, visible: false }));
  };

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Thumbnails */}
      <div className="grid grid-rows-3 gap-4">
        {images.map((img, index) => (
          <button
            key={img}
            onClick={() => setActiveImage(img)}
            className="h-full w-full"
          >
            <Image
              src={img}
              alt={`Thumbnail ${index}`}
              className="h-full w-full cursor-pointer rounded-md object-cover transition hover:opacity-80"
              width={100}
              height={100}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Main Image & Zoom Window */}
      <div className="relative col-span-3 min-h-[500px] w-full rounded-md">
        <div
          className="relative h-full w-full overflow-hidden rounded-md"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={activeImage}
            alt="Main Product"
            className="h-full w-full object-cover"
            width={500}
            height={500}
            priority
          />
        </div>

        {/* Zoom Window */}
        {zoomPosition.visible && (
          <div
            className="absolute top-0 left-0 size-[100px] border border-gray-300 bg-white shadow-lg md:left-[110%] md:size-[200px]"
            style={{
              backgroundImage: `url(${activeImage})`,
              backgroundSize: "500%",
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            }}
          />
        )}
      </div>
    </div>
  );
};
