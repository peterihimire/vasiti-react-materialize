import React from "react";

const home = () => {
  return (
    <section id="home">
      <div className="row full-height">
        <div className="carousel carousel-slider full-height">
          <div
            className="carousel-item slide-banner"
            id="first-slide"
            href="#one!"
          >
            <img
              src="img/banner-1.png"
              alt="image"
              className="home-abs-img hidden-xs"
            />
            <img
              src="img/banner-1-xs.png"
              alt="image"
              className="home-abs-img visible-xs"
            />
            <div className="container">
              <div className="main-txt-wrapper col s12 m10 l4">
                <h1 className="banner-title pry-color">
                  <span className="sec-color">Rent a home for</span>{" "}
                  <br className="hidden-xs" />a day or more
                </h1>

                <div class="home-btn-wrapper">
                  <button
                    className="modal-trigger home-banner-btn"
                    data-target="book-now"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item slide-banner"
            id="second-slide"
            href="#two!"
          >
            <img
              src="img/banner-2.png"
              alt="image"
              className="home-abs-img hidden-xs"
            />
            <img
              src="img/banner-2-xs.png"
              alt="image"
              className="home-abs-img visible-xs"
            />
            <div className="container">
              <div class="main-txt-wrapper col s12 m10 l4">
                <h1 class="banner-title pry-color">
                  <span className="sec-color">Need a place to throw</span>{" "}
                  <br className="hidden-xs" />a house party?
                </h1>
                <p>
                  <span>
                    Rent a fully furnished villa in Lagos from as low as
                    <span className="bold-txt pry-color">N50,000 per day</span>.
                    Cheaper than a hotel, with a lot of rooms to spare.
                  </span>
                </p>

                <div className="home-btn-wrapper">
                  <button
                    className="modal-trigger home-banner-btn"
                    data-target="book-now"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default home;
