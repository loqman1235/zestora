"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Image as ImageIcon } from "lucide-react"; // import Lucide icons

export const ProductPreview = ({ images }: { images: string[] }) => {
  const [activeImage, setActiveImage] = useState<string | null>(
    images[0] || null,
  );
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
    setActiveImage(images[0] || null);
  }, [images]);

  if (!images || images.length === 0) {
    // Fallback when no images at all
    return (
      <div className="bg-muted flex h-[500px] w-full items-center justify-center rounded-md">
        <ImageIcon size={48} color="gray" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Thumbnails */}
      <div className="grid grid-rows-3 gap-4">
        {images.map((img, index) =>
          img ? (
            <button
              key={img + index}
              onClick={() => setActiveImage(img)}
              className="h-full w-full"
            >
              <Image
                src={img}
                alt={`Thumbnail ${index}`}
                className="bg-muted h-full w-full cursor-pointer rounded-md object-contain transition hover:opacity-80"
                width={100}
                height={100}
                loading="lazy"
              />
            </button>
          ) : (
            <div
              key={index}
              className="bg-muted flex h-full w-full items-center justify-center rounded-md"
            >
              <ImageIcon size={48} color="gray" />
            </div>
          ),
        )}
      </div>

      {/* Main Image & Zoom Window */}
      <div className="relative col-span-3 min-h-[500px] w-full rounded-md">
        <div
          className="bg-muted relative flex h-full w-full items-center justify-center overflow-hidden rounded-md"
          onMouseMove={activeImage ? handleMouseMove : undefined}
          onMouseLeave={activeImage ? handleMouseLeave : undefined}
        >
          {activeImage ? (
            <Image
              src={activeImage}
              alt="Main Product"
              className="h-full w-full object-contain"
              width={500}
              height={500}
              priority
            />
          ) : (
            <ImageIcon size={64} color="gray" />
          )}
        </div>

        {/* Zoom Window */}
        {zoomPosition.visible && activeImage && (
          <div
            className="absolute top-0 left-0 size-[100px] rounded-md border border-gray-300 bg-white shadow-lg md:left-[110%] md:size-[200px]"
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
