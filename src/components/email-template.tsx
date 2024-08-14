export interface EmailTemplateProps {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  correo,
  telefono,
  mensaje,
}) => (
  <div>
    <h1>Nuevo mensaje de contacto de Heraldos de Cristo</h1>
    <p>
      <strong>Nombre:</strong> {nombre}
    </p>
    <p>
      <strong>Correo:</strong> {correo}
    </p>
    <p>
      <strong>Teléfono:</strong> {telefono}
    </p>
    <p>
      <strong>Mensaje:</strong> {mensaje}
    </p>
  </div>
);
