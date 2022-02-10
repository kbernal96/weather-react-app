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
                <span className="country"> USA </span>
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
                        <span><WeatherIcon className="weather-icon" code={props.data.icon} size={23} /></span>
                         {props.data.description}</li>
                        <li> <FiWind />  {props.data.wind} mph</li>
                        <li> <WiHumidity />  {props.data.humidity} %</li>
                    </ul>
                </div>
        
            </div>

        </div>

    )
}