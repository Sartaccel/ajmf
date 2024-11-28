import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";
import "./scrollbar.js";
import home from "../images/navbar/home.gif";
import service from "../images/navbar/schemes.gif";
import volunteer from "../images/navbar/volunteers.gif";
import activies from "../images/navbar/activities.gif";
import event from "../images/navbar/events.gif";
import partner from "../images/navbar/partners.gif";
import contact from "../images/navbar/contact.gif";
import donate from "../images/navbar/donate.gif";
import accident from "../images/navbar/accidentfi.gif";
import trash from "../images/navbar/trashfk.gif";
import oneca from "../images/navbar/oneca.gif";
import oneenp from "../images/navbar/entrepreneur.gif";
import womenep from "../images/navbar/womenep.gif";
import saveth from "../images/navbar/saveEarth.gif";

function NavBar() {
  const location = useLocation();

  // Function to check if the current path matches
  const isActive = (path) => {
    return location.pathname === path ? "navLink active" : "navLink";
  };

  // Check if the current path matches any of the dropdown items' paths
  const isDropdownActive = [
    "/freeIndia",
    "/freeKk",
    "/oneCa",
    "/oneFamily",
    "/womenep",
    "/saveEarth",
  ].includes(location.pathname);

  return (
    <div>
      <div id="progress">
        <span id="progress-value">&#x1F815;</span>
      </div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand me-auto" to="/">
            <img
              src={logo}
              alt="AJM Foundation"
              style={{ width: "100px", height: "auto" }}
              onContextMenu={(e) => e.preventDefault()}
            />
          </Link>
          <div
            className="offcanvas offcanvas-end w-100"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header text-danger border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                AJM Foundation
              </h5>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column flex-lg-row p-0">
              <ul className="navbar-nav justify-content-center align-items-center flex-grow-1">
                <li className="nav-item px-2">
                  <Link
                    className={`${isActive(
                      "/"
                    )} d-flex align-items-center navLink`}
                    aria-current="page"
                    to="/"
                  >
                    <img
                      src={home}
                      width={40}
                      height={40}
                      className="gif"
                      alt="Home"
                    />
                    Home
                  </Link>
                </li>
                <li
                  className={`nav-item dropdown px-2 ${
                    isDropdownActive ? "active" : ""
                  }`}
                >
                  <button
                    type="button"
                    className={`dropdown-toggle d-flex align-items-center navLink border-0 bg-light ${
                      isDropdownActive ? "active" : ""
                    }`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={service}
                      width={40}
                      height={40}
                      className="gif"
                      alt="Services"
                    />
                    Services
                  </button>
                  <ul className="dropdown-menu px-2">
                    <li>
                      <Link
                        className={`${isActive(
                          "/freeIndia"
                        )} dropdown-item d-flex align-items-center navLink`}
                        to="/freeIndia"
                      >
                        <img
                          src={accident}
                          width={40}
                          height={40}
                          className="gif"
                          alt="Accident Free India"
                        />
                        Accident Free India
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${isActive(
                          "/freeKk"
                        )} dropdown-item d-flex align-items-center navLink`}
                        to="/freeKk"
                      >
                        <img
                          src={trash}
                          width={40}
                          height={40}
                          className="gif"
                          alt="Trash Free Kanyakumari"
                        />
                        Trash Free Kanyakumari
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${isActive(
                          "/oneCa"
                        )} dropdown-item d-flex align-items-center navLink`}
                        to="/oneCa"
                      >
                        <img
                          src={oneca}
                          width={40}
                          height={40}
                          className="gif"
                          alt="One Village One CA"
                        />
                        One Village One CA
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${isActive(
                          "/oneFamily"
                        )} dropdown-item d-flex align-items-center navLink`}
                        to="/oneFamily"
                      >
                        <img
                          src={oneenp}
                          width={40}
                          height={40}
                          className="gif"
                          alt="One Family One Entrepreneur"
                        />
                        One Family One Entrepreneur
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${isActive(
                          "/womenep"
                        )} dropdown-item d-flex align-items-center navLink`}
                        to="/womenep"
                      >
                        <img
                          src={womenep}
                          width={40}
                          height={40}
                          className="gif"
                          alt="Women Empowerment"
                        />
                        Women Empowerment
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${isActive(
                          "/saveEarth"
                        )} dropdown-item d-flex align-items-center navLink`}
                        to="/saveEarth"
                      >
                        <img
                          src={saveth}
                          width={40}
                          height={40}
                          className="gif"
                          alt="Save Earth Kanyakumari"
                        />
                        Save Earth Kanyakumari
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-2">
                  <Link
                    className={`${isActive(
                      "/volunteer"
                    )} d-flex align-items-center navLink`}
                    to="/volunteer"
                  >
                    <img
                      src={volunteer}
                      width={40}
                      height={40}
                      className="gif"
                      alt="Volunteers"
                    />
                    Volunteers
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link
                    className={`${isActive(
                      "/activities"
                    )} d-flex align-items-center navLink`}
                    to="/activities"
                  >
                    <img
                      src={activies}
                      width={40}
                      height={40}
                      className="gif"
                      alt="Activities"
                    />
                    Activities
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link
                    className={`${isActive(
                      "/events"
                    )} d-flex align-items-center navLink`}
                    to="/events"
                  >
                    <img
                      src={event}
                      width={40}
                      height={40}
                      className="gif"
                      alt="Events"
                    />
                    Events
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link
                    className={`${isActive(
                      "/partner"
                    )} d-flex align-items-center navLink`}
                    to="/partner"
                  >
                    <img
                      src={partner}
                      width={40}
                      height={40}
                      className="gif"
                      alt="Partners"
                    />
                    Partners
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link
                    className={`${isActive(
                      "/contact"
                    )} d-flex align-items-center navLink`}
                    to="/contact"
                  >
                    <img
                      src={contact}
                      width={40}
                      height={40}
                      className="gif"
                      alt="Contact Us"
                    />
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item donatelink px-2">
                  <Link
                    className={`${isActive(
                      "/donate"
                    )} d-flex align-items-center navLink`}
                    to="/donate"
                  >
                    <img
                      src={donate}
                      width={40}
                      height={40}
                      className="gif"
                      alt="Donate"
                    />
                    Donate
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            to="/donate"
            className="btn-flip mx-2"
            data-back="Now"
            data-front="Donate"
          ></Link>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
