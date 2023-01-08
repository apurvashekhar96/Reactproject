import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    {
      name: "Apple",
      color: "bg-red-500",
      score: 5,
    },
    {
      name: "Orange",
      color: "bg-orange-500",
      score: 10,
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 24,
    },
    {
      name: "lime",
      color: "bg-green-500",
      score: 2,
    },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => {
        return <div className={`p-3 m-2 ${fruit.color}`}></div>;
      },
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFun = (fruit) => {
    return fruit.name;
  };

  return (
    <SortableTable data={data} config={config} keyFun={keyFun}></SortableTable>
  );
}

export default TablePage;
