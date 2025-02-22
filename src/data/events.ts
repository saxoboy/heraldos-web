export interface EventItem {
  id: string;
  title?: string;
  tag?: string;
  slug?: string;
  photos?: string[];
  place: string;
  date: string;
  content?: string;
}

export const eventsList: EventItem[] = [
  {
    id: "4",
    place: "Brooklyn",
    date: "1/Mar/25",
  },
  {
    id: "12",
    place: "Queens/Long Island",
    date: "7/Mar/25",
  },
  {
    id: "1",
    place: "Albany/Springfield (Mass Sur)",
    date: "8/Mar/25",
  },
];
