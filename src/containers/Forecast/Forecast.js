import React, {Component} from 'react';
import SearchBar from './SearchBar/SearchBar';
import Result from './Result/Result'
import classes from './Forecast.module.css';

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {searchString: "Tel Aviv"}
    }

    updateSearchString = (value) => {
        this.setState({searchString: value});
    }
    
    render() {
        return (
            <div className={classes.Forecast}>
                <SearchBar updateValue={this.updateSearchString}/>
                <Result searchString={this.state.searchString}/>
            </div>
        ); 
    }
}

export default Forecast;