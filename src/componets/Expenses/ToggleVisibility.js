

import React, { useState } from "react";

export default function ToggleVisibility({ children }) {
  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Hide Component" : "Show Component";

  return (
    <div className="btn" onClick={toggleShow}>
      {show && children}
      {buttonText}
    </div>
  );
}
