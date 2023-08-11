import { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [darkActive, setDarkActive] = useState(false);

  darkActive
    ? document.body.setAttribute("class", "dark-mode")
    : document.body.removeAttribute("class", "dark-mode");

  return (
    <header className='flex__justify-content--end'>
      <div className='container__mode'>
        <span
          className={!darkActive ? "screen-mode--active" : ""}
          onClick={() => setDarkActive(!darkActive)}
        >
          Light{" "}
        </span>
        <span>/</span>
        <span
          className={darkActive ? "screen-mode--active" : ""}
          onClick={() => setDarkActive(!darkActive)}
        >
          {" "}
          Dark
        </span>
      </div>
    </header>
  );
};

export default Header;
