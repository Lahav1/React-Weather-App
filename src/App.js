import React, {Component} from 'react';
import Layout from './components/Layout/Layout'
import {Route, Switch} from 'react-router-dom';
import Favorites from './containers/Favorites/Favorites';
import Forecast from './containers/Forecast/Forecast';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Switch>
              <Route path="/favorites" exact component={Favorites} />
              <Route path="/" component={Forecast} />
            </Switch>
          </Layout>
      </div>
    );
  }
}

export default App;