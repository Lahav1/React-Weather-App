import React, {Component} from 'react';
import classes from './Forecast.module.css';
import { isValidSearch } from '../../utils'
import SearchBar from './SearchBar/SearchBar';
import Result from './Result/Result'

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {searchString: "Tel Aviv", errorText: ""}
    }

    updateSearchString = (value) => {
        // if search string includes invalid chars, display error message.
        if (isValidSearch(value) == true) {
            this.setState({searchString: value, errorText: ""});
        } else {
            this.setState({errorText: "Only English letters allowed"})
        }
    }

    componentDidMount() {
        // in case page was reached by clicking a favorite, change the search string accordingly.
        if (this.props.location.city) {
            this.setState({searchString: this.props.location.city});
        }
    }
    
    render() {
        console.log(this.state.searchString);
        return (
            <div className={classes.Forecast}>
                <SearchBar updateValue={this.updateSearchString}/>
                <p className={classes.errorText}>{this.state.errorText}</p>
                <Result key={this.state.searchString} searchString={this.state.searchString}/>
            </div>
        ); 
    }
}

export default Forecast;