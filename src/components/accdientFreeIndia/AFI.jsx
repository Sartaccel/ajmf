import React from "react";
import traffic from "../images/traffic.jpg";
import img1 from "../images/highway.jpg";
import img2 from "../images/highwayr.jpg";
import img3 from "../images/highwayl.jpg";
import Footer from "../shared/Footer";
import NavBar from "../shared/Navbar";

const AFI = () => {
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
              <img
                src={traffic}
                className="d-block w-100"
                alt="Accident Free India"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  Accident Free
                  <br />
                  <span>India</span>
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
              <span>ACCIDENT FREE</span> INDIA
            </h2>
            <div
              className="col-lg-4 col-md-12 my-lg-5 pt-lg-5"
              data-aos="zoom-in"
            >
              <div className="about-img " data-aos="zoom-in">
                <img
                  src={img1}
                  alt="Accident Free India"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 ps-lg-5 my-lg-5">
              <h2 className="text-visible text-success" data-aos="zoom-in">
                <span>ACCIDENT FREE</span> INDIA
              </h2>
              <div className="about-text" data-aos="zoom-in">
                <p className="font-weight-bold" data-aos="zoom-in">
                  Globally, every year the lives of approximately 1.35 million
                  people are cut short as a result of a road traffic crash.
                  Between 20 and 50 million more people suffer non-fatal
                  injuries, with many incurring a disability as a result of
                  their injury, according to WHO report. Road traffic injuries
                  cause considerable economic losses to individuals, their
                  families, and to nations as a whole. These losses arise from
                  the cost of treatment as well as loss of productivity for
                  those killed or disabled by their injuries, and for family
                  members who need to take time off work or school to care for
                  the injured. Road traffic crashes cost most countries 3% of
                  their Gross Domestic Product (GDP).
                </p>
                <p data-aos="zoom-in">
                  In India, more than 1.3 lakh people died on Indian roads,
                  making India the dubious honor of topping the list of road
                  deaths across the world for long. Until two years ago, the
                  International Road Federation (IRF) placed India second only
                  to China. The situation has worsened and calls for immediate
                  remedial actions. With just 1% of the world's vehicles, India
                  manages to account for 10% of its road fatalities, up from 8%
                  at last count. Not a day passes without Road Traffic Accidents
                  (RTAs) happening on the roads in India in which countless
                  number of people are killed or disabled. Often, members of the
                  whole family are cruelly wiped out. Those who are affected or
                  killed are mostly people in their prime productive age. The
                  highest burden of injuries and fatalities is borne
                  disproportionately by poor people, as they are mostly the
                  pedestrians, motorcyclists, and passengers of buses and
                  minibuses.
                </p>
                <p data-aos="zoom-in">
                  According to the Union Minister of Road, Transport and
                  Highways, Mr. Nitin Gadkari, Indian roads are the most
                  dangerous ones for motorists. As per the government data,
                  almost 1.5 Lakh people lost their lives in road accidents in
                  2017, which translates to 17 deaths every hour due to an
                  accident. Uttar Pradesh is the worst affected state with
                  20,124 people losing their lives in road accidents, followed
                  by Tamil Nadu with 17,701 fatalities as per NCRB report in
                  October, 2019. With this background in mind, AJM Foundation
                  focused on creating an “Accident Free India” was formed and is
                  being pursued in all earnestness ever since inception of AJM
                  Foundation.
                </p>
                <p data-aos="zoom-in">
                  AJM Foundation team has been continuously doing data research
                  in achieving Accident-Free India for the past several years
                  with the support of like-minded people, well-wishers, and the
                  Govt. of Tamilnadu to create a model to implement the Pilot
                  Project “Accident Free India”. Consequently, projects in
                  Chennai and Kanyakumari Districts with the support of Govt. of
                  India and Govt. of Tamilnadu, NGOs, stakeholders, etc., have
                  been initiated.
                </p>
                <p data-aos="zoom-in">
                  For this purpose, the Foundation has been sensitizing young
                  minds by creating awareness in schools and colleges through
                  programs that promote positive values, healthy habits, and
                  road discipline. Being responsible citizens, we all should
                  imbibe the habit of practicing road safety as a way of life
                  through a valuable structured program resulting in creating an
                  ACCIDENT-FREE Kanyakumari and Chennai. After successful
                  implementation at these pilot projects in Kanyakumari and
                  Chennai, the same will be extended to the entire state of
                  Tamilnadu and replicated in other states in the country,
                  leading to an “Accident-Free Tamilnadu” and eventually
                  “Accident-Free INDIA.”
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
            <div className="col-lg-4 col-md-12 mb-2 order-md-1 order-lg-2">
              <div className="about-img" data-aos="zoom-in">
                <img
                  src={img2}
                  alt="Accident Free India"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 ps-lg-5 order-md-2 order-lg-1">
              <div className="about-text">
                <ul className="list-unstyled" data-aos="zoom-in">
                  <li className="mb-3" data-aos="zoom-in">
                    1. The Foundation does extensive research on the data on
                    road accidents and collects relevant materials.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    2. Sensitize school and college students to understand the
                    cause, concern, and concentration required on road accidents
                    and motivate them to become the Brand Ambassadors for
                    “ACCIDENT FREE INDIA”.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    3. Communicate with school and college authorities and
                    involve them in spreading the message across the
                    institution, through their PTA meetings, their neighborhood,
                    etc.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    4. Organize various competitions and other activities to
                    publicize the concept. Develop apps for school children
                    concerning road safety and road traffic rules through games
                    to create interest in them.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    5. Approach the law enforcement authorities (police and
                    transport departments) and involve them in implementing this
                    scheme. Sensitize all police personnel in their jurisdiction
                    to identify traffic blockage points, choke points,
                    congestion points, and take remedial measures to facilitate
                    smooth traffic flow. Select the best police stations
                    recording the least number of road accidents and recognize
                    them in functions by giving away trophies, certificates,
                    etc.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 my-lg-5">
              <div className="about-img" data-aos="zoom-in">
                <img
                  src={img3}
                  alt="Accident Free India"
                  className="img-fluid rounded"
                  data-aos="zoom-in"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 ps-lg-5">
              <div className="about-text">
                <ul className="list-unstyled" data-aos="zoom-in">
                  <li className="mb-3" data-aos="zoom-in">
                    6. Approach the transport department and state transport
                    corporation to encourage their depot personnel to involve in
                    this movement by observing “Accident-Free Weeks/Months” and
                    sensitize all stakeholders in espousing this movement.
                    Select the best depots recording the minimum number of road
                    accidents and recognize them in special functions by giving
                    away trophies, certificates, etc.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    7. Approach the central/state governments to bring their
                    attention to the factual position of road accidents status
                    and to suggest to accord priority in attending to the needs
                    of road, transport, and related infrastructure
                    requirements/maintenance thereof.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    8. Approach the corporate sector to involve them in this
                    scheme and convince them to contribute their Corporate
                    Social Responsibility (CSR) funds towards taking up projects
                    relating to arresting/reducing road accidents in their
                    localities.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    9. Organize various events for the public/stakeholders
                    (driving professionals, etc.) to create and sustain
                    awareness.
                  </li>
                  <li className="mb-3" data-aos="zoom-in">
                    10. Provide infrastructural support facilities like cameras,
                    signposts, cautionary signs, etc. on the main roads and
                    highways to attract the attention of the drivers towards
                    their safety, safety of their families, public, and uphold
                    the names of their respective vehicle owners/departments.
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
                <span>PILOT PROGRAM IN CHENNAI & KANYAKUMARI DISTRICT</span>
              </h2>
              <p data-aos="zoom-in">
                AJM Foundation has identified Chennai and Kanyakumari District
                for the pilot project. Chennai, being the state capital, has a
                high density of population and vehicles.
              </p>
              <p data-aos="zoom-in">
                Kanyakumari is predominantly a rural area and is the only corner
                in the country where the common man can visit. It is a place of
                tourist attraction (pilgrim center, Seasangamam, the only place
                in the world where both sunrise and sunset can be witnessed from
                the same spot) being the southern tip of India, a district with
                high Physical Quality Life Indicators (PQLI), where Swami
                Vivekananda gave the clarion call of "Arise and Awake." There
                cannot be a better place than Kanyakumari to spread the message
                of <span className="text-warning">“ACCIDENT FREE INDIA”</span>.
              </p>
              <p data-aos="zoom-in">
                To actively take this project forward, the Foundation has
                prepared an “Accident-Free India” program being implemented in
                Chennai and Kanyakumari. For this purpose, we have requested the
                police department and the transport departments to identify the
                best police station in the district (that has brought road
                accidents under control) and the best state transport depot
                (with the least road accidents by their personnel) to honor and
                felicitate them by awarding a ROLLING TROPHY in recognition of
                their achievements on a monthly basis.
              </p>
              <p data-aos="zoom-in">
                The life-size (6 feet by 4.5 feet) Rolling Trophy is uniquely
                designed with various advanced features.
              </p>
              <p data-aos="zoom-in">
                The award functions would be organized both in Chennai as well
                as Kanyakumari. This function would also be the launching pad
                for taking the program across the state and country.
              </p>
              <p data-aos="zoom-in">
                This program would go a long way in bringing down road accidents
                as a collective effort in establishing Tamilnadu as the first
                state towards achieving an “Accident Free India” which will pave
                the way for other states to follow.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AFI;
