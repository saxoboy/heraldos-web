import Image from "next/image";
import TitleHeader from "@/components/title-header";

const NosotrosPage = () => {
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
      <section className="relative">
        <div className="container">
          <p className="mt-4">
            Somos una comunidad de hombres que busca ser de bendición para
            nuestra familia, iglesia y sociedad. Creemos que Dios nos ha llamado
            a ser hombres de valor, que se levanten en medio de las adversidades
            y que sean capaces de enfrentar los desafíos de la vida con
            valentía, fe y esperanza.
          </p>
        </div>
        <div className="h-96">
          <h1 className="text-7xl text-center">Seccion en Construccion </h1>
        </div>
      </section>
    </>
  );
};

export default NosotrosPage;
