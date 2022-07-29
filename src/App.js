import React from "react";
import Navbar from "./Component/Header/Header";
import Footers from "./Component/Footer/Footer"
import About from "./Page/About/About";
import { Skills } from "./Page/Skills/Skills";

function App() {
  return (
    <div >
    <Navbar/>
    <About/>
    <Skills/>
    <Footers/>
    </div>
  );
}

export default App;
