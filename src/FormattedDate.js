import React from "react";

export default function FormattedDate(props) {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[props.date.getDay()];
    let minutes = props.date.getMinutes();
    let hours = props.date.getHours();
    let abr =``;

    if (minutes < 10 || hours < 10) {
        minutes =  `0${minutes}`;
        hours = `0${hours}`;
    }

    if (hours < 12) {
        abr = `am`;
    } else {
        abr = `pm`;
    }

    return (
        <div>
            {day}, {hours}:{minutes} {abr}
        </div>
    );
}