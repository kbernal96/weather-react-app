import axios from "axios";
import React, { useState } from "react";
import FormattedDate from  "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [load, loadSuccess] = useState(false);
  const [weatherData, displayData] = useState({});

  function handleResponse(response) {
    loadSuccess(true);
    console.log(response.data);
    displayData({
      name: response.data.name,
      date: new Date(response.data.dt * 1000), 
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like)
    });
  }

if (load) {
  return (
    <div className="Weather">
      <div className="container">
        <form className="mb-3">
          <input type="search" placeholder="Enter a city..."/>
          <input className="ms-2" type="submit" value="submit"/>
        </form>
        <h5 className="city"> {props.data.name},
                <span className="country"> Spain </span>
            </h5>
            <p>
                <FormattedDate date={props.data.date} />
            </p>
            <br/>
            <div className="row">
                <div className="col-6 temperature">
                <strong>
                    {props.data.temperature}
                </strong>
                </div>
                <div className="col-6 information">
                <ul>
                    <li className="text-capitalize">{props.data.description}</li>
                    <li>{props.data.wind} mph</li>
                    <li>{props.data.humidity} %</li>
                    <li>{props.data.feelsLike} °</li>
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