import React from "react";

export default function FormattedDate(props) {
    console.log(props.date);
    let days= ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
    let abr = ``;

    if (minutes < 10 ){
        minutes = `0${minutes}`;
    }

    if (hour < 10) {
        hour = `0${hour}`;
    }

    if (hour < 12) {
        abr = `am`;
    } else {
        abr = `pm`;
    }

    return (
            `${day}, ${hour}:${minutes}${abr}`
        
    )
}