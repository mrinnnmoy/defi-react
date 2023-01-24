import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Developer from "./components/Developer/Developer";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Hero />
      <About />
      <Developer />
      <Subscribe />
      <Footer /> */}
      <Navbar />
      <Hero />
      <About />
      <Developer />
    </div>
  );
};

export default App;
