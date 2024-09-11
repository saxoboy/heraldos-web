import { FC } from "react";
import Link from "next/link";
import { Facebook, Twitter } from "lucide-react";
import TitleHeader from "@/components/title-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { EventItem, eventsList } from "@/data/events";
import GalleryPhotos from "../_components/gallery";

interface EventsPageProps {
  params: {
    slug: string;
  };
}

const EventsPage: FC<EventsPageProps> = ({ params }) => {
  const { slug } = params;
  const event = eventsList.find((events: EventItem) => events.slug === slug);

  if (!event) {
    return (
      <div className="container flex flex-col my-12">
        <h1 className="text-4xl text-center w-full mb-4">
          Evento no encontrado
        </h1>
        <Button className="lg:w-fit mx-auto" variant="secondary">
          <Link href="/eventos">Volver a eventos</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <TitleHeader
        txtTitle="eventos"
        txtSubtitle={`${event?.title}`}
      />
      <div className="container flex flex-col lg:flex-row mt-12 gap-8 mb-12">
        <div className="w-full lg:w-1/5 lg:text-right">
          <div
            className="mb-4 text-description"
            dangerouslySetInnerHTML={{ __html: event?.content || "" }}
          />
          <Separator />
          <h3 className="text-blue-title">Lugar:</h3>
          <p>{event.place}</p>
          <Separator />
          <h3 className="text-blue-title">Fecha:</h3>
          <p>{event.date}</p>
          <Separator />          
          <h3 className="mb-2">Compartir:</h3>
          <div className="flex gap-4 justify-end">
            <ShareLink
              href={`https://twitter.com/intent/tweet?url=https://heraldos-web.vercel.app/eventos/${event.slug}`}
              label="Twitter"
              Icon={<Twitter />}
            />
            <ShareLink
              href={`https://www.facebook.com/sharer/sharer.php?u=https://heraldos-web.vercel.app/eventos/${event.slug}`}
              label="Facebook"
              Icon={<Facebook />}
            />
          </div>
        </div>
        <div className="w-full lg:w-4/5">
          <GalleryPhotos title={event.title || "Título no disponible"} photos={event.photos || []} />
        </div>
      </div>
    </>
  );
};

interface ShareLinkProps {
  href: string;
  label: string;
  Icon: React.ReactNode;
}

const ShareLink: FC<ShareLinkProps> = ({ href, label, Icon }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Compartir en ${label}`}
    className="text-blue-title hover:text-orange-bg transition-colors duration-300 ease-in-out"
  >
    {Icon}
  </Link>
);

export default EventsPage;
