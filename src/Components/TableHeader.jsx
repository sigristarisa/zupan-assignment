import { useState, useContext } from "react";
import SortIcons from "./SortIcons";
import { itemsContext } from "../helpers/createContext";
import { sortStrings, sortNumbers, sortDates } from "../helpers/sorters";
import "../styles/TableHeader.css";

const TableHeader = ({ initialItems }) => {
  const { setItems } = useContext(itemsContext);
  const sortStatus = ["none", "descendent", "ascendent"];
  const [sortIndex, setSortIndex] = useState(1);
  const [currentSort, setCurrentSort] = useState("default");

  const setSortType = (items, header, direction, dataType) => {
    if (dataType === "number") return sortNumbers(items, header, direction);
    if (dataType === "string") return sortStrings(items, header, direction);
    if (dataType === "date") return sortDates(items, header, direction);
  };

  const setActiveHeader = (header) =>
    currentSort !== header || sortIndex === 0 ? "" : "sort--active";

  const handleSortStatus = (header, dataType) => {
    if (header === currentSort) {
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
    <thead>
      <tr className='twelve-grid-columns table-header'>
        <th
          className={`grid-column_two ${setActiveHeader("countedAt")}`}
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
          className={`grid-column_one table-header_num ${setActiveHeader(
            "id"
          )}`}
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
          className={`grid-column_four ${setActiveHeader("product")}`}
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
          className={`grid-column_one table-header_num ${setActiveHeader(
            "quantity"
          )}`}
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
          className={`grid-column_two table-header_num ${setActiveHeader(
            "price"
          )}`}
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
          className={`grid-column_two ${setActiveHeader("user")}`}
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
  );
};

export default TableHeader;
