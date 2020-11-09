import React, {Component} from 'react';
import classes from './Favorite.module.css';
import { withRouter } from 'react-router-dom';
import { fetchCurrent } from '../../../utils'
import Paper from '@material-ui/core/Paper';

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
        this.props.history.push({
            pathname: '/',
            city: this.props.city 
        });
    }
    
    render() {
        fetchCurrent(this.props.city).then(data => {
            this.setState({temperature: data.currentWeather.Temperature.Metric.Value.toString(), 
                            description: data.currentWeather.WeatherText})
        }).catch(error => this.setState({error: true}));
        
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
            <Paper style={{width: "150px"}} onClick={this.handleClick}> 
                <p>{this.props.city}</p>
                {content}
            </Paper>
        ); 
    }

}

export default withRouter(Favorite);