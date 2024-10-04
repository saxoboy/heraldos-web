import Link from "next/link";
import Image from "next/image";
import { Award, Flag, Mail, MapPinned, Phone } from "lucide-react";
import TitleHeader from "@/components/title-header";
import BgGray from "@/components/ui/bg-gray";
import Title from "@/components/title";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { personalList } from "@/data/personal";

const JuntaEjecutivaPage = () => {
  const personal = personalList;
  return (
    <>
      <section className="-top-[50px] relative mb-8">
        <div className="container mx-auto max-w-[768px] lg:max-w-[1024px] pt-16 lg:pt-0">
          <Image
            src="/images/bible.png"
            alt=""
            width={139}
            height={116}
            className="w-auto h-auto mx-auto relative z-10"
          />
          <h1 className="hidden sm:block text-4xl md:text-5xl font-bold sm:py-4 text-center text-white">
            <TitleHeader txtTitle="Ejecutiva" txtSubtitle="Junta Ejecutiva" />
          </h1>
        </div>
        <div className="container flex flex-col lg:flex-row space-y-4 lg:space-x-8 lg:space-y-0">
          <div className="w-full lg:w-1/2">
            <Award className="text-orange-bg border border-orange-bg rounded-full p-4 w-16 h-16" />
            <h4 className="text-3xl font-bold text-blue-title my-4">
              Nuestra <span className="text-orange-bg">misión</span>
            </h4>
            <p>
              Para poder conocer el significado del término heraldo, es
              interesante comenzar descubriendo su origen etimológico. En este
              caso, hay que subrayar que se trata de una palabra que deriva del
              francés, concretamente de “heraut”, que puede traducirse como
              “emisario” o incluso “mensajero”.
            </p>

            <p>
              Hay que establecer que esa palabra era usada a partir del siglo
              XII para referirse a los mensajeros de guerra que eran enviados
              para dar un comunicado al bando rival, como podía ser, por
              ejemplo, un ultimátum.
            </p>

            <p>
              Un heraldo, por lo tanto, es un mensajero o un vocero (portavoz).
              En la antigüedad, los heraldos eran oficiales que llevaban órdenes
              de los monarcas, convocaban a quienes eran citados por los reyes o
              silenciaban a la gente para que pudieran hablar los soberanos en
              público. En ocasiones también ejecutaban las órdenes.
            </p>

            <p>
              Tomando esta descripción como punto de partida, resumimos nuestra
              misión como Heraldos De Cristo: Pregonar al mundo la buena noticia
              de salvación a través de nuestro Salvador y Señor Jesucristo, la
              única fuente de vida.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Flag className="text-orange-bg border border-orange-bg rounded-full p-4 w-16 h-16" />
            <h4 className="text-3xl font-bold text-blue-title my-4">
              Nuestra <span className="text-orange-bg">visión</span>
            </h4>
            <p>
              Un heraldo es un mensajero o un vocero (portavoz). Por lo tanto,
              nuestra misión como Heraldos De Cristo es: Pregonar al mundo la
              buena noticia de salvación a través de nuestro Salvador y Señor
              Jesucristo, la única fuente de vida.
            </p>
          </div>
        </div>
      </section>
      <BgGray>
        <div className="container flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 py-32">
          <div className="w-full lg:w-1/2">
            <Title txtTitle={"historia"} txtSubtitle={"ETIMOLOGÍA"} />
            <p>
              Heraldo, es una palabra que deriva del francés “heraut”, que puede
              traducirse como “emisario” o incluso “mensajero”, usada a partir
              del siglo XII para referirse a los mensajeros de guerra que eran
              enviados para dar un comunicado al bando rival, como podía ser,
              por ejemplo, un ultimátum.
            </p>
            <p>
              En la antigüedad, los heraldos eran oficiales que llevaban órdenes
              de los monarcas, convocaban a quienes eran citados por los reyes o
              silenciaban a la gente para que pudieran hablar los soberanos en
              público. En ocasiones también ejecutaban las órdenes.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Link href="/nosotros/junta-ejecutiva">
              <Image
                src="/images/nosotros/thumb-video.png"
                alt="Sobre nosotros"
                width={500}
                height={500}
                className="w-auto h-auto mx-auto"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </BgGray>

      <section className="relative my-12">
        <div className="container">
          <TitleHeader
            txtTitle="Ejecutiva"
            txtSubtitle="Junta Ejecutiva Internacional"
            txtSubtitleTwo="2024-2025"
          />
          <p className="text-center text-lg">
            Asociación de Caballeros Heraldos de Cristo C.L.A.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-blue-txt">
            {personal.map((person) => (
              <Card key={person.id} className="p-4">
                <Image
                  src={`/images/nosotros/${person.image}`}
                  alt={person.name}
                  width={420}
                  height={310}
                  className="w-auto h-auto mx-auto rounded-lg"
                  loading="lazy"
                />
                <h3 className="mt-4 text-xl text-center font-semibold">{person.name}</h3>
                <p className="text-sm text-center">{person.position}</p>
                <div className="flex justify-evenly items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="link" className="p-3 text-orange-bg">
                          <MapPinned className="w-6 h-6" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="mb-0">{person.address}</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="link" className="p-3 text-orange-bg">
                          <Phone className="w-6 h-6" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="mb-0">
                          <Link href={`tel:${person.phone}`}>
                            {person.phone}
                          </Link>
                        </p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="link" className="p-3 text-orange-bg">
                          <Mail className="w-6 h-6" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="mb-0">{person.email}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JuntaEjecutivaPage;
