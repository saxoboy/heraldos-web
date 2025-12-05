"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface GalleryPhotosProps {
  title: string;
  photos: string[];
}

// Tipos de media
enum MediaType {
  IMAGE = "image",
  VIDEO = "video",
}

// Función helper para determinar el tipo de media
const getMediaType = (url: string): MediaType => {
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"];
  const lowerUrl = url.toLowerCase();

  if (videoExtensions.some((ext) => lowerUrl.includes(ext))) {
    return MediaType.VIDEO;
  }
  return MediaType.IMAGE;
};

const GalleryPhotos = ({ title, photos }: GalleryPhotosProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentMedia = selectedIndex !== null ? photos[selectedIndex] : null;
  const currentMediaType = currentMedia ? getMediaType(currentMedia) : null;
  const isFirstMedia = selectedIndex === 0;
  const isLastMedia = selectedIndex === photos.length - 1;

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      switch (event.key) {
        case "Escape":
          closeGallery();
          break;
        case "ArrowLeft":
          if (!isFirstMedia) {
            navigateToMedia(selectedIndex - 1);
          }
          break;
        case "ArrowRight":
          if (!isLastMedia) {
            navigateToMedia(selectedIndex + 1);
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, isFirstMedia, isLastMedia]);

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  // Reset video state cuando cambia el media
  useEffect(() => {
    setIsPlaying(false);
    setIsMuted(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [selectedIndex]);

  const openGallery = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const closeGallery = useCallback(() => {
    setSelectedIndex(null);
    setIsPlaying(false);
    setIsMuted(false);
  }, []);

  const navigateToMedia = useCallback((index: number) => {
    if (index >= 0 && index < photos.length) {
      setSelectedIndex(index);
    }
  }, [photos.length]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeGallery();
    }
  };

  // Controles de video
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Grid de miniaturas estilo masonry */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {photos.map((photo, index) => {
          const mediaType = getMediaType(photo);
          return (
            <div key={index} className="break-inside mb-4 relative group">
              {mediaType === MediaType.IMAGE ? (
                <Image
                  src={photo}
                  alt={`${title} image ${index + 1}`}
                  width={348}
                  height={370}
                  className="rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => openGallery(index)}
                />
              ) : (
                <div
                  className="relative cursor-pointer"
                  onClick={() => openGallery(index)}
                >
                  <video
                    src={photo}
                    className="rounded-lg w-full"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                    <div className="bg-white/90 rounded-full p-3">
                      <Play className="w-8 h-8 text-gray-800" />
                    </div>
                  </div>
                </div>
              )}

              {/* Overlay hover effect */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && currentMedia && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xs flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
          onClick={handleOverlayClick}
        >
          {/* Contador de imágenes */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm z-50">
            {selectedIndex + 1} / {photos.length}
          </div>

          {/* Botón de cerrar */}
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl z-50 transition-colors duration-200"
            onClick={closeGallery}
            aria-label="Cerrar galería"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Botón anterior */}
          {!isFirstMedia && (
            <button
              className="absolute left-4 bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center z-50 transition-all duration-200 hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                navigateToMedia(selectedIndex - 1);
              }}
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Contenedor del media */}
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            {currentMediaType === MediaType.IMAGE ? (
              <Image
                src={currentMedia}
                alt={`${title} image ${selectedIndex + 1}`}
                width={1200}
                height={800}
                className="rounded-lg max-h-[85vh] w-auto h-auto object-contain"
                priority
              />
            ) : (
              <div className="relative">
                <video
                  ref={videoRef}
                  src={currentMedia}
                  className="rounded-lg max-h-[85vh] w-auto"
                  controls={false}
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Controles de video personalizados */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    aria-label={isPlaying ? "Pausar" : "Reproducir"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white" />
                    )}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Botón siguiente */}
          {!isLastMedia && (
            <button
              className="absolute right-4 bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center z-50 transition-all duration-200 hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                navigateToMedia(selectedIndex + 1);
              }}
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Miniaturas en la parte inferior */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto py-2 px-4">
            <div className="flex gap-2">
              {photos.map((photo, index) => {
                const thumbMediaType = getMediaType(photo);
                return (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateToMedia(index);
                    }}
                    className={`relative shrink-0 w-16 h-16 rounded-md overflow-hidden transition-all duration-200 ${index === selectedIndex
                      ? "ring-2 ring-white scale-110"
                      : "opacity-60 hover:opacity-100"
                      }`}
                  >
                    {thumbMediaType === MediaType.IMAGE ? (
                      <Image
                        src={photo}
                        alt={`Miniatura ${index + 1}`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPhotos;
