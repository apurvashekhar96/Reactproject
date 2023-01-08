import { Fragment } from "react";

function Table({ data, config, keyFun }) {
  const renderedHeaders = config.map((column) => {
    if (!column.header) {
      return <th key={column.label}>{column.label}</th>;
    }
    return <Fragment key={column.label}>{column.header()}</Fragment>;
  });

  const renderedElements = data.map((rowData) => {
    return (
      <tr className="border-b" key={keyFun(rowData)}>
        {config.map((cellsConfig) => {
          return (
            <td key={cellsConfig.label} className="p-3">
              {cellsConfig.render(rowData)}
            </td>
          );
        })}
      </tr>
    );
  });
  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedElements}</tbody>
      </table>
    </div>
  );
}

export default Table;
