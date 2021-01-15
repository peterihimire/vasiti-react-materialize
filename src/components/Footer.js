import React from "react";
import "./Footer.css";
import subBanner from "../assets/subscribe-banner.png";
import beMemberComm from "../assets/Be a member of our community 🎉.svg";
import fb from "../assets/fb.svg";
import tw from "../assets/tw.svg";
import ins from "../assets/in.svg";
import ig from "../assets/ig.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col s12 first-footer">
            <div className="col s12 m4 offset-m2 visible-xs">
              <div className="become-member-img-container">
                <img src={beMemberComm} alt="be-a-member" class="be-a-member" />
              </div>
              <p className="white-text">
                We’d make sure you’re always first to know what’s happening on
                Vasiti, thus, the world.
              </p>
              <form>
                <div className="form-control">
                  <input type="email" placeholder="enter your email address" />
                  <button className="btn white black-text subscribe-btn">
                    subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="col s12 m5 offset-m1 phone-container-main ">
              <div className="phone-img-container">
                <img
                  src={subBanner}
                  alt="subscribe-banner"
                  className="subscribe-banner"
                />
              </div>
            </div>
            <div className="col s12 m5 offset-m1 hidden-xs">
              <div className="become-member-img-container">
                <img
                  src={beMemberComm}
                  alt="be-a-member"
                  className="be-a-member"
                />
              </div>
              <p className="white-text">
                We’d make sure you’re always first to know what’s happening on
                Vasiti—thus, the world.
              </p>
              <form>
                <div className="form-control">
                  <input type="email" placeholder="enter your email address" />
                  <button className="btn white black-text">subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col s12 second-footer">
            <div className="col s6 m4 l5ths">
              <div className="">
                <h6>Company</h6>
                <ul>
                  <li>
                    <a href="/">about</a>
                  </li>
                  <li>
                    <a href="/">term of use</a>
                  </li>
                  <li>
                    <a href="/">privacy policy</a>
                  </li>
                  <li>
                    <a href="/">press and media</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col s6 m4 l5ths">
              <div className="">
                <h6>Products</h6>
                <ul>
                  <li>
                    <a href="/">marketplace</a>
                  </li>
                  <li>
                    <a href="/">magazene</a>
                  </li>
                  <li>
                    <a href="/">seller</a>
                  </li>
                  <li>
                    <a href="/">wholesale</a>
                  </li>
                  <li>
                    <a href="/">services</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col s6 m5ths">
              <div className="">
                <h6>Careers</h6>
                <ul>
                  <li>
                    <a href="/">become a campus rep</a>
                  </li>
                  <li>
                    <a href="/">become a vasiti influencer</a>
                  </li>
                  <li>
                    <a href="/">become a campus writter</a>
                  </li>
                  <li>
                    <a href="/">become an affiliate</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col s6 m4 l5ths">
              <div className="">
                <h6>Get in touch</h6>
                <ul>
                  <li>
                    <a href="/">contact us</a>
                  </li>
                  <li>
                    <a href="/">patner with us</a>
                  </li>
                  <li>
                    <a href="/">advertise with us</a>
                  </li>
                  <li>
                    <a href="/">help/FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col s6 m4 l5ths">
              <div className="">
                <h6>Join our community</h6>
                <div className="social-div">
                  <ul>
                    <li>
                      <a href="/">
                        <img src={fb} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={ins} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={tw} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={ig} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
