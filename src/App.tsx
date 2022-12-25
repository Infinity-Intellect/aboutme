import React from 'react';
import Skills from './sections/Skills';
import './App.css';
import Header from './Header';
import Landing from './sections/Landing';
import WorkAndEducation from './sections/WorkAndEducation';
import Contact from './sections/Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <WorkAndEducation/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
