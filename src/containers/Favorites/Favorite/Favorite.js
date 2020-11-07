import React, {Component} from 'react';
import classes from './Favorite.module.css';
import { withRouter } from 'react-router-dom';

class Favorite extends Component {
    handleClick = () => {
        // doesn't work yet.
        this.props.history.push({
            pathname: '/',
            city: this.props.city 
        });
    }
    
    render() {
        console.log(this.props);
        return (
            <div className={classes.Favorite} onClick={this.handleClick}> 
                <p>{this.props.city}</p>
                <p>{this.props.temprature}</p> 
            </div>
        ); 
    }

}

export default withRouter(Favorite);