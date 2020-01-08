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
          <Divx className="element">NOME ENDEREÇO NASCIMENTO EMAIL</Divx>
          <Divx className="element">
            Hiago Marques De Medeiros
            <br /> Campina Grande, Paraíba <br />
            06/11/2000 <br />
            <a href="mailto:Hiagomarquesdemedeiros@gmail.com">
              Hiagomarquesdemedeiros@gmail.com
            </a>
          </Divx>
        </Divy>
        <Divider orientation="vertical" />
        <Divy className="side">teste</Divy>
      </Container>
    </Container>
  </div>
);
