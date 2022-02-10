import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days= ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        
        return days[day];
    }

    return (
        <span className="ForecastDay">
            <div className="Forecast-day"> {day()} </div>
                <WeatherIcon code={props.data.weather[0].icon} size={25}/>
            <div className="temperatures">
                <span className="high">{Math.round(props.data.temp.max)}°</span>
                <span className="low"> {Math.round(props.data.temp.min)}°</span>
            </div>
        </span>
    );
}