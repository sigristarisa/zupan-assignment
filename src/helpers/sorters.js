const sortStrings = (items, header, direction) => {
  if (direction === "none") return items;
  if (direction === "descendent")
    return items.sort((a, b) => a[header].localeCompare(b[header]));
  if (direction === "ascendent")
    return items.sort((a, b) => b[header].localeCompare(a[header]));
};

const sortNumbers = (items, header, direction) => {
  if (direction === "none") return items;
  if (direction === "descendent")
    return items.sort((a, b) => b[header] - a[header]);
  if (direction === "ascendent")
    return items.sort((a, b) => a[header] - b[header]);
};

const sortDates = (items, header, direction) => {
  if (direction === "none") return items;
  if (direction === "descendent")
    return items.sort((a, b) => Date(b[header]) - Date(a[header]));
  if (direction === "ascendent")
    return items.sort((a, b) => Date.parse(a[header]) - Date.parse(b[header]));
};

const arr = [
  {
    id: "1",
    createdAt: "2023-07-25 14:04:11.000",
    updatedAt: "2023-07-25 14:04:11.000",
    countedAt: "2023-07-28 19:24:11.000",
    product: "Pepsi",
    quantity: 10,
    price: 0.45,
    appInstallId: "a1",
    user: "Cloud",
    userOnInventoryCountInventoryCountId: "clkibon8k02xtm63asq7td39w",
  },
  {
    id: "2",
    createdAt: "2023-07-25 14:04:11.000",
    updatedAt: "2022-07-25 14:04:11.000",
    countedAt: "2022-07-25 18:14:11.000",
    product: "Coca-cola",
    quantity: 100,
    price: 0.4,
    appInstallId: "a1",
    user: "Natan Drake",
    userOnInventoryCountInventoryCountId: "clkibon8k02xtm63asq7td39w",
  },
  {
    id: "3",
    createdAt: "2023-07-25 14:04:11.000",
    updatedAt: "2023-07-25 14:04:11.000",
    countedAt: "2023-03-25 19:04:11.000",
    product: "Dr. Pepper",
    quantity: 100,
    price: 1.9,
    appInstallId: "a1",
    user: "Sonya Blade",
    userOnInventoryCountInventoryCountId: "clkibon8k02xtm63asq7td39w",
  },
  {
    id: "4",
    createdAt: "2023-07-25 14:04:11.000",
    updatedAt: "2022-05-25 14:04:11.000",

    countedAt: "2023-06-25 11:04:11.000",
    product: "Fanta",
    quantity: 60,
    price: 0.7,
    appInstallId: "a1",
    user: "Regina",
    userOnInventoryCountInventoryCountId: "clkibon8k02xtm63asq7td39w",
    replacedById: null,
  },
  {
    id: "5",
    createdAt: "2023-07-25 14:04:11.000",
    updatedAt: "2022-05-25 14:04:11.000",
    countedAt: "2023-06-25 14:50:11.000",
    product: "Calpis",
    quantity: 5,
    price: 1.3,
    appInstallId: "a1",
    user: "Ryu",
    userOnInventoryCountInventoryCountId: "clkibon8k02xtm63asq7td39w",
  },
  {
    id: "6",
    createdAt: "2023-07-25 14:04:11.000",
    updatedAt: "2022-07-25 14:04:11.000",
    countedAt: "2022-07-25 14:44:11.000",
    product: "7-up",
    price: 1.2,
    quantity: 33,
    appInstallId: "a1",
    user: "Crash",
    userOnInventoryCountInventoryCountId: "clkibon8k02xtm63asq7td39w",
  },
  {
    id: "7",
    createdAt: "2023-07-26 14:04:11.000",
    updatedAt: "2022-07-26 14:04:11.000",
    countedAt: "2022-07-26 14:44:11.000",
    product: "Volvic",
    price: 1.0,
    quantity: 33,
    appInstallId: "a1",
    user: "Jan-Pierre",
    userOnInventoryCountInventoryCountId: "clkibon8k02xtm63asq7td39w",
  },
  {
    id: "8",
    createdAt: "2023-07-13 14:04:11.000",
    updatedAt: "2022-07-13 14:04:11.000",
    countedAt: "2022-07-13 14:44:11.000",
    product: "Mountain Dew",
    price: 1.5,
    quantity: 50,
    appInstallId: "a1",
    user: "Bobby Miller",
    userOnInventoryCountInventoryCountId: "clkibon8k02xtm63asq7td39w",
  },
  {
    id: "9",
    createdAt: "2023-06-25 14:04:11.000",
    updatedAt: "2022-06-25 14:04:11.000",
    countedAt: "2022-06-25 14:44:11.000",
    product: "Sprite",
    price: 1.2,
    quantity: 12,
    appInstallId: "a1",
    user: "Amanda Lilly",
    userOnInventoryCountInventoryCountId: "clkibon8k02xtm63asq7td39w",
  },
  {
    id: "10",
    createdAt: "2023-09-25 14:04:11.000",
    updatedAt: "2022-09-25 14:04:11.000",
    countedAt: "2022-09-25 14:44:11.000",
    product: "Capri Sun",
    price: 0.5,
    quantity: 120,
    appInstallId: "a1",
    user: "Monika Hills",
    userOnInventoryCountInventoryCountId: "clkibon8k02xtm63asq7td39w",
  },
  {
    id: "11",
    createdAt: "2023-07-24 14:04:11.000",
    updatedAt: "2022-07-24 14:04:11.000",
    countedAt: "2022-07-24 14:44:11.000",
    product: "Kool-Aid",
    price: 0.5,
    quantity: 33,
    appInstallId: "a1",
    user: "Monika Hills",
    userOnInventoryCountInventoryCountId: "clkibon8k02xtm63asq7td39w",
  },
  {
    id: "12",
    createdAt: "2023-10-25 14:04:11.000",
    updatedAt: "2022-10-25 14:04:11.000",
    countedAt: "2022-10-25 14:44:11.000",
    product: "Diet Coke",
    price: 1.2,
    quantity: 33,
    appInstallId: "a1",
    user: "Natan Drake",
    userOnInventoryCountInventoryCountId: "clkibon8k02xtm63asq7td39w",
  },
];

console.log(sortDates(arr, "countedAt", "descendent"));

// console.log(Date("2023-07-25 14:04:11.000"));
