import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  function clickHandler(index) {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  }

  const renderedElements = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray border-b items-center cursor-pointer"
          onClick={() => {
            clickHandler(index);
          }}
        >
          {icon}
          {item.label}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content} </div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedElements}</div>;
}

export default Accordion;
