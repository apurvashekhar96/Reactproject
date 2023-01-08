import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar></Sidebar>
      <div className="col-span-5">
        <Route path="/Accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/Buttons">
          <ButtonPage />
        </Route>
        <Route path="/Modal">
          <ModalPage />
        </Route>
        <Route path="/Table">
          <TablePage />
        </Route>
        <Route path="/Counter">
          <CounterPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
