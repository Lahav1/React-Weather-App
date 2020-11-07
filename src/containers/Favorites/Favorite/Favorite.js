import React, {Component} from 'react';
import classes from './Favorite.module.css';

class Favorite extends Component {
    render() {
        return (
            <div className={classes.Favorite}> 
               <p>{this.props.location}</p>
               <p>{this.props.temprature}</p> 
            </div>
        ); 
    }

}

export default Favorite;