import Link from "next/link";
import Image from "next/image";
import { Mail, MapPinned, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TitleHeader from "@/components/title-header";
import { vicepresidentesList } from "@/data/vicepresidentes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const VicepresidentesCondadosPage = () => {
  const vicepresidente = vicepresidentesList;
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
            <TitleHeader
              txtTitle="nosotros"
              txtSubtitle="Vicepresidentes de Condados"
            />
          </h1>
          <p className="text-center text-lg">
            Asociación de Caballeros Heraldos de Cristo C.L.A.
          </p>
        </div>

        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-blue-txt">
            {vicepresidente.map((person) => (
              <Card key={person.id} className="p-4">
                <Image
                  src={`/images/nosotros/${person.image}`}
                  alt={person.name}
                  width={420}
                  height={310}
                  className="w-auto h-auto mx-auto rounded-lg"
                  loading="lazy"
                />
                <h3 className="mt-4 text-xl font-semibold text-center">
                  {person.name}
                </h3>
                <p className="text-sm text-center">{person.position}</p>
                <div className="flex justify-evenly items-center">
                  <TooltipProvider>
                    {/* <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="link" className="p-3 text-orange-bg">
                          <MapPinned className="w-6 h-6" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="mb-0">{person.address}</p>
                      </TooltipContent>
                    </Tooltip> */}
                    {person.phone && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="link"
                            className="p-3 text-orange-bg"
                            asChild
                          >
                            <Link href={`tel:${person.phone}`}>
                              <Phone className="w-6 h-6" />
                            </Link>
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
                    )}
                    {person.email && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            asChild
                            variant="link"
                            className="p-3 text-orange-bg"
                          >
                            <Link
                              href={`mailto:${person.email}?subject=Contacto%20desde%20la%20página%20web%20de%20Heraldos%20De%20Cristo`}
                            >
                              <Mail className="w-6 h-6" />
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="mb-0">{person.email}</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
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

export default VicepresidentesCondadosPage;
