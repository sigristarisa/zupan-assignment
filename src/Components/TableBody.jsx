import { formatDate, formatId, formatPrice } from "../helpers/formatters";
import "../styles/TableBody.css";

const TableBody = ({ items, currentPage, itemsPerPage }) => {
  const setCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  };
  return (
    <tbody>
      {setCurrentItems().map(
        ({ id, countedAt, product, quantity, price, user }) => (
          <tr key={id} className='twelve-grid-columns table-row'>
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