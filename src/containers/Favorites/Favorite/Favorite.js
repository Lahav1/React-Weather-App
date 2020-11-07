import React, {Component} from 'react';
import classes from './Favorite.module.css';
import { withRouter } from 'react-router-dom';
import { fetchCurrent } from '../../../utils'

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.city,
            temperature: "",
            description: ""
        }
    }

    handleClick = () => {
        this.props.history.push({
            pathname: '/',
            city: this.props.city 
        });
    }
    
    render() {
        fetchCurrent(this.props.city).then(data => {
            this.setState({temperature: data.currentWeather.Temperature.Metric.Value.toString(), 
                            description: data.currentWeather.WeatherText})
        })
        return (
            <div className={classes.Favorite} onClick={this.handleClick}> 
                <p>{this.props.city}</p>
                <p>{this.state.temperature}°C</p> 
                <p>{this.state.description}</p>
            </div>
        ); 
    }

}

export default withRouter(Favorite);