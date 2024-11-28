import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ban1 from "../images/banner5.jpg";
import ban2 from "../images/accidentfree_india3-transformed.jpeg_1720590727860 (1).jpg";
import ban3 from "../images/clean.jpg";
import ban4 from "../images/onevillage one CA.jpg";
import ban5 from "../images/Women-Empowerment new 16.png";
import ban7 from "../images/banner7.jpg";
import mis from "../images/misson1.png";
import vis from "../images/vision1.jpg";
import abt from "../images/about.jpg";
import partner1 from "../images/our-partners/1.png";
import partner2 from "../images/our-partners/2.png";
import partner3 from "../images/our-partners/3.png";
import partner4 from "../images/our-partners/4.png";
import partner5 from "../images/our-partners/5.png";
import partner6 from "../images/our-partners/6.png";
import partner7 from "../images/our-partners/7.png";
import partner8 from "../images/our-partners/8.png";
import partner9 from "../images/our-partners/9.png";
import partner10 from "../images/our-partners/EnterkeyF-1.png";
import team1 from "../images/our-team/team1.jpg";
import team2 from "../images/our-team/team2.jpg";
import team3 from "../images/our-team/team3.jpg";
import team4 from "../images/our-team/team4.jpg";
import team5 from "../images/our-team/team5.jpg";
import team6 from "../images/our-team/team6.jpg";
import team7 from "../images/our-team/team7.jpeg";
import team8 from "../images/our-team/team8.jpeg";
import freeacident from "../images/actfree1.png";
import TrashFreeKanyakumari from "../images/trashfree.jpg";
import family from "../images/family.png";
import Entepreneur from "../images/enp.png";
import women from "../images/wepfree.png";
import save from "../images/SEK_images_11-removebg-preview.png";
import "./Home.css";

import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

import { BiRightArrowAlt } from "react-icons/bi";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      const { message, type } = location.state;
      if (type === "success") {
        toast.success(message, { position: "top-center" });
      } else {
        toast.error(message, { position: "top-center" });
      }
    }
  }, [location.state]);

  const partners = [
    { src: partner1 },
    { src: partner2 },
    { src: partner3 },
    { src: partner4 },
    { src: partner5 },
    { src: partner6 },
    { src: partner7 },
    { src: partner8 },
    { src: partner9 },
    { src: partner10 },
  ];

  const Partner = ({ src, name, totalEvents, style }) => (
    <div className="block text-center p-2" style={style}>
      <img src={src} alt={name} className="rounded  my-2" />
      <div>{name}</div>
    </div>
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const teamMembers = [
    {
      id: "content1",
      imgSrc: team1,
      name: "P. MICHAEL VETHASIROMONY",
      title: "CEO (AJM Foundation)",
      description: "Retired(IAS)",
      alt: "no image",
    },
    {
      id: "content2",
      imgSrc: team2,
      name: "A. JOHN MORIS",
      title: "Founder of AJM Foundation",
      description: "M.Com, FCA",
    },
    {
      id: "content3",
      imgSrc: team3,
      name: "M. NEELAKANDAN",
      title: "COO-AJM FOUNDATION/Director",
      description: "Indian Army (Ex.Captain)",
    },
    {
      id: "content4",
      imgSrc: team4,
      name: "DR. NALINI SATHIAKUMAR",
      title: "Former WHO director",
      description: "MD, DCH, DRPH, MSPH",
    },
    {
      id: "content5",
      imgSrc: team5,
      name: "R. SHAHJAHAN",
      title: "Member of Ajm Foundation",
      description: "Journalist / Columnis",
    },
    {
      id: "content6",
      imgSrc: team6,
      name: "BALA VARRUN PERUMAL",
      title: "Trustee member at AJM foundation",
      description: "15 years of experience in IT sector",
    },
    {
      id: "content7",
      imgSrc: team7,
      name: "Vians Xavier",
      title: "Director Project & Finance",
      description: "13 years in F&A in Finance",
    },
    {
      id: "content8",
      imgSrc: team8,
      name: "S. Jeganathan",
      title: "Coordinator",
      description: "M.E",
    },
  ];

  useEffect(() => {
    const interval = setInterval(showNext, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const showNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      {/* hero section */}
      <section
        className="bg-cover hero-section text-white vh-50"
        style={{ overflow: "hidden" }}
      >
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
          data-aos="zoom-in"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={ban1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="zoom-in">
                  One Family <br />
                  <span>One Entrepreneur</span>
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={ban2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="zoom-in">
                  Accident Free
                  <br />
                  <span>India</span>
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={ban3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="zoom-in">
                  Trash Free <br />
                  <span>Kanyakumari</span>
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={ban4} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="zoom-in">
                  One Village <br />
                  <span>One CA</span>
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={ban5} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="zoom-in">
                  Women <br />
                  <span>Empowerment</span>
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={ban7} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="zoom-in">
                  Save Earth
                  <br />
                  <span>Kanyakumari</span>
                </h5>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev border-warning"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* about section */}
      <section id="about" className="about section-padding py-0 my-0 bg-light">
        <div className="container">
          <div className="row">
            <h2 className="text-main fw-bold text-center">
              <span style={{ color: "#ff4d00" }}>About</span> AJM Foundation
            </h2>
            <div className="col-lg-4 col-md-12 my-lg-5" data-aos="zoom-in">
              <div className="about-img">
                <img src={abt} alt="ajm" className="img-fluid rounded" />
              </div>
            </div>
            <div
              className="col-lg-8 col-md-12 ps-lg-5 my-lg-5"
              data-aos="zoom-in"
            >
              <div className="about-text lh-base pt-lg-0 pt-md-0">
                <h2 className="text-visible fw-bold" data-aos="zoom-in">
                  <span style={{ color: "#ff4d00" }}>About</span> AJM Foundation
                </h2>
                <p data-aos="zoom-in">
                  Foundation is a Registered Charitable Public Trust operating
                  from Chennai, formed by CA John Moris, a practising Chartered
                  Accountant (Founder) and a team of highly accredited
                  professionals headed by Shri Michael VethaSiromony, IAS
                  (Retd), former Additional Chief Secretary to the Government of
                  Kerala. Trustees include Late Shri.N.Chenbaharaman, I.P.S
                  (Retd.), Dr.NaliniSathiakumar, Shri.R.Shajahan - New Delhi,
                  Shri.BalaVarrun, HCL, Captain M.Neelakandan, Director, CHTO,
                  Govt. Of India, Ministry of Health & Family Welfare (Retd.).
                </p>
                <p data-aos="zoom-in">
                  Founder, CA A John Moris has been continuously doing research
                  and studies in achieving “accident free India” for many years.
                  As a result, The AJM Foundation Trust with its Registered
                  Office at No:17/9 , Lakshmipuram Main Street , Royapettah,
                  Chennai – 600014, was created on 16.03.18 Registered under the
                  Indian Trust Act, 1882 as a Public Charitable Social Trust.
                </p>
                <p data-aos="zoom-in">
                  The Foundation is endeavouring to achieve financial inclusion
                  and better social living conditions through our 6 priority
                  social projects viz.
                </p>
                <ul className="lh-base" data-aos="zoom-in">
                  <li className="pb-1" data-aos="zoom-in">
                    “Accident-Free India”
                  </li>
                  <li className="pb-1" data-aos="zoom-in">
                    “Trash Free Kanyakumari”
                  </li>
                  <li className="pb-1" data-aos="zoom-in">
                    “One Village One CA”
                  </li>
                  <li className="pb-1" data-aos="zoom-in">
                    “One Family One Entrepreneur”
                  </li>
                  <li className="pb-1" data-aos="zoom-in">
                    “Women Empowerment”
                  </li>
                  <li className="pb-1" data-aos="zoom-in">
                    “Save Earth Kanyakumari”
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* vision & mission section */}
      <section>
        <div className="container-fluid " style={{ overflowY: "hidden" }}>
          <div className="row">
            <div
              className="col-lg-6 col-md-12 col-12  px-0 py-0"
              data-aos="zoom-in"
            >
              <div className="card  mx-auto h-100">
                <img
                  src={vis}
                  alt="Vision"
                  className="card-img-top img-fluid col-lg-12 "
                />
                <div className="card-img-overlay px-3 py-3 d-flex row col-lg-12 mx-md-0 justify-content-center   font-weight-500">
                  <div className="col-lg-4"></div>
                  <div className="col-lg-8 visionmission ">
                    <h4
                      className="text py-md-0 mx-lg-0 fw-bold mt-lg-5 "
                      style={{ color: "orange" }}
                    >
                      Vision
                    </h4>
                    <p className="card-text mx-lg-0 text-white pl-lg-0 ">
                      Our Vision is to train and transform the citizens of India
                      to be socially and morally responsible with high standards
                      of personal Integrity in making India safe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-12  px-0 py-0"
              data-aos="zoom-in"
            >
              <div className="card h-100">
                <img
                  src={mis}
                  alt="Mission"
                  className="card-img-top img-fluid col-lg-12"
                />
                <div className="card-img-overlay px-3 py-3 d-flex row col-lg-12 justify-content-center  font-weight-500">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-9 visionmission  ">
                    <h4
                      className="text py-md-0 fw-bold mt-lg-5"
                      style={{ color: "tomato" }}
                    >
                      Mission
                    </h4>
                    <p className="card-text text-white ">
                      Partnering with Government Agencies, Corporates,
                      Institutions, NGOs and Individuals to instill a sense of
                      belonging in addressing the citizen-centric needs of our
                      Great Nation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our service */}
      <section className="services py-lg-5">
        <div className="container ">
          <h1
            className="text-center text-white servicepage pb-lg-5"
            data-aos="zoom-in"
          >
            Our Services
          </h1>
          <div className="row pb-3">
            <div className="col-lg-4 mb-3 h-100" data-aos="zoom-in">
              <div
                className="card text-center bg-light py-3 "
                style={{ height: "480px" }}
              >
                <div className="card-body mt-1">
                  <span className="align-center" data-aos="zoom-in">
                    <img
                      src={freeacident}
                      alt="acd"
                      style={{ height: "145px", width: "250px" }}
                    />
                  </span>
                  <h4 className="font-weight-bold mt-2 pb-1" data-aos="zoom-in">
                    Accident Free India
                  </h4>
                  <p className="servicecard" data-aos="zoom-in">
                    "Join our mission for an Accident-Free India. We promote
                    road safety through awareness programs, driver training, and
                    outreach initiatives. Together, we can create safer roads &
                    save lives. Drive responsibly, stay alert, and achieve zero
                    accidents. "
                  </p>
                  {/* <a class="icon-link icon-link-hover" href="">
                                        learn more<BiRightArrowAlt /> */}
                  {/* </a> */}
                  <Link
                    to="/freeIndia"
                    class="icon-link icon-link-hover mb-2"
                    data-aos="zoom-in"
                  >
                    learn more
                    <BiRightArrowAlt />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3 h-auto" data-aos="zoom-in">
              <div
                className="card text-center bg-light py-3"
                style={{ height: "480px" }}
              >
                <div className="cardbody mb-2">
                  <span className="align-center" data-aos="zoom-in">
                    <img
                      src={TrashFreeKanyakumari}
                      alt="trash"
                      style={{ height: "177px", width: "250px" }}
                    />
                  </span>
                  <h4 className="font-weight-bold mb-3" data-aos="zoom-in">
                    Trash Free KanyaKumari
                  </h4>
                  <p className="servicecard" data-aos="zoom-in">
                    "Join Trash Free Kanyakumari to preserve our beaches through
                    clean-ups and recycling. Let's foster a cleaner environment
                    and promote sustainable practices. Join us today to make a
                    lasting impact and create a more beautiful, sustainable
                    Kanyakumari for all to enjoy."
                  </p>
                  {/* <a class="icon-link icon-link-hover mb-2 " href="#">
                                        learn more<BiRightArrowAlt />
                                        </a> */}
                  <Link
                    to="/freeKk"
                    class="icon-link icon-link-hover mb-3"
                    data-aos="zoom-in"
                  >
                    learn more
                    <BiRightArrowAlt />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3 " data-aos="zoom-in">
              <div
                className="card text-center bg-light  py-3"
                style={{ height: "480px" }}
              >
                <div className="cardbody mb-2 ">
                  <span className="align-center" data-aos="zoom-in">
                    <img
                      src={family}
                      alt="oneca"
                      style={{ height: "176px", width: "250px" }}
                    />
                  </span>
                  <h4 className="font-weight-bold pb-2" data-aos="zoom-in">
                    One Village One CA
                  </h4>
                  <p className="servicecard" data-aos="zoom-in">
                    "At OneVillage One CA, we provide comprehensive IT services
                    tailored to your needs. From network management and
                    cybersecurity to cloud solutions and IT support, our expert
                    team ensures your technology runs smoothly and efficiently.
                    Trust us to keep your business secure."{" "}
                  </p>
                  {/* <a class="icon-link icon-link-hover mb-2" href="#">
                                        learn more<BiRightArrowAlt />
                                    </a> */}
                  <Link
                    to="/oneCa"
                    class="icon-link icon-link-hover mb-3"
                    data-aos="zoom-in"
                  >
                    learn more
                    <BiRightArrowAlt />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3" data-aos="zoom-in">
              <div
                className="card text-center bg-light py-3"
                style={{ height: "480px" }}
              >
                <div className="cardbody">
                  <span className="align-center" data-aos="zoom-in">
                    <img
                      src={Entepreneur}
                      alt="enp"
                      style={{ height: "175px", width: "250px" }}
                    />
                  </span>
                  <h4 className="font-weight-bold pb-2" data-aos="zoom-in">
                    One Family One Entrepreneur
                  </h4>
                  <p className="servicecard" data-aos="zoom-in">
                    "At One Family One Entrepreneur, we offer tailored services
                    to support your entrepreneurial journey. From business
                    planning and marketing strategies to financial guidance and
                    growth solutions, our dedicated team provides the tools and
                    expertise you need to succeed. Let us help you turn your
                    vision into reality."
                  </p>
                  {/* <a class="icon-link icon-link-hover mb-3" href="#">
                                        learn more<BiRightArrowAlt />
                                    </a> */}
                  <Link
                    to="/oneFamily"
                    class="icon-link icon-link-hover mb-3"
                    data-aos="zoom-in"
                  >
                    learn more
                    <BiRightArrowAlt />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3" data-aos="zoom-in">
              <div
                className="card text-center bg-light py-3"
                style={{ height: "480px" }}
              >
                <div className="cardbody">
                  <span className="align-center" data-aos="zoom-in">
                    <img
                      src={women}
                      alt="women"
                      style={{ height: "175px", width: "250px" }}
                    />
                  </span>
                  <h4 className="font-weight-bold pb-2" data-aos="zoom-in">
                    Women's Empowerment
                  </h4>
                  <p className="servicecard" data-aos="zoom-in">
                    "Empower women to achieve their potential through education,
                    skills training, and leadership opportunities. Our programs
                    promote gender equality, independence, and justice. Join us
                    in creating a world where every woman thrives and
                    contributes to a brighter, equitable future. Get involved
                    and make a difference."
                  </p>
                  {/* <a class="icon-link icon-link-hover mb-3" href="#">
                                        learn more<BiRightArrowAlt />
                                    </a> */}
                  <Link
                    to="/womenep"
                    class="icon-link icon-link-hover mb-3"
                    data-aos="zoom-in"
                  >
                    learn more
                    <BiRightArrowAlt />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3" data-aos="zoom-in">
              <div
                className="card text-center bg-light py-3"
                style={{ height: "480px" }}
              >
                <div className="cardbody">
                  <span className="align-center" data-aos="zoom-in">
                    <img
                      src={save}
                      alt="save"
                      style={{ height: "175px", width: "250px" }}
                    />
                  </span>
                  <h4 className="font-weight-bold pb-2" data-aos="zoom-in">
                    Save Earth Kanyakumari
                  </h4>
                  <p className="servicecard" data-aos="zoom-in">
                    "Support communities in Kanyakumari to protect our
                    environment through educational programs, sustainable
                    solutions, and advocacy. Our services focus on promoting
                    environmental stewardship, resource conservation, and
                    community involvement. Participate in our mission to create
                    a healthier, more sustainable environment for future
                    generations."
                  </p>
                  {/* <a class="icon-link icon-link-hover mb-3" href="#">
                                        learn more<BiRightArrowAlt />
                                    </a> */}
                  <Link
                    to="/saveEarth"
                    class="icon-link icon-link-hover mb-3"
                    data-aos="zoom-in"
                  >
                    learn more
                    <BiRightArrowAlt />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our partners */}
      <section className=" bg-white">
        <div className="col-md-12 mt-md-0  " data-aos="zoom-in">
          <div className="our-part ">
            <h4 className="pt-4 text-center text-dark" data-aos="zoom-in">
              Our Partners
            </h4>
            <div className="partners-container">
              <div className="partners d-flex p-2 gap-2">
                {partners.concat(partners).map((partner, index) => (
                  <Partner
                    key={index}
                    src={partner.src}
                    name={partner.name}
                    style={partner.style}
                    totalEvents={partner.totalEvents}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our team */}
      <section id="team" className="section-padding py-5 px-3 ">
        <div className="container">
          <div className="row col-12 my-lg-3 gap-5" data-aos="zoom-in">
            <div className="col-lg-5 mx-auto my-lg-auto">
              <h1 className="ourteamH text-secondary" data-aos="zoom-in">
                Our <span className="">Team</span>{" "}
              </h1>
            </div>
            <div className="col-lg-6 mx-auto" data-aos="zoom-in">
              <div className="team mx-auto">
                <div className="teamicon">
                  {teamMembers.map((member, index) => (
                    <div
                      key={member.id}
                      className={`imgBx ${
                        index === activeIndex ? "active" : ""
                      }`}
                      style={{ "--i": index + 1 }}
                      data-id={member.id}
                      onMouseOver={() => handleMouseOver(index)}
                    >
                      <img src={member.imgSrc} alt={`team ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <div className="teamcontent">
                  {teamMembers.map((member, index) => (
                    <div
                      key={member.id}
                      className={`contentBx ${
                        index === activeIndex ? "active" : ""
                      }`}
                      id={member.id}
                    >
                      <div className="teamcard">
                        <div className="imgBx">
                          <img src={member.imgSrc} alt={`team${index + 1}`} />
                        </div>
                        <div className="textBx">
                          <h2>
                            {member.name}
                            <br />
                            <span>{member.title}</span>
                          </h2>
                          <p>{member.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* volunteer */}
      <section className="volt bg-cover p-5">
        <div className="overlay"></div>
        <div className="container text-white text-center" data-aos="zoom-in">
          <h2>Join Our Volunteers Team</h2>
          <p>
            Join our team of volunteers and experience new things, discover
            <br /> and develop your skills, share your talents and abilities.
          </p>
          <a
            href="/volunteer"
            className="btn btn-outline-warning Now rounded-pill"
            role="button"
          >
            Become A Volunteer
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
