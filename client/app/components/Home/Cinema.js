import React, { Component } from 'react'
import CPeice from './cinemaComponent/Cpeice'

class Cinema extends Component {
  constructor(){
    super();
    this.state = {
      cinema1: {
        Screen: 1,
        Time: []
      },
      cinema2: {
        Screen: 2,
        Time: []
      },
      cinema3: {
        Screen: 3,
        Time: []
      },
      cinema4: {
        Screen: 4,
        Time: []
      }

    }
  }

  componentDidMount(){
    fetch('http://localhost:3017/api/cinemaFetch?cinema='+1,{
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
        let finder = json.data.map(property => property.TIME)
        this.setState({
          cinema1: {
            Time: finder
          }
        });
      }
    });
    fetch('http://localhost:3017/api/cinemaFetch?cinema='+2,{
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
        let finder = json.data.map(property => property.TIME)
        this.setState({
          cinema2: {
            Time: finder
          }
        });
      }
    });
    fetch('http://localhost:3017/api/cinemaFetch?cinema='+3,{
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
        let finder = json.data.map(property => property.TIME)
        this.setState({
          cinema3: {
            Time: finder
          }
        });
      }
    });
    fetch('http://localhost:3017/api/cinemaFetch?cinema='+4,{
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
        let finder = json.data.map(property => property.TIME)
        this.setState({
          cinema4: {
            Time: finder
          }
        });
      }
    });
  }

  render() {
    return(
      <div>
        <table className='border'>
          <thead>
            <tr>
              <th>CINEMA</th>
              <th colSpan='5'>TIMINGS</th>
            </tr>
          </thead>
          <tbody>
            <CPeice data={this.state.cinema1}/>
            <CPeice data={this.state.cinema2}/>
            <CPeice data={this.state.cinema3}/>
            <CPeice data={this.state.cinema4}/>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Cinema;
