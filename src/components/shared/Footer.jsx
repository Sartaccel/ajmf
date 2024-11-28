/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import {
  BiLogoFacebookSquare,
  BiLogoYoutube,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import reg from "../images/logo-vol.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* Footer section */}
      <section
        id="footer"
        className="footer section-padding bg-dark text-white"
        style={{
          background: "linear-gradient(to right,#24243e,#302b63,#0f0c29)",
        }}
      >
        <div className="container ">
          <div className="row mx-auto">
            <div className="col-md-3 mt-3 mx-auto">
              <div className="section-header text-left text-center align-self-sm-center text-md-start">
                <h2 className="fw-bold">Contact Us</h2>
                <p>
                  No-17/9, Lakshmipuram Main Street, Royapettah, Chennai - 600
                  014
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:ajmfoundation@gmail.com"
                    className="text-decoration-none text-white"
                  >
                    ajmfoundation@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 mt-3 col-12 mx-auto">
              <div className="section-header text-left text-center align-self-sm-center text-md-start">
                <h2 className="fw-bold">Site Map</h2>
                <div className="row mx-auto m-0 p-0">
                  <ul className="list-unstyled col-6 footers">
                    <li>
                      <Link
                        to="/"
                        className="footer-link text-white hover-effect homer "
                      >
                        Home{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/volunteer"
                        className="footer-link text-white ml-md-4 hover-effect"
                      >
                        Volunteers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/activities"
                        className="footer-link text-white hover-effect"
                      >
                        Activities
                      </Link>
                    </li>
                  </ul>
                  <ul className="list-unstyled col-6 ps-md-4">
                    <li>
                      <Link
                        to="/events"
                        className="footer-link text-white hover-effect"
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/partner"
                        className="footer-link text-white hover-effect"
                      >
                        Partners{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="footer-link text-white hover-effect"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-12 mt-3 mx-auto">
              <div className="section-header text-left text-center align-self-sm-center text-md-start">
                <h2 className="fw-bold">What We Do</h2>
                <ul className="list-unstyled footers">
                  <li>
                    <Link
                      to="/freeIndia"
                      className="footer-link text-white hover-effect"
                    >
                      Accident Free India
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/freeKk"
                      className="footer-link text-white hover-effect"
                    >
                      Trash Free Kanyakumari
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/oneCa"
                      className="footer-link text-white hover-effect"
                    >
                      One Village One CA
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/oneFamily"
                      className="footer-link text-white hover-effect"
                    >
                      One Family One Entrepreneur
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/womenep"
                      className="footer-link text-white hover-effect"
                    >
                      Women Empowerment
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/saveEarth"
                      className="footer-link text-white hover-effect"
                    >
                      Save Earth Kanyakumari
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 mt-3 col-12 mx-auto">
              <div className="section-header text-center align-self-sm-center text-md-start">
                <h2 className="fw-bold pb-1">Follow Us</h2>
                <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
                  <li>
                    <a
                      href="https://www.facebook.com/ajmfindia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLogoFacebookSquare className="fs-2 bg-white" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@ajmfindia9353"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon"
                    >
                      <BiLogoYoutube className="mx-1 fs-2 text-danger bg-white" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/ajmfindia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon"
                    >
                      <FaXTwitter className="me-1 fs-2 text-dark bg-white" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ajmfindia?igsh=aHc2a2M1NGl0ZXA3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon"
                    >
                      <BiLogoInstagramAlt className="fs-2 bg-white text-danger " />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/ajm-foundation/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon"
                    >
                      <BiLogoLinkedinSquare className="fs-2 bg-white mx-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <p className="text-center ">
              Copyright © 2020 AJM Foundation. All Rights Reserved. designed by{" "}
              <a
                href="https://www.enterkeysolutions.com/"
                className="text-decoration-none"
              >
                Enterkey Solution
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* scrollbar */}
      <div id="progress">
        <span id="progress-value">&#x1F815;</span>
      </div>
      {/* whatsapp */}
      <a
        href="https://wa.me/+919790179914"
        className="whatsapp-link d-flex justify-content-center align-items-center fs-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
      {/* register */}
      <Link to="/volunteer">
        {" "}
        <a
          href="#"
          className="register-link d-flex justify-content-center align-items-center border border-danger"
          target="_blank"
        >
          <img
            src={reg}
            alt="vol-logo"
            className="w-100 h-100 rounded-circle border border-danger"
          />
        </a>
      </Link>
    </>
  );
};

export default Footer;
