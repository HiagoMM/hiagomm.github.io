import React from "react";
import PosedRouter from "./components/posedRouter";
import Home from "./pages/home.js";
import About from "./pages/about";
import "./App.sass";
import Sidebar from "./components/sidebar/sidebar";

const App = () => (
  <Sidebar>
    <PosedRouter>
      <Home path="/" />
      <About path="/about" />
    </PosedRouter>
  </Sidebar>
);
export default App;
