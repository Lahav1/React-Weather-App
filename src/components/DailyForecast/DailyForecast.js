import React from 'react';
import classes from './DailyForecast.module.css'
import Paper from '@material-ui/core/Paper';
import { getIcon } from '../../utils'

const dailyForecast = (props) => (
    <div className={classes.DailyForecast}>
        <p><b>{props.day}</b></p>
        <p>{props.min} - {props.max} °C</p>
        <img src={getIcon(props.iconNumber)} />
    </div>
);

export default dailyForecast;