import { useState, useEffect } from "react";
import "../styles/TableTitle.css";

const TableTitle = ({ openFilter, setOpenFilter }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const updateScreenSize = () => setIsDesktop(window.innerWidth > 768);

  const setContainer = () =>
    isDesktop ? `two-grid-column__extend-two` : `two-grid-column__extend-one`;

  const setSubContainer = () =>
    isDesktop ? "two-grid-column__extend-one" : "";

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
  });

  return (
    <div className='container__table-title grid-row__stack'>
      <div className={`${setContainer()} grid__align-items--center`}>
        <aside className='container__table-title--left'>
          <div>
            <h1>Your Inventory</h1>
          </div>
        </aside>
        <aside
          className={`container__table-title--right flex__justify-content--end ${setSubContainer()}`}
        >
          {isDesktop && (
            <div className='container__input-search'>
              <input
                type='text'
                className='input__search'
                placeholder='Search product or user'
              />
            </div>
          )}
          <div
            className='container__filter-icon grid__place-items--center'
            onClick={() => setOpenFilter(!openFilter)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 -4 32 40'
              x='0px'
              y='0px'
              className='icon__filter'
            >
              <path d='M3,8h15.142c.447,1.72,1.999,3,3.858,3s3.411-1.28,3.858-3h3.142c.553,0,1-.448,1-1s-.447-1-1-1h-3.142c-.447-1.72-1.999-3-3.858-3s-3.411,1.28-3.858,3H3c-.553,0-1,.448-1,1s.447,1,1,1Zm19-3c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2Z' />
              <path d='M29,15H13.858c-.447-1.72-1.999-3-3.858-3s-3.411,1.28-3.858,3H3c-.553,0-1,.448-1,1s.447,1,1,1h3.142c.447,1.72,1.999,3,3.858,3s3.411-1.28,3.858-3h15.142c.553,0,1-.448,1-1s-.447-1-1-1Zm-19,3c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z' />
              <path d='M29,24h-3.142c-.447-1.72-1.999-3-3.858-3s-3.411,1.28-3.858,3H3c-.553,0-1,.448-1,1s.447,1,1,1h15.142c.447,1.72,1.999,3,3.858,3s3.411-1.28,3.858-3h3.142c.553,0,1-.448,1-1s-.447-1-1-1Zm-7,3c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z' />
            </svg>
          </div>
        </aside>
      </div>
      {!isDesktop && (
        <div className='container__input-search'>
          <input
            type='text'
            className='input__search'
            placeholder='Search product or user'
          />
        </div>
      )}
    </div>
  );
};

export default TableTitle;
