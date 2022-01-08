import React, {useEffect} from "react";
import ValidateInfo from "./ValidateInfo";
import "./KontaktLogic.css"



function KontaktLogic() {

  useEffect(() => {
    window.scrollTo(0,0);
});
  return (
    <div className="form-content">
      <img src="content/wallpaper.jpg"></img>
      <form className="form">
        <h1>Kontakt informacije</h1>
        <div className="form-inputs">
          <label htmlFor="ime" className="form-label">
            Ime
            <input
              id="ime"
              type="text"
              name="ime"
              className="form-input"
              placeholder="Vase ime"
            ></input>
          </label>
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Vas email"
            ></input>
          </label>
        </div>
        <div className="form-inputs-comment">
          <label htmlFor="comment" className="form-label">
            Tekst poruke
            <input
              id="comment"
              type="comment"
              name="comment"
              className="form-input"
              placeholder=""
            ></input>
          </label>
        </div>
        <button className="form-input-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default KontaktLogic;
