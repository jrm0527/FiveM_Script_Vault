import React, { useState } from "react";
// import Header from "../../Header/Header.jsx";
import Main from "./Main/Main.jsx";
import About from "./About/About.jsx";
import Highlights from "./Highlights/Highlights.jsx";

const Home = ({ scripts }) => (
  <div>
    {/* <Header /> */}
    <About />
    <Main scripts={scripts} />
    <Highlights />
  </div>
);

export default Home;
