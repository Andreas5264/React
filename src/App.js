import logo from './logo.svg';
import './App.css';
import "@navikt/ds-css";
import { Alert, Button } from "@navikt/ds-react";
import React, { useState } from 'react';


function App() {
  return (
    <div className="App">
      <h1>Søknaden er mottatt</h1>
      


      <Alert
  fullWidth={false}
  inline={false}
  size="medium"
  variant="info"
>
  Vi anbefaler at bedriften <a href = "https://l5xsun.axshare.com/#id=n9fbtx&p=gravide_-_krav">sender selve refusjonskravet</a> før denne <br></br> søknaden er ferdig behandlet. Da unngår dere å oversitte fristen, som <br></br> er tre måneder.
</Alert>



    </div>
  );
}

export default App;

