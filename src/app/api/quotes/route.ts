import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendgrid";

export async function POST(request: Request) {
  const { fullName, email, phone, county, selectedItems } =
    await request.json();

  // Validación de campos obligatorios
  if (!fullName || !email || !phone || !county || !selectedItems?.length) {
    return NextResponse.json(
      { error: "Todos los campos son obligatorios" },
      { status: 400 }
    );
  }

  console.log(fullName, email, phone, county, selectedItems);

  // Generar el contenido de productos seleccionados
  const itemsContent = selectedItems
    .map(
      (item: { name: any; cantidad: any; tallas: any[] }, index: number) => `
        <h4>Producto ${index + 1}:</h4>
        <p><strong>Nombre:</strong> ${item.name}</p>
        <p><strong>Cantidad:</strong> ${item.cantidad}</p>
        ${
          item.tallas
            ? `<p><strong>Tallas seleccionadas:</strong> ${item.tallas.join(
                ", "
              )}</p>`
            : ""
        }
      `
    )
    .join("");

  // Contenido del correo
  const emailContent = `
    <h3>Nuevo Pedido desde el Formulario de Tienda</h3>
    <p><strong>Nombre Completo:</strong> ${fullName}</p>
    <p><strong>Correo:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Condado:</strong> ${county}</p>
    <h3>Productos Seleccionados:</h3>
    ${itemsContent}
  `;

  try {
    const result = await sendEmail(
      "israelherrerae@gmail.com",
      "Nuevo pedido desde el formulario de Tienda",
      emailContent
    );

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Correo enviado exitosamente",
      });
    } else {
      return NextResponse.json(
        { error: "Error al enviar el correo" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error al enviar el correo", details: error },
      { status: 500 }
    );
  }
}
