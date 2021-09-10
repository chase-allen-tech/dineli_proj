
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Team1Member extends Component {

  render() {
    let img = this.props.img;
    let name = this.props.name;
    let job = this.props.job;
    let delay = this.props.delay;

    return (
      <Fade delay={delay}>
        <div style={{margin: 30}}>
          <img width="100%" src={img} alt="Team1Member" />
          <div style={{height: 24}} />
          <div className="d-highlight d-content-center d-text-30">
            {name}
          </div>
          <div className="d-white d-content-center d-text-24">
            {job}
          </div>
        </div>
      </Fade>
    )
  }
}

export default Team1Member;
