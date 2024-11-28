import React from "react";
import womenep from "../images/pexels-photo-1367276.jpeg";
import wep1 from "../images/wep1.jpg";
import wep2 from "../images/wep1.png";
import wep3 from "../images/wep2.png";
import NavBar from "../shared/Navbar";
import Footer from "../shared/Footer";

const WEP = () => {
  return (
    <>
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
              <img src={womenep} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: "red" }}>
                  Women
                  <br />
                  <span style={{ color: "red" }}>Empowerment </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about section */}
      <section
        id="women-empowerment"
        className="women-empowerment section-padding py-0 my-0 bg-white"
      >
        <div className="container">
          <div className="row">
            <h2
              className="text-invisible text-center p-lg-0 m-lg-0"
              data-aos="zoom-in"
            >
              <span>WOMEN</span> EMPOWERMENT
            </h2>
            <div className="col-lg-4 col-md-12 my-lg-5">
              <div className="women-empowerment-img">
                <img
                  src={wep1}
                  alt="Women Empowerment"
                  className="img-fluid rounded"
                  data-aos="zoom-in"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 ps-lg-5">
              <h2 data-aos="zoom-in" className="text-visible text-success">
                <span>WOMEN</span> EMPOWERMENT
              </h2>
              <div className="women-empowerment-text">
                <p data-aos="zoom-in" className="font-weight-bold">
                  Women empowerment is a critical aspect of achieving gender
                  equality, which includes the ability of women to make
                  strategic life choices that were previously denied to them.
                  Empowering women is essential for the health and social
                  development of families, communities, and countries. When
                  women are living safe, fulfilled, and productive lives, they
                  can reach their full potential, contributing their skills to
                  the workforce and raising happier and healthier children.
                </p>
                <p data-aos="zoom-in">
                  In many parts of the world, women continue to face
                  discrimination and barriers to equal participation in society.
                  Gender inequality has severe economic and social consequences.
                  The World Economic Forum's Global Gender Gap Report 2020
                  highlighted that the global gender gap will take another 99.5
                  years to close if the current rate of progress continues.
                  Women’s economic empowerment is central to realizing women’s
                  rights and gender equality.
                </p>
                <p data-aos="zoom-in">
                  In India, women have made significant strides in various
                  fields; however, challenges remain. According to the National
                  Sample Survey Office (NSSO), women's participation in the
                  workforce is only 23.3%. Social norms, safety concerns, and
                  unequal opportunities continue to hinder their progress.
                  Addressing these challenges requires a multi-faceted approach
                  involving education, legal reforms, and societal changes.
                </p>
                <p data-aos="zoom-in">
                  The AJM Foundation is dedicated to promoting women empowerment
                  through various initiatives. By providing education,
                  vocational training, and entrepreneurship opportunities, we
                  aim to equip women with the necessary skills and knowledge to
                  achieve economic independence. We also work towards creating
                  safe and supportive environments for women to thrive.
                </p>
                <p data-aos="zoom-in">
                  Our projects in Tamil Nadu focus on empowering women through
                  self-help groups, financial literacy programs, and health and
                  wellness campaigns. We collaborate with local governments,
                  NGOs, and community leaders to ensure that our initiatives are
                  sustainable and impactful. Through these efforts, we envision
                  a future where women are empowered to lead, inspire, and
                  contribute to the socio-economic development of their
                  communities and beyond.
                </p>
                <p data-aos="zoom-in">
                  By nurturing the potential of women and girls, we believe we
                  can create a ripple effect that benefits entire families and
                  communities. We invite you to join us in this mission to
                  empower women and build a more equitable and just society.
                  Together, we can make a difference and pave the way for a
                  brighter, more inclusive future for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Strategy section */}
      <section className="bg-light">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-8 col-md-12 ps-lg-5">
              <div className="about-text">
                <h2 className="text-success" data-aos="zoom-in">
                  <span>STRATEGY</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-3 order-md-1 order-lg-2">
              <div className="about-img">
                <img
                  data-aos="zoom-in"
                  src={wep2}
                  alt="Women Empowerment"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 ps-lg-5 order-md-2 order-lg-1">
              <div className="about-text">
                <ul className="list-unstyled">
                  <li className="mb-3" data-aos="zoom-in">
                    1. Conduct extensive research on the current state of women
                    empowerment, identifying key areas needing intervention.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    2. Develop educational programs in schools and colleges to
                    raise awareness about gender equality and women’s rights,
                    encouraging young minds to champion these causes.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    3. Collaborate with educational institutions to integrate
                    gender studies and women’s rights into their curriculum,
                    fostering a more inclusive environment.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    4. Organize workshops and seminars to promote skill
                    development, entrepreneurship, and financial literacy among
                    women.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    5. Partner with local law enforcement and legal bodies to
                    ensure the safety and security of women, advocating for
                    stricter laws against gender-based violence.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 my-5">
              <div className="about-img">
                <img
                  src={wep3}
                  data-aos="zoom-in"
                  alt="Women Empowerment"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 ps-lg-5">
              <div className="about-text">
                <ul className="list-unstyled">
                  <li className="mb-3" data-aos="zoom-in">
                    6. Engage with the corporate sector to secure funding and
                    support for women empowerment initiatives through Corporate
                    Social Responsibility (CSR) programs.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    7. Work with government agencies to ensure policies and
                    programs that support women’s rights and empowerment are
                    implemented and maintained.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    8. Establish support groups and networks for women to share
                    experiences, provide mentorship, and offer mutual support.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    9. Organize public events and campaigns to raise awareness
                    about women’s issues and celebrate the achievements of women
                    in various fields.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    10. Provide infrastructure and resources, such as community
                    centers and helplines, to support women in need and offer
                    guidance on health, legal, and social services.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pilot Program section */}
      <section className="bg-white">
        <div className="container py-3">
          <div className="row">
            <div className="about-text">
              <h2 className="text-success" data-aos="zoom-in">
                <span>GLOBAL PILOT PROGRAM</span>
              </h2>
              <p data-aos="zoom-in">
                AJM Foundation is launching a global pilot program for women
                empowerment, targeting diverse regions across the world. This
                program is designed to address the unique challenges faced by
                women in various cultural, economic, and social contexts.
              </p>
              <p data-aos="zoom-in">
                The initial focus areas include major cities and rural regions
                known for their cultural and historical significance. These
                locations have been carefully selected to demonstrate the
                effectiveness of our initiatives in different environments. By
                including both urban and rural areas, we aim to create models
                that can be adapted globally.
              </p>
              <p data-aos="zoom-in">
                To advance this global project, the Foundation has crafted a
                comprehensive “Women Empowerment” program. This includes
                partnerships with international educational institutions, NGOs,
                and governmental organizations to identify and support women
                leaders, educators, and entrepreneurs worldwide.
              </p>
              <p data-aos="zoom-in">
                Key components of this program involve educational workshops,
                vocational training, and financial literacy courses aimed at
                equipping women with the skills and confidence needed to achieve
                economic independence. Additionally, we are organizing
                international community events to celebrate and promote gender
                equality and women’s rights.
              </p>
              <p data-aos="zoom-in">
                A significant element of this program is the recognition of
                outstanding contributions to women empowerment. We will honor
                exemplary achievements by individuals and organizations in
                various regions with a specially designed global award.
              </p>
              <p data-aos="zoom-in">
                Award ceremonies will be held in major cities across the globe,
                serving as platforms to showcase success stories and inspire
                broader community participation. These events will mark the
                launch of a worldwide initiative, with plans to expand the
                program to more regions.
              </p>
              <p data-aos="zoom-in">
                This global pilot program aims to create a ripple effect,
                fostering a culture of empowerment and equality worldwide. By
                setting a strong precedent in selected regions, we hope to pave
                the way for other areas to follow, ultimately contributing to a
                more inclusive and equitable world.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WEP;
