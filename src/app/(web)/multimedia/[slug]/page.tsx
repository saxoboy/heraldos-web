import { FC } from "react";
import Link from "next/link";
import { Facebook, Twitter } from "lucide-react";
import TitleHeader from "@/components/title-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MultimediaItem, multimediaList } from "@/data/multimedia";
import GalleryPhotos from "../_components/gallery";

interface MultimediaItemPageProps {
  params: {
    slug: string;
  };
}

const MultimediaPage: FC<MultimediaItemPageProps> = ({ params }) => {
  const { slug } = params;
  const multimedia = multimediaList.find(
    (events: MultimediaItem) => events.slug === slug
  );

  if (!multimedia) {
    return (
      <div className="container flex flex-col my-12">
        <h1 className="text-4xl text-center w-full mb-4">
          Galería Multimedia no encontrado
        </h1>
        <Button className="lg:w-fit mx-auto" variant="secondary">
          <Link href="/multimedia">Volver a multimedia</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <TitleHeader
        txtTitle={`${multimedia?.category}`}
        txtSubtitle={`${multimedia?.title}`}
      />
      <div className="container flex flex-col lg:flex-row mt-12 gap-8 mb-12">
        <div className="w-full lg:w-1/5 lg:text-right">
          <p>{multimedia.content}</p>
          <Separator />
          <h3 className="text-blue-title">Lugar:</h3>
          <p>{multimedia.place}</p>
          <Separator />
          <h3 className="text-blue-title">Fecha:</h3>
          <p>{multimedia.date}</p>
          <Separator />
          <h3 className="text-blue-title">Categoria:</h3>
          <p>{multimedia.category}</p>
          <Separator />
          <h3 className="mb-2">Compartir:</h3>
          <div className="flex gap-4 justify-end">
            <ShareLink
              href={`https://twitter.com/intent/tweet?url=https://heraldos-web.vercel.app/eventos/${multimedia.slug}`}
              label="Twitter"
              Icon={<Twitter />}
            />
            <ShareLink
              href={`https://www.facebook.com/sharer/sharer.php?u=https://heraldos-web.vercel.app/eventos/${multimedia.slug}`}
              label="Facebook"
              Icon={<Facebook />}
            />
          </div>
        </div>
        <div className="w-full lg:w-4/5">
          <GalleryPhotos title={multimedia.title} photos={multimedia.photos} />
          <div className="w-full my-8 flex justify-center">
            <Button variant="secondary" asChild>
              <Link href="/multimedia">Volver a Multimedia</Link>
            </Button>
          </div>
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

export default MultimediaPage;
