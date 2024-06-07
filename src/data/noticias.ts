export interface NoticiasItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  date: string;
  content: string;
  link: string;
}

export const noticiasList: NoticiasItem[] = [
  {
    id: "1",
    title: "Campamento República Dominicana",
    slug: "campamento-republica-dominicana",
    image: "/images/events/evento-1.jpeg",
    category: "Congresos",
    date: "25 Julio 2024",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    link: "/noticias/1",
  },
  {
    id: "2",
    title: "Pre convenciones 2024",
    slug: "pre-convenciones-2024",
    image: "/images/events/evento-1.jpeg",
    category: "Convenciones",
    date: "25 Julio 2024",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    link: "/noticias/2",
  },
];
