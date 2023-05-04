import React, { useState } from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import About from "./About/About.jsx";
import Highlights from "./Highlights/Highlights.jsx";

const Home = () => (
  <div>
    <Header />
    <About />
    <Main />
    <Highlights />
  </div>
);

export default Home;
