import "./App.css";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Speaker from "./components/Speaker";
import Speakerlist from "./components/Speakerlist";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <div>
      <Homepage />
      <About />
      <Speaker />
      <Speakerlist />
      <Footer />
    </div>
  );
}

export default App;
