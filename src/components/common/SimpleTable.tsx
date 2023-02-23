import { ReactNode, FC } from 'react';

export type Cell = string | number | ReactNode;

export interface SimpleTableProps {
  headers: Cell[];
  rows: Cell[][];
}

export const SimpleTable: FC<SimpleTableProps> = (props: SimpleTableProps) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          {props.headers.map((header, index) => (
            <th className="align-middle" key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index} className="align-middle">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
