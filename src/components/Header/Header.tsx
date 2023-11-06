import React, { useState, useEffect, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import { useLocation, Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import LogoLeft from "../../assets/images/logo_pic.png";
import LogoRight from "../../assets/images/logo.png";

type HeaderType = {
  isErrorPage?: Boolean;
};

const Header = ({ isErrorPage }: HeaderType) => {
  const location = useLocation();
  const arrayPaths = ["/"];

  const [onTop, setOnTop] = useState(
    !arrayPaths.includes(location.pathname) || isErrorPage ? false : true
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    if (!arrayPaths.includes(location.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return (
    <header className={`site-header ${!onTop ? "site-header--fixed" : ""}`}>
      <div className="container">
        <Link to="/">
          <h1 className="site-logo">
            <img src={LogoLeft} alt="Logo" width={50} />
            <img src={LogoRight} alt="Logo" width={100} />
          </h1>
        </Link>
        <nav
          ref={navRef}
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
        >
          <Link to="/pesanan">Pesanan</Link>
          <Link to="/">Inspiration</Link>
          <Link to="/">Rooms</Link>
          <button className="site-nav__btn">
            <p>Account</p>
          </button>
        </nav>

        <div className="site-header__actions">
          <button
            ref={searchRef}
            className={`search-form-wrapper ${
              searchOpen ? "search-form--active" : ""
            }`}
          >
            <form className={`search-form`}>
              {/* <Icon
                icon="ph:x-bold"
                className="icon-cancel"
                onClick={() => setSearchOpen(!searchOpen)}
              /> */}
              <input
                type="text"
                name="search"
                placeholder="Enter the product you are looking for"
              />
            </form>
            {/* <Icon
              icon="material-symbols:search"
              onClick={() => setSearchOpen(!searchOpen)}
              className="icon-search"
            /> */}
          </button>
          {/* <Link href="/cart">
            <button className="btn-cart">
              <i className="icon-cart"></i>
              {cartItems.length > 0 && (
                <span className="btn-cart__count">{cartItems.length}</span>
              )}
            </button>
          </Link> */}
          <Link to="/login">
            <button className="site-header__btn-avatar">
              <Icon icon="clarity:avatar-line" className="icon-avatar" />
            </button>
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="site-header__btn-menu"
          >
            <i className="btn-hamburger">
              <span></span>
            </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
