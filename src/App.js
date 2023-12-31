import { useState, useRef } from "react";
import data from "./data.json";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import FilterBackground from "./Components/FilterBackground";
import TableTitle from "./Components/TableTitle";
import TableHeader from "./Components/TableHeader";
import TableBody from "./Components/TableBody";
import PageButtons from "./Components/PageButtons";
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
  const scrollRef = useRef(null);
  const scrollToTop = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
            <TableHeader initialItems={initialItems} setItems={setItems} />
            <TableBody
              items={items}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              scrollRef={scrollRef}
            />
          </table>
          <PageButtons
            items={items}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            scrollToTop={scrollToTop}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
