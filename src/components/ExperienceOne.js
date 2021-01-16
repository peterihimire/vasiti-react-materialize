import React from "react";
import "./ExperienceOne.css";
import "./Modal.css";
import ShareLinkOne from "../assets/share-story-1.svg";
import TwoLadiesImg from "../assets/black-beautiful-ladies-smiling.svg";
import CloseImg from "../assets/x.svg";
import M from "materialize-css/dist/js/materialize.min.js";

const ExperienceOne = () => {
  React.useEffect(() => {
    // Modal
    const modalTrig = document.querySelector(".modal");
    M.Modal.init(modalTrig, {});
  });
  return (
    <>
      <section className="experience">
        <div className="row">
          <div className="container">
            <div className="col s12 center-xs">
              <div className="col s12 m7">
                <div className=" visible-xs">
                  <div className="">
                    <div className="experience-header">
                      <h4 className="white-text">Tolu & Joys Experience</h4>
                      <div className="experience-title">
                        <p>customer</p>
                      </div>
                    </div>
                    <div className="experience-detail">
                      <p className="white-text">
                        I had the best experience shopping with vasiti.
                        Usability of the website was great, very good customer
                        service, an all round great experience. I would
                        definately be coming back!{" "}
                      </p>
                      <p>
                        I had the best experience shopping with vasiti.
                        Usability of the website was great, very good customer
                        service, an all round great experience. I would
                        definately be coming back!
                      </p>
                    </div>
                    <div className="">
                      <img
                        src={TwoLadiesImg}
                        alt="two-ladies"
                        className="experience-img "
                      />
                    </div>
                    <div className="share-img-container">
                      <a href="#share" className="modal-trigger">
                        <img src={ShareLinkOne} alt="share-story-link" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden-xs">
                  <img
                    src={TwoLadiesImg}
                    alt="two-ladies"
                    className="experience-img "
                  />
                </div>
              </div>
              <div className="col s12 m5 offset-m0 l4">
                <div className="experience-text hidden-xs">
                  <div className="">
                    <div className="experience-header">
                      <h4 className="white-text">Tolu & Joys Experience</h4>
                      <div className="experience-title">
                        <p>customer</p>
                      </div>
                    </div>
                    <div className="experience-detail">
                      <p className="white-text">
                        I had the best experience shopping with vasiti.
                        Usability of the website was great, very good customer
                        service, an all round great experience. I would
                        definately be coming back!
                      </p>
                      <p>
                        I had the best experience shopping with vasiti.
                        Usability of the website was great, very good customer
                        service, an all round great experience. I would
                        definately be coming back!
                      </p>
                    </div>
                    <div className="share-img-container">
                      <a href="#share" className="modal-trigger">
                        <img src={ShareLinkOne} alt="share-story-link" />
                      </a>
                    </div>
                  </div>
                </div>
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
              <form>
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

                <div className="name-field col s12">
                  <div className="input-field col s12 m6 ">
                    <input type="text" id="first_name" placeholder="" />
                    <label htmlFor="first_name">first name</label>
                  </div>
                  <div className="input-field col s12 m6">
                    <input type="text" p id="last_name" placeholder="" />
                    <label htmlFor="last_name">last name</label>
                  </div>
                </div>
                <div className=" input-field col s12 ">
                  <textarea
                    type="text"
                    id="text-content"
                    placeholder=""
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="text-content">Share your story</label>
                </div>
                <div className=" col s12 form-radio">
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

export default ExperienceOne;
