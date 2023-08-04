import { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [darkActive, setDarkActive] = useState(false);

  const handleMode = () => setDarkActive(!darkActive);
  darkActive
    ? document.body.setAttribute("class", "dark-mode")
    : document.body.removeAttribute("class", "dark-mode");

  return (
    <header>
      <div className='container__mode'>
        <span
          className={!darkActive && "screen-mode--active"}
          onClick={() => handleMode()}
        >
          Light{" "}
        </span>
        <span>/</span>
        <span
          className={darkActive && "screen-mode--active"}
          onClick={() => handleMode()}
        >
          {" "}
          Dark
        </span>
      </div>
    </header>
  );
};

export default Header;
