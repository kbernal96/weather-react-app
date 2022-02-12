import React, {useState, useEffect} from "react";
import { BallTriangle } from  'react-loader-spinner';
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";


export default function Forecast(props) {
    let [loadSuccess, setLoading] = useState(false);
    let [forecast, forecastData] = useState();

    /*if the coordinates change from the parent component (Weather.js)
    (coordinates change when we search for a new city)
    set loaded to false*/

    useEffect(() => {
        setLoading(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        forecastData(response.data.daily);
        setLoading(true);
    }

    if (loadSuccess) {
        return (
            <div className="Forecast grid mt-5">
                <div className="row">
                    {forecast.map(function (day,index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <ForecastDay data={day} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                    
                </div>
            </div>

        );

    } else {
        //can be a function on its own
        const apiKey = `18f68700369f5317f6cbee485851bf9b`;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=imperial`;

        axios.get(url).then(handleResponse);

        return (
            <BallTriangle
                heigth="100"
                width="100"
                color="white"
                ariaLabel="loading-indicator"
            />
        )    
    }
}