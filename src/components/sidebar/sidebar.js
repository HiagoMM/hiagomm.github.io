import React from "react";
import posed from "react-pose";
import "./sidebar.sass";

export default function navBar({ children }) {
  const Button = posed.div({
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.8 }
  });
  return (
    <div className="container">
      <div>{children}</div>
    </div>
  );
}
