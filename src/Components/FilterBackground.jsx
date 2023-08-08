import "../styles/Filter.css";

const FilterBackground = ({ openFilter }) => {
  const black = openFilter && { backgroundColor: "#111010" };

  return <div className='container__filter-bg' style={black}></div>;
};

export default FilterBackground;
