import Image from "next/image";
import TitleHeader from "@/components/title-header";
import { Award, Flag } from "lucide-react";
import BgGray from "@/components/ui/bg-gray";
import Title from "@/components/title";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const JuntaEjecutivaPage = () => {
  return (
    <>
      <section className="-top-[50px] relative mb-8">
        <div className="container mx-auto max-w-[768px] lg:max-w-[1024px]">
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
          {/* <div className="h-96">
            <h1 className="text-7xl text-center">Seccion en Construccion </h1>
          </div> */}
        </div>
        <div className="container flex flex-col lg:flex-row space-y-4 lg:space-x-8 lg:space-y-0">
          <div className="w-full lg:w-1/2">
            <Award className="text-orange-bg border border-orange-bg rounded-full p-4 w-16 h-16" />
            <h4 className="text-3xl font-bold text-blue-title my-4">
              Nuestra <span className="text-orange-bg">misión</span>
            </h4>
            <p>
              Un heraldo es un mensajero o un vocero (portavoz). Por lo tanto,
              nuestra misión como Heraldos De Cristo es: Pregonar al mundo la
              buena noticia de salvación a través de nuestro Salvador y Señor
              Jesucristo, la única fuente de vida.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 text-blue-txt">
            <Card className="p-4">
              <Image
                src="/images/nosotros/Mauricio-Stewart.jpeg"
                alt="Mauricio Stewart"
                width={420}
                height={310}
                className="w-auto h-auto mx-auto rounded-lg"
                loading="lazy"
              />
              <h3 className="mt-4 text-xl font-semibold">Mauricio Stewart</h3>
              <p className="text-sm mb-0">Presidente Internacional</p>
            </Card>

            <Card className="p-4">
              <Image
                src="/images/nosotros/Jose-Mangual.jpeg"
                alt="José E. Mangual"
                width={420}
                height={310}
                className="w-auto h-auto mx-auto rounded-lg"
                loading="lazy"
              />
              <h3 className="mt-4 text-xl font-semibold">José E. Mangual</h3>
              <p className="text-sm mb-0">Vice-Presidente Internacional</p>
            </Card>

            <Card className="p-4">
              <Image
                src="/images/nosotros/Vidal-E-Diaz.jpeg"
                alt="Vidal E. Diaz"
                width={420}
                height={310}
                className="w-auto h-auto mx-auto rounded-lg"
                loading="lazy"
              />
              <h3 className="mt-4 text-xl font-semibold">Vidal E. Diaz</h3>
              <p className="text-sm mb-0">Secretario General</p>
            </Card>

            <Card className="p-4">
              <Image
                src="/images/nosotros/Otoniel-Burgos.jpeg"
                alt="Otoniel Burgos"
                width={420}
                height={310}
                className="w-auto h-auto mx-auto rounded-lg"
                loading="lazy"
              />
              <h3 className="mt-4 text-xl font-semibold">Otoniel Burgos</h3>
              <p className="text-sm mb-0">Sub-Secretario General</p>
            </Card>

            <Card className="p-4">
              <Image
                src="/images/nosotros/Herbeth-Mackenzie.jpeg"
                alt="Herbeth Mackenzie"
                width={420}
                height={310}
                className="w-auto h-auto mx-auto rounded-lg"
                loading="lazy"
              />
              <h3 className="mt-4 text-xl font-semibold">Herbeth Mackenzie</h3>
              <p className="text-sm mb-0">Tesorero General</p>
            </Card>

            <Card className="p-4">
              <Image
                src="/images/nosotros/Mario-Castillo.jpeg"
                alt="Mario D. Castillo"
                width={420}
                height={310}
                className="w-auto h-auto mx-auto rounded-lg"
                loading="lazy"
              />
              <h3 className="mt-4 text-xl font-semibold">Mario D. Castillo</h3>
              <p className="text-sm mb-0">Sub-Secretario General</p>
            </Card>

            <Card className="p-4">
              <Image
                src="/images/nosotros/Angel-Martinez.jpeg"
                alt="Angel R. Martinez"
                width={420}
                height={310}
                className="w-auto h-auto mx-auto rounded-lg"
                loading="lazy"
              />
              <h3 className="mt-4 text-xl font-semibold">Angel R. Martinez</h3>
              <p className="text-sm mb-0">Vocal 1</p>
            </Card>

            <Card className="p-4">
              <Image
                src="/images/nosotros/Javier-Fontanez.jpeg"
                alt="Javier Fontanez"
                width={420}
                height={310}
                className="w-auto h-auto mx-auto rounded-lg"
                loading="lazy"
              />
              <h3 className="mt-4 text-xl font-semibold">Javier Fontanez</h3>
              <p className="text-sm mb-0">Vocal 2</p>
            </Card>

            <Card className="p-4">
              <Image
                src="/images/nosotros/Juan-Gregorio.jpeg"
                alt="Juan C. Gregorio"
                width={420}
                height={310}
                className="w-auto h-auto mx-auto rounded-lg"
                loading="lazy"
              />
              <h3 className="mt-4 text-xl font-semibold">Juan C. Gregorio</h3>
              <p className="text-sm mb-0">Vocal 3</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default JuntaEjecutivaPage;
