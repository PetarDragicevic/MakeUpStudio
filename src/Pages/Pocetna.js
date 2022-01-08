import React, {useEffect} from "react";
import NavLayout from "../HomeComponents/NavLayout";
import Wallpaper from "../HomeComponents/Wallpaper";
import ONama from "../HomeComponents/ONama";
import CutCover from "../HomeComponents/CutCover";
import Usluge from "../HomeComponents/Usluge";
import Booking from "../HomeComponents/Booking";
import SimpleMap from "../HomeComponents/SimpleMap";
import Footer from "../HomeComponents/Footer";

import "./Pocetna.css";

function Pocetna() {


  useEffect(() => {
    window.scrollTo(0,0);
});

  return (
    <div className="Pocetna">
      <NavLayout />
      <Wallpaper />
      <ONama />
      <CutCover />
      <Usluge />
      <Booking />
      <SimpleMap />
      <Footer />
    </div>
  );
}

export default Pocetna;
