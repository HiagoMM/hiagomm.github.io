import React from "react";
import Paper from "@material-ui/core/Paper";
import "./sidebar.sass";
import { Avatar, Button } from "@material-ui/core";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import GitHub from "@material-ui/icons/GitHub";

export default function navBar({ children }) {
  return (
    <Paper elevation={4} className="container">
      <div className="perfil">
        <Avatar
          className="avatar"
          src="https://avatars1.githubusercontent.com/u/43700273?s=400&u=22aa54dd4abe8ffe9dcb7d3a7067bd424d848bfa&v=4"
        ></Avatar>
        <div>
          <h2>HIAGO MARQUES DE MEDEIROS</h2>
          <h5>Desenvolvedor De Software</h5>
        </div>
        <div className="icons">
          <LinkedIn className="icon" />
          <Facebook className="icon" />
          <Instagram className="icon" />
          <GitHub className="icon" />
        </div>
      </div>

      <div className="curriculo-container">
        <Button variant="contained" color="secondary">
          VER CURRÍCULO
        </Button>
      </div>
    </Paper>
  );
}
