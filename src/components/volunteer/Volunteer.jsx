// import React, { useEffect, useRef, useState } from 'react';
// import apiService from '../../components/ApiService';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import volunteer from '../images/volunter.png';
// import './Volunteer.css';
// import NavBar from '../shared/Navbar';
// import Footer from '../shared/Footer';

// const Volunteer = () => {
//     const [volunteers, setVolunteers] = useState([]);
//     const vollistRef = useRef(null);
//     const [search, setSearch] = useState('');

//     useEffect(() => {
//         fetchVolunteers();
//         setupScrollingEffect();
//     }, [search]);

//     const fetchVolunteers = async () => {

//         try {
//             const response = await apiService.getAllVolunteers(search);
//             console.log('API response:', response);

//             // Ensure that response.data.data is always an array
//             const volunteersData = Array.isArray(response.data) ? response.data : [];
//             setVolunteers(volunteersData);
//         } catch (error) {
//             console.error('Error fetching volunteers:', error);
//             // Handle error state or display error message to user
//         }
//     };

//     const setupScrollingEffect = () => {
//         const list = vollistRef.current;
//         let interval;

//         const startScroll = () => {
//             interval = setInterval(() => {
//                 list.scrollTop += 1;
//                 if (list.scrollTop >= list.scrollHeight - list.clientHeight) {
//                     // Smoothly scroll back to the top
//                     list.scrollTo({
//                         top: 0,
//                         behavior: 'smooth'
//                     });
//                 }
//             }, 50);
//         };

//         const stopScroll = () => {
//             clearInterval(interval);
//         };

//         list.addEventListener('mouseenter', stopScroll);
//         list.addEventListener('mouseleave', startScroll);

//         startScroll();

//         return () => {
//             list.removeEventListener('mouseenter', stopScroll);
//             list.removeEventListener('mouseleave', startScroll);
//             clearInterval(interval);
//         };
//     };

//     const handleSubmit = async (event) => {
//         console.log("submitted")
//         event.preventDefault();
//         // Extract form data from the event target
//         const formData = {
//             firstName: event.target[0].value,
//             lastName: event.target[1].value,
//             gender: event.target[2].value,
//             phone: event.target[3].value,
//             email: event.target[4].value,
//             address: event.target[5].value,
//             zipCode: event.target[6].value,
//             // Add more fields as needed
//         };

//         try {
//             const response = await apiService.addVolunteer(formData);
//             console.log('Volunteer added successfully:', response.data);
//             toast.success("Volunteer Added successfully")

//             fetchVolunteers();

//             event.target.reset();
//         } catch (error) {
//             console.error('Error adding volunteer:', error);
//             // Handle error state or display error message to user
//         }
//     };
//     const handleSearchChange = (event) => {
//         setSearch(event.target.value);
//         fetchVolunteers(event.target.value);
//     };
//     return (
//         <div>
//             <NavBar />
//             <section className="bg-cover hero-section">
//                 <div className="circle1"></div>
//                 <div className="circle2"></div>
//                 <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-aos="zoom-in">
//                     <div className="carousel-inner">
//                         <div className="carousel-item active">
//                             <img src={volunteer} className="d-block w-100" alt="volunteer" />
//                             <div className="carousel-caption d-none d-md-block">
//                                 <h5>Join Us <span>Now</span></h5>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* content */}
//             <section className="bg-light text-center p-5" >
//                 <div className='container'>
//                     <h3 data-aos="zoom-in">Why Become a Volunteer?</h3>
//                     <p data-aos="zoom-in">Volunteering allows you to connect to your community and make it a better place.<br />
//                         It can benefit you and your family as much as the cause you choose to help.<br />
//                         Dedicating your time as a volunteer helps you make new friends, expand your network, and boost your social skills.</p>
//                 </div>
//             </section>
//             {/* Registration */}
//             <div id="registration" className="about section-padding" data-aos="fade-down">
//                 <div className="circle-1"></div>
//                 <div className="circle-2"></div>
//                 <div className="container bg-light regis">
//                     <div className="row justify-content-center col-12 mx-auto">
//                     <div className="col-12 text-center mb-3">
//                             <h2 style={{ color: '#ff5900' }} data-aos="zoom-in">Volunteers</h2>
//                         </div>
//                         <div className="col-lg-6 mx-auto col-12 mb-3">
//                             <h3 style={{ color: '#1FAA89' }} data-aos="zoom-in">Registration</h3>
//                             <form className="py-2 col-12" id='partervolunteers' onSubmit={handleSubmit} data-aos="zoom-in">
//                                 <div className="row mb-2">
//                                     <div className="col-lg-6 col-12 mb-2">
//                                         <input
//                                             type="text"
//                                             className="form-control rounded-pill mb-2"
//                                             placeholder="First Name *"
//                                             aria-label="First Name"
//                                             required
//                                         />
//                                     </div>
//                                     <div className="col-lg-6 col-12 mb-2">
//                                         <input
//                                             type="text"
//                                             className="form-control rounded-pill mb-2"
//                                             placeholder="Last Name *"
//                                             aria-label="Last Name"
//                                             required
//                                         />
//                                     </div>
//                                     <div className="col-lg-6 col-12 mb-2">
//                                         <select className="form-select rounded-pill mb-0" aria-label="Gender" required>
//                                             <option value="" disabled selected>Choose Gender</option>
//                                             <option value="male">Male</option>
//                                             <option value="female">Female</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2">
//                                     <div className="col-lg-6 col-12 mb-2">
//                                         <input type="number"
//                                             className="form-control rounded-pill mb-2"
//                                             placeholder="Phone No"
//                                             aria-label="Phone No"
//                                             required />
//                                     </div>
//                                     <div className="col-lg-6 col-12 mb-2">
//                                         <input type="email"
//                                             className="form-control rounded-pill mb-0"
//                                             placeholder="Email Id"
//                                             aria-label="Email Id"
//                                             required />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2">
//                                     <div className="col-lg-6 col-12 mb-2">
//                                         <input type="text"
//                                             className="form-control rounded-pill mb-2"
//                                             placeholder="Address"
//                                             aria-label="Address"
//                                             required />
//                                     </div>
//                                     <div className="col-lg-6 col-12 mb-2">
//                                         <input type="number"
//                                             className="form-control rounded-pill mb-1"
//                                             placeholder="Pin code"
//                                             aria-label="Pin code"
//                                             required />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2">
//                                     <div className="col-lg-6 col-12 mb-2">
//                                         <label className="form-label ms-2">Upload Photo</label>
//                                         <input type="file"
//                                             className="form-control rounded-pill"
//                                             placeholder="Image"
//                                             aria-label="Image"
//                                             required />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2">
//                                     <div className="col">
//                                         <div className="form-check">
//                                             <input type="checkbox"
//                                                 className="form-check-input"
//                                                 id="Check"
//                                                 required />
//                                             <label className="form-check-label" htmlFor="Check">I'm not a robot</label>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2">
//                                     <div className="col">
//                                         <button type="submit" className="btn btn-outline-success rounded-pill shadow px-5">SEND</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="col-lg-6 mt-md-5 list">
//                             <div className="container vlist mb-sm-2">
//                                 <h2 className="text-center my-5 volunteersheading" data-aos="zoom-in"><span style={{ color: '#ff5900' }}>Volunteers List</span></h2>
//                                 <div className="circle-01"></div>
//                                 <div className="circle-02"></div>
//                                 <div className=" d-flex mb-4" data-aos="zoom-in">
//                                     <input className="form-control rounded-pill"  type="search" placeholder="Search Volunteers" aria-label="Search" onChange={handleSearchChange} />
//                                 </div>
//                                 <div className="vollist" ref={vollistRef} data-aos="zoom-in">
//                                     {volunteers.map((volunteerImage, index) => (
//                                         <div key={index} className="block">
//                                             <div className="imgbx">
//                                                 {/* <img src={volunteerImage} className="cover w-100" alt='' /> */}
//                                                 <p>{volunteerImage.name}</p>

//                                             </div>
//                                             <p>{volunteerImage.district}</p>
//                                             <p>{volunteerImage.policeStationId}</p>
//                                             <p>{volunteerImage.talukId}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//             <ToastContainer />
//         </div>
//     );
// };

// export default Volunteer;

// import React, { useEffect, useRef, useState } from 'react';
// import apiService from '../../components/ApiService';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import volunteer from '../images/volunter.png';
// import m1 from '../images/volunteers/m-1.jpg';
// import m2 from '../images/volunteers/m-2.jpg';
// import m3 from '../images/volunteers/m-3.jpg';
// import m4 from '../images/volunteers/m-4.jpg';
// import m5 from '../images/volunteers/m-5.jpg';
// import m6 from '../images/volunteers/m-6.jpg';
// import './Volunteer.css';
// import NavBar from '../shared/Navbar';
// import Footer from '../shared/Footer';

// const Volunteer = () => {
//     // const [volunteers, setVolunteers] = useState([]);
//     const vollistRef = useRef(null);
//     const [search, setSearch] = useState('');

//     useEffect(() => {
//         // fetchVolunteers();
//         setupScrollingEffect();
//     }, [search]);

//     const volunteers = [
//         { firstName: 'Ajith Dito', id: 'AJMF 2110' },
//         { firstName: 'Alex', id: 'AJMF 2109' },
//         { firstName: 'Anetter Allwyn', id: 'AJMF 1003' },
//         { firstName: 'Harihara Selvan', id: 'AJMF 2121' },
//         { firstName: 'Jameel', id: 'AJMF 2108' },
//         { firstName: 'Santhanam', id: 'AJMF 2107' },
//         { firstName: 'Sathish Kumar', id: 'AJMF 2101' },
//         { firstName: 'Siva', id: 'AJMF 1001' },
//         { firstName: 'Manikandan', id: 'AJMF 2106' },
//         { firstName: 'Helin', id: 'AJMF 2105' },
//         { firstName: 'Jaivin Raja', id: 'AJMF 2104' },
//         { firstName: 'Robert Gilton', id: 'AJMF 1002' },
//         { firstName: 'Jegan', id: 'AJMF 2103' },
//         { firstName: 'Ruban', id: 'AJMF 2102' },
//         { firstName: 'Albin Mano', id: 'AJMF 1004' },
//         { firstName: 'Vinoth Kumar', id: 'AJMF 2112' },
//         { firstName: 'Antony Raj', id: 'AJMF 2202' },
//         { firstName: 'Satheesh Kumar', id: 'AJMF 2111' }
//     ];

//     const images = [m1, m2, m3, m4, m5, m6];

//     const filteredVolunteers = volunteers.filter(volunteer =>
//         volunteer.firstName.toLowerCase().includes(search.toLowerCase()) ||
//         volunteer.id.toLowerCase().includes(search.toLowerCase())
//     );

//     // const fetchVolunteers = async () => {
//     //     try {
//     //         const response = await apiService.getAllVolunteers(search);
//     //         console.log('API response:', response);

//     //         // Ensure that response.data.data is always an array
//     //         const volunteersData = Array.isArray(response.data) ? response.data : [];
//     //         setVolunteers(volunteersData);
//     //     } catch (error) {
//     //         console.error('Error fetching volunteers:', error);
//     //         // Handle error state or display error message to user
//     //     }
//     // };

//     const setupScrollingEffect = () => {
//         const list = vollistRef.current;
//         let interval;

//         const startScroll = () => {
//             interval = setInterval(() => {
//                 list.scrollTop += 1;
//                 if (list.scrollTop >= list.scrollHeight - list.clientHeight) {
//                     // Smoothly scroll back to the top
//                     list.scrollTo({
//                         top: 0,
//                         behavior: 'smooth'
//                     });
//                 }
//             }, 50);
//         };

//         const stopScroll = () => {
//             clearInterval(interval);
//         };

//         list.addEventListener('mouseenter', stopScroll);
//         list.addEventListener('mouseleave', startScroll);

//         startScroll();

//         return () => {
//             list.removeEventListener('mouseenter', stopScroll);
//             list.removeEventListener('mouseleave', startScroll);
//             clearInterval(interval);
//         };
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         // Extract form data from the event target
//         const formData = {
//             firstName: event.target[0].value,
//             lastName: event.target[1].value,
//             gender: event.target[2].value,
//             phone: event.target[3].value,
//             email: event.target[4].value,
//             address: event.target[5].value,
//             zipCode: event.target[6].value,
//             // Add more fields as needed
//         };

//         try {
//             // Step 1: Add volunteer data
//             const response = await apiService.addVolunteer(formData);
//             console.log('Volunteer added successfully:', response.data);
//             toast.success("Volunteer Added successfully");

//             // Step 2: Upload file if selected
//             const fileInput = event.target[7];
//             if (fileInput.files.length > 0) {
//                 const file = fileInput.files[0];
//                 const fileData = new FormData();
//                 fileData.append('file', file);
//                 fileData.append('id', response.data.id);

//                 await apiService.uploadVolunteerFile(fileData);
//                 console.log("File uploaded successfully");
//             }

//             // fetchVolunteers();
//             event.target.reset();
//         } catch (error) {
//             console.error('Error adding volunteer:', error);
//             // Handle error state or display error message to user
//         }
//     };

//     const handleSearchChange = (event) => {
//         setSearch(event.target.value);
//         // fetchVolunteers(event.target.value);
//     };

//     const getVolunteerImage = (index) => {
//         return images[index % images.length];
//     };

//     return (
//         <div>
//             <NavBar />
//             <section className="bg-cover hero-section">
//                 <div className="circle1"></div>
//                 <div className="circle2"></div>
//                 <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-aos="zoom-in">
//                     <div className="carousel-inner">
//                         <div className="carousel-item active">
//                             <img src={volunteer} className="d-block w-100" alt="volunteer" />
//                             <div className="carousel-caption d-none d-md-block">
//                                 <h5>Join Us <span>Now</span></h5>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* content */}
//             <section className="bg-light text-center p-5">
//                 <div className='container'>
//                     <h3 data-aos="zoom-in">Why Become a Volunteer?</h3>
//                     <p data-aos="zoom-in">Volunteering allows you to connect to your community and make it a better place.<br />
//                         It can benefit you and your family as much as the cause you choose to help.<br />
//                         Dedicating your time as a volunteer helps you make new friends, expand your network, and boost your social skills.</p>
//                 </div>
//             </section>
//             {/* Registration */}
//             <div id="registration" className="about section-padding" data-aos="fade-down">
//                 <div className="circle-1"></div>
//                 <div className="circle-2"></div>
//                 <div className="container bg-light regis">
//                     <div className="row justify-content-center col-12 mx-auto">
//                         <div className='col-12 text-center mb-3'>
//                         <h2 style={{ color: '#ff5900' }} data-aos="zoom-in">Volunteers</h2>
//                         </div>
//                         {/* <div className="col-lg-6 mx-auto col-12 mb-3">
//                             <h3 style={{ color: '#1FAA89' }} data-aos="zoom-in">Registration</h3>
//                             <form className="py-2 col-12 mx-auto" onSubmit={handleSubmit} data-aos="zoom-in">
//                                 <div className="row mb-2">
//                                     <div className="col-lg-6 mb-2">
//                                         <input
//                                             type="text"
//                                             className="form-control rounded-pill"
//                                             placeholder="First Name *"
//                                             aria-label="First Name"
//                                             required
//                                         />
//                                     </div>
//                                     <div className="col-lg-6 mb-2">
//                                         <input
//                                             type="text"
//                                             className="form-control rounded-pill"
//                                             placeholder="Last Name *"
//                                             aria-label="Last Name"
//                                             required
//                                         />
//                                     </div>
//                                     <div className="col-lg-6 mb-2">
//                                         <select className="form-select rounded-pill" aria-label="Gender" required>
//                                             <option value="" disabled selected>Choose Gender</option>
//                                             <option value="male">Male</option>
//                                             <option value="female">Female</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2">
//                                     <div className="col-lg-6 mb-2">
//                                         <input type="number" className="form-control rounded-pill" placeholder="Phone No" aria-label="Phone No" required />
//                                     </div>
//                                     <div className="col-lg-6 mb-2">
//                                         <input type="email" className="form-control rounded-pill" placeholder="Email Id" aria-label="Email Id" required />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2">
//                                     <div className="col-lg-6 mb-2">
//                                         <input type="text" className="form-control rounded-pill" placeholder="Address" aria-label="Address" required />
//                                     </div>
//                                     <div className="col-lg-6 mb-2">
//                                         <input type="number" className="form-control rounded-pill" placeholder="Pin code" aria-label="Pin code" required />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2">
//                                     <div className="col-lg-6 mb-2">
//                                         <label className="ms-2">Upload Photo</label>
//                                         <input type="file" className="form-control rounded-pill" placeholder="Image" aria-label="Image" />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2 d-flex">
//                                     <div className="col">
//                                         <input type="checkbox" className="form-check-input mx-2" id="Check" required />
//                                         <label className="form-check-label" htmlFor="Check">I'm not a robot</label>
//                                     </div>
//                                 </div>
//                                 <div className="row mb-2">
//                                     <div className="col">
//                                         <button type="submit" className="btn btn-outline-success rounded-pill shadow me-3 px-5">SEND</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div> */}

//                         {/* volunteers list */}
//                         <div className="col-lg-6 mt-md-5 list">
//                             <div className="container vlist mb-sm-2">
//                                 <h2 className="text-center my-5" data-aos="zoom-in"><span style={{ color: '#ff5900' }}>Volunteers List</span></h2>
//                                 <div className="circle-01"></div>
//                                 <div className="circle-02"></div>
//                                 <div className="search-wrapper d-flex mb-4" data-aos="zoom-in">
//                                     {/* <input className="form-control rounded-pill" type="search" placeholder="Search Volunteers" aria-label="Search" onChange={handleSearchChange} /> */}
//                                     <input
//                                         className="form-control rounded-pill"
//                                         type="search"
//                                         placeholder="Search Volunteers"
//                                         aria-label="Search"
//                                         onChange={handleSearchChange}
//                                         value={search}
//                                     />
//                                 </div>
//                                 <div className="vollist" ref={vollistRef} data-aos="zoom-in">
//                                     {/* {volunteers.map((volunteerImage, index) => (
//                                         <div key={index} className="block">
//                                             <div className="imgbx">
//                                                 {/* <img src={volunteerImage} className="cover w-100" alt="Volunteer" /> */}
//                                     {/* </div>
//                                             <div className="details">
//                                                 <div className="content">
//                                                     <p>{volunteerImage.firstName} {volunteerImage.lastName}</p>
//                                                     <p>{volunteerImage.address}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))} */}
//                                     {filteredVolunteers.length > 0 ? (
//                                         filteredVolunteers.map((volunteer, index) => (
//                                             <div key={index} className="block">
//                                                 <div className="imgbx">
//                                                     <img src={getVolunteerImage(index)} className="cover w-100" alt="Volunteer" />
//                                                 </div>
//                                                 <div className="details">
//                                                     <div className="content">
//                                                         <p>{volunteer.firstName}</p>
//                                                         <p>{volunteer.id}</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     ) : (
//                                         <p>No volunteers found</p>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//             <ToastContainer />
//         </div>
//     );
// };

// export default Volunteer;

import React, { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import volunteer from "../images/volunter.png";
import m1 from "../images/volunteers/m-1.jpg";
import m2 from "../images/volunteers/m-2.jpg";
import m3 from "../images/volunteers/m-3.jpg";
import m4 from "../images/volunteers/m-4.jpg";
import m5 from "../images/volunteers/m-5.jpg";
import m6 from "../images/volunteers/m-6.jpg";
import VanillaTilt from "vanilla-tilt";
import heart from "../images/volunteers/heart.jpg";
import "./Volunteer.css";
import NavBar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Volunteer = () => {
  const vollistRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setupScrollingEffect();
  }, [search]);

  const volunteers = [
    { firstName: "Ajith Dito", id: "AJMF 2110" },
    { firstName: "Alex", id: "AJMF 2109" },
    { firstName: "Anetter Allwyn", id: "AJMF 1003" },
    { firstName: "Harihara Selvan", id: "AJMF 2121" },
    { firstName: "Jameel", id: "AJMF 2108" },
    { firstName: "Santhanam", id: "AJMF 2107" },
    { firstName: "Sathish Kumar", id: "AJMF 2101" },
    { firstName: "Siva", id: "AJMF 1001" },
    { firstName: "Manikandan", id: "AJMF 2106" },
    { firstName: "Helin", id: "AJMF 2105" },
    { firstName: "Jaivin Raja", id: "AJMF 2104" },
    { firstName: "Robert Gilton", id: "AJMF 1002" },
    { firstName: "Jegan", id: "AJMF 2103" },
    { firstName: "Ruban", id: "AJMF 2102" },
    { firstName: "Albin Mano", id: "AJMF 1004" },
    { firstName: "Vinoth Kumar", id: "AJMF 2112" },
    { firstName: "Antony Raj", id: "AJMF 2202" },
    { firstName: "Satheesh Kumar", id: "AJMF 2111" },
  ];

  const images = [m1, m2, m3, m4, m5, m6];

  const filteredVolunteers = volunteers.filter(
    (volunteer) =>
      volunteer.firstName.toLowerCase().includes(search.toLowerCase()) ||
      volunteer.id.toLowerCase().includes(search.toLowerCase())
  );

  const setupScrollingEffect = () => {
    const list = vollistRef.current;
    let interval;

    const startScroll = () => {
      interval = setInterval(() => {
        list.scrollTop += 1;

        // When reaching the end of the list
        if (list.scrollTop >= list.scrollHeight - list.clientHeight) {
          // Temporarily stop the scrolling
          clearInterval(interval);

          // Smoothly scroll back to the top
          list.scrollTo({
            top: 0,
            behavior: "auto", // Use 'auto' to jump back instantly
          });

          // Restart the scrolling after a short delay
          setTimeout(startScroll, 100); // Adjust the delay as needed
        }
      }, 50);
    };

    const stopScroll = () => {
      clearInterval(interval);
    };

    list.addEventListener("mouseenter", stopScroll);
    list.addEventListener("mouseleave", startScroll);

    startScroll();

    return () => {
      list.removeEventListener("mouseenter", stopScroll);
      list.removeEventListener("mouseleave", startScroll);
      clearInterval(interval);
    };
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const getVolunteerImage = (index) => {
    return images[index % images.length];
  };

  const [isMouseOver, setIsMouseOver] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    VanillaTilt.init(document.querySelector(".card-container"), {
      max: 25,
      speed: 400,
    });
  }, []);

  // Clamp function to restrict values within a range
  const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
  };

  useEffect(() => {
    const lerp = (start, end, t) => start * (1 - t) + end * t;

    const updateCardTransform = () => {
      // const card = document.querySelector('.Vcard');
      // card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    function animateCard() {
      if (!isMouseOver) {
        setRotateX((rotateX) => lerp(rotateX, 0, 0.05));
        setRotateY((rotateY) => lerp(rotateY, 0, 0.05));
      }
      updateCardTransform();
      requestAnimationFrame(animateCard);
    }

    animateCard();
  }, [isMouseOver, rotateX, rotateY]);

  const handleMouseMove = (e) => {
    if (!isMouseOver) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    setRotateY(clamp(mouseX / 10, -15, 15));
    setRotateX(clamp(-mouseY / 10, -15, 15));
  };

  return (
    <div>
      <NavBar />
      <section className="bg-cover hero-section">
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
              <img src={volunteer} className="d-block w-100" alt="volunteer" />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  Join Us <span>Now</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* content */}
      <section className="bg-light text-center p-5">
        <div className="container">
          <h3 data-aos="zoom-in">Why Become a Volunteer?</h3>
          <p data-aos="zoom-in">
            Volunteering allows you to connect to your community and make it a
            better place.
            <br />
            It can benefit you and your family as much as the cause you choose
            to help.
            <br />
            Dedicating your time as a volunteer helps you make new friends,
            expand your network, and boost your social skills.
          </p>
        </div>
      </section>
      {/* Registration */}
      <section className="volunteerS bg-white">
        <div className="aboutV" data-aos="fade-down">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="container bg-light bubbles">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div className="row justify-content-center col-12 mx-auto my-auto">
              {/* card section */}
              <div className="col-lg-6 py-lg-5 mx-auto mb-3">
                <div
                  className="card-container my-auto"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsMouseOver(true)}
                  onMouseLeave={() => setIsMouseOver(false)}
                >
                  <div className="Vcard">
                    <div className="card-contentvol">
                      <h2 className="card-titlevol">Join as a Volunteer</h2>
                      <p className="card-descriptionvol">
                        Reach out to us via Email or WhatsApp to start making a
                        difference.
                      </p>
                      <div
                        className="card-imagevol"
                        style={{ backgroundImage: `url(${heart})` }}
                      ></div>
                      <div className="card-actionsvol py-md-3">
                        <a
                          href="mailto:Ajmfoundation@gmail.com"
                          className="Vbtn btn-secondary"
                        >
                          Email Us
                        </a>
                        <a
                          href="https://wa.me/9790179914"
                          className="Vbtn btn-primary"
                        >
                          WhatsApp Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="circle-01"></div>
                            <div className="circle-02"></div>
                            <div className="circle-03"></div>
                            <div className="circle-04"></div>
                            <div className="circle-05"></div> */}
              </div>
              {/* volunteers list */}
              <div className="col-lg-6 mt-md-5 mx-auto list">
                <div className="container vlist mb-sm-2 my-auto">
                  <h2 className="card-titlevol text-center" data-aos="zoom-in">
                    <span>Volunteers List</span>
                  </h2>
                  <div
                    className="search-wrapper d-flex mb-3"
                    data-aos="zoom-in"
                  >
                    <input
                      className="form-control rounded-pill"
                      type="search"
                      placeholder="Search Volunteers"
                      aria-label="Search"
                      onChange={handleSearchChange}
                      value={search}
                    />
                  </div>
                  <div className="vollist" ref={vollistRef} data-aos="zoom-in">
                    {filteredVolunteers.length > 0 ? (
                      filteredVolunteers.map((volunteer, index) => (
                        <div key={index} className="block my-auto">
                          <div className="imgbx">
                            <img
                              src={getVolunteerImage(index)}
                              className="cover w-100"
                              alt="Volunteer"
                            />
                          </div>
                          <div className="details mt-3">
                            <div className="content">
                              <p>{volunteer.firstName}</p>
                              <p>{volunteer.id}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No volunteers found</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Volunteer;
