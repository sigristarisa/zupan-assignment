export const sortStrings = (items, header, direction) => {
  if (direction === "none") return items;
  if (direction === "descendent")
    return items.sort((a, b) => a[header].localeCompare(b[header]));
  if (direction === "ascendent")
    return items.sort((a, b) => b[header].localeCompare(a[header]));
};

export const sortNumbers = (items, header, direction) => {
  if (direction === "none") return items;
  if (direction === "descendent")
    return items.sort((a, b) => b[header] - a[header]);
  if (direction === "ascendent")
    return items.sort((a, b) => a[header] - b[header]);
};

export const sortDates = (items, header, direction) => {
  if (direction === "none") return items;
  if (direction === "descendent")
    return items.sort((a, b) => Date(b[header]) - Date(a[header]));
  if (direction === "ascendent")
    return items.sort((a, b) => Date.parse(a[header]) - Date.parse(b[header]));
};
