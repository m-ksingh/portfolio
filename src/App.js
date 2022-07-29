import React from "react";
import Navbar from "./Component/Header/Header";
import Footers from "./Component/Footer/Footer"
import About from "./Page/About/About";
import { Skills } from "./Page/Skills/Skills";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div >
      <Router>
      <Navbar/>
    <About/>
    <Skills/>
    <Footers/>
      </Router>
  
    </div>
  );
}

export default App;
