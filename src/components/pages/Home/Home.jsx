import React, { useState } from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import About from "./About/About.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Main />
    </div>
  );
};

export default Home;
