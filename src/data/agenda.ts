export interface AgendaItem {
  id: string;
  /** Fecha de inicio en formato YYYY-MM-DD; tambien sirve de prefijo del id. */
  date: string;
  title: string;
  preacher?: string;
  highlight?: boolean;
  /** Solo para eventos de varios dias: ultimo dia, en formato YYYY-MM-DD. */
  endDate?: string;
}

export interface AgendaYear {
  year: number;
  items: AgendaItem[];
}

export const agendaList: AgendaYear[] = [
  {
    year: 2026,
    items: [
      {
        id: "2026-09-04",
        date: "4 de septiembre de 2026",
        title: "Trimestral Manhattan",
        preacher: "Hno. Manuel Trochez",
      },
      {
        id: "2026-10-09",
        date: "9 de octubre de 2026",
        title: "Trimestral NJ Central",
        preacher: "Hno. Ángel Martínez",
      },
      {
        id: "2026-11-14",
        date: "14 de noviembre de 2026",
        title: "Jubileo Connecticut",
        preacher: "Hno. Daniel Carrales",
      },
      {
        id: "2026-12-05",
        date: "5 de diciembre de 2026",
        title: "Cena Navideña",
      },
      {
        id: "2026-12-12",
        date: "12 de diciembre de 2026",
        title: "Jubileo Washington DC",
        preacher: "Hno. Mauricio Stewart",
      },
    ],
  },
  {
    year: 2027,
    items: [
      {
        id: "2027-01-16",
        date: "16 de enero de 2027",
        title: "Pre-convención Washington DC",
      },
      {
        id: "2027-01-22",
        date: "22 de enero de 2027",
        title: "Pre-convención Bronx",
      },
      {
        id: "2027-01-23",
        date: "23 de enero de 2027",
        title: "Pre-convención NJ Sur / Delaware",
      },
      {
        id: "2027-01-29",
        date: "29 de enero de 2027",
        title: "Pre-convención Manhattan",
      },
      {
        id: "2027-01-30",
        date: "30 de enero de 2027",
        title: "Pre-convención Brooklyn",
      },
      {
        id: "2027-02-05",
        date: "5 de febrero de 2027",
        title: "Pre-convención NJ Norte",
      },
      {
        id: "2027-02-12",
        date: "12 de febrero de 2027",
        title: "Pre-convención NJ Central",
      },
      {
        id: "2027-02-13",
        date: "13 de febrero de 2027",
        title: "Pre-convención Mass. Norte / RH / Boston",
      },
      {
        id: "2027-02-19",
        date: "19 de febrero de 2027",
        title: "Pre-convención Pennsylvania",
      },
      {
        id: "2027-02-20",
        date: "20 de febrero de 2027",
        title: "Pre-convención Connecticut",
      },
      {
        id: "2027-02-26",
        date: "26 de febrero de 2027",
        title: "Pre-convención Queens / LI",
      },
      {
        id: "2027-02-27",
        date: "27 de febrero de 2027",
        title: "Pre-convención Mass. West / Springfield",
      },
      {
        id: "2027-03-19",
        date: "19 y 20 de marzo de 2027",
        endDate: "2027-03-20",
        title:
          "Convención Anual de la Asociación de Caballeros Heraldos de Cristo",
        highlight: true,
      },
      {
        id: "2027-05-07",
        date: "7 de mayo de 2027",
        title: "Jubileo Bronx",
      },
      {
        id: "2027-06-11-trimestral",
        date: "11 de junio de 2027",
        title: "Trimestral NJ Sur / Delaware",
      },
      {
        id: "2027-06-11-retiro",
        date: "11 y 12 de junio de 2027",
        endDate: "2027-06-12",
        title: "Retiro de Líderes",
        highlight: true,
      },
      {
        id: "2027-07-09",
        date: "9 de julio de 2027",
        title: "Jubileo Pennsylvania",
      },
      {
        id: "2027-08-20",
        date: "20 al 22 de agosto de 2027",
        endDate: "2027-08-22",
        title: "Campamento de la Asociación de Caballeros",
        highlight: true,
      },
      {
        id: "2027-09-03",
        date: "3 de septiembre de 2027",
        title: "Trimestral Manhattan",
      },
      {
        id: "2027-10-08",
        date: "8 de octubre de 2027",
        title: "Jubileo NNJ Central",
      },
      {
        id: "2027-11-13",
        date: "13 de noviembre de 2027",
        title: "Jubileo Connecticut",
      },
      {
        id: "2027-12-04",
        date: "4 de diciembre de 2027",
        title: "Cena Navideña",
      },
      {
        id: "2027-12-10",
        date: "10 de diciembre de 2027",
        title: "Trimestral Washington DC",
      },
    ],
  },
];

/** Fecha de hoy (YYYY-MM-DD) en la zona horaria de la Asociación. */
const hoyLocal = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
  }).format(new Date());

/**
 * Agenda sin los eventos que ya pasaron. Un evento se mantiene visible todo su
 * último día (endDate para los de varios días, la fecha del id para el resto),
 * y los años que se quedan sin eventos desaparecen de la lista.
 */
export const getAgendaProxima = (hoy: string = hoyLocal()): AgendaYear[] =>
  agendaList
    .map((grupo) => ({
      ...grupo,
      items: grupo.items.filter(
        (item) => (item.endDate ?? item.id.slice(0, 10)) >= hoy
      ),
    }))
    .filter((grupo) => grupo.items.length > 0);
