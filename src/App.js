import { useState } from "react";
import data from "./data.json";
import { formatDate, formatId, formatPrice } from "./helpers/formatters.js";
import { sortStrings, sortNumbers, sortDates } from "./helpers/sorters.js";
import "./styles/reset.css";
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/layout.css";

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
          <tr className='twelve-grid-columns data'>
            <th className='grid-column_two'>COUNTED AT</th>
            <th className='grid-column_one'>ID</th>
            <th className='grid-column_five'>PRODUCT</th>
            <th className='grid-column_one'>AMOUNT</th>
            <th className='grid-column_one'>PRICE/UNIT</th>
            <th className='grid-column_two'>USER</th>
          </tr>
          {setCurrentItems().map(
            ({ id, countedAt, product, quantity, price, user }) => (
              <tr key={id} className='twelve-grid-columns'>
                <td className='grid-column_two'>{formatDate(countedAt)}</td>
                <td className='grid-column_one num'>{formatId(id)}</td>
                <td className='grid-column_five'>{product}</td>
                <td className='grid-column_one num'>{quantity}</td>
                <td className='grid-column_one num'>{formatPrice(price)}</td>
                <td className='grid-column_two'>{user}</td>
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

/*
Memo
- make the table repeat(1fr, 12)
- numbers should be mono
-

*/
