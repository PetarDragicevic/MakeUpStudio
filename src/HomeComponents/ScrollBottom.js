import React from "react";
import { useWindowScroll } from "react-use";

function ScrollBottom() {
  const { y: pageYOffset } = useWindowScroll();
  return (
    <div>
      <i></i>
    </div>
  );
}

export default ScrollBottom;
