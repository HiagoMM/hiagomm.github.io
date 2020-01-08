import React from "react";
import "./header.sass";
import { Button } from "@material-ui/core";
import { navigate } from "@reach/router";

export default function Header() {
  return (
    <div className="header-container">
      <Button color="primary" variant="outlined" onClick={() => navigate("/")}>
        home
      </Button>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => navigate("/contact")}
      >
        contato
      </Button>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => navigate("/projects")}
      >
        projetos
      </Button>
    </div>
  );
}
