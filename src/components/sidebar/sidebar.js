import React from "react";
import Paper from "@material-ui/core/Paper";
import "./sidebar.sass";
import { Avatar, Button } from "@material-ui/core";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import GitHub from "@material-ui/icons/GitHub";
import { LINKS } from "./links";

export default function navBar({ children }) {
  const openLink = link => window.open(link);

  return (
    <Paper elevation={4} className="container">
      <div className="perfil">
        <Avatar
          className="avatar"
          src="https://avatars3.githubusercontent.com/u/43700273?s=400&u=8d1c6d38c0136e0038f03f2f664b08ad491e1aa2&v=4"
        ></Avatar>
        <div>
          <h2>HIAGO MARQUES DE MEDEIROS</h2>
          <h5>Desenvolvedor De Software</h5>
        </div>
        <div className="icons">
          <LinkedIn onClick={() => openLink(LINKS.linkedin)} className="icon" />
          <Facebook onClick={() => openLink(LINKS.facebook)} className="icon" />
          <Instagram
            onClick={() => openLink(LINKS.instagram)}
            className="icon"
          />
          <GitHub onClick={() => openLink(LINKS.github)} className="icon" />
        </div>
      </div>

      <div className="curriculo-container">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => openLink(LINKS.curriculo)}
        >
          VER CURRÍCULO
        </Button>
      </div>
    </Paper>
  );
}
