
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Team1Member from './Team1Member'

class Team1 extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Fade>
          <div className="img-box img-box-team">
            <Fade bottom delay={200}>
              <div style={{margin: "10% 12% 5% 12%"}}>
                <div className="col-md-6">
                  <div className="d-highlight d-font-black d-text-72">
                    Meet Our Team
                  </div>
                  <div className="d-white d-font-book d-text-18">
                    RealT is a union of seasoned real estate and blockchain industry executives, along with 
                    marketing, ecommerce and technology experts. Together, we are executing our collective 
                    vision to create a new real estate ownership experience.
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
        <div style={{margin: "8% 18% 8% 18%"}}>
          <Row>
            <Col md="4">
              <Team1Member
                img="imgs/team1/JanetJohnson.jpg"
                name="Dr. Janet Johnson"
                job="Tooth Specialist"
                delay={400}
              />
            </Col>
            <Col md="4">
              <Team1Member
                img="imgs/team1/CharlesSmith.jpg"
                name="Dr. Charles Smith"
                job="Orthodontist"
                delay={400}
              />
            </Col>
            <Col md="4">
              <Team1Member
                img="imgs/team1/OliviaBayne.jpg"
                name="Dr. Olivia Bayne"
                job="Hygienist"
                delay={400}
              />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Team1;
