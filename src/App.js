import React from 'react';
import './App.css';

import Header from '../src/Components/Header';
// import Title from '../src/Components/Title'
import Footer from '../src/Components/Footer'
import { Route, Routes } from 'react-router-dom';
import Accueil from '../src/Components/Pages/Accueil';
import QuiSuisJe from '../src/Components/Pages/QuiSuisJe';
import Projets from '../src/Components/Pages/Projets';
import Contact from '../src/Components/Pages/Contact';

import gsap from 'gsap';
import Title from './Components/Title';


function App() {

  let timeline = gsap.timeline()

  return (
    <div className="App">
      <Header timeline={timeline} />
      <Title timeline={timeline} />
        <Routes>
          <Route exact path="/" component={Accueil}  />
          <Route path="/QuiSuisJe" component={QuiSuisJe}  />
          <Route path="/Projets" component={Projets}  />
          <Route path="/Contact" component={Contact}  />
        </Routes>
      <Footer timeline={timeline} />
    </div>
  );
}

export default App;
