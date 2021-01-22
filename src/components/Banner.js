import React from "react";
import "./Banner.css";
import M from "materialize-css/dist/js/materialize.min.js";
// import bannerOne from "../assets/man-and-lady.png";
import bannerTwo from "../assets/man-and-lady.png";
import { TweenMax, TimelineLite, Power3 } from "gsap";

const Banner = () => {
  // GSAP FUNCTIONS
  let hero = React.useRef(null);
  let heroImg = React.useRef(null);
  let heroHeading = React.useRef(null);
  let heroMobile = React.useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  React.useEffect(() => {
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
      "start",
      [tl]
    )
      .from(headingP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(headingBtn, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)
      .from(heroMobP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(heroMobBtn, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  });

  // MATERIALIZE-CSS CAROUSEL WITH REACT HELPER FUNCTIONS
  React.useEffect(() => {
    const headerCarousel = document.querySelector(".carousel");
    const carouselH = document.querySelector(".carousel.carousel-slider");
    const carouselVx = document.querySelector(
      ".carousel.carousel-slider.visible-xs.mbxs"
    );
    M.Carousel.init(headerCarousel, {});
    M.Carousel.init(carouselH, {
      fullWidth: true,
    });
    M.Carousel.init(carouselVx, {
      fullWidth: false,
    });

    window.onload = function () {
      initCarousel(".carousel", {
        fullWidth: true,
        // indicators: true,
        autoScroll: 5000, // time in ms
      });
    };

    function initCarousel(elms, opts) {
      if (!window || !document) return null;

      const instances = M.Carousel.init(getElements(elms), opts);

      if (Array.isArray(instances)) {
        for (let i = 0; i < instances.length; ++i) {
          addAutoScroll(instances[i]);
        }
      } else {
        addAutoScroll(instances);
      }

      return instances;
    }

    function addAutoScroll(instance) {
      if (!instance.options.autoScroll) return;

      instance.autoScrollIntervalId = window.setInterval(() => {
        instance.next();
      }, instance.options.autoScroll);
    }

    function getElements(elms) {
      if (elms.charAt(0) === "#") {
        elms = elms.replace("#", "");
        return document.getElementById(elms);
      }

      return document.querySelectorAll(elms);
    }
  });

  return (
    <div className="hero" ref={(el) => (hero = el)}>
      <div className="row full-height">
        <div className="container full-height">
          <div className="carousel carousel-slider full-height">
            <div className="carousel-item">
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
                    <div className="btn hidden-xs btn-bigger heading-btn">
                      share story
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
                  <div className="btn btn-bigger heading-btn">share story</div>
                </div>
              </div>
            </div>
            {/* <div className="carousel-item">
              <div className="col s12 pad0 center-xs">
                <div className="col s12 m6 l6 ">
                  <div className="main-text-container">
                    <h1>Amazing Experiences from Our Wonderful Customers</h1>
                    <p className="hidden-xs">
                      Here is what customers and vendors are saying about us,
                      you can share your stories with us too.
                    </p>
                    <div className="btn hidden-xs btn-bigger">share story</div>
                  </div>
                </div>
                <div className="col s12 m6 offset-m0 l6 offset-l0 ">
                  <div className="rel right-align banner-home-img">
                    <img
                      src={bannerOne}
                      alt="banner-img-1"
                      className="full-width home-img"
                    />
                  </div>
                </div>
                <div className="col s12 visible-xs">
                  <p>
                    Here is what customers and vendors are saying about us, you
                    can share your stories with us too.
                  </p>
                  <div className="btn btn-bigger">share story</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
