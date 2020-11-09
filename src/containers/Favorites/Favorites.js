import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Favorite from './Favorite/Favorite';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import classes from './Favorites.module.css'

class Favorites extends Component {
    render() {
        let locations = this.props.favorites;
        let favorites = locations.map((location, index) => {
            return <Favorite city={location} key={index}/>;
        });

        let favoriteDisplay;
        if ((this.props.favorites === undefined) || (this.props.favorites.length == 0)) {
            favoriteDisplay = <span> You don't have favorites yet. </span>
        } else {
            favoriteDisplay = (
                <Box display="flex" flexWrap="wrap">
                    {favorites}
                </Box>
            )
        }

        return (
            <div>
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <h2>Favorite Locations</h2>
                    </Grid>
                    <Grid xs={3} />
                    <Grid xs={6} className={classes.Box}>
                        {favoriteDisplay}
                    </Grid>
                    <Grid xs={3} />
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