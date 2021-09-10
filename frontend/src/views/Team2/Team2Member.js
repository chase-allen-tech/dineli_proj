
import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

class Team2Member extends Component {

  render() {
    let img = this.props.img;
    let name = this.props.name;
    let job = this.props.job;
    let delay = this.props.delay;

    return (
      <Fade delay={delay}>
        <div style={{margin: 30}}>
          <Image width="100%" src={img} alt="Team1Member" roundedCircle/>
          <div style={{height: 24}} />
          <div className="d-white d-content-center d-text-30">
            {name}
          </div>
          <div className="d-white d-content-center d-text-24">
            {job}
          </div>
          <div style={{height: 18}} />
          <div className="d-content-center d-text-24" style={{letterSpacing: 24}}>
            <i className="fa fa-facebook d-highlight"/>
            <i className="fa fa-linkedin d-highlight"/>
            <i className="fa fa-vimeo d-highlight"/>
          </div>
        </div>
      </Fade>
    )
  }
}

export default Team2Member;
