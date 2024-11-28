import React from "react";
import partners from "../images/Partner-With-Us.png";
import scheme1 from "../images/schemes/actfree1.png";
import scheme2 from "../images/schemes/enp.png";
import scheme3 from "../images/schemes/family.png";
import scheme4 from "../images/schemes/trashfree.jpg";
import scheme5 from "../images/schemes/wepfree.png";
import scheme6 from "../images/SEK_images_11-removebg-preview.png";
// import partner1 from '../images/our-partners/1.png'
import partner2 from "../images/our-partners/2.png";
// import partner3 from '../images/our-partners/3.png'
import partner4 from "../images/our-partners/4.png";
import partner5 from "../images/our-partners/5.png";
import partner6 from "../images/our-partners/6.png";
import partner7 from "../images/our-partners/7.png";
import partner8 from "../images/our-partners/8.png";
import partner9 from "../images/our-partners/9.png";
import partner10 from "../images/our-partners/Enterkey-foundation-logo.png";
import partner11 from "../images/our-partners/SART-logo.png";
import NavBar from "../shared/Navbar";
import Footer from "../shared/Footer";

const PartnersWithUs = () => {
  return (
    <div>
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
              <img src={partners} className="d-block w-100" alt="..." />
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
      {/* about section */}
      <section className="bg-light p-md-5 p-3 mx-auto">
        <h3 className="text-center text-dark " data-aos="zoom-in">
          Why become a AJMF partner?
        </h3>

        <p className="text-center " data-aos="zoom-in">
          Becoming a partner with the AJM Foundation Charity is a transformative
          opportunity to make a meaningful impact. As a partner, you will
          contribute to life-changing initiatives, supporting vulnerable
          communities and fostering sustainable development. Your collaboration
          will enable us to expand our reach, amplify our efforts, and deliver
          critical resources where they are needed most. Together, we can create
          a ripple effect of positive change, addressing pressing issues such as
          poverty, education, and healthcare. Join us in our mission to build a
          better future, demonstrating your commitment to social responsibility
          and making a lasting difference in the lives of those in need.
        </p>
        <div className="container" data-aos="zoom-in">
          <h3 className="text-center" data-aos="fade-down">
            Our Schemes
          </h3>
          <div className="row text-center">
            {[
              { src: scheme1, alt: "AFI", text: '"Make India Accident-Free"' },
              { src: scheme3, alt: "AFI", text: '"One Village One CA"' },
              {
                src: scheme2,
                alt: "AFI",
                text: '"One Family One Entrepreneur"',
              },
              { src: scheme4, alt: "AFI", text: '"Trash Free Kanyakumari"' },
              { src: scheme5, alt: "AFI", text: '"Women Empowerment"' },
              { src: scheme6, alt: "AFI", text: '"Save Earth Kanyakumari"' },
            ].map((scheme, index) => (
              <div className="col-md-4 my-3" key={index} data-aos="zoom-in">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="mx-auto"
                    src={scheme.src}
                    alt={scheme.alt}
                    style={{ width: "88%", height: "250px" }}
                  />
                  <h4 className="mt-3" data-aos="zoom-in">
                    {scheme.text}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="d-grid col-lg-3 mx-auto my-2">
            <a className="mx-auto" href="/volunteer">
              <button
                type="button"
                className="btn btn-outline-primary rounded-pill "
              >
                I want to become an AJMF Partner
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* our partner */}
      <section className="p-md-5 p-3 text-center bg-white">
        <div className="container mb-3">
          <h3 data-aos="zoom-in">Our Partners</h3>
          <div className="row" data-aos="zoom-in">
            {[
              partner11,
              partner2,
              partner10,
              partner4,
              partner5,
              partner6,
              partner7,
              partner8,
              partner9,
              // Add other partner variables here as needed
            ].map((partner, index) => (
              <div className="col-12 col-md-12 col-lg-4 my-3" key={index}>
                <div
                  className="card part pb-2 rounded-pill"
                  style={{ height: "170px" }}
                  data-aos="zoom-in"
                >
                  <div
                    className="card-body p-2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={partner}
                      alt={`Partner ${index + 1}`}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* content section */}
      <section className="bg-light text-center p-5">
        <div className="container">
          <h3 data-aos="zoom-in">Become a AJMF partner</h3>
          <p data-aos="zoom-in">
            Ready to get started?Get in touch today to schedule a call.We
            <br />
            can discuss all avaiable partner options and get to know your
            <br />
            business and client needs better.
          </p>
          <div className="d-grid col-md-2 mx-auto mt-2" data-aos="zoom-in">
            <a href="/volunteer">
              <button
                type="button"
                className="btn btn-outline-primary rounded-pill"
              >
                Become a Partner
              </button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default PartnersWithUs;
