import React from "react";
import oneCA from "../images/schemes/oneCA4.png";
import oneCA3 from "../images/schemes/oneCA1.jpg";
import oneCA2 from "../images/schemes/oneCA2.jpeg";
import NavBar from "../shared/Navbar";
import Footer from "../shared/Footer";

const OVOC = () => {
  const mentorData = [
    { name: "K. Akilvarshini", mentor: "kumaresh Babu" },
    { name: "Madhurambal", mentor: "Siva Kumar" },
    { name: "Cheran G", mentor: "Siva Kumar" },
    { name: "K Dhivya", mentor: "Siva Kumar" },
    { name: "Stephin", mentor: "Amirtharajan" },
    { name: "E. Janani", mentor: "Eugine" },
    { name: "T. Deepa", mentor: "vijay stephen" },
    { name: "Anjani Rajavel", mentor: "Rathinaraj" },
    { name: "M Shenbagavadivu", mentor: "Kumar" },
    { name: "Evangeline Rose", mentor: "Eugine" },
    { name: "Vasu narain", mentor: "Kumar" },
    { name: "Elakkiya C.M", mentor: "Isthore" },
    { name: "M.Meera", mentor: "Kumaresh Babu" },
    { name: "S.Ramani", mentor: "Mohan" },
    { name: "B.Aakash", mentor: "Rathinaraj" },
    { name: "Mac . G", mentor: "Amirtharajan" },
    { name: "Dinesh M", mentor: "vijay stephen" },
    { name: "Neha sabasteen", mentor: "Amirtharajan" },
    { name: "K.sugirtha", mentor: "Eugine" },
    { name: "Dr.P.Deepa", mentor: "Murugesan" },
    { name: "Thirisha", mentor: "Isthore" },
    { name: "Santhiya Palani", mentor: "Rathinaraj" },
    { name: "MAHAA LAKSHMI A", mentor: "Ranjitha" },
    { name: "V. Madhavan", mentor: "Siva Kumar" },
    { name: "Josmani Joan", mentor: "vijay stephen" },
    { name: "V.Gowtham", mentor: "Murugesan" },
    { name: "Preetti Sri", mentor: "Murugesan" },
    { name: "R.Harish", mentor: "Amirtharajan" },
    { name: "THULASIRAM C", mentor: "Rathinaraj" },
    { name: "Rinthiya sri", mentor: "Eugine" },
    { name: "AGNES", mentor: "vijay stephen" },
    { name: "M Shindya", mentor: "Amirtharajan" },
    { name: "K.Aji Sharmila", mentor: "Ranjitha" },
    { name: "A.Sasikala", mentor: "Ranjitha" },
    { name: "Jema A.M neethu", mentor: "Amirtharajan" },
    { name: "Ramesh Kumar M", mentor: "Siva Kumar" },
    { name: "Rajasekar", mentor: "Mohan" },
    { name: "Mariam Stephy Martinal M", mentor: "Amirtharajan" },
    { name: "Finola Dottie Ahiah", mentor: "Amirtharajan" },
    { name: "B.HEMA BALA KUMARAN", mentor: "Rathinaraj" },
    { name: "S. Jayapriya", mentor: "venkatasubramaniam" },
    { name: "M.Sugantha Kumar", mentor: "Amirtharajan" },
    { name: "A. Abi vigneshwari", mentor: "Siva Kumar" },
    { name: "Roopa Swathy", mentor: "Siva Kumar" },
    { name: "S ANN SUBITSHA", mentor: "Amirtharajan" },
    { name: "Sathiyanarayanan K R", mentor: "vijay stephen" },
    { name: "Aashritha", mentor: "Teki Kanaka Ratnam" },
    { name: "Hariprabha N", mentor: "kumaresh Babu" },
    { name: "Arachelvan", mentor: "Siva Kumar" },
    { name: "Janani.m", mentor: "Rathinaraj" },
    { name: "S.Beullah", mentor: "vijay stephen" },
    { name: "Kameshwari. S", mentor: "Rathinaraj" },
    { name: "Sneka.S", mentor: "Siva Kumar" },
    { name: "Sathesh HariHaran M", mentor: "Siva Kumar" },
    { name: "J.gayathri", mentor: "Murugesan" },
    { name: "Rohith", mentor: "Siva Kumar" },
    { name: "N.Vennila", mentor: "vijay stephen" },
    { name: "Praison Joseph", mentor: "Murugesan" },
    { name: "Blesson Joseph", mentor: "Murugesan" },
    { name: "A.Samuel", mentor: "Mohan" },
    { name: "Kevin kishore", mentor: "vijay stephen" },
  ];

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
              <img src={oneCA} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  One Village
                  <br />
                  <span>One CA</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about section */}
      <section id="about" className="about section-padding py-0 bg-white">
        <div className="container">
          <div className="row about-section">
            <h2
              className="text-invisible text-center p-lg-0 m-lg-0"
              data-aos="zoom-in"
            >
              <span>ONE VILLAGE</span> ONE CA
            </h2>
            <div
              className="col-lg-4 col-md-12 col-12 mt-md-5 about-img-container"
              data-aos="zoom-in"
            >
              <div className="about-img mt-2">
                <img
                  src={oneCA2}
                  alt="One Village One CA"
                  className="img-fluid mt-2"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 about-text-container">
              <div className="about-text mt-lg-2">
                <h2
                  className="text-visible one-village-heading"
                  data-aos="zoom-in"
                >
                  <span style={{ color: "rgb(0, 255, 115)" }}>
                    ONE VILLAGE{" "}
                  </span>{" "}
                  ONE CA
                </h2>

                <p className="mt-2" data-aos="zoom-in">
                  <strong>
                    India lives in villages with over 7 lakh villages and about
                    two-thirds of India’s more than 1 billion people live in
                    rural areas and around 170 million of them are poor. Poverty
                    is the deepest in the Scheduled Castes and Scheduled Tribes
                    in the rural areas.
                  </strong>
                </p>
                <p data-aos="zoom-in">
                  The Founder of AJM Foundation, CA A John Moris, is a
                  first-generation Chartered Accountant from a village in
                  Kanyakumari district and has grown to manage A John Moris &
                  Co., a renowned CA Partnership firm in the country with its 24
                  Branches spread across the country and with 30 qualified CA
                  Partners, and as such is in the right position to understand
                  and appreciate the importance of the profession of Chartered
                  Accountant with his own experience in the field over 30 years.
                </p>
                <p data-aos="zoom-in">
                  Education is the foremost step required to enlighten the young
                  and old minds alike to appreciate the fact that literacy
                  generates employment and employers. The role of professional
                  studies like Engineering, Management, Chartered Accountancy
                  etc., is capable of stimulating minds towards creativity and
                  productivity which is vital for the economic well-being of any
                  nation.
                </p>
                <p data-aos="zoom-in">
                  In the field of Chartered Accountancy, there is an acute
                  shortage to cope up with the emerging national requirement. In
                  developed nations there is one CA for an average of 450
                  persons, whereas in India there is one CA per every 4500
                  population on average. For the world’s second-largest country,
                  there is a golden opportunity to improve upon the availability
                  of qualified CAs.
                </p>
                <p data-aos="zoom-in">
                  For this purpose, keeping in mind the need of the CAs and
                  considering the fact that the student fraternity is not yet
                  fully aware of the importance and the potentialities and
                  opportunities available for a CA, AJM foundation has taken on
                  the task of taking this mission forward and achieving this
                  vision.
                </p>
              </div>
            </div>
          </div>

          <div className="row about-section">
            <div className="col-lg-4 col-md-12 col-12 mt-md-5 order-md-1 order-lg-2  ">
              <div className="about-img" data-aos="zoom-in">
                <img
                  src={oneCA3}
                  alt="Strategy"
                  className="img-fluid mt-md-5"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-2 mt-md-5 order-md-2 order-lg-1 ">
              <div className="about-text">
                <h2 className="" data-aos="zoom-in">
                  <span style={{ color: "rgb(0, 255, 115)" }}>STRATEGY</span>
                </h2>
                <h3 data-aos="zoom-in">
                  CREATING AWARENESS OF THE PROFESSION OF CHARTERED ACCOUNTANCY
                  AMONG THE STUDENT GENERATION AT SCHOOLS AND COLLEGES
                </h3>
                <p data-aos="zoom-in">
                  The Foundation has been constantly interacting with students
                  and keeping constant touch with the Institute of Chartered
                  Accountants of India. Towards this, the Foundation has
                  conducted many career counselling programmes at various
                  schools in Kanyakumari Districts and Chennai. AJM Foundation
                  is running a programme at Marthandam, Kanyakumari district
                  where 25 poor students are pursuing the study of CA.
                </p>
                <h4 data-aos="zoom-in">TRAINING STUDENTS TO QUALIFY</h4>
                <p data-aos="zoom-in">
                  We have taken up this cause with the Government of Tamilnadu
                  and the Institute of Chartered Accountants of India and as a
                  result, Govt of Tamilnadu has organised training of 25,000
                  students to pursue the course.
                </p>
                <p data-aos="zoom-in">
                  The training they are imparted and the values being inculcated
                  by the Foundation are noteworthy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Table for Mentors */}
      <section className="bg-light py-3">
        <div className="container">
          <div className="row justify-content-center ">
            <div
              className="col-lg-6  my-3 mb-3"
              style={{ display: "block", height: "450px", overflowY: "scroll" }}
            >
              <table className="table" data-aos="zoom-in">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mentors</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(62)].map((_, index) => {
                    const mentorIndex = index % mentorData.length;
                    const mentor = mentorData[mentorIndex];
                    return (
                      <tr key={index + 1}>
                        <th scope="row">{index + 1}</th>
                        <td>{mentor.name}</td>
                        <td>{mentor.mentor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-lg-6   ">
              <h3 className="my-3 mx-lg-5 " data-aos="zoom-in">
                Frequently Asked Questions
              </h3>
              <h3 className="my-3 mx-lg-5" data-aos="zoom-in">
                Strategy to prepare for CA Exam
              </h3>
              <div className="col-lg-12 mx-lg-5 ">
                <div
                  className="accordion"
                  id="accordionExample"
                  data-aos="zoom-in"
                >
                  <div className="accordion-item ">
                    <h2
                      className="accordion-header"
                      id="headingCAOne"
                      data-aos="zoom-in"
                    >
                      <button
                        className="accordion-button collapsed "
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCAOne"
                        aria-expanded="true"
                        aria-controls="collapseCAOne"
                      >
                        Know the Syllabus, Create a Study Plan and revise all
                        Topics and Subjects
                      </button>
                    </h2>
                    <div
                      id="collapseCAOne"
                      className="accordion-collapse collapse "
                      aria-labelledby="headingCAOne"
                      data-bs-parent="#accordionCA"
                    >
                      <div className="accordion-body">
                        <p data-aos="zoom-in">
                          {" "}
                          To prepare for<strong>
                            {" "}
                            CA intermediate exam{" "}
                          </strong>{" "}
                          properly, an aspirant requires a full proof strategy
                          to crack one of the toughest exams. From having
                          knowledge of complete syllabus to plan for covering
                          entire syllabus within a proper time interval and
                          revision of all topics and subjects.
                        </p>

                        <p data-aos="zoom-in">
                          {" "}
                          To do so, firstly aspirant need to collect all the
                          relevant study material then prepare a proper study
                          plan including time for revision of all topics and
                          subjects.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="headingCATwo"
                      data-aos="zoom-in"
                    >
                      <button
                        className="accordion-button collapsed"
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCATwo"
                        aria-expanded="false"
                        aria-controls="collapseCATwo"
                      >
                        Timely Revision is Key to Success in CA Intermediate
                        Exams
                      </button>
                    </h2>
                    <div
                      id="collapseCATwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingCATwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p data-aos="zoom-in">
                          A study plan is not enough to pass a{" "}
                          <strong> CA intermediate exams </strong> , the
                          aspirants require to revise all the topics and
                          subjects from time to time. Based on their
                          capabilities, they should divide the entire syllabus
                          into parts and study them within fixed deadlines.
                          Don’t forget to revise what you studied.
                        </p>
                        <p>
                          There should be revision goals whether daily or weekly
                          because revision is the only key to success in CA
                          intermediate exam due to a broader syllabus. Working
                          as per set deadlines also help to measure progress in
                          a better manner.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingCAThree">
                      <button
                        className="accordion-button collapsed"
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCAThree"
                        aria-expanded="false"
                        aria-controls="collapseCAThree"
                      >
                        Focus on Thorough Understanding of Topics Rather than
                        Mugging up
                      </button>
                    </h2>
                    <div
                      id="collapseCAThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingCAThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          In order to clear CA inter exams, aspirants should
                          have a thorough understanding of all the concepts of
                          syllabus. Mugging up is not a good choice as solving
                          intermediate exams require logical and reasoning
                          skills gets developed from the thorough study of all
                          the topics, not from mugging up.
                        </p>
                        <p>
                          In addition to this, preparing point-wise notes in
                          their own language is also a better approach to adopt
                          while studying. It gives a better understanding of
                          topics and helps you in quick revision day before the
                          examinations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingCAFour">
                      <button
                        className="accordion-button collapsed"
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCAFour"
                        aria-expanded="false"
                        aria-controls="collapseCAFour"
                      >
                        Solving Previous Years Papers, ICAI mock Papers and RTPs
                        is a right Approach
                      </button>
                    </h2>
                    <div
                      id="collapseCAFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingCAFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          If one really wants to get succeed in{" "}
                          <strong> ICAI examination </strong> then he should
                          have experience of solving previous question papers,
                          ICAI mock papers and RTPs on a regular basis. Because
                          the aspirant who has prepared for CA inter exams will
                          boost up with confidence by doing so. The assessing of
                          paper pattern, difficulty level and questioning trends
                          while preparing helps you in maintaining a positive
                          attitude during the examination
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingCAFive">
                      <button
                        className="accordion-button collapsed"
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCAFive"
                        aria-expanded="false"
                        aria-controls="collapseCAFive"
                      >
                        Proper Time Management is Mandatory
                      </button>
                    </h2>
                    <div
                      id="collapseCAFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingCAFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          While preparing for the CA inter exam, the aspirant
                          should utilize their time sensibility, i.e proper time
                          management is key to success, here also. They should
                          not procrastinate and postponed their study/revision
                          sessions as doing so will only increase your burden.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-12"> */}
            <div className="col-lg-6">
              <h3 className="py-2" data-aos="zoom-in">
                Strategy to prepare for CMA Exam
              </h3>
              <div className="col-lg-12">
                <div className="accordion" id="accordionCMA">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingCMAOne">
                      <button
                        className="accordion-button collapsed"
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCMAOne"
                        aria-expanded="true"
                        aria-controls="collapseCMAOne"
                      >
                        Choose the Right Training Provider
                      </button>
                    </h2>
                    <div
                      id="collapseCMAOne"
                      className="accordion-collapse collapse "
                      aria-labelledby="headingCMAOne"
                      data-bs-parent="#accordionCMA"
                    >
                      <div className="accordion-body">
                        <p>
                          Certain institutions have been creating prep notes,
                          question banks and mock exams for quite some time
                          while others have just recently entered the market.
                          The trainers experience is essential as it guarantees
                          that their content and knowledge has been streamlined
                          and refined through the years. Choosing experienced
                          training providers helps you understand the IMA’s exam
                          requirements and prevents studying with a prep
                          provider who is learning about the course requirements
                          themselves.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingCMATwo">
                      <button
                        className="accordion-button collapsed "
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCMATwo"
                        aria-expanded="false"
                        aria-controls="collapseCMATwo"
                      >
                        Practice
                      </button>
                    </h2>
                    <div
                      id="collapseCMATwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingCMATwo"
                      data-bs-parent="#accordionCMA"
                    >
                      <div className="accordion-body">
                        <p>
                          The volume of mock (practice) examinations is crucial
                          as they help to highlight your strong and weak areas
                          in the curriculum. Choosing a best provider who can
                          offer high-quality mock exams helps to ensure that
                          your key and crucial areas are assessed
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingCMAThree">
                      <button
                        className="accordion-button collapsed "
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCMAThree"
                        aria-expanded="false"
                        aria-controls="collapseCMAThree"
                      >
                        Learn from a CMA certified trainer
                      </button>
                    </h2>
                    <div
                      id="collapseCMAThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingCMAThree"
                      data-bs-parent="#accordionCMA"
                    >
                      <div className="accordion-body">
                        <p>
                          Trainers who have studied and been <u>certified</u>{" "}
                          for the course have a student-centric perspective.
                          This serves an important purpose when candidates are
                          unable to understand in-depth or confusing concepts
                          and require tips or hacks for the same. It wouldn’t be
                          wise for you to take the advice of someone who hasn’t
                          mastered the exam disregard of the attempts
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingCMAFour">
                      <button
                        className="accordion-button collapsed"
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCMAFour"
                        aria-expanded="false"
                        aria-controls="collapseCMAFour"
                      >
                        Start your study routine early
                      </button>
                    </h2>
                    <div
                      id="collapseCMAFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingCMAFour"
                      data-bs-parent="#accordionCMA"
                    >
                      <div className="accordion-body">
                        <p>
                          The majority of CMA certified professionals credit
                          their <u>examination routine</u> for their success
                          during the CMA journey which includes understanding
                          what the content highlights as well as applying to a
                          wide variety of questions that will be tested during
                          the CMA exam. Being confident and well versed with the
                          curriculum and its application requires patience and
                          time which can only be attained through a well
                          thorough and strict study plan.
                        </p>
                        <p>
                          One of the method that has proven to be highly
                          effective for the CFA Program and can also be used for
                          the CMA course is the Prepare Practice Perform
                          technique. In the preparation phase, you must focus on
                          learning the content through reading and attending
                          training sessions while practice it aslo includes
                          identifying the gaps in your learning so that you can
                          score high in your mock exams. Spend an average of 30
                          – 40% of your time preparing, 40 – 50% practicing and
                          20% performing
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingCMAFive">
                      <button
                        className="accordion-button collapsed"
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCMAFive"
                        aria-expanded="false"
                        aria-controls="collapseCMAFive"
                      >
                        Key Definitions and Terms are defining factors
                      </button>
                    </h2>
                    <div
                      id="collapseCMAFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingCMAFive"
                      data-bs-parent="#accordionCMA"
                    >
                      <div className="accordion-body">
                        <p>
                          Essential terms and concepts are commonly tested
                          through multiplechoice questions. Hence, it’s crucial
                          to understand and differentiate among them to prevent
                          confusion. Terms are often used in question statements
                          in the form of least, most and so forth which can make
                          a significant difference towards the correct answer.
                          Therefore, if the question seems confusing or unclear,
                          rephrase the question to your understanding before
                          selecting an answer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingCMAFive">
                      <button
                        className="accordion-button collapsed"
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCMAFive"
                        aria-expanded="false"
                        aria-controls="collapseCMAFive"
                      >
                        Educated Guessing is your good luck charm
                      </button>
                    </h2>
                    <div
                      id="collapseCMAFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingCMAFive"
                      data-bs-parent="#accordionCMA"
                    >
                      <div className="accordion-body">
                        <p>
                          Candidates are often caught off guard by complicated
                          questions which makes it exceptionally imperative that
                          candidates develop the habit of “educated guessing”
                          during their practice sessions. One good way to
                          identify the correct answer would be through the
                          process of elimination or relating it to a similar
                          concept.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 ">
                    <h3 className="my-3" data-aos="zoom-in">
                      Opportunities for Auditors at UN and it’s associate
                      organization
                    </h3>
                    <div className="col-lg-12 my-3">
                      <div className="accordion" id="accordionUN">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingUNOne">
                            <button
                              className="accordion-button collapsed"
                              data-aos="zoom-in"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseUNOne"
                              aria-expanded="true"
                              aria-controls="collapseUNOne"
                            >
                              Scope of Auditor’s
                            </button>
                          </h2>
                          <div
                            id="collapseUNOne"
                            className="accordion-collapse collapse "
                            aria-labelledby="headingUNOne"
                            data-bs-parent="#accordionUN"
                          >
                            <div className="accordion-body">
                              <p>
                                A well-skilled Chartered Accountant plays an
                                essential role and handles different financial
                                duties in a firm. They perform duties such as{" "}
                                <strong>
                                  Auditing & Assurance, Tax Consultancy,
                                  Accounting Services, Accountants & Finance
                                  Outsourcing and Financial Reporting
                                </strong>
                              </p>
                              <p>
                                CA is an internationally acclaimed and accepted
                                qualification that has a wider acceptance across
                                the world. In addition to that, the Institute of
                                Chartered Accountants of India has MoUs with
                                various countries which help CAs to become a
                                member of the ICAI counterpart in other
                                countries. Currently, <u>ICAI</u> has MoU with
                                Australia, England, Malaysia and UAE.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingUNTwo">
                            <button
                              className="accordion-button collapsed"
                              data-aos="zoom-in"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseUNTwo"
                              aria-expanded="false"
                              aria-controls="collapseUNTwo"
                            >
                              List of Associate Organization
                            </button>
                          </h2>
                          <div
                            id="collapseUNTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingUNTwo"
                            data-bs-parent="#accordionUN"
                          >
                            <div className="accordion-body">
                              <p>
                                <strong>
                                  A Few UN Organization are follows.,
                                </strong>{" "}
                                Ahsen Aziz Chowdhury(Staten Island), Ana Brito,
                                EA(Pophan), Common ground Tax Service LLC(New
                                York), Urban & Gaspari, LLP(New York), etc..,
                              </p>
                            </div>
                          </div>
                        </div>

                        <h3 className="my-3" data-aos="zoom-in">
                          Chartered Accountancy Exams course in detail
                        </h3>
                        <div className="col-lg-12 my-3">
                          <div className="accordion" id="accordionCAExams">
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="headingCAExamsOne"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  data-aos="zoom-in"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseCAExamsOne"
                                  aria-expanded="true"
                                  aria-controls="collapseCAExamsOne"
                                >
                                  Foundation course
                                </button>
                              </h2>
                              <div
                                id="collapseCAExamsOne"
                                className="accordion-collapse collapse "
                                aria-labelledby="headingCAExamsOne"
                                data-bs-parent="#accordionCAExams"
                              >
                                <div className="accordion-body">
                                  <p data-aos="zoom-in">
                                    Paper 1: Principle & Practice of Accounting
                                  </p>

                                  <p data-aos="zoom-in">
                                    Paper 2: Business Laws & Business
                                    correspondence & Reporting
                                  </p>

                                  <p data-aos="zoom-in">
                                    {" "}
                                    Paper 3: Business Mathematics, Logical
                                    Reasoning & Statistics
                                  </p>

                                  <p data-aos="zoom-in">
                                    Paper 4: Business Economics & Business &
                                    Commercial Knowledge
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="headingCAExamsTwo"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  data-aos="zoom-in"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseCAExamsTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseCAExamsTwo"
                                >
                                  CA Intermediate paper groups
                                </button>
                              </h2>
                              <div
                                id="collapseCAExamsTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingCAExamsTwo"
                                data-bs-parent="#accordionCAExams"
                              >
                                <div className="accordion-body">
                                  <p data-aos="zoom-in">
                                    <strong>Group 1:</strong>
                                  </p>
                                  <ul>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 1:</strong> Accounting{" "}
                                    </li>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 2:</strong> corporate and
                                      other laws (Part 1- Company Law, Part 2-
                                      Other Laws)
                                    </li>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 3:</strong> Cost and
                                      Management Accounting
                                    </li>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 4:</strong> Taxation
                                      (Section A- Income Tax Laws, Section B-
                                      Indirect Taxes)
                                    </li>
                                  </ul>
                                  <p data-aos="zoom-in">
                                    <strong>Group 2:</strong>
                                  </p>
                                  <ul>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 5:</strong> Advanced
                                      Accounting{" "}
                                    </li>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 6:</strong> Auditing and
                                      Assurance
                                    </li>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 7:</strong> Enterprise
                                      Information Systems and Strategic
                                      Management (Section A- Enterprise
                                      Information Systems, Section B- Strategic
                                      Management)
                                    </li>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 8:</strong> Financial
                                      Management and Economics for Finance
                                      (Section A- Financial Management, Section
                                      B- Economics for Finance)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="headingCAExamsThree"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  data-aos="zoom-in"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseCAExamsThree"
                                  aria-expanded="false"
                                  aria-controls="collapseCAExamsThree"
                                >
                                  CA Final Course Papers
                                </button>
                              </h2>
                              <div
                                id="collapseCAExamsThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingCAExamsThree"
                                data-bs-parent="#accordionCAExams"
                              >
                                <div className="accordion-body">
                                  <p data-aos="zoom-in">
                                    <strong>Group 1:</strong>
                                  </p>
                                  <ul>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 1:</strong> Financial
                                      reporting{" "}
                                    </li>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 2:</strong> Strategic
                                      Financial Management
                                    </li>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 3:</strong> Advanced
                                      Auditing &amp; Professional Ethics
                                    </li>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 4:</strong> corporate &amp;
                                      Economic Laws (Part 1- Corporate Laws,
                                      Part 2- Economic Laws)
                                    </li>
                                  </ul>
                                  <p data-aos="zoom-in">
                                    <strong>Group 2:</strong>
                                  </p>
                                  <ul>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 5:</strong> Strategic Cost
                                      Management &amp; performance Evaluation{" "}
                                    </li>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 6:</strong> Elective Paper
                                      <p data-aos="zoom-in">
                                        List of all Elective Paper
                                      </p>
                                      <ul>
                                        <li data-aos="zoom-in">
                                          6A- Risk Management
                                        </li>
                                        <li data-aos="zoom-in">
                                          6B- Financial Services &amp; Capital
                                          Markets
                                        </li>
                                        <li data-aos="zoom-in">
                                          6C- International Taxation
                                        </li>
                                        <li data-aos="zoom-in">
                                          6D- Economic Laws
                                        </li>
                                        <li data-aos="zoom-in">
                                          6E- Global Financial Reporting
                                          Standards{" "}
                                        </li>
                                        <li data-aos="zoom-in">
                                          6F- Multi-disciplinary Case study
                                        </li>
                                      </ul>
                                    </li>
                                    <li data-aos="zoom-in">
                                      <strong>Paper 7:</strong> Direct Tax Laws
                                      &amp; International Taxation (Part 1-
                                      Direct Tax Laws, Part 2- International
                                      Taxation)
                                    </li>
                                    <li data-aos="zoom-in">
                                      {" "}
                                      <strong>Paper 8:</strong>Indirect Tax Laws
                                      (Part 1- Goods &amp; Services Tax, Part
                                      2-Customs &amp; FTP)
                                    </li>
                                    <p data-aos="zoom-in">
                                      <strong>Group 2:</strong>
                                    </p>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12  my-3">
                              <h3 className="my-3" data-aos="zoom-in">
                                Opportunities for corporate Secretaryship
                              </h3>
                              <div className="col-lg-12 ">
                                <p data-aos="zoom-in">
                                  The career options available for Corporate
                                  Secretaryship are{" "}
                                  <strong>
                                    credit analysts, sales team manager, risk
                                    analysts, executive assistant, corporate
                                    manager, export manager, sales executive
                                  </strong>
                                  , etc. The starting salary in this field
                                  starts from around 3LPA, depending upon the
                                  job title and the company
                                </p>
                              </div>
                            </div>
                          </div>
                          <h3 className="py-3" data-aos="zoom-in">
                            Information Technology Auditor
                          </h3>
                          <p data-aos="zoom-in">
                            Being an information technology auditor is one of
                            the best choices you could ever make as an IT or
                            computer science major. IT auditors enjoy great
                            working environments and lucrative salaries. They
                            also have great job prospects characterized by many
                            growth opportunities.
                          </p>
                          <div className="col-lg-12">
                            <div className="accordion" id="accordionExample1">
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="headingOneOne"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    data-aos="zoom-in"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOneOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOneOne"
                                  >
                                    Roles and Responsibilities
                                  </button>
                                </h2>
                                <div
                                  id="collapseOneOne"
                                  className="accordion-collapse collapse "
                                  aria-labelledby="headingOneOne"
                                  data-bs-parent="#accordionExample1"
                                >
                                  <div className="accordion-body">
                                    <p data-aos="zoom-in">
                                      An information technology auditor is
                                      responsible for the internal controls and
                                      risks within a company’s technology
                                      system. He actively monitors the system to
                                      ensure it follows policies and best
                                      practices. This usually involves studying
                                      the technologies used and identifying
                                      points of weaknesses. He then prepares a
                                      report on his findings and recommends a
                                      suitable course of action. An IT auditor
                                      can also help in designing and executing
                                      internal audit strategies. He also mentors
                                      IT staff members, keeps records and
                                      prepares reports for the audit committee.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="headingTwo2"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    data-aos="zoom-in"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo2"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo2"
                                  >
                                    How to Become an IT Auditor
                                  </button>
                                </h2>
                                <div
                                  id="collapseTwo2"
                                  className="accordion-collapse collapse "
                                  aria-labelledby="headingTwo2"
                                  data-bs-parent="#accordionExample1"
                                >
                                  <div className="accordion-body">
                                    <p data-aos="zoom-in">
                                      Those who want to become information
                                      technology auditors must have at least a
                                      bachelor’s degree in related fields in
                                      order to qualify. The most suitable fields
                                      of study are computer information systems
                                      and computer information technology. These
                                      degree programs usually take three to four
                                      years. Those who enroll acquire knowledge
                                      about enterprise process analysis,
                                      business information systems development,
                                      database concepts, networks, project
                                      analysis and management and database
                                      design. Students are also required to
                                      complete an internship program to enable
                                      them gain experience while still in
                                      college.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="headingThree3"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    data-aos="zoom-in"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree3"
                                    aria-expanded="false"
                                    aria-controls="collapseThree3"
                                  >
                                    Where IT Auditors Work
                                  </button>
                                </h2>
                                <div
                                  id="collapseThree3"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingThree3"
                                  data-bs-parent="#accordionExample1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Auditors work in various offices located
                                      in cities and business parks across the
                                      world. They can be employed by investment
                                      banks, insurance companies, government
                                      agencies or consulting firms. Most of them
                                      act as company representatives while a few
                                      work in managerial positions.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="headingFour4"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    data-aos="zoom-in"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour4"
                                    aria-expanded="false"
                                    aria-controls="collapseFour4"
                                  >
                                    Job Outlook for IT Auditors
                                  </button>
                                </h2>
                                <div
                                  id="collapseFour4"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingFour4"
                                  data-bs-parent="#accordionExample1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      IT auditors have huge job prospects.
                                      According to the Bureau of Labor
                                      Statistics, the employment rate is
                                      expected to grow by 15 percent over the
                                      next 10 years. This growth rate is
                                      considered faster than the national
                                      average rate. The growth will be fueled by
                                      the increasing need for companies to
                                      employ the best practices for their IT
                                      departments.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="headingFive5"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    data-aos="zoom-in"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive5"
                                    aria-expanded="false"
                                    aria-controls="collapseFive5"
                                  >
                                    IT Auditor Salary
                                  </button>
                                </h2>
                                <div
                                  id="collapseFive5"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingFive5"
                                  data-bs-parent="#accordionExample1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      IT Auditor salary in India with less than
                                      1 year of experience to 15 years ranges
                                      from ₹ 4.1 Lakh to ₹ 22.5 Lakh with an
                                      average annual salary of 9.2 Lakhs based
                                      on 129 salaries.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="headingSix6"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    data-aos="zoom-in"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix6"
                                    aria-expanded="false"
                                    aria-controls="collapseSix6"
                                  >
                                    Growing as an IT Auditor
                                  </button>
                                </h2>
                                <div
                                  id="collapseSix6"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingSix6"
                                  data-bs-parent="#accordionExample1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Growing as an IT auditor requires high
                                      levels of discipline and commitment. Such
                                      traits attract admirers, leading to more
                                      promotions and bonuses. You should also
                                      further your education and have enough
                                      experience to advance your career.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6  my-3">
              <h3 className="mb-3 mx-lg-5" data-aos="zoom-in">
                Opportunities for Auditors at abroad
              </h3>
              <div className="col-lg-12 mx-lg-5 ">
                <p data-aos="zoom-in">
                  In CA course, the students are trained in accounting, taxation
                  and auditing. The need for chartered accountants is highly
                  increased in both largescale and small-scale industries.
                </p>

                <p data-aos="zoom-in">
                  If you want to be a CA or want to pursue the course, you have
                  to be accustomed to busy and tight schedules. This is because
                  the course demands a lot of hard work. But the hard work is
                  once justified with the results then the student will be
                  selected for the CA profile.
                </p>

                <p data-aos="zoom-in">
                  The three main skills that are required to be a good Chartered
                  Accountant are analytical, compliance, and reporting skills.
                  These are the skills based on which<u> CA salary </u> is paid.
                  Chartered Accountant with skills like budget management,
                  strategic accounting, management auditing, financial analysis,
                  and controlling etc.
                </p>

                <p data-aos="zoom-in">
                  The course’s increased hype has also increased the demands for{" "}
                  <strong>CA abroad </strong>, as many multinational firms are
                  looking out for deserving CA’s working with them and assist
                  them in their accounts management.
                </p>
              </div>

              {/* </div> */}

              <div className="col-lg-12 my-3 mx-lg-5">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne1">
                      <button
                        className="accordion-button collapsed"
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne1"
                        aria-expanded="false"
                        aria-controls="collapseOne1"
                      >
                        Australia
                      </button>
                    </h2>
                    <div
                      id="collapseOne1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          The MOU with Australia allows you to be the associate
                          member after the submission of asked documents.
                          Nevertheless, you cannot practice it on public grounds
                          there, which further says that you can work with the
                          industries but will not certify or sign as an
                          independent CA
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo1">
                      <button
                        className="accordion-button collapsed"
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo1"
                        aria-expanded="false"
                        aria-controls="collapseTwo1"
                      >
                        England
                      </button>
                    </h2>
                    <div
                      id="collapseTwo1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          This also has the same rules as Australia. You can
                          work with a company but cannot sign or certify on your
                          base.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree1">
                      <button
                        className="accordion-button collapsed"
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree1"
                        aria-expanded="false"
                        aria-controls="collapseThree1"
                      >
                        Dubai
                      </button>
                    </h2>
                    <div
                      id="collapseThree1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Dubai chapter is the reason which attracts a lot of CA
                          in to this city. The CA of India can become a member
                          of CA chapter only after proper registration and
                          affiliation. Once you become the CA member there,
                          students can easily apply or jobs. At the same time,
                          many new companies in Dubai are also recruiting many
                          CA for their accounting and auditing profile. By 2024
                          Dubai will be investing hugely in setting up new
                          business zone; hence will open doors for Job
                          opportunities for Indian CA.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour1">
                      <button
                        className="accordion-button collapsed"
                        data-aos="zoom-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour1"
                        aria-expanded="false"
                        aria-controls="collapseFour1"
                      >
                        Malaysia
                      </button>
                    </h2>
                    <div
                      id="collapseFour1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Many of the VSI students were keen on looking for
                          opportunities in Malaysia and Singapore. Singapore and
                          Malaysia are destinations for any CA fresher that can
                          give them good life style and hefty salary. But we
                          would like to bring into notice to those aspirants
                          that the CA fresher is not recognised in these cities,
                          for that matter. Their Govt strongly supports local
                          recruiters and even in case of hiring CA from India
                          they demand more than 5 years’ experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="my-3" data-aos="zoom-in">
                    Internal Auditor jobs in corporate organization
                  </h3>
                  <div className="col-lg-12 ">
                    <p data-aos="zoom-in">
                      As defined by the Institute of Internal Auditors, Internal
                      Audit is an independent objective assurance and consulting
                      activity designed to add value and improve an
                      organization’s operations & performance.
                    </p>

                    <p data-aos="zoom-in">
                      The internal audit activity helps an organization to
                      achieve its objectives by bringing a systematic,
                      disciplined approach to evaluate and improve the
                      effectiveness of risk management, control, and governance
                      progress.
                    </p>

                    <p data-aos="zoom-in">
                      An Internal Audit must provide an unbiased and objective
                      view{" "}
                    </p>

                    <p data-aos="zoom-in">
                      The internal audit activity must have qualified, skilled
                      and experienced people who can work in accord with the
                      Code of Ethics set by the International Standards.
                    </p>
                  </div>
                  <div className="col-lg-12 my-3">
                    <div className="accordion" id="accordionRoles">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne2">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-aos="zoom-in"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne2"
                            aria-expanded="true"
                            aria-controls="collapseOne2"
                          >
                            Roles and Responsibilities of Internal Auditor
                          </button>
                        </h2>
                        <div
                          id="collapseOne2"
                          className="accordion-collapse collapse "
                          aria-labelledby="headingOne2"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p data-aos="zoom-in">
                              Internal auditors work varies from the function to
                              function. Some of the key areas of auditing are:
                            </p>
                            <p data-aos="zoom-in">
                              <strong>Assessing the management of risk:</strong>
                            </p>
                            <p data-aos="zoom-in">
                              The internal auditor shall evaluate an
                              organization’s management risk. All organization
                              faces various risks; the auditor shall analyze the
                              same. Since the success of any organization
                              depends on how they manage those risks
                              effectively.{" "}
                            </p>
                            <p data-aos="zoom-in">
                              <strong>
                                Assisting management in the improvement of
                                internal controls
                              </strong>
                            </p>
                            <p data-aos="zoom-in">
                              The internal auditor helps management in improving
                              organization practice. If a manager is concerned
                              about a particular area of responsibility, the
                              internal auditor can help to identify
                              improvements.
                            </p>
                            <p data-aos="zoom-in">
                              <strong>
                                Evaluating controls and advise to all level
                                managers
                              </strong>
                            </p>
                            <p data-aos="zoom-in">
                              The range of internal audit’s role in evaluating
                              the management of risk is wide since from the
                              mailroom to the boardroom is involved in internal
                              control. The internal auditor role is to evaluate
                              the risk at one level and report on the
                              effectiveness of the implementation of management
                              policies at another level.
                            </p>
                            <p data-aos="zoom-in">
                              <strong>Evaluating risks</strong>
                            </p>
                            <p data-aos="zoom-in">
                              The Management shall identify all the risks which
                              affects the organizational’ growth which in return
                              helps an internal auditor to anticipate possible
                              future concerns and opportunities providing
                              assurance, advice, and insight where it is most
                              needed.
                            </p>
                            <p data-aos="zoom-in">
                              The Management shall identify all the risks which
                              affects the organizational’ growth which in return
                              helps an internal auditor to anticipate possible
                              future concerns and opportunities providing
                              assurance, advice, and insight where it is most
                              needed.
                            </p>
                            <p data-aos="zoom-in">
                              <strong>
                                Analyzing operations and confirm information:
                              </strong>
                            </p>
                            <p data-aos="zoom-in">
                              Accomplishing objectives and managing valuable
                              organizational resources requires systems,
                              processes, and people. Internal auditors work
                              closely with line managers to review operations
                              then report their findings to the Board of
                              Directors.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            data-aos="zoom-in"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Responsibility
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p data-aos="zoom-in">
                              The{" "}
                              <a
                                href="https://enterslice.com/learning/appointment-of-auditor-in-public-limited-company/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {" "}
                                internal auditor{" "}
                              </a>
                              shall attend the meetings with an understanding to
                              develop the business process.
                            </p>
                            <ul>
                              <li data-aos="zoom-in">
                                Shall Travel to the different sites to get all
                                information from various staff members
                              </li>
                              <li data-aos="zoom-in">
                                Shall provide ad hoc advice and guidance to
                                managers and staff at all levels.
                              </li>
                              <li data-aos="zoom-in">
                                Shall provide support and guidance to management
                                on how to handle new opportunities.
                              </li>
                              <li data-aos="zoom-in">
                                Shall manage a variety of stakeholders and their
                                expectations through regular communications
                              </li>
                              <li data-aos="zoom-in">
                                Shall assess how well the business is complying
                                with rules and regulations and informing
                                management whether any issues need addressing
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="py-3" data-aos="zoom-in">
                        Tax auditor or tax advisor
                      </h3>
                      <div className="col-lg-12">
                        <div className="accordion" id="accordionExampleTax">
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="headingTaxEarnDegree"
                            >
                              <button
                                className="accordion-button collapsed"
                                data-aos="zoom-in"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTaxEarnDegree"
                                aria-expanded="true"
                                aria-controls="collapseTaxEarnDegree"
                              >
                                Earn a degree
                              </button>
                            </h2>
                            <div
                              id="collapseTaxEarnDegree"
                              className="accordion-collapse collapse "
                              aria-labelledby="headingTaxEarnDegree"
                              data-bs-parent="#accordionExampleTax"
                            >
                              <div className="accordion-body">
                                <p>
                                  To begin your Tax Professional career path, a
                                  Bachelor's Degree in Business or a related
                                  field is usually necessary in order to remain
                                  a competitive option for employers. Focus on
                                  industry-specific skill development during
                                  your education in order to be properly
                                  equipped when applying for entry-level
                                  positions and entering the job force. A Tax
                                  Professional internship may be required to
                                  earn your Bachelor's Degree and acquire
                                  necessary knowledge on-the-job skills before
                                  entering the workforce.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="headingTaxChooseSpeciality"
                            >
                              <button
                                className="accordion-button collapsed "
                                data-aos="zoom-in"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTaxChooseSpeciality"
                                aria-expanded="true"
                                aria-controls="collapseTaxChooseSpeciality"
                              >
                                Choose speciality
                              </button>
                            </h2>
                            <div
                              id="collapseTaxChooseSpeciality"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTaxChooseSpeciality"
                              data-bs-parent="#accordionExampleTax"
                            >
                              <div className="accordion-body">
                                <p>
                                  As Tax Professional, you may be required to
                                  choose a specialty within your field.
                                  Determine which part of the Tax Professional
                                  field you feel strongest in, and continue
                                  taking active steps toward growing in your
                                  chosen path.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="headingTaxGetEntryLevel"
                            >
                              <button
                                className="accordion-button collapsed"
                                data-aos="zoom-in"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTaxGetEntryLevel"
                                aria-expanded="false"
                                aria-controls="collapseTaxGetEntryLevel"
                              >
                                Get an entry level
                              </button>
                            </h2>
                            <div
                              id="collapseTaxGetEntryLevel"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTaxGetEntryLevel"
                              data-bs-parent="#accordionExampleTax"
                            >
                              <div className="accordion-body">
                                <p>
                                  Once you've acquired a Bachelor's Degree in
                                  Business or a related field, you'll typically
                                  begin your career as an entry-level Tax
                                  Professional. In general, you can become a Tax
                                  Professional after completing your 4 years
                                  Bachelor's Degree in a related discipline.
                                  Depending on the type of Tax Professional role
                                  you’re pursuing, you may want to explore
                                  certification in certified public accountant.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="headingTaxAdvanceCareer"
                            >
                              <button
                                className="accordion-button collapsed"
                                data-aos="zoom-in"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTaxAdvanceCareer"
                                aria-expanded="false"
                                aria-controls="collapseTaxAdvanceCareer"
                              >
                                Advance in career
                              </button>
                            </h2>
                            <div
                              id="collapseTaxAdvanceCareer"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFour"
                              data-bs-parent="#accordionExampleTax"
                            >
                              <div className="accordion-body">
                                <p>
                                  Following entry-level, there are several Tax
                                  Professional career path levels to advance
                                  into. It can take 2 years as an entry-level
                                  Tax Professional to progress to the next
                                  seniority level position. Each advanced Tax
                                  Professional position requires approximately 2
                                  years of experience at each level to advance
                                  in your Tax Professional career path. It may
                                  be necessary to receive additional education,
                                  an advanced degree such as a Master's Degree
                                  in a related field, or special certifications
                                  in order to advance your Tax Professional
                                  career path.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='col-lg-12 col-md-12'>
                        <h5>ONE VILLAGE ONE CA PROGRAM BY AJM FOUNDATION & NDR FOUNDATION</h5>
                        <h6>Meeting Recording</h6>
                        <a href="https://us02web.zoom.us/rec/share/BG6PBNYmnrJsCpR5YocN3qWS0M8n4Y9yyNJi9JdQgnEOrj-Qq5_dSVk6Co9zousZ.zdgCSYcghJfmwOS1" target="_blank">https://us02web.zoom.us/rec/share/BG6PBNYmnrJsCpR5YocN3qWS0M8n4Y9yyNJi9JdQgnEOrj-Qq5_dSVk6Co9zousZ.zdgCSYcghJfmwOS1</a>
                        <p><strong>Access Passcode:</strong> ndrajm@1</p> */}
          {/* <a href=""><img class="img--bg imgss" style={{ width: "120px" }} src={invitation} />
                        </a> */}
          {/* </div> */}
        </div>
      </section>
      {/* Table for Mentors */}
      {/* <div className="row" >
                        <div className="col-lg-6">
                            <table className="table" style={{ height:"20px", overflowY: "scroll" }}>
                                <thead >
                                    <tr >
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Mentors</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(62)].map((_, index) => {
                                        const mentorIndex = index % mentorData.length;
                                        const mentor = mentorData[mentorIndex];
                                        return (
                                            <tr key={index + 1} style={{ height:"20px", overflowY: "scroll" }}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{mentor.name}</td>
                                                <td>{mentor.mentor}</td>
                                                
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>  */}
      <Footer />
    </div>
  );
};

export default OVOC;
