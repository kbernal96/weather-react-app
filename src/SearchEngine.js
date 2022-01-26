import axios from "axios";
import React, { useState } from "react";
import "./App.css";

export default function SearcEngine() {
  let [city, SetCity] = useState();
  let [search, searchResult] = useState(false);
  let [data, SetData] = useState({});

  function displayData(response) {
    searchResult(true);
    SetData({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "18f68700369f5317f6cbee485851bf9b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(url).then(displayData);
  }

  function updateSearch(event) {
    SetCity(event.target.value);
  }

  const form = (
    <form className="SearchEngine" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateSearch}
      />
      <input type="submit" value="🔍" />
    </form>
  );

  if (search) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {data.temperature} °F</li>
          <li>Description: {data.description}</li>
          <li>Humidity: {data.humidity} %</li>
          <li>Wind: {data.wind} mph</li>
          <li>
            <img src={data.icon} alt={data.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}