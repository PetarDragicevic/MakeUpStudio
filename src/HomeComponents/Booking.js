import React from "react";
import "./Booking.css";
import { Icon } from "@iconify/react";

function Booking() {
  return (
    <div className="booking">
      <ul>
        <li>
          <Icon className="phoneIcon" icon="carbon:phone-voice-filled" />
        </li>
        <li>Zakazite svoj termin</li>
        <li>
          <a>+381 644543940</a>
        </li>
        <li>
          <a>+381655516747</a>
        </li>
      </ul>
    </div>
  );
}

export default Booking;
