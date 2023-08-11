import "../styles/Filter.css";

const FilterBackground = ({ openFilter }) => {
  const bgColor = openFilter && { backgroundColor: "#1e1e1e" };

  return <div className='container__filter-bg' style={bgColor}></div>;
};

export default FilterBackground;
