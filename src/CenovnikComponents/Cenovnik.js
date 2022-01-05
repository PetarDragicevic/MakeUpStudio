import React, {useEffect} from "react";
import "./Cenovnik.css";

function Cenovnik() {

    useEffect(() => {
        window.scrollTo(0,0);
    });

    return (
        <div className="cenovnik">
            <h1>Cenovnik</h1>
            <img src="../content/cene.jpg"></img>
        </div>
    )
}

export default Cenovnik;