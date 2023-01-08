import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "1",
      label: "Can i use JS?",
      content:
        "yes you can in any project. yes you can in any project. yes you can in any project. yes you can in any project",
    },
    {
      id: "2",
      label: "can i use REact?",
      content:
        "yes you can in any project. yes you can in any project. yes you can in any project. yes you can in any project",
    },
    {
      id: "3",
      label: "can i use css?",
      content:
        "yes you can in any project. yes you can in any project. yes you can in any project. yes you can in any project",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
