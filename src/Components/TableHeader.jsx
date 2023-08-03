import { useState } from "react";
import { sortStrings, sortNumbers, sortDates } from "../helpers/sorters";

const TableHeader = ({ items, setItems, initialItems }) => {
  const sortStatus = ["descendent", "ascendent", "none"];
  const [sortIndex, setSortIndex] = useState(0);
  const [currentSort, setCurrentSort] = useState("id");

  const setSortType = (items, header, direction, dataType) => {
    if (dataType === "number") return sortNumbers(items, header, direction);
    if (dataType === "string") return sortStrings(items, header, direction);
    if (dataType === "date") return sortDates(items, header, direction);
  };
  const handleSortStatus = (header, dataType) => {
    console.log("clicked");
    header === currentSort
      ? setSortIndex((sortIndex + 1) % sortStatus.length)
      : setSortIndex(0);
    setCurrentSort(header);
    setItems(
      setSortType(initialItems, header, sortStatus[sortIndex], dataType)
    );
  };

  return (
    <thead>
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
    </thead>
  );
};

export default TableHeader;
