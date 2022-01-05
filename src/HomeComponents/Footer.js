import React from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div>
          <ul>
            <h1>Kontakt</h1>

            <li>
              <a>Beaty Studio Jelena Dragicevic</a>
            </li>
            <li>
              <a>Učitelj Tasina 14a Niš</a>
            </li>
            <li>
              <a>+381644543940</a>
            </li>
            <li>
              <a href="https://outlook.office.com" target="_blank">
                petar.dragicevic@hotmail.com
              </a>
            </li>
          </ul>
          <Icon className="phoneicon" icon="ic:outline-watch-later" />
          <div className="workingtime">
            <ul>
              <li>Pon-Pet: 09-20h</li>
              <li>Sub: 09-16h</li>
              <li>Ned: po zakazivanju</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2020 by Petar Dragicevic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
