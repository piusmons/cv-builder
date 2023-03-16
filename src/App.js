import logo from './logo.svg';

import {useState} from "react";
import BioData from './BioData.js'
import Education from './Education.js'
import Experience from './Experience.js'
import Header from './Header.js'


function App() {
  return (
    <div >
      <Header />
      <BioData />
      <Education />
      <Experience />
      
      
    </div>
  );
}

export default App;
