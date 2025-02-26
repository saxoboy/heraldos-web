"use client";

import { set, z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import TitleHeader from "@/components/title-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";

const formSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(50, { message: "El nombre no puede tener más de 50 caracteres" }),
  correo: z
    .string()
    .email({ message: "Debe ser un correo electrónico válido" }),
  telefono: z.string(),
  mensaje: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

const ContactosPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Correo enviado con éxito!");
        setMessage("Correo enviado con éxito!");
      } else {
        console.error("Error al enviar el correo");
        setMessage(
          "Hubo un error al enviar el correo, por favor intenta de nuevo"
        );
      }
    } catch (error) {
      console.error("Hubo un error en la conexión:", error);
      setMessage("Hubo un error en la conexión, por favor intenta de nuevo");
    } finally {
      setIsLoading(false);
      form.reset();
    }
  }

  return (
    <>
      <section className="-top-[50px] relative mb-8">
        <div className="container mx-auto max-w-[768px] lg:max-w-[1024px] pt-16 lg:pt-0">
          <Image
            src="/images/contactos.png"
            alt=""
            width={139}
            height={116}
            className="w-auto h-auto mx-auto relative z-10"
          />
        </div>
      </section>
      <section className="relative">
        <div className="container flex flex-col lg:flex-row justify-start items-start gap-8 mb-12">
          <div className="w-full lg:w-1/2">
            <h1 className="hidden sm:block text-4xl md:text-5xl font-bold sm:py-4 text-center text-white">
              <TitleHeader txtTitle="Contactos" txtSubtitle="Contactos" />
            </h1>
            <h2 className="text-3xl mb-12 ">
              ¿Necesitas <span className="text-orange-bg">ayuda</span>?
            </h2>
            <p>
              Tienes dudas, novedades o sugerencias, por favor llena el
              siguiente formulario y nos pondremos en contacto contigo
            </p>

            <p>Para más información:</p>

            <div className="flex gap-4">
              <div className="text-orange-bg">
                <MapPin />
              </div>
              <p>661 Main St, Hackensack, NJ 07601, EE. UU.</p>
            </div>
            <div className="flex gap-4">
              <div className="text-orange-bg">
                <Phone />
              </div>
              <p>
                <Link href="tel:+12406448582">+1 (240) 644-8582</Link>
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-orange-bg">
                <Mail />
              </div>
              <p>
                <Link href="mailto:info@heraldoscla.com">
                  info@heraldoscla.com
                </Link>
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-orange-bg">
                <MessageCircleMore />
              </div>
              <p>
                <Link
                  href="https://api.whatsapp.com/send?phone=12406448582"
                  target="_blank"
                >
                  +1 (240) 644-8582
                </Link>
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pt-48">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre y Apellido</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ingresa tu nombre y apellido"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="correo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ingresa tu correo electrónico"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ingresa tu número celular"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Escribe tu mensaje"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" variant="outline">
                  Enviar Mensaje
                </Button>
              </form>
            </Form>
            {isLoading && <p>Enviando...</p>}
            {message && (
              <div
                className={`${
                  message === "Correo enviado con éxito!"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } p-4 rounded-md mb-4`}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactosPage;