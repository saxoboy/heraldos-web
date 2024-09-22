import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Configura tu clave API de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Extrae los datos del formulario del cuerpo de la solicitud
    const { fullName, email, phone, county, selectedItems } = body;

    const selectedProducts = selectedItems
      .map(
        (item: any) =>
          `${item.name} (Talla: ${item.talla || "No especificada"})`
      )
      .join(", ");

    // Crea el contenido del correo
    const msg = {
      to: "israelherrerae@gmail.com", // Dirección a la que se enviará el correo
      from: "tuemail@dominio.com", // Tu dirección de correo (verifica esta dirección en SendGrid)
      subject: `Nueva Orden de ${fullName}`,
      text: `Nueva orden realizada:
            Nombre: ${fullName}
            Email: ${email}
            Teléfono: ${phone}
            Condado: ${county}
            Productos seleccionados: ${selectedProducts}
            `,
      html: `
        <h1>Nueva Orden</h1>
        <p><strong>Nombre:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Condado:</strong> ${county}</p>
        <p><strong>Productos seleccionados:</strong> ${selectedProducts}</p>
      `,
    };

    // Envía el correo
    await sgMail.send(msg);

    return NextResponse.json({ message: "Correo enviado exitosamente." });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { message: "Error al enviar el correo." },
      { status: 500 }
    );
  }
}
