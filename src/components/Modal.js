import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import celebrate from "../assets/celebrate.svg";
import thankYou from "../assets/thank-you.svg";
import "./Success.css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);
    // If you want to work on instance of the Modal then you can use the below code snippet
    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }
  render() {
    return (
      <>
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal-success"
          className="modal "
        >
          <div className="modal-content ">
            <div className="success-content">
              <div className="success-div">
                <img src={celebrate} alt="success-icon" />
              </div>
              <div className="thank-you-div">
                <img src={thankYou} alt="thank-you text" />
              </div>
              <div className="thank-you-paragraph">
                <p>
                  Thank you for the best experience shopping with vasiti.
                  Usability of the website was great, very good customer
                  service, an all round
                </p>
              </div>
              <div className="modal-close-div">
                <button className="btn btn-bigger modal-close">Close</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
