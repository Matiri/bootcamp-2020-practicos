import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Button variant="contained"><a href='https://github.com/Sebasgg19'>Sebastian Gandini</a></Button>
      </header>
    </div>
  );
}

export default App;
