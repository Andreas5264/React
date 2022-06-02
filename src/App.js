import logo from './logo.svg';
import './App.css';
import "@navikt/ds-css";
import { Alert, Button } from "@navikt/ds-react";
import React, { useState } from 'react';


function gange(a, b){
  return a * b
}


function App() {
  const [count, setCount] = useState(0);
  const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

  let text = "";
  for (let i = 0; i < 14; i++) {
    text += <br></br>;
  }

  return (
    <div className="App">
      
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>


      {count % 2 == 1 &&
        <div>stop!!!</div>
      }
      
    </div>
  );
}

export default App;

