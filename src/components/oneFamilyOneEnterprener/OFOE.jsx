import React from "react";
import entrepreneur from "../images/schemes/entrepreneur5.jpg";
import entrepreneur1 from "../images/schemes/entrepreneur-Photoroom.png";
import entrepreneur2 from "../images/schemes/entrepreneur1.jpg";
// import oneFamily from '../images/banner5.jpg'
import NavBar from "../shared/Navbar";
import Footer from "../shared/Footer";

const OFOE = () => {
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
              <img src={entrepreneur} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  One Family
                  <br />
                  <span>One Entrepreneur</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about section */}
      <section id="about" className="about section-padding py-0 bg-white">
        <div className="container">
          <div className="row">
            <h2
              className="text-invisible text-center p-lg-0 m-lg-0"
              data-aos="zoom-in"
            >
              <span>One Family</span> One Entrepreneur
            </h2>
            <div className="col-lg-4 col-md-12 col-12 mt-md-5">
              <div className="about-img" data-aos="zoom-in">
                <img
                  src={entrepreneur1}
                  alt="FounderImage"
                  className="img-fluid"
                  data-aos="zoom-in"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text">
                <h2 className="text-visible" data-aos="zoom-in">
                  <span style={{ color: "rgb(0, 255, 115)" }}>One Family </span>{" "}
                  One Entrepreneur
                </h2>
                <p data-aos="zoom-in">
                  <strong>
                    The Founder of AJM Foundation, CA A John Moris, is a
                    first-generation Chartered Accountant from a village in
                    Kanyakumari district. He has grown to manage A John Moris &
                    Co., a renowned CA Partnership firm in the country with its
                    24 branches spread across the country and with 30 qualified
                    CA Partners. His extensive experience of over 30 years in
                    the field positions him well to understand and appreciate
                    the importance of the profession of Chartered Accountant.
                  </strong>
                </p>
                <p data-aos="zoom-in">
                  India is currently the world’s second-largest country in
                  population and has the distinction of having the world’s
                  largest number of poor people living in a single country.
                  India lives in villages, with the number of villages ranging
                  from 600,000 to one million according to various government
                  databases. Approximately 68 to 70% of the population resides
                  in rural India.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="about-text" data-aos="zoom-in">
                <p data-aos="zoom-in">
                  Around 27.5% of the Indian population still lives below the
                  poverty line, with 75% of this population residing in rural
                  areas. 77% of Indians live on a daily income of Rs.20 only.
                  Women constitute half of the world’s population yet represent
                  a staggering 70% of the world’s poor. In developing countries,
                  a girl or woman dies every minute during childbirth. About
                  two-thirds of India’s more than 1 billion people live in rural
                  areas, with around 170 million of them being poor. Poverty is
                  most severe among the Scheduled Castes and Scheduled Tribes in
                  rural areas. The poorest regions include Rajasthan, MP, UP,
                  Jharkhand, Chhattisgarh, Orissa, and West Bengal, primarily
                  due to water shortages and frequent droughts. 50% of rural
                  residents leave school before the fifth grade, and 60% of
                  females in India are illiterate. Rural families are typically
                  large, with more members per household.
                </p>
                <p data-aos="zoom-in">
                  Considering these demographic factors, AJM Foundation believes
                  that ensuring financial services even to the poorest
                  individuals and recognizing every person as a potential
                  entrepreneur is crucial for improving poverty and economic
                  independence in villages. This approach is seen as the best
                  option to drive India forward in the global development arena.
                </p>
                <p data-aos="zoom-in">
                  In this context, the concepts of One Village One CA and One
                  Family One Entrepreneur proposed by our foundation gain
                  significant importance and support from Indian citizens. In
                  developed countries, there is one CA for every 450 citizens,
                  whereas in India, the current ratio is one CA for every 4500
                  citizens. This substantial gap needs to be addressed to
                  prevent a deficit of CAs in the Indian economy. Promoting the
                  One CA One Village and One Family One Entrepreneur programs
                  can significantly develop rural residents and improve the
                  Indian economy and youth empowerment by nurturing
                  professionals and entrepreneurs, particularly in poor, rural,
                  and underdeveloped areas where poverty is prominent due to
                  lack of education, development, and minimal infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Strategy section */}
      <section id="about" className="about section-padding py-0 bg-light">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="about-text">
                <h2 className="text-success" data-aos="zoom-in">
                  <span>STRATEGY</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12 mt-lg-4 order-md-1 order-lg-2">
              <div className="about-img" data-aos="zoom-in">
                <img
                  data-aos="zoom-in"
                  src={entrepreneur2}
                  alt="StrategyImage"
                  className="img-fluid"
                  height="320px"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 order-md-2 order-lg-1">
              <div className="about-text">
                <h3 data-aos="zoom-in" style={{ color: "rgb(0, 255, 115)" }}>
                  Creating awareness of the Profession of Chartered Accountancy
                  among the student generation at schools and colleges:
                </h3>
                <p data-aos="zoom-in">
                  We regularly interact with students and their institutional
                  authorities and maintain constant contact with the Institute
                  of Chartered Accountants of India. Our firm has conducted
                  numerous career counseling programs at various schools in
                  Kanyakumari District and Chennai. We are running a program in
                  Marthandam, Kanyakumari district, where 25 underprivileged
                  students are pursuing CA studies.
                </p>
                <p data-aos="zoom-in">
                  We have brought this cause to the attention of the Government
                  of Tamil Nadu and the Institute of Chartered Accountants of
                  India. As a result, the Government of Tamil Nadu has organized
                  training for 25,000 students to pursue the CA course.
                </p>
                <p data-aos="zoom-in">
                  Regarding the One Village One Entrepreneur initiative, our
                  founder's audit firm consistently has around 100 students
                  attending article ship programs across the country. In recent
                  years, approximately 10 to 12 students have passed the CA
                  final exam, and many more have cleared the CA Intermediate and
                  Foundation courses. The training and values imparted by the
                  Foundation are commendable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OFOE;
