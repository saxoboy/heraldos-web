"use client";

import { useState } from "react";
import Image from "next/image";
import { PhoneInput } from "react-international-phone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ETalla, IProduct, products } from "@/data/productos";
import "react-international-phone/style.css";

interface ISelectedProduct extends IProduct {
  talla?: string; // Añade la talla seleccionada opcionalmente
}

export default function FormTienda() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    county: "",
    selectedItems: [] as ISelectedProduct[], // Ahora guarda los productos seleccionados
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Maneja la selección del producto (checkbox)
  const handleProductSelect = (product: IProduct) => {
    setFormData((prev) => {
      const isAlreadySelected = prev.selectedItems.some(
        (item) => item.id === product.id
      );
      if (isAlreadySelected) {
        // Si ya está seleccionado, lo quitamos
        return {
          ...prev,
          selectedItems: prev.selectedItems.filter(
            (item) => item.id !== product.id
          ),
        };
      } else {
        // Si no está seleccionado, lo agregamos
        return {
          ...prev,
          selectedItems: [...prev.selectedItems, product],
        };
      }
    });
  };

  // Maneja la selección de talla para un producto
  const handleSizeSelect = (productId: number, size: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedItems: prev.selectedItems.map((item) =>
        item.id === productId ? { ...item, talla: size } : item
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Correo enviado:", result.message);
        // Cierra el modal si es necesario
        setIsOpen(false);
      } else {
        console.error("Error al enviar el correo:", result.message);
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Order placed:", formData);
  //   setIsOpen(false);
  //   // Aquí puedes hacer el submit del formulario con los productos y sus tallas
  // };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Haga su orden</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Haga su orden</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="gap-4 grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="space-y-2">
            <Label htmlFor="fullName">Nombres Completos</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <PhoneInput
              name="phone"
              inputClassName="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              defaultCountry="us"
              value={formData.phone}
              onChange={(phone: string) =>
                setFormData((prev) => ({ ...prev, phone }))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="county">Condado</Label>
            <Input
              id="county"
              name="county"
              value={formData.county}
              onChange={handleInputChange}
            />
          </div>

          {/* Listado de productos */}
          <div className="lg:col-span-2 space-y-4">
            <Label>Seleccione artículos</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="space-y-2 border p-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={`product-${product.id}`}
                      onChange={() => handleProductSelect(product)}
                      checked={formData.selectedItems.some(
                        (item) => item.id === product.id
                      )}
                    />
                    <Label htmlFor={`product-${product.id}`} className="ml-2">
                      {product.name}
                    </Label>
                  </div>
                  <Image
                    src={`/images/store/${product.image}`}
                    alt={product.name}
                    width={150}
                    height={150}
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                  />

                  {/* Si el producto tiene tallas, mostrar el selector */}
                  {product.talla &&
                    formData.selectedItems.some(
                      (item) => item.id === product.id
                    ) && (
                      <Select
                        value={
                          formData.selectedItems.find(
                            (item) => item.id === product.id
                          )?.talla || ""
                        }
                        onValueChange={(value) =>
                          handleSizeSelect(product.id, value)
                        }
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Seleccionar Talla" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Talla</SelectLabel>
                            <SelectItem value={ETalla.S}>S</SelectItem>
                            <SelectItem value={ETalla.M}>M</SelectItem>
                            <SelectItem value={ETalla.L}>L</SelectItem>
                            <SelectItem value={ETalla.XL}>XL</SelectItem>
                            <SelectItem value={ETalla.XXL}>XXL</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-fit lg:col-span-2 mx-auto">
            Enviar Orden
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
