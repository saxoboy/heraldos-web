import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TitleHeader from "@/components/title-header";
import { eventsList } from "@/data/events";
import { Button } from "@/components/ui/button";

const EventosPage = () => {
  const eventos = eventsList;

  return (
    <>
      <section className="-top-[50px] relative mb-8">
        <div className="container mx-auto max-w-[768px] lg:max-w-[1024px]">
          <Image
            src="/images/eventos.png"
            alt=""
            width={139}
            height={116}
            className="w-auto h-auto mx-auto relative z-10"
          />
          <h1 className="hidden sm:block text-4xl md:text-5xl font-bold sm:py-4 text-center text-white">
            <TitleHeader txtTitle="Eventos" txtSubtitle="Eventos" />
          </h1>
        </div>
      </section>
      <section className="relative container">
        <div className="text-center">
          <h1 className="text-4xl">CONCILIO LATINOAMERICANO</h1>
          <h2 className="text-2xl">DE LA IGLESIA DE DIOS PENTECOSTAL, INC.</h2>
          <p>Preconvenciones ACHC 2025</p>
        </div>
        <div className="w-full mx-auto p-4 space-y-6 mb-8 max-w-5xl">
          {/* <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-2xl font-bold">Mayo, 2024</h2>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="secondary"
                className="bg-orange-bg text-white hover:bg-orange-600"
              >
                Listado
              </Button>
              <Button variant="ghost">Mensual</Button>
            </div>
          </div> */}
          <div className="grid gap-6">
            {eventos.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {event.photos && (
                    <div className="relative w-full md:w-1/3">
                      {event.tag && (
                        <div className="absolute top-2 left-2 bg-white rounded-full px-3 py-1 text-sm font-medium">
                          {event.tag}
                        </div>
                      )}

                      <Image
                        alt={event.place}
                        className="w-full h-48 object-cover"
                        height="200"
                        src={event.photos[0]}
                        style={{
                          aspectRatio: "300/200",
                          objectFit: "cover",
                        }}
                        width="300"
                      />
                    </div>
                  )}
                  <CardContent className="flex-1 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        {event.date && (
                          <div className="inline-block bg-orange-bg text-white text-sm font-medium px-3 py-1 rounded-full mb-2">
                            {event.date}
                          </div>
                        )}

                        {event.title && (
                          <h3 className="text-xl font-bold mb-2">
                            {event.title}
                          </h3>
                        )}

                        {event.place && (
                          <p className="text-blue-txt">
                            <span className="font-semibold">Lugar:</span>{" "}
                            {event.place}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-orange-500"
                      >
                        <ArrowRight className="h-6 w-6" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {eventos.map((event) => (
            <Card key={event.id} className="p-4 shadow-lg lg:max-w-96">
              <div className="relative group">
                <Image
                  src={event.photos[0]}
                  alt={event.title}
                  width={348}
                  height={370}
                  className="w-auto h-auto mx-auto rounded-lg"
                  loading="lazy"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-blue-bg/50 text-white p-2 rounded-lg hidden group-hover:flex group-hover:justify-center group-hover:items-center">
                  <Link href={`/eventos/${event.slug}`}>
                    <Plus className="bg-white p-4 text-orange-bg rounded-full w-14 h-14" />
                  </Link>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-center py-4 text-blue-title">
                {event.title}
              </h2>
              <p className="text-center truncate">{event.content}</p>
            </Card>
          ))}
        </div> */}
      </section>
    </>
  );
};

export default EventosPage;
