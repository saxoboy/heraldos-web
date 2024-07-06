import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import TitleHeader from "@/components/title-header";
import { eventsList } from "@/data/events";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
        </div>
      </section>
    </>
  );
};

export default EventosPage;
