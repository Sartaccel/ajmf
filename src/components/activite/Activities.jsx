import React, { useState } from "react";
import "./Activities.css";
//  import 'owl.carousel/dist/assets/owl.carousel.css';
//  import 'owl.carousel/dist/assets/owl.theme.default.css';
//   import $ from 'jquery';
//  import 'owl.carousel';
import event from "../images/Activity.png";
import gallery from "../images/activties/gallery.jpg";
import gallery1 from "../images/activties/gallery1.jpg";
import gallery2 from "../images/activties/gallery2.jpg";
import gallery3 from "../images/activties/gallery3.jpg";
import gallery4 from "../images/activties/gallery4.jpg";
import gallery5 from "../images/activties/gallery5.jpg";
import gallery6 from "../images/activties/gallery6.jpg";
import gallery7 from "../images/activties/gallery7.jpg";
import gallery8 from "../images/activties/gallery8.jpg";
import gallery9 from "../images/activties/gallery9.jpg";
import gallery10 from "../images/activties/gallery10.jpg";
import gallery11 from "../images/activties/gallery11.jpg";
import gallery12 from "../images/activties/gallery12.jpg";
import gallery13 from "../images/activties/gallery13.jpg";
import gallery14 from "../images/activties/gallery14.jpg";
import gallery26 from "../images/activties/gallery26.jpg";
import gallery15 from "../images/activties/gallery15.jpg";
import gallery16 from "../images/activties/gallery16.jpg";
import gallery17 from "../images/activties/gallery17.jpg";
import gallery18 from "../images/activties/gallery18.jpg";
import gallery19 from "../images/activties/gallery19.jpg";
import gallery20 from "../images/activties/gallery20.jpg";
import gallery21 from "../images/activties/gallery21.jpg";
import gallery22 from "../images/activties/gallery22.jpg";
import gallery23 from "../images/activties/gallery23.jpg";
import gallery24 from "../images/activties/gallery24.jpg";
import gallery25 from "../images/activties/gallery25.jpg";
import gallery27 from "../images/activties/gallery27.jpg";
import gallery28 from "../images/activties/gallery28.jpg";
import gallery29 from "../images/activties/gallery29.jpg";
import gallery30 from "../images/activties/gallery30.jpg";
import gallery31 from "../images/activties/gallery31.jpg";
import gallery32 from "../images/activties/gallery32.jpg";
import gallery33 from "../images/activties/gallery33.jpg";

import gallery35 from "../images/activties/gallery35.jpg";
import gallery36 from "../images/activties/gallery36.jpg";
import gallery37 from "../images/activties/gallery37.jpg";
import gallery38 from "../images/activties/gallery38.jpg";
import gallery39 from "../images/activties/gallery39.jpg";
import gallery40 from "../images/activties/gallery40.jpg";
import gallery41 from "../images/activties/gallery41.jpg";
import gallery42 from "../images/activties/gallery42.jpg";
import gallery43 from "../images/activties/gallery43.jpg";
import gallery44 from "../images/activties/gallery44.jpg";
import gallery45 from "../images/activties/gallery45.jpg";
import gallery46 from "../images/activties/gallery46.jpg";
import gallery47 from "../images/activties/gallery47.jpg";
import gallery48 from "../images/activties/gallery48.jpg";
import gallery49 from "../images/activties/gallery49.jpg";
import gallery50 from "../images/activties/gallery50.jpg";
import gallery51 from "../images/activties/gallery51.jpg";
import gallery52 from "../images/activties/gallery52.jpg";
import gallery53 from "../images/activties/gallery53.jpg";
import gallery54 from "../images/activties/gallery54.jpg";
import gallery55 from "../images/activties/gallery55.jpg";
import gallery56 from "../images/activties/gallery56.jpg";
import gallery57 from "../images/activties/gallery57.jpg";
import gallery58 from "../images/activties/gallery58.jpg";
import gallery59 from "../images/activties/gallery59.jpg";

import gallery60 from "../images/events/EoVAW.jpg";
import gallery61 from "../images/events/EoVAW1.jpg";
import gallery62 from "../images/events/EoVAW2.jpg";
import gallery63 from "../images/events/EoVAW3.jpg";
import gallery64 from "../images/events/EoVAW4.jpg";
import gallery65 from "../images/events/EoVAW5.jpg";

import NavBar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Activities = () => {
  const activities = [
    { src: gallery60 },
    { src: gallery61 },
    { src: gallery62 },
    { src: gallery63 },
    { src: gallery64 },
    { src: gallery65 },
    { src: gallery7 },
    { src: gallery8 },
    { src: gallery9 },
    { src: gallery10 },
    { src: gallery11 },
    { src: gallery12 },
    { src: gallery13 },
    { src: gallery14 },
    { src: gallery15 },
    { src: gallery16 },
    { src: gallery17 },
    { src: gallery18 },
    { src: gallery19 },
    { src: gallery20 },
    { src: gallery21 },
  ];
  const action = [
    { src: gallery22 },
    { src: gallery23 },
    { src: gallery24 },
    { src: gallery25 },
    { src: gallery26 },
    { src: gallery27 },
    { src: gallery28 },
    { src: gallery29 },
    { src: gallery30 },
    { src: gallery31 },
    { src: gallery32 },
    { src: gallery33 },
    // { src: gallery34, },
    { src: gallery35 },
    { src: gallery36 },
    { src: gallery37 },
    { src: gallery38 },
    { src: gallery39 },
    { src: gallery40 },
    { src: gallery41 },
    { src: gallery42 },
    { src: gallery43 },
  ];

  const thirdaction = [
    { src: gallery },
    { src: gallery1 },
    { src: gallery2 },
    { src: gallery3 },
    { src: gallery4 },
    { src: gallery5 },
    { src: gallery6 },
    { src: gallery44 },
    { src: gallery45 },
    { src: gallery46 },
    { src: gallery47 },
    { src: gallery48 },
    { src: gallery49 },
    { src: gallery50 },
    { src: gallery51 },
    { src: gallery52 },
    { src: gallery53 },
    { src: gallery54 },
    { src: gallery55 },
    // { src: gallery34, },
    { src: gallery56 },
    { src: gallery57 },
    { src: gallery58 },
    { src: gallery59 },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [isaction, setIsaction] = useState(false);
  const [isthirdaction, setthirdaction] = useState(false);

  const handleImageClick = () => {
    setIsPaused((prevState) => !prevState); // Toggle paused state on image click
  };
  const handleaction = () => {
    setIsaction((prevState) => !prevState); // Toggle paused state on image click
  };
  const handlethirdaction = () => {
    setthirdaction((prevState) => !prevState); // Toggle paused state on image click
  };

  return (
    <div>
      <NavBar />
      {/* hero section */}
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
      {/* media section */}
      <section
        id="about"
        className="about section-padding bg-light py-3"
        data-aos="fade-down"
      >
        <div className="container">
          <div className="row">
            {/* <h2><span style={{ color: 'rgb(0, 255, 115)' }}>Events</span></h2> */}
            <br />
            <h3>
              <span style={{ color: "rgb(0, 255, 115)" }}>Social </span>Media
              Feeds
            </h3>
            <div className="col-md-12 mt-md-6 d-flex justify-content-center py-3">
              <div className="row w-100">
                <div className="col-md-4 mb-3 d-flex justify-content-center">
                  <div className="card text-bg-primary w-100">
                    <div className="card-header">
                      <a
                        href="https://www.facebook.com/ajmfindia"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "aliceblue", textDecoration: "none" }}
                      >
                        <i className="bi bi-facebook">facebook</i>
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">AJM Foundation</h5>
                      <p className="card-text text-light">
                        AJM Foundation. Non-Governmental Organization (NGO)
                      </p>
                      <div className="card-footer">
                        <a
                          href="https://www.facebook.com/ajmfindia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-white text-dark text-decoration-none"
                        >
                          Follow us on facebook.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3 d-flex justify-content-center">
                  <div className="card text-bg-danger w-100">
                    <div className="card-header">
                      <a
                        href="https://www.youtube.com/@ajmfindia9353"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "aliceblue", textDecoration: "none" }}
                      >
                        <i className="bi bi-youtube">Youtube</i>
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">AJM Foundation</h5>
                      <p className="card-text text-white">
                        AJM Foundation. Non-Governmental Organization (NGO)
                      </p>
                      <div className="card-footer">
                        <a
                          href="https://www.youtube.com/@ajmfindia9353"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-white text-dark text-decoration-none"
                        >
                          View us on youtube.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3 d-flex justify-content-center">
                  <div className="card text-bg-info text-white w-100">
                    <div className="card-header">
                      <a
                        href="https://x.com/ajmfindia"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "aliceblue", textDecoration: "none" }}
                      >
                        <i className="bi bi-twitter-x">twitter</i>
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">AJM Foundation</h5>
                      <p className="card-text text-white">
                        AJM Foundation. Non-Governmental Organization (NGO)
                      </p>
                      <div className="card-footer">
                        <a
                          href="https://x.com/ajmfindia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-white text-dark text-decoration-none"
                        >
                          Follow us on twitter.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* activitiees images  */}
      <section className="mt-3" data-aos="zoom-in">
        <div className="container">
          <div className="col-md-12 mt-md-0  ">
            <div className="our-part">
              <h3>
                <span style={{ color: "rgb(0, 255, 115)" }}>Photo</span> Gallery
              </h3>
              <div className={`partners-container ${isPaused ? "paused" : ""}`}>
                <div className="partners d-flex p-2 gap-2">
                  {activities.map((activity) => (
                    <div key={activity.id} className="activity-card">
                      <img
                        src={activity.src}
                        alt={`Activity ${activity.id}`}
                        className="activity-image"
                        onClick={handleImageClick}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-3" data-aos="zoom-in">
        <div className="container">
          <div className="col-md-12 mt-md-0  ">
            {/* <button type="submit" className="btn btn-outline-danger m-2">Upload</button> */}
            <div className="our-part ">
              <div className="partners-container">
                <div
                  className={`partners-container ${isaction ? "paused" : ""}`}
                >
                  <div className="partners d-flex p-2 gap-2">
                    {action.concat(action).map((actions, index) => (
                      <div key={index} className="activity-card">
                        <img
                          src={actions.src}
                          alt={`Actions ${index}`}
                          className="activity-image"
                          onClick={handleaction}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-3" data-aos="zoom-in">
        <div className="container">
          <div className="col-md-12 mt-md-0  ">
            <div className="our-part ">
              <div
                className={`partners-container ${
                  isthirdaction ? "paused" : ""
                }`}
              >
                <div className="partners d-flex p-2 gap-2">
                  {thirdaction
                    .concat(thirdaction)
                    .map((thirdactions, index) => (
                      <div key={index} className="activity-card">
                        <img
                          src={thirdactions.src}
                          alt={`ThirdActions ${index}`}
                          className="activity-image"
                          onClick={handlethirdaction}
                        />
                      </div>
                    ))}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Activities;
