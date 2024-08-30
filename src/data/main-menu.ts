export interface NavItem {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
}

export const mainMenu: NavItem[] = [
  {
    label: "Inicio",
    link: "/",
  },
  {
    label: "Nosotros",
    link: "/nosotros",
    children: [
      {
        label: "Junta Ejecutiva",
        link: "/nosotros/junta-ejecutiva",
      },
      {
        label: "Vicepresidentes de condados",
        link: "/nosotros/vicepresidentes-condados",
      },
      {
        label: "Presidentes de paises foraneos",
        link: "/nosotros/presidentes-paises-foraneos",
      },
    ],
  },  
  {
    label: "Eventos",
    link: "/eventos",
  },
  {
    label: "Noticias",
    link: "/noticias",
  },
  {
    label: "Tienda",
    link: "/tienda",
  },
  {
    label: "Documentos",
    link: "/documentos",
    children: [
      {
        label: "Reglamentos",
        link: "/documentos/reglamentos",
      },
      {
        label: "Formularios",
        link: "/documentos/formularios",
      },
    ],
  },
  {
    label: "Contactos",
    link: "/contactos",
  },
];
