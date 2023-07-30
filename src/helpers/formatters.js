const monthObj = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

export const formatDate = (date) => {
  const yyyyMMDD = date.split(" ")[0].split("-");
  const yyyy = yyyyMMDD[0];
  const mm = monthObj[yyyyMMDD[1]];
  const dd = yyyyMMDD[2];
  return `${mm} ${dd}. ${yyyy}`;
};

export const formatId = (id) => id.padStart(3, "0");

export const formatPrice = (price) => `${price} €`;
