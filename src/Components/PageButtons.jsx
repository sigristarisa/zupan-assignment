import "../styles/PageButtons.css";

const PageButtons = ({ items, currentPage, setCurrentPage, itemsPerPage }) => {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const handlePage = (direction) => {
    if (direction === "back" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    if (direction === "next" && totalPages > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className='container__page-btn'>
      {currentPage === 1 ? (
        <div className='space__btn'></div>
      ) : (
        <button
          className='container__arrow-icon'
          onClick={() => handlePage("back")}
        >
          <div className='btn__arrow-back'></div>
        </button>
      )}
      <span>{currentPage}</span>
      {currentPage === totalPages ? (
        <div className='space__btn'></div>
      ) : (
        <button
          className='container__arrow-icon'
          onClick={() => handlePage("next")}
        >
          <div className='btn__arrow-next'></div>
        </button>
      )}
    </div>
  );
};

export default PageButtons;