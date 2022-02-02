import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, displayData] = useState({ load:false });

  function handleResponse(response) {
    displayData({
      load:true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000), 
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like)
    });
  
  }

if (weatherData.load) {
  return (
    <div className="Weather">
      <div className="container">
        <form className="mb-3">
          <input type="search" placeholder="Enter a city..."/>
          <input className="ms-2" type="submit" value="submit"/>
        </form>
        <h5 className="city"> {weatherData.city},
                <span className="country"> Spain </span>
            </h5>
            <p>
              <FormattedDate date={weatherData.date} />
            </p>
            <br/>
            <div className="row">
                <div className="col-6 temperature">
                <strong>
                    {weatherData.temperature}
                </strong>
                </div>
                <div className="col-6 information">
                <ul>
                    <li className="text-capitalize">{weatherData.description}</li>
                    <li>{weatherData.wind} mph</li>
                    <li>{weatherData.humidity} %</li>
                    <li>{weatherData.feelsLike} °</li>
                </ul>
                </div>
            </div>
            <div className="forecast grid">
                Forecast
            </div> 
      </div>
    </div>
    );
  } else {
    const apiKey = `18f68700369f5317f6cbee485851bf9b`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
