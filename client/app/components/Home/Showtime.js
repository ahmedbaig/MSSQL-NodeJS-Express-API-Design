import React, { Component } from 'react';
import SPeice from './showtimeComponent/Speice'

class Showtime extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:3017/api/showtimeFetch',{
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Request-Origin': '*',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "access-control-allow-headers,access-control-allow-origin,content-type",
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(json => {
      if(json.success){
        this.setState({
          data: json.data
        });
      }
    });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <th>Screen Number</th>
            <th>Timing</th>
            <th>Movie ID</th>
            <th>Movie Name</th>
            <th>Type</th>
            <th>Rating</th>
            <th>Runtime</th>
          </thead>
          <SPeice data={this.state.data}/>
        </table>
      </div>
    );
  }
}

export default Showtime;
