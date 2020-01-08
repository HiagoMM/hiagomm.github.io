import React, { useState, useEffect } from "react";
import posed from "react-pose";
import Divider from "@material-ui/core/Divider";
import "./home.sass";
import "react-circular-progressbar/dist/styles.css";
import { LinearProgress } from "@material-ui/core";
import TimeLine from "../../components/timeline/timeline";
import { LANGUAGE_FRAMEWORKS } from "./languageFrameworks";
import { CircularProgressbar } from "react-circular-progressbar";
const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const Div = posed.div({
  enter: { y: 0, x: 0, opacity: 1 },
  exit: { y: -5, x: -5, opacity: 0 }
});

const H1 = posed.h1({
  transition: { duration: 10000 }
});

export default () => {
  // const [progressValues, setProgressValue] = useState({
  //   java: 0,
  //   javascript: 0,
  //   python: 0
  // });
  // useEffect(() => {
  //   setTimeout(() => {
  //     setProgressValue({
  //       java: 75,
  //       javascript: 70,
  //       python: 60
  //     });
  //   }, 1700);
  // }, []);
  return (
    <div>
      <H1>Sobre</H1>
      <Container>
        <Div>
          <b>Oi meu nome é Hiago</b>
        </Div>
        <Div>
          Atualmente sou graduando em sistemas de informação, apaixonado pelo
          curso e por tecnologia, ex monitor de programação I e atualmente
          monitor de programação II também sou estagiário do Laboratório de
          tecnologia de informação da Unifacisa
        </Div>

        <div className="divider">
          <Divider />
        </div>
        <H1>Dados pessoais</H1>
        <Container className="dadosPessoais">
          <Div className="side">
            <Div className="element" id="titles">
              <p>NOME</p>
              <p>ENDEREÇO</p>
              <p>NASCIMENTO</p>
              EMAIL
            </Div>
            <Div className="element">
              <p>Hiago Marques De Medeiros</p>
              <p> Campina Grande, Paraíba</p>
              <p> 06/11/2000</p>
              <a href="mailto:Hiagomarquesdemedeiros@gmail.com">
                Hiagomarquesdemedeiros@gmail.com
              </a>
            </Div>
          </Div>
        </Container>
        <H1>Proficiências</H1>
        <Container className="language-frameworks">
          <Div className="language">
            {LANGUAGE_FRAMEWORKS.language.map((lang, index) => {
              return (
                <Div className="element" key={index}>
                  <p>{lang.name}</p>
                  <LinearProgress variant="determinate" value={lang.value} />
                </Div>
              );
            })}
          </Div>
          <Divider orientation="vertical" className="vertical-divider" />
          <Div className="frameworks">
            {LANGUAGE_FRAMEWORKS.frameworks.map((frame, index) => {
              return (
                <Div className="element" key={index}>
                  <p>{frame.name}</p>
                  <CircularProgressbar
                    className="progressBar"
                    value={frame.value}
                    text={`${frame.value}%`}
                  />
                </Div>
              );
            })}
          </Div>
        </Container>
        <Div>
          <H1>Experiências</H1>
          <TimeLine />
        </Div>
      </Container>
    </div>
  );
};
