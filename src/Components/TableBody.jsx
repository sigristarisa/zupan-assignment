import { useEffect, useContext } from "react";
import { itemsContext } from "../helpers/createContext";
import { formatDate, formatId, formatPrice } from "../helpers/formatters";
import "../styles/TableBody.css";

const TableBody = ({ currentPage, itemsPerPage }) => {
  const { items } = useContext(itemsContext);

  const setCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    return currentItems;
  };

  return (
    <tbody>
      {setCurrentItems().map(
        ({ id, countedAt, product, quantity, price, user }, index) => (
          <tr key={index} className='twelve-grid-columns table-row'>
            <td className='grid-column_two table-row_date'>
              {formatDate(countedAt)}
            </td>
            <td className='grid-column_one table-row_num'>{formatId(id)}</td>
            <td className='grid-column_four table-row_product'>{product}</td>
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
    </tbody>
  );
};

export default TableBody;
