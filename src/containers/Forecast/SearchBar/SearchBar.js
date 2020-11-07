import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '../../../assets/images/search-icon.png';
import classes from './SearchBar.module.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        // later add value tracker to use for autocomplete
    }

    sendToParent = () => {
        this.props.updateValue(document.getElementById("bar").value);
    }

    render() {
        return (
            <div>
                <TextField id="bar" label="Enter location" type="search" variant="outlined" />
                <button className={classes.Button} onClick={this.sendToParent}>
                    <img src={SearchIcon} />
                </button>
            </div>
        ); 
    }
}

export default SearchBar;