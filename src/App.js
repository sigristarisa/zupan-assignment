import { useState } from "react";
import data from "./data.json";
import { formatDate, formatId, formatPrice } from "./helpers/formatters.js";
import "./styles/reset.css";
import "./styles/style.css";
import "./styles/responsive.css";

const App = () => {
  const items = data.items;
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  };

  const handlePage = (direction) => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    console.log("total pages", totalPages);

    if (direction === "back" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log("case 1");
    }
    if (direction === "next" && totalPages > currentPage) {
      setCurrentPage(currentPage + 1);
      console.log("case 2");
    }
  };

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
        <button onClick={() => handlePage("back")}>-</button>
        <h2>{currentPage}</h2>
        <button onClick={() => handlePage("next")}>+</button>
      </main>
    </div>
  );
};

export default App;
