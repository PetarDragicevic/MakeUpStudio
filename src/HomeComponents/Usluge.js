import React from "react";
import "./Usluge.css";

function Usluge() {
  return (
    <div className="usluge">
      <h1>USLUGE</h1>
      <ul className="usluge-showcase clearfix">
        <li>
          <figure className="usluge-photo">
            <img className="img1" src="content/makeup.jpg"></img>
          </figure>
        </li>
        <li>
          <figure className="usluge-photo">
            <a href="https://www.facebook.com/">
              <img className="img2" src="content/nails.jpg"></img>
            </a>
          </figure>
        </li>
        <li>
          <figure className="usluge-photo">
            <img className="img3" src="content/2.jpg"></img>
          </figure>
        </li>
        <li>
          <figure className="usluge-photo">
            <img className="img4" src="content/lasser.jpg"></img>
          </figure>
        </li>
      </ul>
    </div>
  );
}

export default Usluge;
