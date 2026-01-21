import React, { useEffect } from "react";
import donate from "../images/donate.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import Qrcode from "../images/ESAF QRImage crop.jpg";
import "./Donate.css";
import donate1 from "../images/donate new.jpg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Donate = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    AOS.refresh();
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
            </div>
          </div>
        </div>
      </section>

      {/* Donate section */}
      <section className="pb-5" id="background-section">
        <h1
          className="text-center text-white text-dark py-4"
          data-aos="zoom-in"
        >
          Donate
        </h1>

        <div className="container">
          <div className="row">
            {/* Bank Details 1 */}
            <div
              className="col-lg-4 mx-auto donatescroll mb-5 m-0"
              data-aos="fade-right"
            >
              <img
                className="w-100"
                src={donate1}
                alt="Donate"
                style={{ height: "500px" }}
              />

              <div className="text-center bg-secondary text-white pb-2">
                <h3 className="pt-2">
                  <span style={{ color: "rgb(230, 211, 35)" }}>
                    Bank Details:
                  </span>
                </h3>
                <h5>
                  <span>A/c NAME:</span> AJM FOUNDATION
                </h5>
                <h5>
                  <span>BANK:</span> AXIS BANK
                </h5>
                <h5>
                  <span>Branch:</span> ANNASALAI, CHENNAI
                </h5>
                <h5>
                  <span>ACCOUNT NUMBER:</span> 918020067708284
                </h5>
                <h5>
                  <span>IFSC CODE:</span> UTIB0000168
                </h5>
              </div>
            </div>

            {/* Bank Details 2 */}
            <div
              className="col-lg-4 donatescroll1 mx-auto"
              data-aos="fade-left"
            >
              <img
                src={Qrcode}
                alt="QR Code"
                className="w-100"
                style={{ height: "500px" }}
                data-aos="zoom-in"
              />

              <div className="text-center text-white bg-secondary pb-2">
                <h3 className="pt-2">
                  <span style={{ color: "rgb(230, 211, 35)" }}>
                    Bank Details:
                  </span>
                </h3>
                <h5>
                  <span>A/c NAME:</span> AJM FOUNDATION
                </h5>
                <h5>
                  <span>BANK:</span> ESAF SMALL FINANCE BANK
                </h5>
                <h5>
                  <span>Branch:</span> NAGERCOIL
                </h5>
                <h5>
                  <span>ACCOUNT NUMBER:</span> 50220006185082
                </h5>
                <h5>
                  <span>IFSC CODE:</span> ESMF0001382
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
