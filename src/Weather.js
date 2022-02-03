import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, displayData] = useState({ load:false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    displayData({
      load:true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000), 
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like)
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
        <form className="mb-3" onSubmit={handleSubmit}>
          <input type="search" placeholder="Enter a city..." onChange={handleCityValue}/>
          <input className="ms-2" type="submit" value="submit"/>
        </form>

        <WeatherInfo data={weatherData}/>

      </div>
    </div>
    );
  } else {
    search(city);

    return "Loading...";
  }
}
