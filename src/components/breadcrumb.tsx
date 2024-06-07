"use client";
import { Fragment } from "react";
import {
  useParams,
  usePathname,
  useSelectedLayoutSegment,
} from "next/navigation";
import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { noticiasList } from "@/data/noticias";
import { mainMenu } from "@/data/main-menu";

export function BreadcrumbMain() {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();
  const params = useParams<{ slug: string }>();
  const noticia = noticiasList.find((noticia) => noticia.slug === params.slug);

  // Extraer los segmentos de la URL
  const pathSegments = pathname.split("/").filter(Boolean);

  // Función auxiliar para encontrar el menú y su posible hijo
  const findMenuAndChild = (segments: string[]) => {
    let currentMenu = mainMenu.find((item) => item.link === `/${segments[0]}`);
    let currentChild;

    if (currentMenu && segments.length > 1) {
      currentChild = currentMenu.children?.find(
        (child) => child.link === `/${segments.join("/")}`
      );
    }

    return { currentMenu, currentChild };
  };

  const { currentMenu, currentChild } = findMenuAndChild(pathSegments);

  const getTitle = () => {
    if (params?.slug) return noticia?.title || "Noticia no encontrada";
    if (currentChild) return currentChild.label;
    if (currentMenu) return currentMenu.label;
    return segment || "";
  };

  const getLabelForSegment = (segment: string) => {
    const menuItem = mainMenu.find((item) => item.link === `/${segment}`);
    const childItem = menuItem?.children?.find(
      (child) => child.link === `/${segment}`
    );

    return childItem?.label || menuItem?.label || segment.replace(/-/g, " ");
  };

  return (
    <>
      <h1 className="text-5xl font-semibold text-gray-txt pb-4 capitalize">
        {getTitle()}
      </h1>

      <Breadcrumb>
        <BreadcrumbList className="justify-center">
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-orange-bg text-lg hover:text-gray-txt"
            >
              Inicio
            </BreadcrumbLink>
          </BreadcrumbItem>

          {pathSegments.map((seg, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;

            const label = getLabelForSegment(seg);

            // Evita duplicar el título de la noticia en el breadcrumb
            if (params?.slug && isLast && noticia) return null;

            return (
              <Fragment key={href}>
                <BreadcrumbSeparator>
                  <Slash className="text-lg text-white" />
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  {isLast && !params?.slug ? (
                    <BreadcrumbPage className="text-lg text-white capitalize">
                      {label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      href={href}
                      className="text-orange-bg text-lg capitalize hover:text-gray-txt"
                    >
                      {label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </Fragment>
            );
          })}

          {params?.slug && (
            <>
              <BreadcrumbSeparator>
                <Slash className="text-lg text-white" />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage className="text-lg text-white">
                  {noticia?.title || "Noticia no encontrada"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
