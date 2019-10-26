import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import LeftNav from './Components/LeftNav/LeftNav';
import MainCard from './Components/MainCards/MainCard';
import AJAXcontent from './Components/AJAXcontent/AJAXcontent';

function App() {
  return (
    <div className="App">
      <Nav />
      <LeftNav />
      <MainCard />
      <AJAXcontent />
    </div>
  );
}

export default App;
