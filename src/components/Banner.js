import React from "react";
import "./Banner.css";
import M from "materialize-css/dist/js/materialize.min.js";
// import bannerOne from "../assets/man-and-lady.png";
import bannerTwo from "../assets/man-and-lady.png";

const Banner = () => {
  React.useEffect(() => {
    // header carousel
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
    <section className="home">
      <div className="row full-height">
        <div className="container full-height">
          <div className="carousel carousel-slider full-height">
            <div className="carousel-item">
              <div className="col s12 pad0 center-xs">
                <div className="col s12 m6 l5 ">
                  <div className="main-text-container">
                    <h1>Amazing Experiences from Our Wonderful Customers</h1>
                    <p className="hidden-xs">
                      Here is what customers and vendors are saying about us,
                      you can share your stories with us too.
                    </p>
                    <div className="btn hidden-xs btn-bigger">share story</div>
                  </div>
                </div>
                <div className="col s12 m6 offset-m0 l7 offset-l0">
                  <div className="rel right-align banner-home-img">
                    <img
                      src={bannerTwo}
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
    </section>
  );
};

export default Banner;
