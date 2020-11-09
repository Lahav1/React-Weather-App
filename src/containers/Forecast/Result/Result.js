import React, {Component} from 'react';
import DailyForecast from '../../../components/DailyForecast/DailyForecast';
import Grid from '@material-ui/core/Grid';
import classes from './Result.module.css';
import FavoritesButton from '../FavoritesButton/FavoritesButton'
import { handleDate, toCelsius, fetchCurrentAndForecast } from '../../../utils'
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import Box from '@material-ui/core/Box';

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
            day1Icon: "",
            day2Date: "",
            day2MinTemp: "",
            day2MaxTemp: "",
            day2Icon: "",
            day3Date: "",
            day3MinTemp: "",
            day3MaxTemp: "",
            day3Icon: "",
            day4Date: "",
            day4MinTemp: "",
            day4MaxTemp: "",
            day4Icon: "",
            day5Date: "",
            day5MinTemp: "",
            day5MaxTemp: "",
            day5Icon: "",
            error: false,
            searchString: this.props.searchString
        }
    };

    checkIfFavorite = () => {
        if (this.props.favorites === undefined) {
            return false;
        }
        if (this.props.favorites.includes(this.state.city)) {
            return true;
        }
        return false;
    };

    componentDidMount = () => {
        fetchCurrentAndForecast(this.props.searchString).then(data => {
            this.setState({
                city: data.cityDetails.EnglishName,
                country: data.cityDetails.Country.EnglishName,
                temeprature: data.currentWeather.Temperature.Metric.Value,
                weatherText: data.currentWeather.WeatherText,
                day1Date: handleDate(data.weatherForecast.DailyForecasts[0].Date),
                day1MinTemp: toCelsius(data.weatherForecast.DailyForecasts[0].Temperature.Minimum.Value).toString(),
                day1MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[0].Temperature.Maximum.Value).toString(),
                day1Icon: data.weatherForecast.DailyForecasts[0].Day.Icon,
                day2Date: handleDate(data.weatherForecast.DailyForecasts[1].Date),
                day2MinTemp: toCelsius(data.weatherForecast.DailyForecasts[1].Temperature.Minimum.Value).toString(),
                day2MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[1].Temperature.Maximum.Value).toString(),
                day2Icon: data.weatherForecast.DailyForecasts[1].Day.Icon,
                day3Date: handleDate(data.weatherForecast.DailyForecasts[2].Date),
                day3MinTemp: toCelsius(data.weatherForecast.DailyForecasts[2].Temperature.Minimum.Value).toString(),
                day3MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[2].Temperature.Maximum.Value).toString(),
                day3Icon: data.weatherForecast.DailyForecasts[2].Day.Icon,
                day4Date: handleDate(data.weatherForecast.DailyForecasts[3].Date),
                day4MinTemp: toCelsius(data.weatherForecast.DailyForecasts[3].Temperature.Minimum.Value).toString(),
                day4MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[3].Temperature.Maximum.Value).toString(),
                day4Icon: data.weatherForecast.DailyForecasts[3].Day.Icon,
                day5Date: handleDate(data.weatherForecast.DailyForecasts[4].Date),
                day5MinTemp: toCelsius(data.weatherForecast.DailyForecasts[4].Temperature.Minimum.Value).toString(),
                day5MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[4].Temperature.Maximum.Value).toString(),
                day5Icon: data.weatherForecast.DailyForecasts[4].Day.Icon,
                error: false
            });   
        }).catch(error => this.setState({error: true}));
    }

    componentDidUpdate = () => {
        fetchCurrentAndForecast(this.props.searchString).then(data => {
            this.setState({
                city: data.cityDetails.EnglishName,
                country: data.cityDetails.Country.EnglishName,
                temeprature: data.currentWeather.Temperature.Metric.Value,
                weatherText: data.currentWeather.WeatherText,
                day1Date: handleDate(data.weatherForecast.DailyForecasts[0].Date),
                day1MinTemp: toCelsius(data.weatherForecast.DailyForecasts[0].Temperature.Minimum.Value).toString(),
                day1MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[0].Temperature.Maximum.Value).toString(),
                day1Icon: data.weatherForecast.DailyForecasts[0].Day.Icon,
                day2Date: handleDate(data.weatherForecast.DailyForecasts[1].Date),
                day2MinTemp: toCelsius(data.weatherForecast.DailyForecasts[1].Temperature.Minimum.Value).toString(),
                day2MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[1].Temperature.Maximum.Value).toString(),
                day2Icon: data.weatherForecast.DailyForecasts[1].Day.Icon,
                day3Date: handleDate(data.weatherForecast.DailyForecasts[2].Date),
                day3MinTemp: toCelsius(data.weatherForecast.DailyForecasts[2].Temperature.Minimum.Value).toString(),
                day3MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[2].Temperature.Maximum.Value).toString(),
                day3Icon: data.weatherForecast.DailyForecasts[2].Day.Icon,
                day4Date: handleDate(data.weatherForecast.DailyForecasts[3].Date),
                day4MinTemp: toCelsius(data.weatherForecast.DailyForecasts[3].Temperature.Minimum.Value).toString(),
                day4MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[3].Temperature.Maximum.Value).toString(),
                day4Icon: data.weatherForecast.DailyForecasts[3].Day.Icon,
                day5Date: handleDate(data.weatherForecast.DailyForecasts[4].Date),
                day5MinTemp: toCelsius(data.weatherForecast.DailyForecasts[4].Temperature.Minimum.Value).toString(),
                day5MaxTemp: toCelsius(data.weatherForecast.DailyForecasts[4].Temperature.Maximum.Value).toString(),
                day5Icon: data.weatherForecast.DailyForecasts[4].Day.Icon,
                error: false
            });   
        }).catch(error => this.setState({error: true}));
    }

    render() {
        let favoritesButton;
        if (this.checkIfFavorite() == true) {
            favoritesButton = <FavoritesButton addFunction={() => this.props.onFavoriteRemoved(this.state.city)} isFavorite={true} />          
                
        } else {
            favoritesButton = <FavoritesButton addFunction={() => this.props.onFavoriteAdded(this.state.city)} isFavorite={false} />
        } 

        // in case of an error, load an error message instead of the content.
        let content = <p>Sorry, there are no matches for your search</p>;
        if (this.state.error == false) {
            content = (
                <div className={classes.Result}> 
                    <Grid container spacing={2}>
                        <Grid item xs={3} />
                        <Grid item xs={6}>
                            <Box display="flex" flexWrap="wrap">
                                <Grid container spacing={0}>
                                    <Grid item xs={2} />
                                    <Grid item xs={8}>
                                        <span style={{fontSize:"20px"}}><b>{this.state.city}, {this.state.country}, {this.state.temeprature}°C, {this.state.weatherText}</b></span>
                                    </Grid>
                                    <Grid item xs={2} />
                                    <Grid item xs={2} />
                                    <Grid item xs={8}>
                                        {favoritesButton}
                                    </Grid>
                                    <Grid item xs={2} />
                                    <Grid item xs={12}><br/></Grid>
                                    <Grid item xs={1} />
                                    <Grid item>
                                        <Box display="flex" flexWrap="wrap">
                                            <DailyForecast day={this.state.day1Date} min={this.state.day1MinTemp} max={this.state.day1MaxTemp} iconNumber={this.state.day1Icon} />
                                            <DailyForecast day={this.state.day2Date} min={this.state.day2MinTemp} max={this.state.day2MaxTemp} iconNumber={this.state.day2Icon} />
                                            <DailyForecast day={this.state.day3Date} min={this.state.day3MinTemp} max={this.state.day3MaxTemp} iconNumber={this.state.day3Icon} />
                                            <DailyForecast day={this.state.day4Date} min={this.state.day4MinTemp} max={this.state.day4MaxTemp} iconNumber={this.state.day4Icon} />
                                            <DailyForecast day={this.state.day5Date} min={this.state.day5MinTemp} max={this.state.day5MaxTemp} iconNumber={this.state.day5Icon} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid xs={3} />
                    </Grid>
                </div>
            )
        }

        return (
            <div>
                {content}
            </div>
        ); 
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFavoriteAdded: (c) => dispatch({type: actions.ADD_TO_FAVORITES, city: c}),
        onFavoriteRemoved: (c) => dispatch({type: actions.REMOVE_FROM_FAVORITES, city: c})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);