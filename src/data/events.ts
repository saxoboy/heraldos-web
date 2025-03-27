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

export const eventsList: EventItem[] = [];
