import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SPeice extends Component {
  render () {
    let items;
    if(this.props.data){
      items = this.props.data.map(property => {
        const { SCREENNUMBER, MOVIEID, MOVIENAME, MOVIETYPE, RATING, RUNTIME, TIMING } = property
        return(
          <tr key={property.MOVIEID}>
            <td>{SCREENNUMBER}</td>
            <td>{TIMING}</td>
            <td>{MOVIEID}</td>
            <td>{MOVIENAME}</td>
            <td>{MOVIETYPE}</td>
            <td>{RATING}</td>
            <td>{RUNTIME}</td>
          </tr>
        )
      })
    }
    return(
      <tbody>
        {items}
      </tbody>
    )
  }
}

export default SPeice;
