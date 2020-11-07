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

    componentDidMount() {
        // in case page was reached by clicking a favorite, change the search string accordingly.
        if (this.props.location.city != undefined) {
            this.setState({searchString: this.props.location.city});
        }
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