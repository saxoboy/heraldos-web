import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter } from "lucide-react";
import TitleHeader from "@/components/title-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { NoticiasItem, noticiasList } from "@/data/noticias";

interface NoticiaPageProps {
  params: {
    slug: string;
  };
}

const NoticiaPage: FC<NoticiaPageProps> = ({ params }) => {
  const { slug } = params;
  const noticia = noticiasList.find(
    (noticia: NoticiasItem) => noticia.slug === slug
  );

  if (!noticia) {
    return (
      <div className="container flex flex-col my-12">
        <h1 className="text-4xl text-center w-full mb-4">
          Noticia no encontrada
        </h1>
        <Button className="lg:w-fit mx-auto" variant="secondary">
          <Link href="/noticias">Volver a noticias</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <TitleHeader
        txtTitle={`${noticia?.category}`}
        txtSubtitle={`${noticia?.title}`}
      />
      <div className="container flex flex-col lg:flex-row mt-12 gap-8 mb-12">
        <div className="w-full lg:w-1/5 lg:text-right">
          <h3 className="text-blue-title">Fecha:</h3>
          <p>{noticia.date}</p>
          <Separator />
          <h3 className="text-blue-title">Categoria:</h3>
          <p>{noticia.category}</p>
          <Separator />
          <h3 className="mb-2">Compartir:</h3>
          <div className="flex gap-4 justify-end">
            <ShareLink
              href={`https://twitter.com/intent/tweet?url=https://heraldos-web.vercel.app/noticias/${noticia.slug}`}
              label="Twitter"
              Icon={<Twitter />}
            />
            <ShareLink
              href={`https://www.facebook.com/sharer/sharer.php?u=https://heraldos-web.vercel.app/noticias/${noticia.slug}`}
              label="Facebook"
              Icon={<Facebook />}
            />
          </div>
        </div>
        <div className="w-full lg:w-4/5">
          <Image
            src={noticia.image}
            alt={noticia.title}
            width={440}
            height={440}
            className="rounded-lg float-right ml-8"
          />
          <p>{noticia.content}</p>
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

export default NoticiaPage;
