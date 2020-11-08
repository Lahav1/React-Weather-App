import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '../../../assets/images/search-icon.png';
import classes from './SearchBar.module.css';
import { getAutocomplete, handleSuggestions } from '../../../utils';
import Autocomplete from '@material-ui/lab/Autocomplete';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { currentSearch: "", suggestions: []}
    }

    sendToParent = () => {
        this.props.updateValue(document.getElementById("bar").value);
    }

    handleChange = () => {
        let val = document.getElementById("bar").value;
        getAutocomplete(val).then((data => this.setState({suggestions: handleSuggestions(data)})));
    }

    render() {
        return (
            <div>
                <Autocomplete 
                    id = "bar"
                    freeSolo
                    options = {this.state.suggestions}
                    renderInput = {(params) => (
                    <TextField {...params} id="inner" label="Enter location" 
                    type="search" variant="outlined" onChange={this.handleChange} />)}
                />
                
                <button className={classes.Button} onClick={this.sendToParent}>
                    <img src={SearchIcon} />
                </button>
            </div>
        ); 
    }
}

export default SearchBar;