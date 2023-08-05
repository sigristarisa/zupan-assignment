import { useState } from "react";
import "../styles/Filter.css";

const Filter = ({ openFilter, setOpenFilter }) => {
  const [prices, setPrices] = useState([23, 5000]);

  const handlePrice = (e) => {
    const { name, value } = e.target;
    if (name === "min-price") prices[0] = Number(value);
    if (name === "max-price") prices[1] = Number(value);
    setPrices(prices);
    console.log(prices);
  };

  return (
    <div className='container__filter-content'>
      <div className='header__filter grid-column__expand-1fr'>
        <div
          className='icon__close-filter '
          onClick={() => setOpenFilter(!openFilter)}
        ></div>
        <div className='container__filter-title'>
          <h3 className='title__filter'>Filters</h3>
        </div>
      </div>
      <div className='main__filter'>
        <section className='container__filter-category'>
          <h2>Counted At</h2>
          <div>
            <input type='date' />
            <span>–</span>
            <input type='date' />
          </div>
        </section>
        <section className='container__filter-category'>
          <h2>Quantity</h2>
          <input type='number' />
          <span>–</span>
          <input type='number' />
        </section>
        <section className='container__filter-category'>
          <h2>Price</h2>
          <input type='number' value={prices[0]} />
          <div className='container__price-range'>
            <input
              className='input-range__price-min'
              type='range'
              name='min-price'
              min={prices[0]}
              max={prices[1]}
              value={prices[0]}
              onChange={handlePrice}
            />
            <input
              className='input-range__price-max'
              type='range'
              name='max-price'
              min={prices[0]}
              max={prices[1]}
              value={prices[1]}
              onChange={handlePrice}
            />
          </div>
        </section>
        <div className='footer__filter'>
          <button>Clear All</button>
          <button>Show</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
