import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Favorite.module.css';
import { fetchCurrent } from '../../../utils'

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.city,
            temperature: "",
            description: "",
            error: false
        }
    }

    handleClick = () => {
        // if favorite is clicked, navigate to forecast page and display it's details.
        this.props.history.push({
            pathname: '/',
            city: this.props.city 
        });
    }

    componentDidMount = () => {
        // fetch the favorite item's current weather.
        fetchCurrent(this.props.city).then(data => {
            this.setState({temperature: data.currentWeather.Temperature.Metric.Value.toString(), 
                            description: data.currentWeather.WeatherText})
        }).catch(error => this.setState({error: true}));
    }
    
    render() {    
        // in case of an error, load an error message instead of the content.
        let content = <p>Sorry, something went wrong</p>;
        if (this.state.error == false) {
            content = (
                <div>
                    <p>{this.state.temperature}°C</p> 
                    <p>{this.state.description}</p>
                </div>
            )
        }

        return (
            <div className={classes.Favorite} onClick={this.handleClick}> 
                <p><b>{this.props.city}</b></p>
                {content}
            </div>
        ); 
    }
}

export default withRouter(Favorite);