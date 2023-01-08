import Table from "./Table";
import { useState } from "react";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

function SortableTable(props) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const handleClick = (label) => {
    setSortBy(label);
    if (sortBy && sortBy !== label) {
      setSortOrder("asc");
    } else {
      if (sortOrder === "asc") {
        setSortOrder("dec");
      } else if (sortOrder === "dec") {
        setSortOrder(null);
        setSortBy(null);
      } else if (sortOrder === null) {
        setSortOrder("asc");
      }
    }
  };

  const updatedConfig = props.config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = props.data;
  if (sortBy && sortOrder) {
    const { sortValue } = props.config.find(
      (column) => sortBy === column.label
    );

    sortedData = [...props.data].sort((a, b) => {
      const sortValueA = sortValue(a);
      const sortValueB = sortValue(b);

      const order = sortOrder === "asc" ? 1 : -1;
      if (typeof sortValueA === "string") {
        return sortValueA.localeCompare(sortValueB) * order;
      } else {
        return (sortValueA - sortValueB) * order;
      }
    });
  }

  return <Table {...props} config={updatedConfig} data={sortedData}></Table>;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === "dec") {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}

export default SortableTable;
