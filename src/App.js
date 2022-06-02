import logo from './logo.svg';
import './App.css';
import "@navikt/ds-css";
import { Alert, Button, Heading } from "@navikt/ds-react";
import React, { useState } from 'react';


function App() {
  return (
    <div className="kvittering">
      <h1>Søknaden er mottatt</h1>
       <p>En kvittering er sendt til <a href = "www.altinn.no">meldingsboksen deres i Altinn.</a>
       Den ansatte har også fått melding om at søknaden er sendt. <br></br> Trenger du å kntakte oss, er det tilstrekkelig å oppgi fødselsnummeret til den ansatte. </p> <br></br>


      <Alert
  fullWidth={true}
  inline={false}
  size="medium"
  variant="info"
>
  Vi anbefaler at bedriften <a href = "refusjonskrav.html">sender selve refusjonskravet</a> før denne <br></br> søknaden er ferdig behandlet. Da unngår dere å oversitte fristen, som <br></br> er tre måneder.

  
 
</Alert>

  <p>
    <a href = "refusjonskrav.html">Send krav om refusjon</a> <br></br>
    <a href = "loggut.html">Logg ut</a> <br></br>
    <a href = "arbeidsgiver.html">Min side arbeidsgiver</a>
  </p>


    </div>
  );
}

export default App;

