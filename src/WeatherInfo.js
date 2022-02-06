import React from "react";
import { FiWind } from 'react-icons/fi';
import { WiHumidity } from 'react-icons/wi';
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import "./WeatherInfo.css";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">

            <h5 className="city"> {props.data.city},
                <span className="country"> Spain </span>
            </h5>
                <FormattedDate date={props.data.date} />
            <br/>
            <div className="row">
                <div className="col-6">

                    <Temperature fahrenheit={props.data.temperature} />
                    
                </div>
                <div className="col-6 information">
                    <ul>
                        <li className="text-capitalize"> 
                        <span><WeatherIcon class="float-left" code={props.data.icon} /></span>
                        {props.data.description}</li>
                        <li> <FiWind /> {props.data.wind} mph</li>
                        <li> <WiHumidity />{props.data.humidity} %</li>
                    </ul>
                </div>
        
            </div>
            <div className="forecast grid">
                Forecast
            </div> 

        </div>

    )
}