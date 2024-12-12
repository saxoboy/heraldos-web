import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, CalendarDaysIcon } from "lucide-react";
import TitleHeader from "@/components/title-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { noticiasList } from "@/data/noticias";

const NoticiasPage = () => {
  const noticias = noticiasList.sort((a, b) => Number(b.id) - Number(a.id));
  return (
    <>
      <section className="-top-[50px] relative">
        <div className="container mx-auto max-w-[768px] lg:max-w-[1024px] pt-16 lg:pt-0">
          <Image
            src="/images/noticias.png"
            alt=""
            width={139}
            height={116}
            className="w-auto h-auto mx-auto relative z-10"
          />
          <h1 className="hidden sm:block text-4xl md:text-5xl font-bold sm:py-4 text-center text-white">
            <TitleHeader txtTitle="Noticias" txtSubtitle="Noticias" />
          </h1>
        </div>
      </section>
      <section className="relative">
        <div className="container flex justify-center items-start flex-wrap gap-4 mb-12">
          {noticias.map((noticia) => (
            <Card
              key={noticia.id}
              className="w-full md:max-w-[355px] lg:max-w-[395px] 2xl:max-w-[450px] transition-all hover:shadow-xl"
            >
              <div className="flex flex-col">
                <div className="w-full relative p-4">
                  <Link href={`/noticias/${noticia.slug}`}>
                    <Image
                      src={noticia.photos[0]}
                      alt={noticia.title}
                      width={350}
                      height={350}
                      className="w-full h-auto mx-auto rounded-xl z-0"
                      loading="lazy"
                    />
                    <Badge
                      variant="secondary"
                      className=" absolute top-8 left-8"
                    >
                      {noticia.category}
                    </Badge>
                  </Link>
                </div>
                {/* <div className="flex justify-center items-center space-x-2 bg-orange-bg text-white px-4 py-2 rounded-full mx-auto w-fit -top-9 relative">
                  <CalendarDaysIcon className="h-5 w-5" />
                  <span className="text-sm">{noticia.date}</span>
                </div> */}
                <CardContent className="space-y-4 p-4 pt-0">
                  <h3 className="text-xl text-center font-semibold xl:truncate">
                    {noticia.title}
                  </h3>
                  <p className="block">
                    {noticia.content.length > 100 &&
                      noticia.content.substring(0, 100) + "..."}
                  </p>
                  <div className="flex justify-center items-center">
                    <Button
                      variant="outline"
                      className="justify-self-end"
                      size="icon"
                    >
                      <Link href={`/noticias/${noticia.slug}`}>
                        <ArrowRightIcon className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default NoticiasPage;
