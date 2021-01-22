import React from "react";
import "./ExperienceTwo.css";
import "./Modal.css";
import ShareLinkTwo from "../assets/share-story-2.svg";
import LadyHappy from "../assets/woman-shoppingbag.png";
import CloseImg from "../assets/x.svg";
import M from "materialize-css/dist/js/materialize.min.js";
import { TimelineLite, Power3 } from "gsap";

const ExperienceTwo = () => {
  // GSAP FUNCTIONS

  let expTwoImg = React.useRef(null);

  let tl = new TimelineLite({ delay: 3.8 });

  React.useEffect(() => {
    const expImg = expTwoImg;

    // TweenMax.to(hero, 0, { css: { visibility: "visible" } });

    // HEADING IMAGE ANIMATION
    tl.from(expImg, 2, { x: 2000, ease: Power3.easeOut }, 2.4, [tl]);
  });

  React.useEffect(() => {
    // Modal
    const modalTrig = document.querySelector(".modal");
    M.Modal.init(modalTrig, {});
  });
  return (
    <>
      <section class="experience-section-2">
        <div className="container">
          <div className="row">
            <div className="col s12 ">
              <div className="col s12 m5 l4">
                <div className="josiahs-experience-text">
                  <div className="experience-header">
                    <h4 className="black-text">Josiahs Experience</h4>
                    <div className="experience-title">
                      <p className="black-text">vendor</p>
                    </div>
                  </div>

                  <div className="experience-detail">
                    <p className="black-text">
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer service, an
                      all round great experience. I would definately be coming
                      back! I had the best experience shopping with vasiti.
                      Usability of the website was great, very good customer
                      service, an all round great experience. I would definately
                      be coming back!
                    </p>
                  </div>
                  <div className="visible-xs" ref={(el) => (expTwoImg = el)}>
                    <img
                      src={LadyHappy}
                      alt="woman-shopping"
                      className="experience-img-2"
                    />
                  </div>
                  <div className="share-img-container">
                    <a href="#share" className="modal-trigger">
                      <img src={ShareLinkTwo} alt="share-story-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col s12 m6 offset-m1 l6 offset-l2 hidden-xs"
                ref={(el) => (expTwoImg = el)}
              >
                <img
                  src={LadyHappy}
                  alt="woman-shopping"
                  className="experience-img-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    <input type="text" p id="last_name" placeholder="" />
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
                  <button className="btn btn-bigger">Share your story</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceTwo;
