"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface GalleryPhotosProps {
  title: string;
  photos: string[];
}

const GalleryPhotos = ({ title, photos }: GalleryPhotosProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <>
      <div className="columns-3xs gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="break-inside mb-4">
            <Image
              src={photo}
              alt={`${title} image ${index + 1}`}
              width={348}
              height={370}
              className="rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-blue-bg/70 flex items-center justify-center z-50 transition-opacity duration-1000 ease-in-out"
          onClick={handleOverlayClick}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Lightbox Image"
              width={800}
              height={800}
              className="rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center text-lg"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="w-full my-8 flex justify-center">
        <Button variant="secondary" asChild>
          <Link href="/eventos">Volver a Eventos</Link>
        </Button>
      </div>
    </>
  );
};

export default GalleryPhotos;
