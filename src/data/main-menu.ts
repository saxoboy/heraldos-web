export type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

export const mainMenu: NavItem[] = [
  {
    label: "Inicio",
    link: "/",
  },
  {
    label: "Nosotros",
    link: "#",
    children: [
      {
        label: "Nosotros",
        link: "/nosotros",
      },
      {
        label: "Calendar",
        link: "#",
      },
    ],
  },
  {
    label: "Multimedia",
    link: "#",
  },
  {
    label: "Eventos",
    link: "#",
  },
  {
    label: "Noticias",
    link: "#",
  },
  {
    label: "Documentos",
    link: "#",
    children: [
      {
        label: "Todo list",
        link: "#",
      },
      {
        label: "Calendar",
        link: "#",
      },
    ],
  },
  {
    label: "Contactos",
    link: "#",
  },
];
