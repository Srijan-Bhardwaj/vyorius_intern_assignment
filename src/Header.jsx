import React from "react";
import Style from "./Header.module.css";
import logo from "./logo.png";
import brand from "./brand_name.png";

const Header = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${Style.navbarContainer}`}
    >
      <div className={`container-fluid ${Style.navbarContainer}`}>
        <a className="navbar-brand" href="#">
          <div className={Style.logo_brand_container}>
            <img src={logo} className={Style.logo} />
            <img src={brand} className={Style.logo} />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${Style.menu}`}>
            <li className={`nav-item`}>
              <a className="nav-link active" aria-current="page" href="#">
                Why Vyorius?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Solutions
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                UseCases
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Partners
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <div className={Style.navbarBtn}>
              <div className={Style.navbarBtn_name}>
                  Launch Vyorius &gt;
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
