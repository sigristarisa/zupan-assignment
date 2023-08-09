import { useState } from "react";
import "../styles/Filter.css";

const Filter = ({ openFilter, setOpenFilter }) => {
  const [prices, setPrices] = useState([23, 5000]);
  const [amount, setAmount] = useState([2, 300]);
  const [dates, setDates] = useState(["ddd", "fff"]);

  const handlePrice = (e) => {
    const { name, value } = e.target;
    if (name === "min-price") prices[0] = Number(value);
    if (name === "max-price") prices[1] = Number(value);
    setPrices(prices);
    console.log(prices);
  };

  return (
    <div className='container__filter-content'>
      <div className='header__filter two-grid-column__extend-two'>
        <div
          className='icon__close-filter grid__place-items--center'
          onClick={() => setOpenFilter(!openFilter)}
        ></div>
        <div className='container__filter-title'>
          <h3 className='title__filter'>Filters</h3>
        </div>
      </div>
      <div className='main__filter grid__place-items--center'>
        <section className='container__filter-category flex__column--stack'>
          <h2>Counted At</h2>
          <div className='container__date three-grid-column__extend-middle grid__place-items--center'>
            <div className='container__input flex__column--stack'>
              <label htmlFor='input__min-date'>From</label>
              <input
                id='input__min-date'
                type='date'
                name='min-date'
                value={dates[0]}
                onChange={handlePrice}
              />
            </div>
            <span>–</span>
            <div className='container__input flex__column--stack'>
              <label htmlFor='input__max-date'>To</label>
              <input
                id='input__max-date'
                type='date'
                name='max-date'
                value={dates[1]}
                onChange={handlePrice}
              />
            </div>
          </div>
        </section>
        <section className='container__filter-category flex__column--stack'>
          <h2>Amount</h2>
          <div className='container__amount-range'>
            <input
              className='input-range__min'
              type='range'
              name='min-amount'
              min={amount[0]}
              max={amount[1]}
              value={amount[0]}
              onChange={handlePrice}
            />
            <input
              className='input-range__max'
              type='range'
              name='max-amount'
              min={amount[0]}
              max={amount[1]}
              value={amount[1]}
              onChange={handlePrice}
            />
          </div>
          <div className='container__amount-input three-grid-column__extend-middle grid__place-items--center'>
            <div className='container__input flex__column--stack'>
              <label htmlFor='input__min-amount'>Min amount</label>
              <input id='input__min-amount' type='number' value={amount[0]} />
            </div>
            <span>–</span>
            <div className='container__input flex__column--stack'>
              <label htmlFor='input__max-amount'>Max amount</label>
              <input id='input__max-amount' type='number' value={amount[1]} />
            </div>
          </div>
        </section>
        <section className='container__filter-category flex__column--stack'>
          <h2>Price</h2>
          <div className='container__price-range'>
            <input
              className='input-range__min'
              type='range'
              name='min-price'
              min={prices[0]}
              max={prices[1]}
              value={prices[0]}
              onChange={handlePrice}
            />
            <input
              className='input-range__max'
              type='range'
              name='max-price'
              min={prices[0]}
              max={prices[1]}
              value={prices[1]}
              onChange={handlePrice}
            />
          </div>
          <div className='container__price-input three-grid-column__extend-middle grid__place-items--center'>
            <div className='container__input flex__column--stack'>
              <label htmlFor='input__min-price'>Min price</label>
              <input id='input__min-price' type='number' value={prices[0]} />
            </div>
            <span>–</span>
            <div className='container__input flex__column--stack'>
              <label htmlFor='input__max-price'>Max price</label>
              <input id='input__max-price' type='number' value={prices[1]} />
            </div>
          </div>
        </section>
      </div>
      <div className='footer__filter flex__justify-content--space-between'>
        <button className='btn__clear-all'>Clear All</button>
        <button className='btn__show'>Show</button>
      </div>
    </div>
  );
};

export default Filter;
