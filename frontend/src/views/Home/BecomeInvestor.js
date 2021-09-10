
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class BecomeInvestor extends Component {

  render() {
    let img = this.props.img;
    let title = this.props.title;
    let description = this.props.description;
    let delay = this.props.delay;

    return (
        <Fade delay={delay}>
          <div className="d-content-center" style={{marginTop: 30}}>
            <img src={img} alt="BecomeInvestor" />
            <div style={{padding: '5%'}} />
            <div className="d-font-bold d-highlight d-text-30">
              {title}
            </div>
            <div style={{padding: '2.5%'}} />
            <div className="d-font-book d-white d-text-20">
              {description}
            </div>
          </div>
        </Fade>
    )
  }
}

export default BecomeInvestor;
