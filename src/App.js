import React from "react";
import PosedRouter from "./components/posedRouter";
import Home from "./pages/home/home.js";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";
import "./App.sass";
import Sidebar from "./components/sidebar/sidebar";
import { ThemeProvider, createMuiTheme, Paper } from "@material-ui/core";
import Header from "./components/header/header";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0f86d1"
    },
    secondary: {
      main: "#000000"
    }
  },
  status: {
    danger: "orange"
  }
});
const App = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <div className="main-container">
      <Sidebar></Sidebar>
      <Paper elevation={4} className="content">
        <PosedRouter>
          <Home path="/" />
          <Contact path="/contact" />
          <Projects path="/projects" />
        </PosedRouter>
      </Paper>
    </div>
    <div className="triangulo" />
    <div className="traco" />
    <div
      style={{
        zIndex: 10,
        width: "100%",
        height: "100%"
      }}
    >
      {" "}
      working in progress{" "}
    </div>
  </ThemeProvider>
);
export default App;
