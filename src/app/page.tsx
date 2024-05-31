import Link from "next/link";
import Image from "next/image";
import { Calendar, MoveRight } from "lucide-react";
import { EmblaOptionsType } from "embla-carousel";
import VideoHero from "@/components/video-hero";
import Title from "@/components/title";
import TitleHeader from "@/components/title-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmblaCarousel from "@/components/EmblaCarousel";
import LogoAsociacionNinos from "~/images/icon-asociacion-ninos.png";
import LogoConcilioLatino from "~/images/icon-concilio-latinoamericano.png";
import LogoJovenes from "~/images/icon-asociacion-jovenes.png";
import LogoDamas from "~/images/icon-damas.png";

import "./embla.css";

export interface GaleryType {
  id: number;
  title: string;
  src: string;
  link: string;
}

const OPTIONS: EmblaOptionsType = { containScroll: false };
const SLIDE_COUNT = 6;
//const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const SLIDES: GaleryType[] = [
  {
    id: 1,
    title: "IV Congreso de Caballeros en Chile",
    src: "/images/events/evento-1.jpeg",
    link: "/galeria/iv-congreso-caballeros-chile",
  },
  {
    id: 2,
    title: "Campamento de líderes ACHC",
    src: "/images/events/evento-1.jpeg",
    link: "/galeria/campamento-lideres-achc",
  },
  {
    id: 3,
    title: "Conferencia de caballeros en Argentina",
    src: "/images/events/evento-1.jpeg",
    link: "/galeria/conferencia-caballeros-argentina",
  },
  {
    id: 4,
    title: "Conferencia de caballeros en Argentina",
    src: "/images/events/evento-1.jpeg",
    link: "/galeria/conferencia-caballeros-argentina",
  },
  {
    id: 5,
    title: "Conferencia de caballeros en Argentina",
    src: "/images/events/evento-1.jpeg",
    link: "/galeria/conferencia-caballeros-argentina",
  },
  {
    id: 6,
    title: "Conferencia de caballeros en Argentina",
    src: "/images/events/evento-1.jpeg",
    link: "/galeria/conferencia-caballeros-argentina",
  },
];

export default function Home() {
  return (
    <>
      <VideoHero />
      <section className="relative my-12">
        <div className="container">
          <h4 className="text-2xl text-center text-black mb-8 dark:text-gray-txt">
            Nuestros asociados alrededor del mundo
          </h4>
          <div className="flex justify-evenly items-center">
            <div>
              <Link href="/">
                <Image
                  src={LogoAsociacionNinos}
                  alt="Heraldos Cristo C.L.A"
                  width={100}
                  height={100}
                  className="w-auto h-auto mx-auto cursor-pointer"
                />
              </Link>
            </div>

            <div>
              <Link href="/">
                <Image
                  src={LogoConcilioLatino}
                  alt="Concilio Latinoamericano Iglesia de Dios Pentecostal"
                  width={100}
                  height={100}
                  className="w-auto h-auto mx-auto cursor-pointer"
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image
                  src={LogoJovenes}
                  alt="Asoaciación de Jóvenes Embajadores de Cristo C.L.A"
                  width={100}
                  height={100}
                  className="w-auto h-auto mx-auto cursor-pointer"
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image
                  src={LogoDamas}
                  alt="Asociación de Damas Mensajeras del Señor C.L.A"
                  width={100}
                  height={100}
                  className="w-auto h-auto mx-auto cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative my-12">
        <div className="container mx-auto flex flex-col lg:flex-row lg:space-x-4">
          <div className="w-1/2">
            <Image
              src="/images/home/sobre-nosotros.png"
              alt="Sobre nosotros"
              width={500}
              height={500}
              className="w-auto h-auto mx-auto"
              loading="lazy"
            />
          </div>
          <div className="w-1/2">
            <Title txtTitle="Nosotros" txtSubtitle="Sobre nosotros" />
            <h3 className="text-3xl font-bold text-blue-title dark:text-gray-txt mb-4">
              Asociación de caballeros{" "}
              <span className="text-orange-bg">Heraldos de Cristo</span> - CLA
            </h3>
            <p>
              Un heraldo es un mensajero o un vocero (portavoz). Por lo tanto,
              nuestra misión como Heraldos De Cristo es: Pregonar al mundo la
              buena noticia de salvación a través de nuestro Salvador y Señor
              Jesucristo, la única fuente de vida.
            </p>
            <Button className="mt-4" variant="outline">
              <Link href="/nosotros">Quiero conocer más</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FA] relative my-12">
        <div
          className="absolute left-0 w-full overflow-hidden hidden lg:block bg-white"
          style={{ lineHeight: 0 }}
        >
          <svg
            data-name="Gray Shape Top"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 113"
            preserveAspectRatio="none"
            className="relative block w-full h-[100px]"
          >
            <path
              d="M600,7.23C931.37,7.23,1200,54.48,1200,112.77H0V112.77C0,54.48,268.63,7.23,600,7.23Z"
              className="shape-fill-top"
            />
          </svg>
        </div>
        <div className="container mx-auto py-12">
          <TitleHeader
            txtTitle="Eventos"
            txtSubtitle="Conoce más de nuestros"
            txtSubtitleTwo="próximos eventos"
          />
          <p className="text-center">
            Revisa las noticias más importantes de nuestra Asociación de
            Caballeros
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-start space-x-4 py-12">
            <Card className="w-[350px]">
              <Image
                src="/images/events/evento-1.jpeg"
                alt="Campamento de líderes ACHC"
                width={306}
                height={200}
                className="w-auto h-auto mx-auto p-4 rounded-3xl z-0"
                loading="lazy"
              />
              <div className="text-white py-2 px-4 rounded-full bg-orange-bg flex justify-center space-x-2 items-center w-fit mx-auto -mt-9 z-50 relative">
                <Calendar className="text-sm" />{" "}
                <span className="block text-sm">21 Junio 2024</span>
              </div>
              <CardHeader>
                <CardTitle className="text-blue-title dark:text-gray-txt leading-8 text-center">
                  Campamento de líderes ACHC
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button className="mt-4" variant="outline" size="icon">
                  <Link href="/eventos">
                    <MoveRight />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="w-[350px]">
              <Image
                src="/images/events/evento-1.jpeg"
                alt="Campamento de líderes ACHC"
                width={306}
                height={200}
                className="w-auto h-auto mx-auto p-4 rounded-3xl z-0"
                loading="lazy"
              />
              <div className="text-white py-2 px-4 rounded-full bg-orange-bg flex justify-center space-x-2 items-center w-fit mx-auto -mt-9 z-50 relative">
                <Calendar className="text-sm" />{" "}
                <span className="block text-sm">21 Junio 2024</span>
              </div>
              <CardHeader>
                <CardTitle className="text-blue-title dark:text-gray-txt leading-8 text-center">
                  Campamento de líderes ACHC
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button className="mt-4" variant="outline" size="icon">
                  <Link href="/eventos">
                    <MoveRight />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="w-[350px]">
              <Image
                src="/images/events/evento-1.jpeg"
                alt="Campamento de líderes ACHC"
                width={306}
                height={200}
                className="w-auto h-auto mx-auto p-4 rounded-3xl z-0"
                loading="lazy"
              />
              <div className="text-white py-2 px-4 rounded-full bg-orange-bg flex justify-center space-x-2 items-center w-fit mx-auto -mt-9 z-50 relative">
                <Calendar className="text-sm" />{" "}
                <span className="block text-sm">21 Junio 2024</span>
              </div>
              <CardHeader>
                <CardTitle className="text-blue-title dark:text-gray-txt leading-8 text-center">
                  Campamento de líderes ACHC
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button className="mt-4" variant="outline" size="icon">
                  <Link href="/eventos">
                    <MoveRight />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mb-8">
            <Button className="mt-4" variant="outline">
              <Link href="/eventos">Ver todos los eventos</Link>
            </Button>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden hidden lg:block"
          style={{
            lineHeight: 0,
          }}
        >
          <svg
            data-name="Gray Shape Bottom"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[100px]"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </section>

      <section className="relative my-12">
        <div className="container flex">
          <div className="w-2/5">
            <Title txtTitle="Galería" txtSubtitle="Multimedia" />
            <h3 className="text-3xl font-bold text-blue-title dark:text-gray-txt mb-4">
              Galería <span className="text-orange-bg">audiovisual</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <Button className="mt-4" variant="outline">
              <Link href="/galeria">Ir a multimedia</Link>
            </Button>
          </div>
          <div className="w-3/5">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </section>
    </>
  );
}
