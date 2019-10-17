import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import LeftNav from './Components/LeftNav/LeftNav';

function App() {
  return (
    <div className="App">
      <Nav />
        <p>
          React and TypeScript content
        </p>

        <p>
          Data from API call lands here
        </p>
      <LeftNav />
    </div>
  );
}

export default App;
