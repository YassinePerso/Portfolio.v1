import React from 'react';
import './App.css';

import Header from '../src/Components/Header';
import Title from '../src/Components/Title'
import Footer from '../src/Components/Footer'
// import Cursor from './Components/Cursor';

function App() {
  return (
    <div className="App">
      {/* <Cursor /> */}
      <Header />
      <Title />
      <Footer />
    </div>
  );
}

export default App;
