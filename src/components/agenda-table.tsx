import { Fragment } from "react";
import { AgendaYear } from "@/data/agenda";

interface AgendaTableProps {
  agenda: AgendaYear[];
  showYear?: boolean;
  className?: string;
}

const AgendaTable = ({
  agenda,
  showYear = true,
  className = "max-w-3xl",
}: AgendaTableProps) => {
  return (
    <div
      className={`shadow-md rounded-lg overflow-hidden mb-12 mx-auto ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-orange-bg-two">
          <thead className="bg-orange-bg text-blue-bg-two">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider"
              >
                Fecha
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider"
              >
                Nombre del Evento
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {agenda.map((grupo) => (
              <Fragment key={grupo.year}>
                {showYear && (
                  <tr className="bg-gray-bg">
                    <td
                      colSpan={2}
                      className="px-6 py-4 whitespace-nowrap text-sm font-bold"
                    >
                      AÑO {grupo.year}
                    </td>
                  </tr>
                )}
                {grupo.items.map((item) => (
                  <tr key={item.id}>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        item.highlight ? "text-orange-bg-two" : "text-gray-900"
                      }`}
                    >
                      {item.date}
                    </td>
                    <td
                      className={`px-6 py-4 text-sm ${
                        item.highlight
                          ? "font-semibold text-orange-bg-two"
                          : "text-gray-600"
                      }`}
                    >
                      {item.title}
                      {item.preacher && (
                        <span className="block text-xs text-blue-txt mt-1">
                          Predicador: {item.preacher}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgendaTable;
