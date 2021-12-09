import React from 'react';
import '../src/_settings.scss';

import { Route, Routes } from 'react-router-dom';
import Accueil from '../src/Components/Pages/Accueil';
import QuiSuisJe from '../src/Components/Pages/QuiSuisJe';
import Projets from '../src/Components/Pages/Projets';
import Contact from '../src/Components/Pages/Contact';
import Cursor from './Components/Cursor/Cursor';


function App() {


  return (
    <div className="App">
      <Cursor />
        <Routes>
          <Route exact path="/" element={<Accueil/>}/>
          <Route path="/QuiSuisJe" element={<QuiSuisJe/>}  />
          <Route path="/Projets" element={<Projets/>}  />
          <Route path="/Contact" element={<Contact/>}  />
        </Routes>
    </div>
  );
}

export default App;
