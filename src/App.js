import { useState } from "react";
import data from "./data.json";
import { formatDate, formatId, formatPrice } from "./helpers/formatters.js";
import { sortStrings, sortNumbers, sortDates } from "./helpers/sorters.js";
import "./styles/reset.css";
import "./styles/style.css";
import "./styles/responsive.css";

const App = () => {
  const [items, setItems] = useState(data.items);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const sortingStates = ["none", "descendent", "ascendent"];
  let sortIndex = 0;

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

  // const setSortingState = () => {
  //   // console.log("hi no.1");
  //   sortingStates.length - 1 > sortIndex ? sortIndex++ : (sortIndex = 0);
  //   // console.log("hi no.2");
  //   console.log("sortingState", sortingStates[sortIndex]);
  //   setItems(sortDates(items, "countedAt", sortingStates[sortIndex]));
  //   // console.log("hi no.3");
  //   console.log(items);
  // };

  return (
    <div className='App'>
      <main>
        <table>
          <tr>
            <th>COUNTED AT</th>
            <th>ID</th>
            <th>PRODUCT</th>
            <th>AMOUNT</th>
            <th>PRICE/UNIT</th>
            <th>USER</th>
          </tr>
          {setCurrentItems().map(
            ({ id, countedAt, product, quantity, price, user }) => (
              <tr key={id}>
                <td>{formatDate(countedAt)}</td>
                <td>{formatId(id)}</td>
                <td>{product}</td>
                <td>{quantity}</td>
                <td>{formatPrice(price)}</td>
                <td>{user}</td>
              </tr>
            )
          )}
        </table>
        {currentPage !== 1 && (
          <button onClick={() => handlePage("back")}>-</button>
        )}
        <h2>{currentPage}</h2>
        {currentPage !== totalPages && (
          <button onClick={() => handlePage("next")}>+</button>
        )}
      </main>
    </div>
  );
};

export default App;
