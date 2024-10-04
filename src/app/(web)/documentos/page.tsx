import Image from "next/image";
import TitleHeader from "@/components/title-header";

const DocumentosPage = () => {
  return (
    <>
      <section className="-top-[50px] relative mb-8">
        <div className="container mx-auto max-w-[768px] lg:max-w-[1024px] pt-16 lg:pt-0">
          <Image
            src="/images/documentos.png"
            alt=""
            width={139}
            height={116}
            className="w-auto h-auto mx-auto relative z-10"
          />
          <h1 className="hidden sm:block text-4xl md:text-5xl font-bold sm:py-4 text-center text-white">
            <TitleHeader
              txtTitle="Documentos"
              txtSubtitle="Reglamentos y Formularios"
            />
          </h1>
        </div>
      </section>

      <section className="relative flex flex-col lg:flex-row container space-y-4 mb-12">
        <div className="w-full lg:w-1/2 text-center">
          <h2>Formularios</h2>
        </div>
        <div className="w-full lg:w-1/2 text-center">
          <h2>Documentos</h2>
        </div>
      </section>
    </>
  );
};

export default DocumentosPage;
