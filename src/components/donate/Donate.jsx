import React, { useEffect } from "react";
import donate from "../images/donate.jpg";
import ScrollReveal from "scrollreveal";
// import reCAPTCHA from '../images/reCAPTCHA-1-removebg-preview (1).png'
import Qrcode from "../images/ESAF QRImage crop.jpg";
// import moneyimage from '../images/donate new.jpg'
import "./Donate.css";
// import { Phone } from '@mui/icons-material';
import donate1 from "../images/donate new.jpg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Donate = () => {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "100px",
      duration: 1000,
      delay: 400,
    });

    ScrollReveal().reveal("#about h1", {
      delay: 500,
      origin: "top",
    });

    ScrollReveal().reveal(".col-lg-4.rounded", {
      delay: 1000,
      origin: "left",
    });

    ScrollReveal().reveal(".col-lg-7.rounded", {
      delay: 1500,
      origin: "left",
    });
  }, []);

  return (
    <div>
      <ToastContainer />
      <NavBar />
      {/* Hero section */}
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
              <img src={donate} className="d-block w-100" alt="Donate" />
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

      {/* Donate section */}
      <section className="pb-5 " id="background-section">
        <div>
          <h1
            className="text-center text-white  text-dark py-4"
            data-aos="zoom-in"
          >
            Donate
          </h1>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 mx-auto donatescroll mb-5 m-0  ">
              <div className="">
                <img
                  className="col-12 w-100 "
                  src={donate1}
                  alt="noimage"
                  style={{ height: "500px" }}
                />
              </div>
              <div className="text-center bg-secondary text-white  col-lg-12 col-12 pb-2">
                <h3 className="pt-2">
                  <span style={{ color: "rgb(230, 211, 35)" }}>
                    Bank Details:
                  </span>
                </h3>
                <h5 style={{ fontWeight: 100 }}>
                  <span style={{ color: "white" }}>A/c NAME : </span> AJM
                  FOUNDATION
                </h5>
                <h5 style={{ fontWeight: 100 }}>
                  <span style={{ color: "rgb(239, 236, 236)" }}>BANK: </span>{" "}
                  AXIS BANK
                </h5>
                <h5 style={{ fontWeight: 100 }}>
                  <span style={{ color: "rgb(251, 247, 245)" }}>Branch: </span>{" "}
                  ANNASALAI, CHENNAI
                </h5>
                <h5 style={{ fontWeight: 100 }}>
                  <span style={{ color: "rgb(247, 242, 242)" }}>
                    ACCOUNT NUMBER:{" "}
                  </span>{" "}
                  918020067708284
                </h5>
                <h5 style={{ fontWeight: 100, paddingBottom: 0 }}>
                  <span style={{ color: "rgb(253, 251, 251)" }}>
                    IFSC CODE:{" "}
                  </span>{" "}
                  UTIB0000168
                </h5>
              </div>
            </div>
            <div className="col-lg-4 donatescroll1 mx-auto ">
              <div>
                <img
                  src={Qrcode}
                  alt="QR Code"
                  className="col-12 w-100 "
                  style={{ height: "500px" }}
                  data-aos="zoom-in"
                />
              </div>
              <div className="text-center text-white bg-secondary col-lg-12 pb-2">
                <h3 className="pt-2">
                  <span style={{ color: "rgb(230, 211, 35)" }}>
                    Bank Details:
                  </span>
                </h3>
                <h5 style={{ fontWeight: 100 }}>
                  <span style={{ color: "white" }}>A/c NAME : </span> AJM
                  FOUNDATION
                </h5>
                <h5 style={{ fontWeight: 100 }}>
                  <span style={{ color: "rgb(239, 236, 236)" }}>BANK: </span>{" "}
                  ESAF SMALL FINANCE BANK
                </h5>
                <h5 style={{ fontWeight: 100 }}>
                  <span style={{ color: "rgb(251, 247, 245)" }}>Branch: </span>{" "}
                  NAGERCOIL
                </h5>
                <h5 style={{ fontWeight: 100 }}>
                  <span style={{ color: "rgb(247, 242, 242)" }}>
                    ACCOUNT NUMBER:{" "}
                  </span>{" "}
                  50220006185082
                </h5>
                <h5 style={{ fontWeight: 100, paddingBottom: 0 }}>
                  <span style={{ color: "rgb(253, 251, 251)" }}>
                    IFSC CODE:{" "}
                  </span>{" "}
                  ESMF0001382
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Donate;
