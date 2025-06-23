import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import TitleHeader from "@/components/title-header";
import { eventsList } from "@/data/events";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EventosPage = () => {
  const eventos = eventsList;

  return (
    <>
      <section className="-top-[50px] relative mb-8">
        <div className="container mx-auto max-w-[768px] lg:max-w-[1024px] pt-16 lg:pt-0">
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
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-title">
            Agenda de Eventos 2025-2026
          </h1>
          <p className="text-lg text-blue-txt mt-2">
            Asociación de Caballeros Heraldos de Cristo C.L.A.
          </p>
        </header>

        <div className="shadow-md rounded-lg overflow-hidden mb-12 max-w-2xl mx-auto">
          <div className="overflow-x-auto ">
            <table className="min-w-full divide-y divide-orange-bgTwo">
              <thead className=" bg-orange-bg text-blue-bgTwo">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider"
                  >
                    Fecha
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider"
                  >
                    Nombre del Evento
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-gray-bg">
                  <td
                    colSpan={2}
                    className="px-6 py-4 whitespace-nowrap text-sm font-bold "
                  >
                    AÑO 2025
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    11 de julio de 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    JUBILEO ACHC PRESBITERIO PA
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    15, 16, 17 de agosto de 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    CAMPAMENTO GENERAL ACHC CAMP MAHANAIM
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    5 de septiembre de 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    TRIMESTRAL ACHC PRESBITERIO MANHATTAN
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    10 de octubre de 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    JUBILEO ACHC PRESBITERIO NJ CENTRO
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    8 de noviembre de 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    JUBILEO ACHC PRESBITERIO CONNECTICUT
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    6 de diciembre de 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    CENA NAVIDEÑA ACHC DIRECTIVA Y VP`S Y FAMILIA
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    13 de diciembre de 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    TRIMESTRAL ACHC PRESBITERIO WASH/DC/MD/VA/NC
                  </td>
                </tr>

                <tr className="bg-gray-bg">
                  <td
                    colSpan={2}
                    className="px-6 py-4 whitespace-nowrap text-sm font-bold "
                  >
                    AÑO 2026
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    17 de enero de 2026
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    PRE-CONVENCIÓN PRESBITERIO WASH/DC/MD/VA/NC
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    23 de enero de 2026
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    PRE-CONVENCIÓN ACHC PRESBITERIO BRONX
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    24 de enero de 2026
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    PRE-CONVENCIÓN ACHC PRESBITERIO NJ SUR
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    30 de enero de 2026
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    PRE-CONVENCIÓN ACHC PRESBITERIO MANHATTAN
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    31 de enero de 2026
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    PRE-CONVENCIÓN ACHC PRESBITERIO BROOKLYN
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    6 de febrero de 2026
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    PRE-CONVENCIÓN ACHC PRESBITERIO NJ NORTE
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    13 de febrero de 2026
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    PRE-CONVENCIÓN ACHC PRESBITERIO NJ CENTRAL
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    14 de febrero de 2026
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    PRE-CONVENCIÓN ACHC PRESBITERIO MASS. NORTE
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    20 de febrero de 2026
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    PRE-CONVENCIÓN ACHC PRESBITERIO PENNSYLVANIA
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    21 de febrero de 2026
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    PRE CONVENCIÓN ACHC PRESBITERIO CONNECTICUT
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    27 de febrero de 2026
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    PRE CONVENCIÓN ACHC PRESBITERIO QUEENS/LI
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    28 de febrero de 2026
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    PRE-CONVENCIÓN ACHC PRESBITERIO MASS. WEST
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    20 y 21 de marzo de 2026
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    CONVENCIÓN INTERNACIONAL ACHC CLA
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <Button asChild variant="secondary">
            <Link
              href={"/documentos/agenda-2025-26-asociacion-de-caballeros.pdf"}
            >
              Descargar Agenda de Eventos
            </Link>
          </Button>
        </div>
        {/* <div className="text-center">
          <h1 className="text-4xl">Asociación de Caballeros</h1>
          <h2 className="text-2xl">Heraldos de Cristo C.L.A.</h2>
          <p>Preconvenciones ACHC 2025</p>
        </div> */}
        {/* <div className="w-full mx-auto p-4 space-y-6 mb-8 max-w-5xl">
          <div className="flex items-center justify-between">
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
          </div>
          <p className="text-center text-xl">No hay eventos disponibles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventos.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden transform hover:shadow-lg"
              >
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
                  <CardContent className="flex-1 p-4">
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
                          <p className="text-blue-txt m-0">
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
        </div> */}
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
