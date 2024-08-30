import React from "react";
import Image from "next/image";
import TitleHeader from "@/components/title-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Classic Tie",
    price: 29.99,
    available: 50,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Ceramic Mug",
    price: 12.99,
    available: 100,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Ballpoint Pen",
    price: 3.99,
    available: 200,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Enamel Pin",
    price: 7.99,
    available: 75,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Polo Shirt",
    price: 24.99,
    available: 60,
    image: "/placeholder.svg?height=200&width=200",
  },
];

const TiendaPage = () => {
  return (
    <>
      <section className="-top-[50px] relative mb-8">
        <div className="container mx-auto max-w-[768px] lg:max-w-[1024px]">
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
          <div className="grid gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <Image
                      alt={product.name}
                      className="w-full h-48 object-cover"
                      height="200"
                      src={product.image}
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                      }}
                      width="200"
                    />
                  </div>
                  <CardContent className="flex-1 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Precio: ${product.price.toFixed(2)}
                        </p>
                        <p className="text-gray-600">
                          Disponibles: {product.available} unidades
                        </p>
                      </div>
                      <Button className="bg-orange-bg text-white hover:bg-orange-bg/50">
                        Añadir al carrito
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TiendaPage;
