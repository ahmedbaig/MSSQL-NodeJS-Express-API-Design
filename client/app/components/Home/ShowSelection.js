import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShowSelection extends Component {
  constructor(){
    super();
    this.state = {
      cinema: '',
      showtime: '',
      movieid: '',
      moviename: '',
      movietype: '',
      rating: '',
      runtime: ''
    }
  }
  componentDidMount(){
    const { cinema, showtime } = this.props.params
    this.setState({
      cinema,
      showtime
    });
    fetch('http://localhost:3017/api/showselection?cinema='+cinema+'&showtime=\''+showtime+'\'',
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Request-Origin': '*',
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Headers": "access-control-allow-headers,access-control-allow-origin,content-type",
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(json => {
        if(json.success){
          const { SCREENNUMBER, MOVIEID, MOVIENAME, MOVIETYPE, RATING, RUNTIME, TIMING } = json.data[0]
          this.setState({
            cinema: SCREENNUMBER,
            showtime: TIMING,
            movieid: MOVIEID,
            moviename: MOVIENAME,
            movietype: MOVIETYPE,
            rating: RATING,
            runtime: RUNTIME
          });
        }
      });

  }
  render () {
    const { cinema,
    showtime,
    moviename,
    movietype,
    rating,
    runtime } = this.state
    return(
      <div>
        <div>
          Cinema Number: {cinema}
        </div>
        <div>
          Movie Running: {moviename}
        </div>
        <div>
          Time: {showtime}
        </div>
        <div>
          Rating: {rating}
        </div>
        <div>
          Total runtime: {runtime}
        </div>
        <div>
          Movie Type: {movietype}
        </div>
      </div>
    );
  }
}

export default ShowSelection;
