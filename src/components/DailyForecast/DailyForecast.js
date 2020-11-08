import React from 'react';
import classes from './DailyForecast.module.css'

const getIcon = (number) => {
    if (number === '') {
        return;
    }
    if (number < 10) {
        return `https://developer.accuweather.com/sites/default/files/0${number}-s.png`;
    } 
    return `https://developer.accuweather.com/sites/default/files/${number}-s.png`;
}

const dailyForecast = (props) => (
    <div className={classes.DailyForecast}>
        <p>{props.day}</p>
        <p>{props.min} - {props.max} °C</p>
        <img src={getIcon(props.iconNumber)} />
    </div>
);

export default dailyForecast;