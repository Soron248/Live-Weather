import React, { useState } from 'react';
import './App.css';
// import axios from 'axios';

function App() {
  const [wdata, setwdata] = useState([{}])
  const [wdes, setwdes] = useState([{}])
  const [wnm, setwnm] = useState([{}])
  const [city, setcity] = useState("")
  const getWeather = (event) => {
    if (event.key === "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cfa382dad81813290b7eb63ea26f4354`)
      .then(res =>res.json())
      .then( data => {
        setwdata(data.main)
        setwdes(data.weather)
        setwnm(data)
      },setcity(""))
      .catch(err => err.json())
    }
  }
  return (
    <div className="container">
      <div className="icon">
      <i className="fas fa-sun" style={{color: "#FDB813" }}></i>
      {/* <i className="fas fa-cloud" style={{color: "#a9a9a9" }}></i>
      <i className="far fa-snowflake" style={{color: "#00ffff" }}></i>
      <i class="fas fa-cloud-rain" style={{color: "#80daeb" }}></i> */}
      </div>
      <div className="srch">
        <input type="search"
         placeholder="Location" 
         onChange={(e)=> setcity(e.target.value)} 
         value={city}
         onKeyPress={getWeather} />
      </div>
      {wdata==undefined || wnm==undefined || wdes==undefined ? (
        <p>NO data found !</p>
      ) : (
        <div className="inform">
        <p>{wdes[0].main}</p>
        <h1>{Math.round(wdata.temp)}°c</h1>
        <h3>{wnm.name}</h3>
        <p>Humidity {wdata.humidity}</p>
        </div>
      ) }
      </div>
  );
}

export default App;
