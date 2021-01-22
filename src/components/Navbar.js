import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/vasiti-logo.png";
import MenuIcon from "../assets/menu-icon.svg";
import CloseIcon from "../assets/x.svg";
import M from "materialize-css/dist/js/materialize.min.js";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  useEffect(() => {
    // sidenav
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
  }, []);

  return (
    <>
      <div className="navbar">
        <nav className="trans-nav" role="navigation">
          <div className=" container nav-wrapper">
            <a href="/" className="brand-logo left">
              <img src={logo} alt="vasiti" className="logo" />
            </a>
            {/* <a
              href="/"
              className="sidenav-trigger right"
              data-target="mobile-nav"
            >
              <img src={MenuIcon} alt="menu" className="menu-icon-img" />
            </a> */}
            <NavLink
              exact
              activeClassName="active"
              to="/"
              className="sidenav-trigger right"
              data-target="mobile-nav"
            >
              <img src={MenuIcon} alt="menu" className="menu-icon-img" />
            </NavLink>

            <ul className="hide-on-med-and-down right nav-links">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="navbar-single-link"
                  to="/about"
                >
                  about us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="navbar-single-link"
                  to="/about"
                >
                  stories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="navbar-single-link"
                  to="/about"
                >
                  contact
                </NavLink>
              </li>
              <li className="nav-item nav-login-group">
                <a href="/">log in</a>
                <span>
                  <a href="/" className="btn nav-btn white-text">
                    sign up
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className=" nav-two hide-on-med-and-down ">
            <div className="container nav-two-content">
              <ul>
                <li>
                  <a href="/">marketplace</a>
                </li>
                <li>
                  <a href="/">wholesale center</a>
                </li>
                <li>
                  <a href="/">seller center</a>
                </li>
                <li>
                  <a href="/">services</a>
                </li>
                <li>
                  <a href="/">internships</a>
                </li>
                <li>
                  <a href="/">events</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-nav">
        <div className="sidenav-close">
          <img src={CloseIcon} alt="close" />
        </div>
        <div className="sidenav-logo">
          {/* <a href="/">
            <img src={logo} alt="vasiti-logo" />
          </a> */}
          <NavLink
            exact
            activeClassName="active"
            className="navbar-single-link"
            to="/"
          >
            <img src={logo} alt="vasiti-logo" />
          </NavLink>
        </div>

        <li className="nav-item">
          <NavLink
            exact
            activeClassName="active"
            className="navbar-single-link"
            to="/about"
          >
            about us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            activeClassName="active"
            className="navbar-single-link"
            to="/stories"
          >
            stories
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            activeClassName="active"
            className="navbar-single-link"
            to="/contact"
          >
            contact
          </NavLink>
        </li>
        <li className="nav-item login-style">
          <a href="/" className="">
            log in
          </a>
        </li>
        <li className="nav-item signup-style ">
          <a href="/" className="  ">
            sign up
          </a>
        </li>

        <li>
          <NavLink
            exact
            activeClassName="active"
            className="navbar-single-link"
            to="/marketplace"
          >
            marketplace
          </NavLink>
        </li>
        <li>
          <a href="/">wholesale center</a>
        </li>
        <li>
          <a href="/">seller center</a>
        </li>
        <li>
          <a href="/">services</a>
        </li>
        <li>
          <a href="/">internships</a>
        </li>
        <li>
          <a href="/">events</a>
        </li>

        <div className="sidenav-footer ">
          <div className="sidenav-footer-container ">
            {/* <div className="sidenav-social-icons">
              <a href="/" target="_blank">
                {" "}
                <img src="images/fb.svg" alt="" />
              </a>
              <a href="/" target="_blank">
                {" "}
                <img src="images/ig.svg" alt="" />
              </a>
              <a href="/" target="_blank">
                {" "}
                <img src="images/in.svg" alt="" />
              </a>
              <a href="/" target="_blank">
                {" "}
                <img src="images/tw.svg" alt="" />
              </a>
            </div> */}
            <div className=" sidenav-footer-copyright">
              <p>©COPYRIGHT VASITI 2021</p>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
