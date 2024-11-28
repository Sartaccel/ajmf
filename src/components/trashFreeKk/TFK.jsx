import React from "react";
import freekk from "../images/trashfree kanyakumari 1.png";
import tfk from "../images/tfree1.jpg";
import tfk1 from "../images/tfree1.png";
import tfk2 from "../images/tfree2.png";
import NavBar from "../shared/Navbar";
import Footer from "../shared/Footer";

const TFK = () => {
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
              <img src={freekk} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  Trash Free
                  <br />
                  <span>KanyaKumari</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About section */}
      <section id="about" className="about section-padding py-0 my-0 bg-white">
        <div className="container">
          <div className="row">
            <h2
              className="text-invisible text-center p-lg-0 m-lg-0"
              data-aos="zoom-in"
            >
              <span>TRASH FREE</span> KANYAKUMARI
            </h2>
            <div className="col-lg-4 col-md-12 my-lg-5 pt-lg-5">
              <div className="about-img" data-aos="zoom-in">
                <img
                  src={tfk}
                  alt="Trash Free Kanyakumari"
                  className="img-fluid rounded"
                  data-aos="zoom-in"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 ps-lg-5 my-lg-5">
              <h2 className="text-visible text-success" data-aos="zoom-in">
                <span>TRASH FREE</span> KANYAKUMARI
              </h2>
              <div className="about-text">
                <p className="font-weight-bold" data-aos="zoom-in">
                  Globally, improper waste management poses significant
                  environmental, health, and economic challenges. Every year,
                  millions of tons of waste end up in landfills, oceans, and
                  public spaces, causing severe pollution and affecting the
                  quality of life for communities worldwide. According to the
                  World Bank, global waste generation is expected to increase by
                  70% by 2050 unless urgent actions are taken.
                </p>
                <p data-aos="zoom-in">
                  In India, Kanyakumari faces a significant waste management
                  challenge. Known for its beautiful landscapes and tourist
                  attractions, the district is often marred by litter and
                  unmanaged waste. This not only detracts from its natural
                  beauty but also poses health risks to residents and visitors.
                  The problem is exacerbated by the lack of effective waste
                  disposal systems and public awareness about the importance of
                  proper waste management.
                </p>
                <p data-aos="zoom-in">
                  The AJM Foundation, recognizing the critical need for
                  intervention, has launched the “Trash Free Kanyakumari”
                  initiative. This project aims to create a sustainable waste
                  management system in Kanyakumari, promoting cleanliness and
                  environmental stewardship. By focusing on waste reduction,
                  recycling, and public education, we aim to transform
                  Kanyakumari into a model for waste management that can be
                  replicated in other regions.
                </p>
                <p data-aos="zoom-in">
                  Our team has been actively engaging with local communities,
                  government bodies, and environmental organizations to develop
                  and implement effective waste management strategies.
                  Initiatives include setting up recycling centers, organizing
                  clean-up drives, and running educational campaigns to raise
                  awareness about the importance of reducing, reusing, and
                  recycling waste.
                </p>
                <p data-aos="zoom-in">
                  Through our efforts, we have been able to mobilize volunteers
                  and local stakeholders to take part in regular clean-up
                  activities and to adopt sustainable practices in their daily
                  lives. Our educational programs in schools and colleges
                  emphasize the significance of waste segregation and
                  responsible disposal, fostering a culture of environmental
                  responsibility among the younger generation.
                </p>
                <p data-aos="zoom-in">
                  With the success of the pilot project in Kanyakumari, we plan
                  to extend the “Trash Free” initiative to other districts and
                  states, ultimately aiming for a cleaner, greener India. By
                  working together, we can ensure that Kanyakumari remains a
                  pristine destination for generations to come and set an
                  example for the rest of the country to follow.
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
                  src={tfk1}
                  alt="Trash Free Kanyakumari"
                  className="img-fluid rounded"
                  data-aos="zoom-in"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 ps-lg-5 order-md-2 order-lg-1">
              <div className="about-text">
                <ul className="list-unstyled">
                  <li className="mb-3" data-aos="zoom-in">
                    1. Conduct thorough research on current waste management
                    practices and identify key areas for improvement.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    2. Develop educational programs in schools and communities
                    to raise awareness about the importance of waste
                    segregation, recycling, and reducing waste.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    3. Collaborate with local authorities and organizations to
                    establish effective waste collection and disposal systems.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    4. Organize community clean-up drives and campaigns to
                    promote active participation in keeping Kanyakumari clean.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    5. Implement recycling programs and set up recycling centers
                    to encourage the community to recycle waste materials.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 my-5">
              <div className="about-img">
                <img
                  src={tfk2}
                  alt="Trash Free Kanyakumari"
                  className="img-fluid rounded"
                  data-aos="zoom-in"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 ps-lg-5">
              <div className="about-text">
                <ul className="list-unstyled">
                  <li className="mb-3" data-aos="zoom-in">
                    6. Engage with the corporate sector to secure funding and
                    support for waste management initiatives through Corporate
                    Social Responsibility (CSR) programs.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    7. Work with government agencies to ensure policies and
                    programs that support effective waste management are
                    implemented and maintained.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    8. Establish community support groups to foster a culture of
                    environmental responsibility and provide mutual support for
                    waste management efforts.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    9. Organize public events and campaigns to raise awareness
                    about the importance of a clean environment and celebrate
                    the achievements of the community in maintaining
                    cleanliness.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    10. Collaborate with tech companies and startups to develop
                    and implement innovative solutions for efficient waste
                    management, such as smart bins, recycling technologies, and
                    waste tracking systems.{" "}
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    11. Partner with schools, universities, and local
                    organizations to create educational programs that teach the
                    importance of waste management, recycling, and environmental
                    stewardship, empowering the next generation to take action.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    12. Provide infrastructure and resources, such as waste
                    bins, composting facilities, and educational materials, to
                    support the community in managing waste effectively.
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
                <span>PILOT PROGRAM IN KANYAKUMARI</span>
              </h2>
              <p data-aos="zoom-in">
                AJM Foundation has initiated a pilot program for achieving a
                Trash Free Kanyakumari, focusing on this culturally and
                ecologically significant region. Kanyakumari, known for its
                natural beauty and spiritual heritage, faces challenges related
                to waste management that threaten its environment and tourist
                appeal.
              </p>
              <p data-aos="zoom-in">
                The pilot program is designed to implement sustainable waste
                management practices across urban and rural areas of
                Kanyakumari. By partnering with local communities, governmental
                bodies, and environmental organizations, we aim to create
                effective models that can be replicated in other regions facing
                similar challenges.
              </p>
              <p data-aos="zoom-in">
                Key strategies include community engagement initiatives,
                educational campaigns, and infrastructure development to promote
                waste segregation, recycling, and proper disposal. We will
                collaborate with local businesses, schools, and civic groups to
                ensure widespread participation and ownership of the initiative.
              </p>
              <p data-aos="zoom-in">
                Educational workshops and public awareness events will play a
                crucial role in empowering residents and visitors alike to take
                proactive steps towards a cleaner Kanyakumari. By fostering a
                culture of environmental responsibility and community pride, we
                envision a Trash Free Kanyakumari that serves as a model for
                sustainable tourism and ecological conservation.
              </p>
              <p data-aos="zoom-in">
                The success of this pilot program will be evaluated through
                measurable outcomes in waste reduction, community participation,
                and environmental impact. Awards and recognition will be given
                to individuals and organizations demonstrating exceptional
                commitment and innovation in waste management practices.
              </p>
              <p data-aos="zoom-in">
                Through this initiative, AJM Foundation aims to set a precedent
                for sustainable development in Kanyakumari and inspire similar
                efforts worldwide. By showcasing the benefits of a Trash Free
                Kanyakumari, we aspire to contribute to global efforts towards
                cleaner environments and sustainable living.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TFK;
