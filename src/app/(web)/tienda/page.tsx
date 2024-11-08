import React from "react";
import Image from "next/image";
import TitleHeader from "@/components/title-header";
import { Card, CardContent } from "@/components/ui/card";
import FormTienda from "@/components/form-tienda";
import { products } from "@/data/productos";

const TiendaPage = () => {
  return (
    <>
      <section className="-top-[50px] relative mb-8">
        <div className="container mx-auto max-w-[768px] lg:max-w-[1024px] pt-16 lg:pt-0">
          <Image
            src="/images/documentos.png"
            alt=""
            width={139}
            height={116}
            className="w-auto h-auto mx-auto relative z-10"
          />
          <h1 className="hidden sm:block text-4xl md:text-5xl font-bold sm:py-4 text-center text-white">
            <TitleHeader txtTitle="Tienda" txtSubtitle="Suvenir y Regalos" />
          </h1>
        </div>
      </section>

      <section className="relative flex flex-col lg:flex-row container space-y-4 mb-12">
        <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
          <div className="flex justify-center">
            <FormTienda />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="flex flex-col">
                  <div className="w-full max-h-[200px] max-w-[200px] mx-auto">
                    <Image
                      alt={product.name}
                      className="w-full object-cover"
                      height="200"
                      src={`/images/store/${product.image}`}
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                      }}
                      width="200"
                    />
                  </div>
                  <CardContent className="flex-1 py-6">
                    <h3 className="text-xl font-bold text-center">
                      {product.name}
                    </h3>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <FormTienda />
          </div>
        </div>
      </section>
    </>
  );
};

export default TiendaPage;
