import React from "react";
import Footer from "../HomeComponents/Footer";
import KontaktLogic from "../HomeComponents/KontaktLogic";
import Kontakt from "../HomeComponents/KontaktLogic";
import NavLayout from "../HomeComponents/NavLayout";
import Wallpaper from "../HomeComponents/Wallpaper";
import "./KontaktPage.css";

function KontaktPage() {
  return (
    <div className="kontakt-page">
      <NavLayout></NavLayout>
      
      <KontaktLogic></KontaktLogic>
      <Footer></Footer>
    </div>
  );
}

export default KontaktPage;
