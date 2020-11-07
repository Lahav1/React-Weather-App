import React, {Component} from 'react';
import AddButton from '../../../assets/images/add-to-favorites.png';
import classes from './FavoritesButton.module.css';

class FavoritesButton extends Component {

    render() {
        return (
            <div>
                <button className={classes.Button}>
                    <img src={AddButton} className={classes.Image}/>
                    <h className={classes.Text}>Add to favorites</h>
                </button>
            </div>
        ); 
    }
}

export default FavoritesButton;