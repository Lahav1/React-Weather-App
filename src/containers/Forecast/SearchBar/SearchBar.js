import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getAutocomplete, handleSuggestions, isValidSearch } from '../../../utils';
import classes from './SearchBar.module.css';
import SearchIcon from '../../../assets/images/search-icon.png';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { suggestions: [], error: false }
    }

    // pass the value to the parent (Forecast) component using the function received as a prop.
    sendToParent = () => {
        let val = document.getElementById("bar").value;
        this.props.updateValue(val);
    }

    handleChange = () => {
        let val = document.getElementById("bar").value;
        // if current value in searchbar is valid, fetch autocomplete.
        if (isValidSearch(val)) {
            getAutocomplete(val).then((data => this.setState({suggestions: handleSuggestions(data)})))
            .catch(error => {
                this.setState({suggestions: []})
            });
        }
    }

    render() {
        // in case of an error, empty the auto complete suggestion list.
        if (this.state.error == true) {
            this.setState({suggestions: []});
        }
        
        return (
            <div className={classes.Content}>
                <Autocomplete 
                    id = "bar"
                    freeSolo
                    options = {this.state.suggestions}
                    style={{ width: 300 }}
                    renderInput = {(params) => (
                    <TextField {...params} id="inner" label="Enter location" 
                    type="search" variant="outlined" onChange={this.handleChange} />)}
                />
                <button className={classes.Button} onClick={this.sendToParent}>
                    <img className={classes.Image} src={SearchIcon}/>
                    <span className={classes.Text}>Search</span>
                </button>
            </div>
        ); 
    }
}

export default SearchBar;