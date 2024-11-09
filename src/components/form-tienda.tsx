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
import { set } from "zod";

interface ISelectedProduct extends IProduct {
  cantidad: number;
  tallas?: string[]; // Array de tallas seleccionadas, uno por cada cantidad
}

export default function FormTienda() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    county: "",
    selectedItems: [] as ISelectedProduct[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProductSelect = (product: IProduct) => {
    setFormData((prev) => {
      const isAlreadySelected = prev.selectedItems.some(
        (item) => item.id === product.id
      );
      if (isAlreadySelected) {
        return {
          ...prev,
          selectedItems: prev.selectedItems.filter(
            (item) => item.id !== product.id
          ),
        };
      } else {
        return {
          ...prev,
          selectedItems: [...prev.selectedItems, { ...product, cantidad: 1 }],
        };
      }
    });
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    setFormData((prev) => ({
      ...prev,
      selectedItems: prev.selectedItems.map((item) =>
        item.id === productId ? { ...item, cantidad: quantity } : item
      ),
    }));
  };

  const handleSizeSelect = (productId: number, index: number, size: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedItems: prev.selectedItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              tallas: item.tallas
                ? Object.assign([], item.tallas, { [index]: size })
                : Array(item.cantidad).fill(""),
            }
          : item
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess("¡Orden enviada exitosamente!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          county: "",
          selectedItems: [],
        });
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else {
        const data = await response.json();
        setSubmitError(data.error || "Hubo un error al enviar la orden.");
      }
    } catch (error) {
      setSubmitError("Hubo un error al enviar la orden.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              inputClassName="w-full"
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
                      objectFit: "cover",
                      aspectRatio: "1/1",
                    }}
                  />

                  {/* Selector de cantidad */}
                  {formData.selectedItems.some(
                    (item) => item.id === product.id
                  ) && (
                    <div className="space-y-2">
                      <Label htmlFor={`cantidad-${product.id}`}>Cantidad</Label>
                      <Input
                        id={`cantidad-${product.id}`}
                        type="number"
                        min="1"
                        value={
                          formData.selectedItems.find(
                            (item) => item.id === product.id
                          )?.cantidad || 1
                        }
                        onChange={(e) =>
                          handleQuantityChange(
                            product.id,
                            Number(e.target.value)
                          )
                        }
                      />
                    </div>
                  )}

                  {/* Si el producto tiene tallas, mostrar el selector de talla por cada cantidad */}
                  {product.talla &&
                    formData.selectedItems.some(
                      (item) => item.id === product.id
                    ) && (
                      <>
                        <Label>Tallas por cantidad</Label>
                        {[
                          ...Array(
                            formData.selectedItems.find(
                              (item) => item.id === product.id
                            )?.cantidad || 1
                          ),
                        ].map((_, index) => (
                          <Select
                            key={index}
                            value={
                              formData.selectedItems.find(
                                (item) => item.id === product.id
                              )?.tallas?.[index] || ""
                            }
                            onValueChange={(value) =>
                              handleSizeSelect(product.id, index, value)
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
                        ))}
                      </>
                    )}
                </div>
              ))}
            </div>
          </div>
          {submitError && <p className=" text-[red]">{submitError}</p>}
          {submitSuccess && <p className="text-[green]">{submitSuccess}</p>}
          <Button
            type="submit"
            className="w-fit lg:col-span-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
