import React, { useState} from "react";

export default function Temperature(props) {
    const [unit, setUnit] = useState("fahrenheit");

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function celsius(){
        return Math.round((props.fahrenheit - 32) * (5/9));
    }

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if (unit === 'fahrenheit') {
        return (
            <span className="Temperature"> 
                <strong className="temperature">
                    {props.fahrenheit}
                </strong>
                <span className="unit">°F {" "}
                      <a href="/" className="fahrenheit text-decoration-none" onClick={convertToCelsius}> | °C</a>
                </span>
            </span> 
        );
    } else {
        return(
            <span className="Temperature"> 
                <strong className="temperature">
                    {celsius()}
                </strong>
                <span className="unit">
                    <a href="/" className="celsius text-decoration-none" onClick={convertToFahrenheit}>°F | </a> 
                 °C
                </span>
            </span> 
        );
    }
    
}