import React from "react";
import posed from "react-pose";
import Divider from "@material-ui/core/Divider";
import "./home.sass";

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const Divx = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});
const Divy = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

export default () => (
  <div>
    <h1>Sobre</h1>
    <Container>
      <Divx>
        <b>Oi meu nome é Hiago</b>
      </Divx>
      <Divy>
        Atualmente sou graduando em sistemas de informação, apaixonado pelo
        curso e por tecnologia, ex monitor de programação I e atualmente monitor
        de programação II também sou estagiário do Laboratório de tecnologia de
        informação da Unifacisa
      </Divy>
      <div className="divider">
        <Divider />
      </div>
      <h1>Dados pessoais</h1>
      <Container className="dadosPessoais">
        <Divy className="side">
          <Divx className="element" id="titles">
            <p>NOME</p>
            <p>ENDEREÇO</p>
            <p>NASCIMENTO</p>
            EMAIL
          </Divx>
          <Divx className="element">
            <p>Hiago Marques De Medeiros</p>
            <p> Campina Grande, Paraíba</p>
            <p> 06/11/2000</p>
            <a href="mailto:Hiagomarquesdemedeiros@gmail.com">
              Hiagomarquesdemedeiros@gmail.com
            </a>
          </Divx>
        </Divy>
        <Divy className="side"></Divy>
      </Container>
    </Container>
  </div>
);
