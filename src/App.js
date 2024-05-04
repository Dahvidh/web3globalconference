import "./App.css";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Speaker from "./components/Speaker";
import About from "./components/About";
import Reasons from "./components/Reasons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <div>
      <Homepage />
      <About />
    <Reasons />
      <Speaker />
      <Footer />
    </div>
  );
}

export default App;
