import Image from "next/image";
import TitleHeader from "@/components/title-header";

const PresidentesPaisesForaneosPage = () => {
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
            <TitleHeader
              txtTitle="nosotros"
              txtSubtitle="Presidentes Paises Foraneos"
            />
          </h1>
        </div>
      </section>
      <section className="relative">
        <div className="h-96">
          <h1 className="text-7xl text-center">Seccion en Construccion </h1>
        </div>
      </section>
    </>
  );
};

export default PresidentesPaisesForaneosPage;
