
import React, { Component } from 'react';

class ImageLabel extends Component {

  render() {
    let className = this.props.className === undefined ? '' : this.props.className;
    let img = this.props.img;
    let color = this.props.color === undefined ? 'white' : this.props.color;
    let font = this.props.font === undefined ? 'book' : this.props.font;
    let fontSize = this.props.fontSize;
    let padding = this.props.padding;
    let label = this.props.label;

    return (
      <div className = {className} style={{display: 'flex', alignItems: 'center'}}>
        <img className="img-mobile" src={img} alt="" />
        <div style={{width: padding}} />
        <div className={"d-" + color + " d-font-" + font + " d-text-" + fontSize}>
          {label}
        </div>
      </div>
    )
  }
}

export default ImageLabel;
