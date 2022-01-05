import React from "react";
import "./NavLayout.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

function NavLayout() {
  const linkStyle = {
    color: "white",
  };
  return (
    <div className="row sticky">
      <img className="logo" src="/content/logo1.jpg" />
      <div>
        <ul className="SocialIcons">
          <li className="locationIcon">
            <a
              href="https://www.google.com/maps/dir//U%C4%8Ditelj+Tasina+14,+Ni%C5%A1/@43.3153012,21.8953993,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4755b0b031c6ddc1:0x30d52252e1a11a6f!2m2!1d21.8965462!2d43.315833?hl=sr"
              target="_blank"
            >
              <Icon className="addres" icon="ion:location-outline" />
            </a>
            <a className="addressText">Učitelj Tasina 14a Niš</a>
          </li>
          <li className="facebookIcon">
            <a href="https://www.facebook.com/" target="_blank">
              <Icon icon="ion:logo-facebook" />
            </a>
          </li>
          <li className="instagramIcon">
            <a href="https://www.instagram.com/" target="_blank">
              {" "}
              <Icon icon="ion:logo-instagram" />
            </a>
          </li>
          <li className="youtubeIcon">
            <a href="https://www.youtube.com/" target="_blank">
              {" "}
              <Icon icon="ion:logo-youtube" />
            </a>
          </li>
        </ul>
      </div>

      <ul className="main-nav js--main-nav">
        <Link style={linkStyle} to="/">
          <li>
            <a>Pocetna</a>
          </li>
        </Link>
        <li>
          <Scroll to={"usluge"} smooth={true} duration={1000}>
            Usluge
          </Scroll>
        </li>

        <li>
          <Scroll to="footer" smooth={true} duration={1000}>
            Kontakt
          </Scroll>
        </li>

        <Link style={linkStyle} to="/cenovnik">
          <li>
            <a>cenovnik</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default NavLayout;
