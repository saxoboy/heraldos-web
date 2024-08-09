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
    title: "Campamento ACHC República Dominicana",
    slug: "campamento-achc-republica-dominicana",
    image: "/images/events/evento-1.jpeg",
    category: "Campamentos",
    date: "29 y 30 de julio del 2023",
    content: `<p>Con relación a lo que fue nuestro primer campamento en la República Dominicana de la Asociación de caballeros Heraldos De Cristo, los días 29 y 30 de julio del 2023, para nosotros los caballeros fue una experiencia inolvidable, una experiencia gratificante ya que fue el primer campamento que pudimos celebrar en el país. </p><p>Y para ser el primero tuvimos una asistencia aceptable, de 92 caballeros, de manera que para nosotros el campamento fue un éxito bajo el tema Llenos del Espíritu. </p><p>Allá en cada una de las actividades vimos cómo el Señor se glorifica, como el Espíritu Santo nos lleno, se movió en nuestras vidas, de manera que todos los caballeros en un 90 y tanto por ciento quedaron satisfecho e iluminado y emocionado para un próximo campamento, ya que se desbordaron dandoloregtacias a Dios y agradeciéndoles también por dicha actividad. </p><p>Todo fue un éxito, hubieron dificultades cuando llegamos allá, pero gracias a Dios todo eso se pudo superar, de manera que los caballeros quedaron con el entusiasmo de volver a participar de otro campamento. </p><p>Gracias a usted por acompañarnos en dicho campamento: Mario Castillo y Juan Carlos Gregory.</p>`,
    link: "/noticias/1",
  },
  // {
  //   id: "2",
  //   title: "Pre convenciones 2024",
  //   slug: "pre-convenciones-2024",
  //   image: "/images/events/evento-1.jpeg",
  //   category: "Convenciones",
  //   date: "25 Julio 2024",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  //   link: "/noticias/2",
  // },
];
