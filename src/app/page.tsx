import Link from "next/link";
import Image from "next/image";
import VideoHero from "@/components/video-hero";
import LogoAsociacionNinos from "~/images/icon-asociacion-ninos.png";
import LogoConcilioLatino from "~/images/icon-concilio-latinoamericano.png";
import LogoJovenes from "~/images/icon-asociacion-jovenes.png";
import LogoDamas from "~/images/icon-damas.png";
import Title from "@/components/title";
import TitleHeader from "@/components/title-header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <VideoHero />
      <section className="relative my-12">
        <div className="container">
          <h4 className="text-2xl text-center text-black mb-8">
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
            <h3 className="text-3xl font-bold text-blue-title mb-4">
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

      <section className="bg-[#F7F9FA]">
        <div className="container mx-auto">
          <TitleHeader
            txtTitle="Eventos"
            txtSubtitle="Conoce más de nuestros"
            txtSubtitleTwo="próximos eventos"
          />
        </div>
      </section>
    </>
  );
}
