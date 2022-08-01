import { FaCartArrowDown } from "react-icons/fa";

import logo from "./../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logo} alt="Organick" />
      </div>
      <div className="nav__menu">
        <div className="menu__wrapper">
          <a href="#home" className="nav__link nav__link--active">
            Home
          </a>
          <a href="#about" className="nav__link">
            About Us
          </a>
          <a href="#shop" className="nav__link">
            Shop
          </a>
          <a href="#pages" className="nav__link">
            Pages
          </a>
          <a href="#contact" className="nav__link">
            Contact Us
          </a>
        </div>
      </div>
      <div className="nav__cart">
        <div className="cart__wrapper">
          <button type="button" className="cart__btn">
            <FaCartArrowDown />
          </button>
          <p className="txt">Cart 0</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
