import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/vasiti-logo.png";
import menu from "../assets/menu-icon.svg";
import M from "materialize-css/dist/js/materialize.min.js";

const Navbar = (props) => {
  useEffect(() => {
    // sidenav
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
  }, []);

  return (
    <>
      <div className="navbar">
        <nav class="trans-nav" role="navigation">
          <div className=" container nav-wrapper">
            <a href="/" className="brand-logo left">
              <img src={logo} alt="vasiti" className="logo" />
            </a>
            <a
              href="/"
              className="sidenav-trigger right"
              data-target="mobile-nav"
            >
              <img src={menu} alt="menu" className="menu-icon-img" />
            </a>

            <ul className="hide-on-med-and-down right nav-links">
              <li className="nav-item">
                <a className="black-text" href="about.html">
                  about us
                </a>
              </li>
              <li className="nav-item">
                <a href="/">stories</a>
              </li>
              <li className="nav-item">
                <a href="/">contact</a>
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
        <div className="sidenav-logo">
          <a href="/">
            <img src="images/vasiti-logo.png" alt="vasiti-logo" />
          </a>
        </div>

        <li className="nav-item">
          <a className="" href="/about.html">
            about us
          </a>
        </li>
        <li className="nav-item">
          <a href="/">stories</a>
        </li>
        <li className="nav-item">
          <a href="/">contact</a>
        </li>
        <li className="nav-item login-style">
          <a href="/" className="">
            log in
          </a>
        </li>
        <li class="nav-item signup-style ">
          <a href="/" className="  ">
            sign up
          </a>
        </li>

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

        <div className="sidenav-footer ">
          <div className="sidenav-footer-container center">
            <div class="sidenav-social-icons">
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
            </div>
            <div className="black-txt bold-txt">
              <p>©COPYRIGHT VASITI.COM 2020</p>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
