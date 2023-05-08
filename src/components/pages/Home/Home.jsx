import React from "react";
import Main from "./Main/Main.jsx";
import About from "./About/About.jsx";
import Highlights from "./Highlights/Highlights.jsx";

const Home = ({ scripts }) => (
  <div>
    <About />
    <Main scripts={scripts} />
    <Highlights />
  </div>
);

export default Home;
