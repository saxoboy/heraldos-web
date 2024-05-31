import React from "react";
import Link from "next/link";
import Video from "next-video";
import videoLoop from "/videos/video-home.mp4?thumbnailTime=0";
import { Button } from "./ui/button";

const VideoHero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-bg to-[#932616] relative">
      <div className="relative p-0">
        <Video
          src={videoLoop}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full object-cover relative mask-image"
        />
        <div className="shadowVideo" />
        <div className="txtVideoHero">
          <h3 className="text-xs sm:text-base md:text-xl lg:text-xl text-orange-bg font-normal uppercase md:leading-8 md:tracking-[4px] lg:tracking-[6px] xl:tracking-[8px]">
            - Bienvenidos a la página oficial -
          </h3>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-bold py-4">
            Heraldos <span className="text-2xl md:text-4xl font-thin">de</span>{" "}
            Cristo C.L.A.
          </h1>
          <p className="text-sm sm:text-xl md:text-2xl font-thin m-0">
            <span className="font-bold">¡Preparando lideres</span> para el Reino
            de Dios!
          </p>
          <Button
            className="mt-4 hidden sm:inline-block px-6 py-3 h-auto"
            variant="secondary"
            asChild
          >
            <Link href="/nosotros">Conoce más</Link>
          </Button>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden hidden lg:block"
          style={{
            lineHeight: 0,
          }}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[100px]"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
