import React, { Component } from 'react';
import Cinema from './Cinema';
import Movies from './Movies';
import Showtime from './Showtime';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <Cinema/>
        <Showtime/>
        <Movies/>
      </div>
    );
  }
}

export default Home;
