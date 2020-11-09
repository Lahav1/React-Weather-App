import React, {Component} from 'react';
import classes from './FavoritesButton.module.css';
import AddButton from '../../../assets/images/add-to-favorites.png';
import RemoveButton from '../../../assets/images/remove-from-favorites.svg';

class FavoritesButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.addFunction();
    }

    render() {
        // check if item is in favorite list and display icon and text accordingly.
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
                    <span className={classes.Text}>{text}</span>
                </button>
            </div>
        ); 
    }
}

export default FavoritesButton;