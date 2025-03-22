export interface IProduct {
  id: number;
  name: string;
  image: string;
  talla?: string;
  //talla?: ETalla | string; // Permite que sea ETalla o string
}

export enum ETalla {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export const products = [
  {
    id: 1,
    name: "Corbata",
    image: "corbata-heraldos-2.jpeg",
  },
  {
    id: 2,
    name: "Pin",
    image: "ping.jpeg",
  },
  // {
  //   id: 3,
  //   name: "Camiseta Cuello",
  //   image: "camiseta-cuello.jpeg",
  //   talla: ETalla.S as string,
  // },
  // {
  //   id: 4,
  //   name: "Camiseta manga corta",
  //   image: "camiseta-negra.jpeg",
  //   talla: ETalla.S as string,
  // },
  // {
  //   id: 5,
  //   name: "Taza",
  //   image: "taza.jpeg",
  // },
  // {
  //   id: 6,
  //   name: "Camiseta manga larga",
  //   image: "buzo-blanco.jpeg",
  //   talla: ETalla.S as string,
  // },
  // {
  //   id: 7,
  //   name: "Gorra",
  //   image: "gorra.jpeg",
  // },
];
