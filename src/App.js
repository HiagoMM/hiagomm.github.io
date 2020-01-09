import React from "react";
import PosedRouter from "./components/posedRouter";
import Home from "./pages/home/home.js";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";
import posed from "react-pose";
import "./App.sass";
import Sidebar from "./components/sidebar/sidebar";
import { ThemeProvider, createMuiTheme, Paper } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
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

const Div = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});
const App = () => {
  function goToTop() {
    window.scrollTo({ top: 0 });
  }
  return (
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
          <div className="return-top-container">
            <Div>
              <KeyboardArrowUpIcon
                onClick={() => goToTop()}
                className="return-top"
              />
            </Div>
          </div>
        </Paper>
      </div>
      <div className="triangulo" />
      <div className="traco" />
    </ThemeProvider>
  );
};
export default App;
