import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function sendEmail(
  to: string,
  subject: string,
  htmlContent: string
) {
  const msg = {
    to,
    from: `${process.env.EMAIL_CONTACT}`, // Cambia este correo al que hayas verificado en SendGrid
    subject,
    html: htmlContent,
  };

  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return { success: false, error: (error as any).message };
  }
}
