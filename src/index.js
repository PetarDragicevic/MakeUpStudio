import React from "react";
import ReactDOM from "react-dom";
import Pocetna from "./Pages/Pocetna";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CenovnikPage from "./Pages/CenovnikPage";
import KontaktPage from "./Pages/KontaktPage.js";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Pocetna />} />
      <Route path="/cenovnik" element={<CenovnikPage />} /> 
      <Route path="/kontakt" element={<KontaktPage />} /> 
    </Routes>
  </Router>,
  document.getElementById("root")
);
// ovo je samo comentar