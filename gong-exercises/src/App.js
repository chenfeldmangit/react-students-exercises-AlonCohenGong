import React from 'react';
import Navigation from './components/Navigation';
import News from './components/News';
import Trends from './components/Trends';
import './css/main.css';

import './App.css';

function App() {
  return (
    <div className="App main">
      <h1>
        Gong React Tweeter !
      </h1>
      <div className="main">
        <Navigation />
        <News />
        <Trends />
        
      </div>  
    </div>
  );
}

export default App;
