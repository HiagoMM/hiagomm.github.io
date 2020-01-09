import React from "react";
import posed from "react-pose";
import { PROJECTS } from "./data";
import "./project.sass";

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const Div = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});

export default () => (
  <Container className="proj-container">
    {PROJECTS.map((proj, index) => {
      return (
        <Div
          style={{
            color: proj.color,
            backgroundImage: `url(${proj.background})`
          }}
          key={index}
          onClick={() => window.open(proj.url)}
          className="proj"
        >
          {/* {proj.name} */}
        </Div>
      );
    })}
  </Container>
);
