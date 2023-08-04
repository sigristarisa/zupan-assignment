import { useState } from "react";
import data from "./data.json";
import Header from "./Components/Header";
import SortIcons from "./Components/SortIcons";
import TableTitle from "./Components/TableTitle";
import { formatDate, formatId, formatPrice } from "./helpers/formatters.js";
import { sortStrings, sortNumbers, sortDates } from "./helpers/sorters.js";
import "./styles/reset.css";
import "./styles/style.css";
import "./styles/layout.css";
import "./styles/responsive.css";

const App = () => {
  const initialItems = data.items;
  const [items, setItems] = useState(initialItems);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const sortStatus = ["none", "descendent", "ascendent"];
  const [sortIndex, setSortIndex] = useState(1);
  const [currentSort, setCurrentSort] = useState("default");

  const setCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  };

  const handlePage = (direction) => {
    if (direction === "back" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    if (direction === "next" && totalPages > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

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
            <tbody>
              {setCurrentItems().map(
                ({ id, countedAt, product, quantity, price, user }) => (
                  <tr key={id} className='twelve-grid-columns table-row'>
                    <td className='grid-column_two table-row_date'>
                      {formatDate(countedAt)}
                    </td>
                    <td className='grid-column_one table-row_num'>
                      {formatId(id)}
                    </td>
                    <td className='grid-column_four table-row_product'>
                      {product}
                    </td>
                    <td className='grid-column_one table-row_num'>
                      {quantity}
                    </td>
                    <td className='grid-column_two table-row_num'>
                      {formatPrice(price)}
                    </td>
                    <td className='grid-column_two table-row_user'>
                      <a href='http://localhost:3000/'>{user}</a>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <div className='container__page-btn'>
          {currentPage === 1 ? (
            <div className='space__btn'></div>
          ) : (
            <button onClick={() => handlePage("back")}>
              <div className='btn__arrow-back'></div>
            </button>
          )}
          <span>{currentPage}</span>
          {currentPage === totalPages ? (
            <div className='space__btn'></div>
          ) : (
            <button onClick={() => handlePage("next")}>
              <div className='btn__arrow-next'></div>
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
