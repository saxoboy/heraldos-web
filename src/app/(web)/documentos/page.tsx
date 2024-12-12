import Link from "next/link";
import Image from "next/image";
import TitleHeader from "@/components/title-header";
import { Button } from "@/components/ui/button";
import { FileText, FileType } from "lucide-react";
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
          <div className="hidden sm:block text-4xl md:text-5xl font-bold sm:py-4 text-center text-white">
            <TitleHeader
              txtTitle="Documentos"
              txtSubtitle="Reglamentos y Formularios"
            />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col md:flex-row container space-y-4 mb-12">
        <div className="w-full lg:w-1/2 text-center flex flex-col justify-center items-center gap-8">
          <div>
            <FileType size="100" absoluteStrokeWidth />
          </div>
          <Button asChild>
            <Link href="/documentos/reglamentos">
              <h2>Reglamentos</h2>
            </Link>
          </Button>
        </div>
        <div className="w-full lg:w-1/2 text-center flex flex-col justify-center items-center gap-4">
          <div>
            <FileText size="100" absoluteStrokeWidth />
          </div>
          <Button asChild variant="secondary">
            <Link href="/documentos/formularios">
              <h2>Formularios</h2>
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default DocumentosPage;
