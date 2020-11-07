import React, {Component} from 'react';
import DailyForecast from '../../../components/DailyForecast/DailyForecast';
import Grid from '@material-ui/core/Grid';
import classes from './Result.module.css';

const key = "VgAuPIOeqcipzyaQOZjijXfiDzxbYAt3";

const handleDate = (dateString) => {
    let date = dateString.split('T')[0];
    let splittedDate = date.split('-');
    return splittedDate[2] + '/' + splittedDate[1] + '/' + splittedDate[0];
}

const toCelsius = (f) => Math.round((5/9) * (f - 32) * 10) / 10;

const getCityDetails = async (searchString) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${searchString}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

const getCurrentWeather = async (locationKey) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationKey}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

const getForecast = async (locationKey) => {
    const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const query = `${locationKey}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data;
}

const getData = async (searchString) => {
    const cityDetails = await getCityDetails(searchString);
    const currentWeather = await getCurrentWeather(cityDetails.Key);
    const weatherForecast = await getForecast(cityDetails.Key);
    return {
        cityDetails: cityDetails,
        currentWeather: currentWeather,
        weatherForecast: weatherForecast
    };
}

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            country: "",
            temeprature: "",
            weatherText: "",
            day1Date: "",
            day1MinTemp: "",
            day1MaxTemp: "",
            day2Date: "",
            day2MinTemp: "",
            day2MaxTemp: "",
            day3Date: "",
            day3MinTemp: "",
            day3MaxTemp: "",
            day4Date: "",
            day4MinTemp: "",
            day4MaxTemp: "",
            day5Date: "",
            day5MinTemp: "",
            day5MaxTemp: "",
        }
    }

    render() {
        getData(this.props.searchString).then(data => {
            this.setState({
                city: data.cityDetails.EnglishName,
                country: data.cityDetails.Country.EnglishName,
                temeprature: data.currentWeather.Temperature.Metric.Value,
                weatherText: data.currentWeather.WeatherText,
                day1Date: handleDate(data.weatherForecast.DailyForecasts[0].Date),
                day1MinTemp: toCelsius(data.weatherForecast.DailyForecasts[0].Temperature.Minimum.Value).toString(),
                day1MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[0].Temperature.Maximum.Value).toString(),
                day2Date: handleDate(data.weatherForecast.DailyForecasts[1].Date),
                day2MinTemp: toCelsius(data.weatherForecast.DailyForecasts[1].Temperature.Minimum.Value).toString(),
                day2MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[1].Temperature.Maximum.Value).toString(),
                day3Date: handleDate(data.weatherForecast.DailyForecasts[2].Date),
                day3MinTemp: toCelsius(data.weatherForecast.DailyForecasts[2].Temperature.Minimum.Value).toString(),
                day3MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[2].Temperature.Maximum.Value).toString(),
                day4Date: handleDate(data.weatherForecast.DailyForecasts[3].Date),
                day4MinTemp: toCelsius(data.weatherForecast.DailyForecasts[3].Temperature.Minimum.Value).toString(),
                day4MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[3].Temperature.Maximum.Value).toString(),
                day5Date: handleDate(data.weatherForecast.DailyForecasts[4].Date),
                day5MinTemp: toCelsius(data.weatherForecast.DailyForecasts[4].Temperature.Minimum.Value).toString(),
                day5MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[4].Temperature.Maximum.Value).toString(),
            })   
        });
        return (
            <div className={classes.Result}> 
                <Grid container spacing={2}>
                    <Grid xs={4}>
                        <h>{this.state.city}, {this.state.country}, {this.state.temeprature}°C</h>
                    </Grid>
                    <Grid xs={4} />
                    <Grid xs={4}>
                        <button>Add to favorites</button>
                    </Grid>
                    <Grid xs={12}>
                        <h3>{this.state.weatherText}</h3>
                    </Grid>
                    <DailyForecast day={this.state.day1Date} min={this.state.day1MinTemp} max={this.state.day1MaxTemp} />
                    <DailyForecast day={this.state.day2Date} min={this.state.day2MinTemp} max={this.state.day2MaxTemp} />
                    <DailyForecast day={this.state.day3Date} min={this.state.day3MinTemp} max={this.state.day3MaxTemp} />
                    <DailyForecast day={this.state.day4Date} min={this.state.day4MinTemp} max={this.state.day4MaxTemp} />
                    <DailyForecast day={this.state.day5Date} min={this.state.day5MinTemp} max={this.state.day5MaxTemp} />
                </Grid>
            </div>
        ); 
    }
}

export default Result;