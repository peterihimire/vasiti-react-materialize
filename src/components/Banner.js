import React from "react";
import "./Banner.css";
import bannerTwo from "../assets/man-and-lady.png";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import CloseImg from "../assets/x.svg";
// import M from "materialize-css/dist/js/materialize.min.js";
// import Fade from "react-reveal/Fade";
import ModalSuccess from "./Modal";

const Banner = () => {
  // GSAP FUNCTIONS
  let hero = React.useRef(null);
  let heroImg = React.useRef(null);
  let heroHeading = React.useRef(null);
  let heroMobile = React.useRef(null);

  React.useEffect(() => {
    let tl = new TimelineLite({ delay: 0.8 });

    const headPix = heroImg.firstElementChild;
    const headingFirst = heroHeading.children[0].children[0];
    const headingSecond = headingFirst.nextSibling;
    const headingThird = headingSecond.nextSibling;
    const headingFourth = headingThird.nextSibling;
    const headingP = heroHeading.children[1];
    const headingBtn = heroHeading.children[2];
    const heroMobP = heroMobile.children[0];
    const heroMobBtn = heroMobP.nextSibling;

    TweenMax.to(hero, 0, { css: { visibility: "visible" } });

    console.log(
      headPix,
      headingFirst,
      headingSecond,
      headingThird,
      headingFourth,
      headingP,
      headingBtn,
      heroMobBtn,
      heroMobP
    );

    // HEADING IMAGE ANIMATION
    tl.from(headPix, 1.2, { y: 1280, ease: Power3.easeOut }, "start").from(
      headPix.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2
    );
    // HEADING TEXT ANIMATION
    tl.staggerFrom(
      [
        headingFirst.children,
        headingSecond.children,
        headingThird.children,
        headingFourth.children,
      ],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "start"
    )
      .from(headingP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(headingBtn, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)
      .from(heroMobP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(heroMobBtn, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, []);

  return (
    <>
      <div className="hero" ref={(el) => (hero = el)}>
        <div className="row full-height">
          <div className="container full-height">
            <div className="hero-content-main">
              <div className="col s12 pad0 center-xs">
                <div className="col s12 m6 l5 ">
                  <div
                    className="main-text-container"
                    ref={(el) => (heroHeading = el)}
                  >
                    <h1>
                      {/* Amazing Experiences from Our Wonderful Customers */}
                      <div className="banner-heading">
                        <div className="banner-heading-inner">Amazing</div>
                      </div>
                      <div className="banner-heading">
                        <div className="banner-heading-inner">
                          Experiences from
                        </div>
                      </div>
                      <div className="banner-heading">
                        <div className="banner-heading-inner">
                          Our Wonderful
                        </div>
                      </div>
                      <div className="banner-heading">
                        <div className="banner-heading-inner">Customers</div>
                      </div>
                    </h1>
                    <p className="hidden-xs sub-heading">
                      Here is what customers and vendors are saying about us,
                      you can share your stories with us too.
                    </p>

                    <div className="hidden-xs heading-btn">
                      <a
                        href="#share"
                        className="btn btn-bigger modal-trigger banner-share"
                      >
                        share story
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6 offset-m0 l7 offset-l0">
                  <div
                    className="rel right-align banner-home-img"
                    ref={(el) => (heroImg = el)}
                  >
                    <div className="banner-home-img-inner">
                      <img
                        src={bannerTwo}
                        alt="banner-img-1"
                        className="full-width home-img"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="col s12 visible-xs"
                  ref={(el) => (heroMobile = el)}
                >
                  <p className="sub-heading">
                    Here is what customers and vendors are saying about us, you
                    can share your stories with us too.
                  </p>
                  <div className=" heading-btn">
                    <a
                      href="#share"
                      className="btn btn-bigger modal-trigger banner-share"
                    >
                      share story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SHARE MODAL */}
      <div className="modal" id="share">
        <div className="modal-content">
          <div className="row">
            <div className="col s12">
              <div className="modal-close-container">
                <img src={CloseImg} alt="modal-close" className="modal-close" />
              </div>
              <div className="modal-header">
                <h6 className="center">Share your amazing story!</h6>
              </div>
              <form className="col s12">
                <div className="row">
                  <div className="file-field  col s12 input-field">
                    <div className="btn btn-file">
                      <span>File</span>
                      <input type="file" multiple />
                    </div>

                    <div className="file-path-wrapper">
                      <input
                        id="image"
                        className="file-path-validate"
                        type="text"
                        placeholder="choose image"
                      />
                    </div>
                  </div>
                </div>

                <div className="name-field row">
                  <div className="input-field col s12 m6 ">
                    <input type="text" id="first_name" placeholder="" />
                    <label htmlFor="first_name">first name</label>
                  </div>
                  <div className="input-field col s12 m6">
                    <input type="text" id="last_name" placeholder="" />
                    <label htmlFor="last_name">last name</label>
                  </div>
                </div>
                <div className="row">
                  <div className=" input-field col s12 ">
                    <textarea
                      type="text"
                      id="text-content"
                      placeholder=""
                      className="materialize-textarea"
                    ></textarea>
                    <label htmlFor="text-content">Share your story</label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-radio">
                    <div className="col s12 m6">
                      <label>What did you interact with Vasiti as?</label>
                    </div>
                    <div className="col s12 m6 radio-btns">
                      <p>
                        <label>
                          <input
                            name="group1"
                            type="radio"
                            className="with-gap"
                            defaultChecked
                          />
                          <span>Customer</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input
                            name="group1"
                            type="radio"
                            className="with-gap"
                          />
                          <span>Vendor</span>
                        </label>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col s12  center-xs right-align">
                  <button
                    href="#modal-success"
                    className="modal-trigger btn btn-bigger"
                    type="submit"
                  >
                    Share your story
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ModalSuccess />
    </>
  );
};

export default Banner;
