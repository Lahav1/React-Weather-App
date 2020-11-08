import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '../../../assets/images/search-icon.png';
import classes from './SearchBar.module.css';
import { getAutocomplete, handleSuggestions } from '../../../utils';
import Autocomplete from '@material-ui/lab/Autocomplete';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { currentSearch: "", suggestions: [], error: false}
    }

    sendToParent = () => {
        let val = document.getElementById("bar").value;
        if (val != "") {
            this.props.updateValue(document.getElementById("bar").value);
        }
    }

    handleChange = () => {
        let val = document.getElementById("bar").value;
        if (val != "") {
            getAutocomplete(val).then((data => this.setState({suggestions: handleSuggestions(data)})))
            .catch(error => this.setState({error:true}));    
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
                    <h className={classes.Text}>Search</h>
                </button>
            </div>
        ); 
    }
}

export default SearchBar;