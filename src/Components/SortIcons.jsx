const SortIcons = ({ sortStatus, currentSort, header }) => {
  const isActive = (sortStatus, iconType) =>
    sortStatus === iconType && currentSort === header ? "__active" : "";

  return (
    <div className='container__sort-icons'>
      <div className={`sort-icon${isActive(sortStatus, "ascendent")}`}></div>
      <div className={`sort-icon${isActive(sortStatus, "descendent")}`}></div>
    </div>
  );
};

export default SortIcons;
