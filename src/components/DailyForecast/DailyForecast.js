import React from 'react';
import classes from './DailyForecast.module.css'

const dailyForecast = (props) => (
    <div className={classes.DailyForecast}>
        <p>{props.day}</p>
        <p>{props.min} - {props.max} °C</p>
    </div>
);

export default dailyForecast;