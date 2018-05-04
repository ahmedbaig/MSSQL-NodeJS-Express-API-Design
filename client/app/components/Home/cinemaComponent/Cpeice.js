import React, { Component } from 'react'
import CPeiceItem from './CpeiceItem'

class CPeice extends Component {
    constructor(props){
        super(props);
        this.state = {
            Screen: ''
        }
    }
    componentDidMount(){
        let screen = this.props.data.Screen
        this.setState({
            Screen: screen
        })
    }
    render() {
        return(
          <tr>
            <td>
              Cinema {this.state.Screen}
            </td>
            <CPeiceItem
              screen={this.state.Screen}
              data={this.props.data.Time}/>
          </tr>
        );

    }
}
export default CPeice;
