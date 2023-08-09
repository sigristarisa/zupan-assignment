import { useState } from "react";
import data from "./data.json";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import FilterBackground from "./Components/FilterBackground";
import TableTitle from "./Components/TableTitle";
import TableHeader from "./Components/TableHeader";
import TableBody from "./Components/TableBody";
import PageButtons from "./Components/PageButtons";
import { itemsContext } from "./helpers/createContext";
import "./styles/reset.css";
import "./styles/App.css";
import "./styles/layout.css";
import "./styles/responsive.css";

const App = () => {
  const initialItems = data.items;
  const [items, setItems] = useState(initialItems);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <itemsContext.Provider value={{ items, setItems }}>
      <div className='App'>
        {openFilter && (
          <div className='container__filter'>
            <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} />
            <FilterBackground openFilter={openFilter} />
          </div>
        )}
        <Header />
        <main>
          <TableTitle openFilter={openFilter} setOpenFilter={setOpenFilter} />
          <div className='container__table grid__place-items--center'>
            <table>
              <TableHeader initialItems={initialItems} />
              <TableBody
                items={items}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
              />
            </table>
            <PageButtons
              items={items}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </main>
      </div>
    </itemsContext.Provider>
  );
};

export default App;
