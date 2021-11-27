import React from 'react';
import '../src/_settings.scss';
import { gsap } from 'gsap';
import { Timeline } from 'gsap/gsap-core';

// import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Accueil from '../src/Components/Pages/Accueil';
import QuiSuisJe from '../src/Components/Pages/QuiSuisJe';
import Projets from '../src/Components/Pages/Projets';
import Contact from '../src/Components/Pages/Contact';


function App() {

  let timeline = gsap.Timeline

  return (
    <div className="App" timeline={Timeline}>
        <Routes>
          <Route exact path="/" element={<Accueil/>} Timeline={timeline} />
          <Route path="/QuiSuisJe" element={<QuiSuisJe/>}  />
          <Route path="/Projets" element={<Projets/>}  />
          <Route path="/Contact" element={<Contact/>}  />
        </Routes>
    </div>
  );
}

export default App;
