import "../styles/Filter.css";

const Filter = ({ openFilter, setOpenFilter }) => {
  return (
    <div className='container__filter-content'>
      <div className='header__filter grid-column__expand-1fr'>
        <div className='icon__close-filter '></div>
        <div className='container__filter-title'>
          <h3 className='title__filter'>Filters</h3>
        </div>
      </div>
      <div>
        <div>
          <h2>Counted At</h2>
          <input type='date' />
          <span>–</span>
          <input type='date' />
        </div>
        <div>
          <h2>Quantity</h2>
          <input type='number' />
          <span>–</span>
          <input type='number' />
        </div>
        <div>
          <h2>Price</h2>
          <input type='number' />
          <span>–</span>
          <input type='number' />
        </div>
        <div>
          <button>Clear All</button>
          <button>Show</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
