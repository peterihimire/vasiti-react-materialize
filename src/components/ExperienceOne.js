import React from "react";
import "./ExperienceOne.css";
import ShareLinkOne from "../assets/share-story-1.svg";
import TwoLadiesImg from "../assets/black-beautiful-ladies-smiling.svg";
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
                    <div className="share-img-container">
                      <a href="#share" className="modal-trigger">
                        <img src={ShareLinkOne} alt="share-story-link" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <img
                    src={TwoLadiesImg}
                    alt="two-ladies"
                    class="experience-img "
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
                      <a href="#share" class="modal-trigger">
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

      <div class="modal" id="share">
        <div class="modal-content">
          <div class="row">
            <div class="col s12">
              <div class="modal-close-container">
                <img src="images/x.svg" alt="modal-close" class="modal-close" />
              </div>
              <div class="modal-header">
                <h6 class="center">Share your amazing story!</h6>
              </div>
              <form>
                <div class="file-field  col s12 file-setting">
                  <div class="file-path-wrapper">
                    <input
                      type="text"
                      placeholder="Choose Image"
                      id="image"
                      class="file-path"
                    />
                  </div>
                  <div class="">
                    <img src="images/Vector.svg" alt="file-icon-image" />
                    <input type="file" multiple />
                  </div>
                </div>

                <div class="name-field col s12">
                  <div class="input-field col s12 m6 ">
                    <input type="text" id="first_name" placeholder="" />
                    <label for="first_name">first name</label>
                  </div>
                  <div class="input-field col s12 m6">
                    <input type="text" p id="last_name" placeholder="" />
                    <label for="last_name">last name</label>
                  </div>
                </div>
                <div class=" input-field col s12 ">
                  <textarea
                    type="text"
                    id="text-content"
                    placeholder=""
                    class="materialize-textarea"
                  ></textarea>
                  <label for="text-content">Share your story</label>
                </div>
                <div class=" col s12 form-radio">
                  <div class="col s12 m6">
                    <label>What did you interact with Vasiti as?</label>
                  </div>
                  <div class="col s12 m6 radio-btns">
                    <p>
                      <label>
                        <input
                          name="group1"
                          type="radio"
                          class="with-gap"
                          checked
                        />
                        <span>Customer</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input name="group1" type="radio" class="with-gap" />
                        <span>Vendor</span>
                      </label>
                    </p>
                  </div>
                </div>
                <div class="col s12  center-xs right-align">
                  <button class="btn btn-large">Share your story</button>
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
