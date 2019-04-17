import React, { Component } from 'react';
import {HashRouter,Switch, Route} from 'react-router-dom'

import Navbar from './components/nav'
import Home from './container/home'
import Movies from './container/movies'
import Genre from './container/genre'
import Profile from './container/movieProfile'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path='/' component={ Navbar } />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movies' exact component={Movies} />
          <Route path='/movies/byGenre' exact component={Genre}/>
          <Route path='/movies/:id' exact component={Profile} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
