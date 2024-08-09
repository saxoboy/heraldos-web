export interface EventosItem {
  id: string;
  title: string;
  slug: string;
  // photos: string[];
  place?: string;
  // category: string;
  date: string;
  // content: string;
}
export const eventosList: EventosItem[] = [
  {
    id: "1",
    title: "XIV Convención Nacional de los Heraldos de Cristo",
    slug: "xiv-convencion-nacional-de-los-heraldos-de-cristo",
    place:
      "Iglesia de Dios Pentecostal Dominicana / Tabernaculo de Dios de la Profecia",
    date: "2 y 3 de Agosto 2024",
  },
];
