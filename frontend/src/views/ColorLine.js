
import React, { Component } from 'react';

class ColorLine extends Component {

  render() {
    let color = this.props.color === undefined ? 'white' : this.props.color;
    return (
      <div style={{border: '1px solid', borderColor: color, marginBottom: 8}}>
      </div>
    )
  }
}

export default ColorLine;
