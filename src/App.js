import React from 'react';
import MovieList from './components/MovieList';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import MovieDetails from './components/movieDetails'

import './App.css';

class App extends React.Component {

  render() {


    return (
      <Router>
        <div className="App container-fluid p-0">
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/:movieID" component={MovieDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
