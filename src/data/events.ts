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
    id: "1",
    place: "Albany/Springfield (Mass Sur)",
    date: "8/Mar/25",
  },
  {
    id: "2",
    place: "Boston/Rhode Island (Mass Norte)",
    date: "14/Feb/25",
  },

  {
    id: "4",
    place: "Brooklyn",
    date: "1/Mar/25",
  },
  {
    id: "5",
    tag: "Buffalo/Up State NY",
    place: "Connecticut",
    date: "22/Feb/25",
  },
  {
    id: "6",
    place: "Manhattan",
    date: "8/Feb/25",
  },
  {
    id: "7",
    place: "New Jersey Centro",
    date: "15/Feb/25",
  },
  {
    id: "8",
    place: "New Jersey Norte",
    date: "7/Feb/25",
  },

  {
    id: "11",
    place: "Pennsylvania",
    date: "21/Feb/25",
  },
  {
    id: "12",
    place: "Queens/Long Island",
    date: "7/Mar/25",
  },
];
