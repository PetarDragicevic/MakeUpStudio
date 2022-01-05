import React from "react";
import NavLayout from "../HomeComponents/NavLayout";
import Cenovnik from "../CenovnikComponents/Cenovnik";
import Footer from "../HomeComponents/Footer";
import CutCover from "../HomeComponents/CutCover";
import "./CenovnikPage.css";

function CenovnikPage() {
  return (
    <div className="cenovnik-page">
      <NavLayout></NavLayout>
      <Cenovnik></Cenovnik>
      <CutCover></CutCover>
      <Footer></Footer>
    </div>
  );
}

export default CenovnikPage;
