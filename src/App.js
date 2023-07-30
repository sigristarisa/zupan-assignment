import "./App.css";
import data from "./data.json";
import { formatDate, formatId, formatPrice } from "./helpers/formatters.js";

const App = () => {
  const items = data.items;
  console.log(items);

  return (
    <div className='App'>
      <table>
        <tr>
          <th>COUNTED AT</th>
          <th>ID</th>
          <th>PRODUCT</th>
          <th>AMOUNT</th>
          <th>PRICE/UNIT</th>
          <th>USER</th>
        </tr>
        {items.map(({ id, countedAt, product, quantity, price, user }) => (
          <tr>
            <td>{formatDate(countedAt)}</td>
            <td>{formatId(id)}</td>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>{formatPrice(price)}</td>
            <td>{user}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
