/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import contact from "../images/contact.png";
import "./contact.css";
// import { CiLocationOn } from "react-icons/ci";
// import { MdOutlinePhoneInTalk } from "react-icons/md";
// import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import whatsapp from "../images/contact/Animation - 1726728308300.gif";
import email from "../images/contact/Animation - 1726728386881.gif";
import NavBar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "871144ab-4768-4f73-bfc7-9019872f4174");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      console.log("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <NavBar />
      {/* Hero Section */}
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
              <img src={contact} className="d-block w-100" alt="..." />
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

      {/* About Section */}
      <div className="col-lg-10 mx-auto py-5 conabt">
        <div
          className="row mx-auto px-0 border shadow-sm bg-body-tertiary rounded"
          data-aos="zoom-in"
        >
          {/* Contact Methods */}
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center bg-white p-3">
            {/* <div className="ring"></div> */}
            <div className="col mb-4 text-center">
              <Link
                to="https://wa.me/+919790179914"
                target="_blank"
                className="text-decoration-none"
              >
                <img
                  src={whatsapp}
                  alt="WhatsApp Icon"
                  width={100}
                  height={100}
                  data-aos="zoom-in"
                />
                <h3 className="mt-2">Contact via WhatsApp</h3>
              </Link>
              <p>
                For quick support or to connect with us directly, reach us on
                WhatsApp.
              </p>
            </div>

            <div className="col text-center">
              <Link
                to="mailto:ajmfoundation@gmail.com"
                className="text-decoration-none"
              >
                <img
                  src={email}
                  alt="Email"
                  width={100}
                  height={100}
                  data-aos="zoom-in"
                />
                <h3 className="mt-2">Send us an Email</h3>
              </Link>
              <p>
                Email us, and we’ll respond promptly with the information you
                need.
              </p>
            </div>
          </div>

          {/* Office Addresses */}
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center offadd p-3">
            <div className="cle one"></div>
            <div className="cle two"></div>
            <div className="cle three"></div>
            <div className="cle four"></div>
            <h3 className="text-center" style={{ color: "#F03083" }}>
              Contact Information
            </h3>

            <h4 className="mt-3">Head Office</h4>
            <address className="text-center">
              No-17/9, Lakshmipuram Main Street,
              <br />
              Royapettah, Chennai - 600 014.
              <br />
              Tel: 044 - 2811 6003
              <br />
              Email:{" "}
              <Link
                to="mailto:ajmfoundation@gmail.com"
                className="text-decoration-none text-white"
              >
                ajmfoundation@gmail.com
              </Link>
            </address>

            <h4 className="mt-3">Camp Office</h4>
            <address className="text-center">
              4th floor, St. Xavior Building,
              <br />
              PWD Road, Nagercoil - 629 001.
              <br />
              Tel: 044 - 2811 6003
              <br />
              Email:{" "}
              <Link
                to="mailto:nagercoil@ajohnmoris.com"
                className="text-decoration-none text-white"
              >
                nagercoil@ajohnmoris.com
              </Link>
            </address>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
