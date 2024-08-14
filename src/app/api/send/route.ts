import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailContact = process.env.EMAIL_CONTACT;

export async function POST(req: any) {
  const { nombre, correo, telefono, mensaje } = req.body;
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["israelherrerae@gmail.com"], // Reemplaza con la dirección de correo de destino
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      react: EmailTemplate({
        nombre,
        correo,
        telefono,
        mensaje,
      }) as React.ReactElement, // Puedes adaptar la plantilla para incluir otros datos
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
