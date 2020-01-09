import React from "react";
import posed from "react-pose";
import "./contact.sass";
import { TextField, Button } from "@material-ui/core";

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

export default () => {
  function sendMail() {
    var link =
      "mailto:hiagomarquesdemedeiros@gmail.com" +
      "?subject=" +
      escape(document.getElementById("mySubject").value) +
      "&body=" +
      escape(document.getElementById("myText").value);
    window.location.href = link;
  }
  return (
    <Container className="email-container">
      <TextField
        id="mySubject"
        className="input"
        label="Assunto"
        variant="outlined"
      />
      <TextField
        className="input"
        label="Texto"
        multiline
        id="myText"
        rows="9"
        variant="outlined"
      />
      <Button onClick={() => sendMail()} color="secondary" variant="contained">
        Enviar
      </Button>
    </Container>
  );
};
