import Image from "next/image";
import TitleHeader from "@/components/title-header";
import Link from "next/link";

const NosotrosPage = () => {
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
            <TitleHeader txtTitle="nosotros" txtSubtitle="sobre nosotros" />
          </h1>
          <h2 className="text-2xl lg:text-5xl font-bold text-blue-title">
            ¡Hombres de valor
          </h2>
          <div className="flex flex-col md:flex-row justify-end items-center space-x-4">
            <h2 className="text-2xl font-thin text-blue-title">
              construyendo un
            </h2>
            <h2 className="text-2xl lg:text-5xl font-bold text-orange-bg">
              legado perdurable!
            </h2>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col lg:flex-row container space-y-4 lg:space-y-0 lg:space-x-4 mb-12">
        <div className="w-full lg:w-1/3 text-center">
          <h2><Link href="/nosotros/junta-ejecutiva">Junta Directiva</Link></h2>
        </div>
        <div className="w-full lg:w-1/3 text-center">
          <h2><Link href="/nosotros/vicepresidentes-condados">Presidentes de Paises Foreanos</Link></h2>
        </div>
        <div className="w-full lg:w-1/3 text-center">
          <h2><Link href="/nosotros/presidentes-paises-foraneos">Vicepresidentes de Condados</Link></h2>
        </div>
      </section>
    </>
  );
};

export default NosotrosPage;
