import Image from "next/image";
import TitleHeader from "@/components/title-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ReglamentosPage = () => {
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
            <TitleHeader txtTitle="Documentos" txtSubtitle="Reglamentos" />
          </h1>
        </div>
      </section>
      <section className="relative">
        <section className="relative container space-y-4 mb-12">
          <Card>
            <CardContent className="pt-6 flex justify-between items-center">
              <h3 className="flex-1">
                Forma de Solicitud para Candidatura para la Junta
              </h3>
              <div className="flex-1 text-center">PDF</div>
              <Button className="w-fit" variant="secondary">
                <Link
                  href={
                    "/documentos/Forma-de-Solicitud-para-Candidatura-para-la-Junta.pdf"
                  }
                  target="_blank"
                >
                  Descargar
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex justify-between items-center">
              <h3 className="flex-1">
                Formas Informes Pre-Convenciones Para Iglesias
              </h3>
              <div className="flex-1 text-center">PDF</div>
              <Button className="w-fit" variant="secondary">
                <Link
                  href={
                    "/documentos/Formas Informes Pre-Convenciones-Para-Iglesias.pdf"
                  }
                  target="_blank"
                >
                  Descargar
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex justify-between items-center">
              <h3 className="flex-1">
                Forma de Informe Anual de VP de Condado
              </h3>
              <div className="flex-1 text-center">PDF</div>
              <Button className="w-fit" variant="secondary">
                <Link
                  href={
                    "/documentos/Forma-de-Informe-Anual-de-VP-de-Condado.pdf"
                  }
                  target="_blank"
                >
                  Descargar
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </section>
    </>
  );
};

export default ReglamentosPage;
