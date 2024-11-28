/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import event from "../images/EVENTS.png";
// import partner1 from '../images/our-partners/1.png'
// import partner2 from '../images/our-partners/2.png';
// import partner3 from '../images/our-partners/3.png';
// import partner4 from '../images/our-partners/4.png';
// import partner5 from '../images/our-partners/5.png';
// import partner6 from '../images/our-partners/6.png';
// import partner7 from '../images/our-partners/7.png';
// import partner8 from '../images/our-partners/8.png';
// import partner9 from '../images/our-partners/9.png';
import event1 from "../images/activties/gallery56.jpg";
import event2 from "../images/activties/gallery44.jpg";
import event3 from "../images/activties/gallery35.jpg";
import event4 from "../images/activties/gallery42.jpg";
import event5 from "../images/activties/gallery41.jpg";
import event6 from "../images/activties/gallery59.jpg";
import event7 from "../images/events/EoVAW.jpg";
import event8 from "../images/activties/gallery8.jpg";
import event9 from "../images/activties/gallery5.jpg";
import event10 from "../images/activties/gallery1.jpg";
import event11 from "../images/activties/gallery25.jpg";
import event12 from "../images/activties/gallery20.jpg";
import event13 from "../images/activties/gallery48.jpg";
import event14 from "../images/activties/gallery14.jpg";
import event15 from "../images/activties/gallery15.jpg";
import event19 from "../images/activties/gallery19.jpg";
import event20 from "../images/activties/gallery.jpg";
import event18 from "../images/activties/gallery18.jpg";

import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Event.css";
import { FcCalendar } from "react-icons/fc";

import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
// import { FaShoppingBag, FaArrowRight } from 'react-icons/fa';

const Events = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.message) {
      if (location.state.type === "success") {
        toast.success(location.state.message);
      } else {
        toast.error(location.state.message);
      }
    }
  }, [location.state]);

  const [showAll, setShowAll] = useState(false);
  const [showAll1, setShowAll1] = useState(false);
  const [showAll2, setShowAll2] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const handleToggle1 = () => {
    setShowAll1(!showAll1);
  };

  const handleToggle2 = () => {
    setShowAll2(!showAll2);
  };

  const calculateTimeDifference = (eventDate) => {
    const now = new Date();
    const event = new Date(eventDate);

    const yearsDifference = event.getFullYear() - now.getFullYear();
    const monthsDifference =
      event.getMonth() - now.getMonth() + yearsDifference * 12;
    const daysDifference = Math.floor((event - now) / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      ((event - now) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      ((event - now) % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(((event - now) % (1000 * 60)) / 1000);

    // Ensure we show "0" for the same year/month/day
    const years = yearsDifference === 0 ? 0 : yearsDifference;
    const months = monthsDifference === 0 ? 0 : monthsDifference;
    const days = daysDifference === 0 ? 0 : daysDifference;

    if (event < now) {
      return `${years < 0 ? Math.abs(years) : 0} year, ${
        months < 0 ? Math.abs(months) : 0
      } month, ${days < 0 ? Math.abs(days) : 0} day ago`;
    }

    return `${years > 0 ? years : 0} year, ${months > 0 ? months : 0} month, ${
      days > 0 ? days : 0
    } day, ${hours} hrs, ${minutes} min, ${seconds} sec`;
  };

  const [timeRemaining, setTimeRemaining] = useState("");
  const [timeRemaining1, setTimeRemaining1] = useState("");
  const [timeRemaining2, setTimeRemaining2] = useState("");
  const [timeRemaining3, setTimeRemaining3] = useState("");
  const [timeRemaining4, setTimeRemaining4] = useState("");
  const [timeRemaining5, setTimeRemaining5] = useState("");
  const [timeRemaining6, setTimeRemaining6] = useState("");
  const [timeRemaining7, setTimeRemaining7] = useState("");
  const [timeRemaining8, setTimeRemaining8] = useState("");
  const [timeRemaining9, setTimeRemaining9] = useState("");
  const [timeRemaining10, setTimeRemaining10] = useState("");
  const [timeRemaining11, setTimeRemaining11] = useState("");
  const [timeRemaining12, setTimeRemaining12] = useState("");
  const [timeRemaining13, setTimeRemaining13] = useState("");
  const [timeRemaining14, setTimeRemaining14] = useState("");
  const [timeRemaining15, setTimeRemaining15] = useState("");
  const [timeRemaining16, setTimeRemaining16] = useState("");
  const [timeRemaining17, setTimeRemaining17] = useState("");

  useEffect(() => {
    const updateTimes = () => {
      setTimeRemaining(calculateTimeDifference("2024-03-25"));
      setTimeRemaining1(calculateTimeDifference("2024-03-05"));
      setTimeRemaining2(calculateTimeDifference("2024-03-01"));
      setTimeRemaining3(calculateTimeDifference("2024-03-20"));
      setTimeRemaining4(calculateTimeDifference("2024-03-15"));
      setTimeRemaining5(calculateTimeDifference("2024-03-19"));
      setTimeRemaining6(calculateTimeDifference("2024-11-25T15:15:30"));
      setTimeRemaining7(calculateTimeDifference("2024-04-16"));
      setTimeRemaining8(calculateTimeDifference("2024-02-04"));
      setTimeRemaining9(calculateTimeDifference("2024-08-15"));
      setTimeRemaining10(calculateTimeDifference("2023-04-17"));
      setTimeRemaining11(calculateTimeDifference("2023-04-18"));
      setTimeRemaining12(calculateTimeDifference("2024-08-01"));
      setTimeRemaining13(calculateTimeDifference("2024-08-02"));
      setTimeRemaining14(calculateTimeDifference("2024-08-03"));
      setTimeRemaining15(calculateTimeDifference("2024-08-04"));
      setTimeRemaining16(calculateTimeDifference("2024-08-05"));
      setTimeRemaining17(calculateTimeDifference("2024-08-06"));
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      {/* hero section */}
      <ToastContainer />
      <Navbar />
      <section className="bg-cover hero-section text-white">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
          data-aos="zoom-in"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={event} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <br />
                  <span></span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="first col-12">
        <div className="container">
          <h4 className="text-center  pt-3" data-aos="zoom-in">
            Upcoming Events
          </h4>
          <div className="row justify-content-center py-3">
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll || !showAll ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event1} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Aug-1</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Free Dental Camp</h4>
                  {/* <p><strong>date="March 15" </strong></p> */}
                  <p className="Eventscroll">
                    "AJMF invites you to a free dental camp! Avail free dental
                    check-ups and consultations. Our team of expert dentists and
                    friendly staff are here to assist you. For more details,
                    visit [ajmf.in]"
                  </p>
                  <p id="new">{timeRemaining12}</p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid pariatur commodi eligendi dolorem neque unde culpa, accusantium corrupti. Voluptas amet, ex a beatae quis nesciunt nam.</p> */}
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll || !showAll ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event2} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Aug-2</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Road Safety</h4>
                  {/* <p><strong>date="March 15" </strong></p> */}
                  <p className="Eventscroll">
                    "This week's road safety sign: No U-Turn. Remember, making
                    U-turns at this sign is prohibited to prevent accidents and
                    ensure smooth traffic flow. Stay safe on the roads! For more
                    safety tips, visit [ajmf.in]."
                  </p>
                  <p id="new">{timeRemaining13}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll || !showAll ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event3} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Aug-3</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4> Free Eye Camp</h4>
                  {/* <p><strong>date="March 15" </strong></p>*/}
                  <p className="Eventscroll">
                    "Upcoming events by AJM Foundation: Participate in eye care
                    workshops and free vision screenings. Learn about vision
                    health and get involved in our community efforts to promote
                    eye care awareness."
                  </p>
                  <p id="new">{timeRemaining14}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event4} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Aug-4</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Free Medical Camp</h4>
                  {/* <p><strong>date="March 15" </strong></p> */}
                  <p className="Eventscroll">
                    "Venad Health and Charitable Trust: Join our health
                    initiatives and free medical camps. Engage in educational
                    programs to enhance community well-being and promote access
                    to essential resources."
                  </p>
                  <p id="new">{timeRemaining15}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event5} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Aug-5</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Free Medical Camp</h4>
                  {/* <p><strong>date="March 15" </strong></p> */}
                  <p className="Eventscroll">
                    "Venad Health and Charitable Trust: Join our health
                    initiatives and free medical camps. Engage in educational
                    programs to enhance community well-being and promote access
                    to essential resources."
                  </p>
                  <p id="new">{timeRemaining16}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event6} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Aug-6</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Free Medical Camp</h4>
                  {/* <p><strong>date="March 15" </strong></p> */}
                  <p className="Eventscroll">
                    "Venad Health and Charitable Trust: Join our health
                    initiatives and free medical camps. Engage in educational
                    programs to enhance community well-being and promote access
                    to essential resources."
                  </p>
                  <p id="new">{timeRemaining17}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center" data-aos="zoom-in">
              <button
                onClick={handleToggle}
                className="btn btn-link text-white mt-3"
              >
                {showAll ? "Show Less" : "View All"}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="second col-12">
        <div className="container">
          <h4 className="text-center text-white pt-3" data-aos="zoom-in">
            Recent Events
          </h4>
          <div className="row justify-content-center py-3">
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll1 || !showAll1 ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event7} alt="img" height={318.52} />
                  <span>
                    <h6 className="position-absolute mt-5">Nov-25</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Elimination of Violence Against Women</h4>
                  {/* <p><strong>date="March 15" </strong></p>*/}
                  <p className="Eventscroll h-50">
                    "We honor the Mirabal sisters, who inspire us to stand
                    against gender-based violence. Together, let’s empower
                    women, challenge harmful norms, and build a future where
                    safety, dignity, and equality prevail for everyone."
                  </p>
                  <p id="new">{timeRemaining6}</p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid pariatur commodi eligendi dolorem neque unde culpa, accusantium corrupti. Voluptas amet, ex a beatae quis nesciunt nam.</p> */}
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll1 || !showAll1 ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event8} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Apr-16</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Corona Free Tamilnadu</h4>
                  {/* <p><strong>date="March 15" </strong></p>*/}
                  <p className="Eventscroll">
                    "AJM Foundation seeks donations for ventilators. Our support
                    provides critical care and life-saving treatment to those in
                    need. Help enhance healthcare and save lives. Contribute to
                    our mission today."
                  </p>
                  <p id="new">{timeRemaining7}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll1 || !showAll1 ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event9} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Feb-4</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Awerness Program</h4>
                  {/* <p><strong>date="March 15" </strong></p>*/}
                  <p className="Eventscroll">
                    "During the Corona pandemic, an awareness program was
                    conducted by the minister. The initiative aimed to educate
                    the public on health guidelines, safety measures, and
                    preventive actions to combat the virus."
                  </p>
                  <p id="new">{timeRemaining8}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll1 ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event10} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Mar-15</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Food Donation</h4>
                  {/* <p><strong>date="March 15" </strong></p>*/}
                  <p className="Eventscroll">
                    "During the Corona period, food was provided to the public.
                    This initiative aimed to support those affected by the
                    pandemic, ensuring access to essential nutrition and
                    alleviating hardships."
                  </p>
                  <p id="new">{timeRemaining9}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll1 ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event11} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Apr-17</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Awareness Program</h4>
                  {/* <p><strong>date="March 15" </strong></p>
                   */}
                  <p className="Eventscroll">
                    "An awareness meeting was held during the Corona period. The
                    session focused on health information, safety protocols, and
                    preventive measures to help the community navigate the
                    pandemic effectively."
                  </p>
                  <p id="new">{timeRemaining10}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll1 ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event12} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Apr-18</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Gift Giving in a Pandemic</h4>
                  {/* <p><strong>date="March 15" </strong></p>
                   */}
                  <p className="Eventscroll">
                    "Gifts were presented during the Corona period to support
                    and uplift the community. These contributions included
                    essential items and resources to help individuals navigate
                    the challenges of the pandemic."
                  </p>
                  <p id="new">{timeRemaining11}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center" data-aos="zoom-in">
              <button
                onClick={handleToggle1}
                className="btn btn-link text-white mt-3"
              >
                {showAll1 ? "Show Less" : "View All"}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="third col-12">
        <div className="container">
          <h4 className="text-center pt-3 text-white" data-aos="zoom-in">
            past Events
          </h4>
          <div className="row justify-content-center py-3">
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="fade-down"
              style={{ display: showAll2 || !showAll2 ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event13} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Mar-2</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Road Safety Awarness</h4>
                  {/* <p><strong>date="March 15" </strong></p>
                   */}
                  <p className="Eventscroll">
                    Road safety awareness is key to preventing accidents. It
                    includes following traffic rules, practicing safe driving,
                    maintaining vehicles, and ensuring pedestrian safety.
                    Educating people helps reduce risks and save lives.
                  </p>
                  <p id="new">{timeRemaining}</p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid pariatur commodi eligendi dolorem neque unde culpa, accusantium corrupti. Voluptas amet, ex a beatae quis nesciunt nam.</p> */}
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll2 || !showAll2 ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event14} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Mar-5</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Donate Ventilators</h4>
                  {/* <p><strong>date="March 15" </strong></p>
                   */}
                  <p className="Eventscroll">
                    Providing ventilators for hospital patients is crucial for
                    those with respiratory issues or severe illnesses. Ensuring
                    availability and proper management of ventilators helps in
                    effective treatment and can save lives.
                  </p>
                  <p id="new">{timeRemaining1}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll2 || !showAll2 ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event15} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Mar-1</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4> Receiving Award </h4>
                  {/* <p><strong>date="March 15" </strong></p>
                   */}
                  <p className="Eventscroll">
                    "Gifts were presented during the Corona period to support
                    the community. These contributions included essential items
                    and resources to help individuals navigate the challenges of
                    the pandemic."
                  </p>
                  <p id="new">{timeRemaining2}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll2 ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event20} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Mar-20</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Conference Meeting</h4>
                  {/* <p><strong>date="March 15" </strong></p>
                   */}
                  <p className="Eventscroll">
                    Conducting a conference involves organizing logistics,
                    scheduling sessions, and coordinating speakers. Effective
                    planning and management are key to a successful meeting and
                    achieving desired outcomes.
                  </p>
                  <p id="new">{timeRemaining3}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll2 ? "block" : "none" }}
            >
              <div className="cards-inner" data-aos="zoom-in">
                <div className="cards-thumb">
                  <img src={event19} alt="img" />
                  <span>
                    <h6 className="position-absolute mt-5">Mar-15</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Gift Presentation</h4>
                  {/* <p><strong>date="March 15" </strong></p>
                   */}
                  <p className="Eventscroll">
                    "Gifts were presented during the Corona period to support
                    the community with essential items and resources, helping
                    individuals navigate the challenges of the pandemic."
                  </p>
                  <p id="new">{timeRemaining4}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards col-lg-4 col-md-6 col-sm-12 p-3"
              data-aos="zoom-in"
              style={{ display: showAll2 ? "block" : "none" }}
            >
              <div className="cards-inner">
                <div className="cards-thumb">
                  <img src={event18} alt="img" />
                  <span>
                    <h6 className="position-absolute  mt-5">Mar-19</h6>
                    <br />
                    <FcCalendar className="fs-1 position-relative  align-items-center text-center" />
                    <br></br>{" "}
                  </span>
                </div>
                <div className="cards-detail">
                  <h4>Gift Provision</h4>
                  {/* <p><strong>date="March 15" </strong></p>
                   */}
                  <p className="Eventscroll">
                    Providing gifts to support people can enhance community
                    relations and offer valuable resources or support to those
                    in need, fostering goodwill and positive impact.
                  </p>
                  <p id="new">{timeRemaining5}</p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center" data-aos="zoom-in">
              <button
                onClick={handleToggle2}
                className="btn btn-link text-white mt-3"
              >
                {showAll2 ? "Show Less" : "View All"}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Events;
