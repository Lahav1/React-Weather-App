import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Favorite from './Favorite/Favorite';
import { connect } from 'react-redux';

class Favorites extends Component {
    render() {
        let locations = this.props.favorites;
        let favorites = locations.map((location, index) => {
            return <Favorite city={location} key={index}/>;
        });
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <h2>Favorite Locations</h2>
                    </Grid>
                    <Grid xs={12}>
                        <h3>{this.props.description}</h3>
                    </Grid>
                    {favorites}
                </Grid>
            </div>
        ); 
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps)(Favorites);