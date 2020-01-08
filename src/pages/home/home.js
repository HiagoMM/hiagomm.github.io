import React, { useState, useEffect } from "react";
import posed from "react-pose";
import Divider from "@material-ui/core/Divider";
import "./home.sass";
import { LinearProgress } from "@material-ui/core";
import TimeLine from "../../components/timeline/timeline";

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
  const [progressValues, setProgressValue] = useState({
    java: 0,
    javascript: 0
  });
  useEffect(() => {
    setProgressValue({
      java: 75,
      javascript: 60
    });
  }, []);
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
          <Div className="side right">
            <p>Java</p>
            <LinearProgress
              variant="determinate"
              color="primary"
              value={progressValues.java}
            />
            <p>JavaScript</p>
            <LinearProgress
              variant="determinate"
              value={progressValues.javascript}
            />
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
