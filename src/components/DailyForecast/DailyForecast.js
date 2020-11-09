import React from 'react';
import classes from './DailyForecast.module.css'
import Paper from '@material-ui/core/Paper';

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
    <Paper style={{width: "120px"}}>
        <p><b>{props.day}</b></p>
        <p>{props.min} - {props.max} °C</p>
        <img src={getIcon(props.iconNumber)} />
    </Paper>
);

export default dailyForecast;