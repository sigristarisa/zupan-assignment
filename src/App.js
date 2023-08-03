import { useState } from "react";
import data from "./data.json";
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
  const sortStatus = ["descendent", "ascendent", "none"];
  const [sortIndex, setSortIndex] = useState(0);
  const [currentSort, setCurrentSort] = useState("id");

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
    header === currentSort
      ? setSortIndex((sortIndex + 1) % sortStatus.length)
      : setSortIndex(0);
    setCurrentSort(header);
    setItems(
      setSortType(initialItems, header, sortStatus[sortIndex], dataType)
    );
  };

  return (
    <div className='App'>
      <main>
        <div className='container__table'>
          <table>
            <tr className='twelve-grid-columns table-header'>
              <th
                className='grid-column_two'
                onClick={() => handleSortStatus("countedAt", "date")}
              >
                COUNTED AT
              </th>
              <th
                className='grid-column_one table-header_num'
                onClick={() => handleSortStatus("id", "number")}
              >
                ID
              </th>
              <th
                className='grid-column_four'
                onClick={() => handleSortStatus("product", "string")}
              >
                PRODUCT
              </th>
              <th
                className='grid-column_one table-header_num'
                onClick={() => handleSortStatus("quantity", "number")}
              >
                AMOUNT
              </th>
              <th
                className='grid-column_two table-header_num'
                onClick={() => handleSortStatus("quantity", "number")}
              >
                PRICE/UNIT
              </th>
              <th
                className='grid-column_two'
                onClick={() => handleSortStatus("product", "string")}
              >
                USER
              </th>
            </tr>
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
                  <td className='grid-column_one table-row_num'>{quantity}</td>
                  <td className='grid-column_two table-row_num'>
                    {formatPrice(price)}
                  </td>
                  <td className='grid-column_two table-row_user'>
                    <a href='http://localhost:3000/'>{user}</a>
                  </td>
                </tr>
              )
            )}
          </table>
        </div>
        <div className='container__page-btn'>
          {currentPage === 1 ? (
            <span className='space__btn'></span>
          ) : (
            <button onClick={() => handlePage("back")}>
              {" "}
              <svg
                className='btn__arrow-back'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 847 1058.75'
                x='0px'
                y='0px'
              >
                <g>
                  <path d='M242 298l181 185 182 -185c24,-25 65,16 40,41l-205 211c-9,9 -24,9 -32,0l-207 -211c-24,-25 17,-66 41,-41z' />
                </g>
              </svg>
            </button>
          )}
          <span>{currentPage}</span>
          {currentPage === totalPages ? (
            <span className='space__btn'></span>
          ) : (
            <button onClick={() => handlePage("next")}>
              <svg
                className='btn__arrow-next'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 847 1058.75'
                x='0px'
                y='0px'
              >
                <g>
                  <path d='M242 298l181 185 182 -185c24,-25 65,16 40,41l-205 211c-9,9 -24,9 -32,0l-207 -211c-24,-25 17,-66 41,-41z' />
                </g>
              </svg>
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
