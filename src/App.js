import { useState } from "react";
import data from "./data.json";
import Header from "./Components/Header";
import SortIcons from "./Components/SortIcons";
import TableTitle from "./Components/TableTitle";
import TableBody from "./Components/TableBody";
import PageButtons from "./Components/PageButtons";
import { sortStrings, sortNumbers, sortDates } from "./helpers/sorters.js";
import "./styles/reset.css";
import "./styles/style.css";
import "./styles/layout.css";
import "./styles/responsive.css";

const App = () => {
  const initialItems = data.items;
  const [items, setItems] = useState(initialItems);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const sortStatus = ["none", "descendent", "ascendent"];
  const [sortIndex, setSortIndex] = useState(1);
  const [currentSort, setCurrentSort] = useState("default");

  const setSortType = (items, header, direction, dataType) => {
    if (dataType === "number") return sortNumbers(items, header, direction);
    if (dataType === "string") return sortStrings(items, header, direction);
    if (dataType === "date") return sortDates(items, header, direction);
  };

  const handleSortStatus = (header, dataType) => {
    if (header === currentSort) {
      console.log("condi");
      setSortIndex((sortIndex + 1) % sortStatus.length);
    } else {
      setCurrentSort(header);
      setSortIndex(1);
    }
    setItems(
      setSortType(initialItems, header, sortStatus[sortIndex], dataType)
    );
  };

  return (
    <div className='App'>
      <Header />
      <main>
        <TableTitle />
        <div className='container__table'>
          <table>
            <thead>
              <tr className='twelve-grid-columns table-header'>
                <th
                  className='grid-column_two'
                  onClick={() => handleSortStatus("countedAt", "date")}
                >
                  <SortIcons
                    sortStatus={sortStatus[sortIndex]}
                    currentSort={currentSort}
                    header={"countedAt"}
                  />
                  <p>COUNTED AT</p>
                </th>
                <th
                  className='grid-column_one table-header_num'
                  onClick={() => handleSortStatus("id", "number")}
                >
                  <SortIcons
                    sortStatus={sortStatus[sortIndex]}
                    currentSort={currentSort}
                    header={"id"}
                  />
                  <p>ID</p>
                </th>
                <th
                  className='grid-column_four'
                  onClick={() => handleSortStatus("product", "string")}
                >
                  <SortIcons
                    sortStatus={sortStatus[sortIndex]}
                    currentSort={currentSort}
                    header={"product"}
                  />
                  <p>PRODUCT</p>
                </th>
                <th
                  className='grid-column_one table-header_num'
                  onClick={() => handleSortStatus("quantity", "number")}
                >
                  <SortIcons
                    sortStatus={sortStatus[sortIndex]}
                    currentSort={currentSort}
                    header={"quantity"}
                  />
                  <p>AMOUNT</p>
                </th>
                <th
                  className='grid-column_two table-header_num'
                  onClick={() => handleSortStatus("price", "number")}
                >
                  <SortIcons
                    sortStatus={sortStatus[sortIndex]}
                    currentSort={currentSort}
                    header={"price"}
                  />
                  <p>PRICE/UNIT</p>
                </th>
                <th
                  className='grid-column_two'
                  onClick={() => handleSortStatus("user", "string")}
                >
                  <SortIcons
                    sortStatus={sortStatus[sortIndex]}
                    currentSort={currentSort}
                    header={"user"}
                  />
                  <p>USER</p>
                </th>
              </tr>
            </thead>
            <TableBody
              items={items}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />
          </table>
        </div>
        <PageButtons
          items={items}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </div>
  );
};

export default App;
