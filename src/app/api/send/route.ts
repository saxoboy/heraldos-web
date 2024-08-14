import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailContact = process.env.EMAIL_CONTACT;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(`Method: ${req.method}`);
  if (req.method === "POST") {
    const { nombre, correo, telefono, mensaje } = req.body;

    try {
      if (!emailContact) {
        return res.status(500).json({ error: "Email contact not defined" });
      }

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
        return res.status(500).json({ error });
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
