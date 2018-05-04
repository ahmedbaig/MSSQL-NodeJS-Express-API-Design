import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CPeiceItem extends Component {
  render() {
    let items, screen = this.props.screen;
    if(this.props.data){
      items = this.props.data.map(time => {
        const location = "/showSelection/"+screen+"/"+time
        return(
          <td key={time}>
            <Link to={location}>{time}</Link>
          </td>
        )
      })
    }
    return(
      <tdata>
        {items}
      </tdata>
    )
  }
}
