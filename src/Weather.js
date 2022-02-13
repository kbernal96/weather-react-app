import axios from "axios";
import { BallTriangle } from  'react-loader-spinner';
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, displayData] = useState({ load:false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    displayData({
      load:true,
      coordinates: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000), 
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
    });
  
  }

  function search(){
    const apiKey = `18f68700369f5317f6cbee485851bf9b`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityValue(event) {
    setCity(event.target.value);
  }


if (weatherData.load) {
  return (
    <div className="Weather">
      <div className="container" >
       
        <div className="search-container">
          <form action="/search" method="get" className="mb-3" onSubmit={handleSubmit}>
            <input  type="search" className="search" id="searchleft" name="q" placeholder="Enter a city..." onChange={handleCityValue}/>
            <label className="button searchbutton" for="searchleft">+</label>
          </form>
        </div>
        <div className="weather-data-body">

          <WeatherInfo data={weatherData}/>
          <div className="weather-forecast">
            <Forecast coordinates={weatherData.coordinates}/>
          </div>
          
        </div>
      </div>
    </div>
    );
  } else {
    search(city);

    return (
      <BallTriangle
        heigth="100"
        width="100"
        color="grey"
        ariaLabel="loading-indicator"
      />
    );
  }
}
