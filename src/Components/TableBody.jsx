import { useEffect, useContext } from "react";
import { itemsContext } from "../helpers/createContext";
import { formatDate, formatId, formatPrice } from "../helpers/formatters";
import "../styles/TableBody.css";

const TableBody = ({ currentPage, itemsPerPage, scrollRef }) => {
  const { items } = useContext(itemsContext);

  const setCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    return currentItems;
  };

  return (
    <tbody ref={scrollRef}>
      {setCurrentItems().map(
        ({ id, countedAt, product, quantity, price, user }, index) => (
          <tr key={index} className='twelve-grid-columns table-data'>
            <td className='grid-column_two grid__align-items--center table-data__date'>
              {formatDate(countedAt)}
            </td>
            <td className='grid-column_one grid__align-items--center table-data__num'>
              {formatId(id)}
            </td>
            <td className='grid-column_four grid__align-items--center table-data__product'>
              {product}
            </td>
            <td className='grid-column_one  grid__align-items--center table-data__num'>
              {quantity}
            </td>
            <td className='grid-column_two grid__align-items--center table-data__num'>
              {formatPrice(price)}
            </td>
            <td className='grid-column_two grid__align-items--center table-data__user'>
              <a href='http://localhost:3000/'>{user}</a>
            </td>
          </tr>
        )
      )}
    </tbody>
  );
};

export default TableBody;
