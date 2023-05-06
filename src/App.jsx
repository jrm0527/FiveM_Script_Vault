import React, { useState, useEffect } from "react";
import Home from "./components/pages/Home/Home.jsx";
import Admin from "./components/pages/Admin/Admin.jsx";
import Scripts from "./components/pages/Scripts/Scripts.jsx";
import Login from "./components/pages/Login/Login.jsx";
import Register from "./components/pages/Register/Register.jsx";
import Header from "./components/Header/Header.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [scripts, setScripts] = useState([]);
  const [currentScript, setCurrentScript] = useState(0);
  const [scriptUpdate, setScriptUpdate] = useState(0);

  useEffect(() => {
    const url = "http://localhost:8000/api/scripts";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setScripts(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [scriptUpdate]);

  const adminProps = {
    setCurrentScript,
    currentScript,
    scripts,
    setScriptUpdate,
    scriptUpdate,
  };

  if (scripts[0]) {
    return (
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home scripts={scripts} />} />
          <Route path="/scripts" element={<Scripts scripts={scripts} />} />
          <Route path="/admin" element={<Admin {...adminProps} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
      // <Home />
    );
  }
};

export default App;
