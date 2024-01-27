import './App.css';
import Homepage from './components/Homepage';
import Booking from './components/Booking';
import Terms from './components/Terms';
import Sponsor from './components/Sponsor';
import Privacy from './components/Privacy';
import Footer from './components/Footer';
import Payments from './components/Payments';
import Speaker from './components/Speaker';
import Header from './components/Header';
import Speakerlist from './components/Speakerlist';
import About from './components/About';
import Insights from './components/Insights';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <div>
      <Header/>
      <Homepage/>
      <About/>
      <Speaker/>
      
      <Speakerlist/>
      <Footer/>
    </div>
  );
}

export default App;
