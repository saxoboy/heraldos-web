import Link from "next/link";
import Image from "next/image";
import { Mail, MapPinned, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TitleHeader from "@/components/title-header";
import { presidenteList } from "@/data/presidentes-foraneos";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PresidentesPaisesForaneosPage = () => {
  const presidente = presidenteList;
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
              txtSubtitle="Presidentes Paises Foraneos"
            />
          </h1>
        </div>
      </section>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-blue-txt mb-12">
          {presidente.map((person) => (
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
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="link" className="p-3 text-orange-bg">
                        <Phone className="w-6 h-6" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="mb-0">
                        <Link href={`tel:${person.phone}`}>{person.phone}</Link>
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
    </>
  );
};

export default PresidentesPaisesForaneosPage;
