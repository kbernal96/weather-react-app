import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">

            <h5 className="city"> {props.data.city},
                <span className="country"> Spain </span>
            </h5>
                <FormattedDate date={props.data.date} />
            <br/>
            <div className="row">
                <div className="col-6 temperature">
                    <strong>
                        {props.data.temperature}
                    </strong>
                </div>
                <div className="col-6 information">
                    <ul>
                        <li className="text-capitalize"> 
                        <span><WeatherIcon class="float-left" code={props.data.icon} /></span>
                         {props.data.description}</li>
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

    )
}