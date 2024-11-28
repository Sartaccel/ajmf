import React from "react";
import Home from "./components/home/Home";
import Events from "./components/event/Events";
import Contact from "./components/contact/Contact";
import Volunteer from "./components/volunteer/Volunteer";
import PartnersWithUs from "./components/partners/PartnersWithUs";
import Donate from "./components/donate/Donate";
import Activities from "./components/activite/Activities";
import AFI from "./components/accdientFreeIndia/AFI";
import TFK from "./components/trashFreeKk/TFK";
import OVOC from "./components/oneVillageOneCA/OVOC";
import OFOE from "./components/oneFamilyOneEnterprener/OFOE";
import WEP from "./components/womenEmpowerment/WEP";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SEK from "./components/Save Earth Kanyakumari/SEK";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partner" element={<PartnersWithUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/freeIndia" element={<AFI />} />
          <Route path="/freeKk" element={<TFK />} />
          <Route path="/oneCa" element={<OVOC />} />
          <Route path="/oneFamily" element={<OFOE />} />
          <Route path="/womenep" element={<WEP />} />
          <Route path="/saveEarth" element={<SEK />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
