import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/Home/Home';
import HelloWorld from './components/HelloWorld/HelloWorld';
import ShowSelection from './components/Home/ShowSelection';

const Child = ({ match }) => (
  <ShowSelection
    params = {match.params}/>
);

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/helloworld" component={HelloWorld}/>
        <Route path="/showSelection/:cinema/:showtime" component={Child}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
