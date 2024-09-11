import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  Calendar,
  CalendarDaysIcon,
  MoveRight,
} from "lucide-react";
import { EmblaOptionsType } from "embla-carousel";
import VideoHero from "@/components/video-hero";
import Title from "@/components/title";
import TitleHeader from "@/components/title-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmblaCarousel from "@/components/EmblaCarousel";
import ShapeTop from "@/components/ui/shape-top";
import ShapeBottom from "@/components/ui/shape-bottom";
import { Badge } from "@/components/ui/badge";
import ShapeTopOrange from "@/components/ui/shape-top-orange";
import LogoAsociacionNinos from "~/images/icon-asociacion-ninos.png";
import LogoConcilioLatino from "~/images/icon-concilio-latinoamericano.png";
import LogoJovenes from "~/images/icon-asociacion-jovenes.png";
import LogoDamas from "~/images/icon-damas.png";

import "./embla.css";
import { eventsList } from "@/data/events";
import { noticiasList } from "@/data/noticias";

export interface GaleryType {
  id: number;
  title: string;
  src: string;
  link: string;
}

const OPTIONS: EmblaOptionsType = { containScroll: false, loop: true };
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
  const eventos = eventsList.slice(0, 3);
  const noticiaDestacada = noticiasList[0];
  const noticias = noticiasList.slice(1, 4);
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
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/home/sobre-nosotros.png"
              alt="Sobre nosotros"
              width={500}
              height={500}
              className="w-auto h-auto mx-auto"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
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
            <Button
              className="mt-4 mx-auto block lg:inline-block"
              variant="outline"
            >
              <Link href="/nosotros">Quiero conocer más</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FA] relative mt-12">
        <ShapeTop />
        <div className="container mx-auto pt-28 pb-0">
          <TitleHeader
            txtTitle="Noticias"
            txtSubtitle="Noticias recientes sobre"
            txtSubtitleTwo="Heraldos de Cristo"
          />
          <p className="text-center">
            Revisa las noticias más importantes de nuestra Asociación de
            Caballeros
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="w-full transition-all hover:shadow-xl">
              <div className="relative p-4">
                <Image
                  src={noticiaDestacada.photos[0]}
                  alt={noticiaDestacada.title}
                  width={800}
                  height={600}
                  className="w-full h-auto mx-auto rounded-xl z-0"
                  loading="lazy"
                />
              </div>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">{noticiaDestacada.category}</Badge>
                  <div className="flex items-center space-x-2 bg-orange-bg w-fit text-white px-4 py-2 rounded-full">
                    <CalendarDaysIcon className="h-5 w-5" />
                    <span className="text-sm">{noticiaDestacada.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">
                  {noticiaDestacada.title}
                </h3>
                <p>
                  {noticiaDestacada.content.length > 100 &&
                    noticiaDestacada.content.substring(0, 100) + "..."}
                </p>
                <Button variant="ghost" className="justify-self-end">
                  <ArrowRightIcon className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 gap-4">
              {noticias.map((noticia) => (
                <Card
                  key={noticia.id}
                  className="w-full transition-all hover:shadow-xl"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-2/5 relative p-4">
                      <Image
                        src={noticia.photos[0]}
                        alt={noticia.title}
                        width={350}
                        height={350}
                        className="w-full h-auto mx-auto rounded-xl z-0"
                        loading="lazy"
                      />
                      <Badge
                        variant="secondary"
                        className=" absolute top-8 left-8"
                      >
                        {noticia.category}
                      </Badge>
                    </div>
                    <div className="w-full lg:w-3/5">
                      <CardContent className="space-y-4 p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2 bg-orange-bg w-fit text-white px-4 py-2 rounded-full">
                            <CalendarDaysIcon className="h-5 w-5" />
                            <span className="text-sm">{noticia.date}</span>
                          </div>
                          <div>
                            <Button
                              variant="outline"
                              className="justify-self-end"
                              size="icon"
                            >
                              <Link href={`/noticias/${noticia.slug}`}>
                                <ArrowRightIcon className="h-5 w-5" />
                              </Link>
                            </Button>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold xl:truncate">
                          {noticia.title}
                        </h3>
                        <p className="block lg:hidden xl:block">
                          {noticia.content.length > 100 &&
                            noticia.content.substring(0, 100) + "..."}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}

              {/* <Card className="w-full transition-all hover:shadow-xl">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-2/5 relative p-4">
                    <Image
                      src="/images/events/evento-1.jpeg"
                      alt="Campamento de líderes ACHC"
                      width={280}
                      height={180}
                      className="w-full h-auto mx-auto rounded-xl z-0"
                      loading="lazy"
                    />
                    <Badge
                      variant="secondary"
                      className=" absolute top-8 left-8"
                    >
                      Congresos
                    </Badge>
                  </div>
                  <div className="w-full lg:w-3/5">
                    <CardContent className="space-y-4 p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2 bg-orange-bg w-fit text-white px-4 py-2 rounded-full">
                          <CalendarDaysIcon className="h-5 w-5" />
                          <span className="text-sm">25 Julio 2024</span>
                        </div>
                        <div>
                          <Button
                            variant="outline"
                            className="justify-self-end"
                            size="icon"
                          >
                            <Link href="/noticias">
                              <ArrowRightIcon className="h-5 w-5" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold xl:truncate">
                        ¿Cómo mejorar mi relación con Dios día a día?
                      </h3>
                      <p className="block lg:hidden xl:block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua...
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>

              <Card className="w-full transition-all hover:shadow-xl">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-2/5 relative p-4">
                    <Image
                      src="/images/events/evento-1.jpeg"
                      alt="Campamento de líderes ACHC"
                      width={280}
                      height={180}
                      className="w-full h-auto mx-auto rounded-xl z-0"
                      loading="lazy"
                    />
                    <Badge
                      variant="secondary"
                      className=" absolute top-8 left-8"
                    >
                      Congresos
                    </Badge>
                  </div>
                  <div className="w-full lg:w-3/5">
                    <CardContent className="space-y-4 p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2 bg-orange-bg w-fit text-white px-4 py-2 rounded-full">
                          <CalendarDaysIcon className="h-5 w-5" />
                          <span className="text-sm">25 Julio 2024</span>
                        </div>
                        <div>
                          <Button
                            variant="outline"
                            className="justify-self-end"
                            size="icon"
                          >
                            <Link href="/noticias">
                              <ArrowRightIcon className="h-5 w-5" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold xl:truncate">
                        ¿Cómo mejorar mi relación con Dios día a día?
                      </h3>
                      <p className="block lg:hidden xl:block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua...
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card> */}
            </div>
          </div>

          <div className="flex justify-center mt-8 pb-8">
            <Button className="mt-4" variant="outline">
              <Link href="/noticias">Ver todas las noticias</Link>
            </Button>
          </div>
        </div>
        {/* <ShapeBottom /> */}
      </section>

      <section className="bg-[#F7F9FA] relative my-12">
        <ShapeTop />
        <div className="container mx-auto py-12">
          <TitleHeader
            txtTitle="Eventos"
            txtSubtitle="Conoce más de nuestros"
            txtSubtitleTwo="próximos eventos"
          />
          <p className="text-center">
            Entérate de nuestros próximos eventos y toda la información
            relacionada a ellos
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 py-12">
            {eventos.map((event) => (
              <article key={event.id}>
                <Card className="w-[350px] transition-all hover:shadow-xl">
                  <Image
                    src={event.photos?.[0] || '/images/default-image.png'}
                    alt={event.title || "Evento sin título"}
                    width={306}
                    height={200}
                    className="w-auto h-auto mx-auto p-4 rounded-3xl z-0"
                    loading="lazy"
                  />
                  <div className="text-white py-2 px-4 rounded-full bg-orange-bg flex justify-center space-x-2 items-center w-fit mx-auto -mt-9 z-50 relative">
                    <Calendar className="text-sm" />{" "}
                    <span className="block text-sm">{event.date}</span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-title dark:text-gray-txt leading-8 text-center">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Button className="mt-4" variant="outline" size="icon">
                      <Link href={`/eventos/${event.slug}`}>
                        <MoveRight />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>

          <div className="flex justify-center mb-8">
            <Button className="mt-4" variant="outline">
              <Link href="/eventos">Ver todos los eventos</Link>
            </Button>
          </div>
        </div>
        <ShapeBottom />
      </section>

      {/* <section className="relative my-12">
        <div className="container flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="w-full lg:w-2/5">
            <Title txtTitle="Galería" txtSubtitle="Multimedia" />
            <h3 className="text-3xl font-bold text-blue-title dark:text-gray-txt mb-4">
              Galería <span className="text-orange-bg">audiovisual</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <Button
              className="mt-4 mx-auto block lg:inline-block"
              variant="outline"
            >
              <Link href="/galeria">Ir a multimedia</Link>
            </Button>
          </div>
          <div className="w-full lg:w-3/5">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </section> */}

      <section className="relative bg-orange-bg">
        <ShapeTopOrange />
        <div className="container flex flex-col lg:flex-row">
          <div className="w-full flex flex-col md:flex-row lg:w-1/2 pb-0 pt-8">
            <div className="w-full md:w-1/2 flex justify-center items-end">
              <Image
                src="/images/postularse.png"
                alt=""
                width={256}
                height={342}
                className="w-auto h-auto mx-auto relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center pt-12 lg:pt-24 pb-4">
              <h3 className="text-2xl text-center">
                ¿Desear ser parte de nosotros?
              </h3>
              <p className="text-white mb-0">Descarga tus documentos aquí</p>
              <Button className="mt-4" variant="outline">
                <Link href="/documentos">Descargar documentos</Link>
              </Button>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row lg:w-1/2 pb-0 pt-8">
            <div className="w-full md:w-1/2 flex justify-center items-end">
              <Image
                src="/images/corbata-heraldos.png"
                alt=""
                width={256}
                height={342}
                className="w-auto h-auto mx-auto relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center pt-12 lg:pt-24 pb-4">
              <h3 className="text-2xl text-center">
                ¡Adquiere tu artículo ahora!
              </h3>
              <p className="text-white mb-0">Corbatas y pings para tí</p>
              <Button className="mt-4" variant="outline">
                <Link href="/documentos">Hacer Pedidos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
