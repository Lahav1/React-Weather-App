import React, {Component} from 'react';
import AddButton from '../../../assets/images/add-to-favorites.png';
import RemoveButton from '../../../assets/images/remove-from-favorites.svg';
import classes from './FavoritesButton.module.css';

class FavoritesButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.addFunction();
    }

    render() {
        let icon;
        let text;
        if (this.props.isFavorite == true) {
            icon = RemoveButton;
            text = "Remove from favorites";
        } else {
            icon = AddButton;
            text = "Add to favorites";
        }
        return (
            <div>
                <button className={classes.Button} onClick={this.handleClick}>
                    <img src={icon} className={classes.Image}/>
                    <h className={classes.Text}>{text}</h>
                </button>
            </div>
        ); 
    }
}

export default FavoritesButton;