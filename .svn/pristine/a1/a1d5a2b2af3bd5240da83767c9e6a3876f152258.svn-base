
import React, { Component } from 'react';
import { Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const docs = [
  {label: "Private Placement memurandum (PPM)", content: "Hello! I'm the body", eventKey: "0"},
  {label: "PPM Supplement", content: "Hello! I'm the body", eventKey: "1"},
  {label: "Series Designation", content: "Hello! I'm the body", eventKey: "2"},
  {label: "Subscraption	 Agreement (Generic)", content: "Hello! I'm the body", eventKey: "3"},
]

class Learn extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Fade bottom>
          <div style={{margin: "6% 12% 6% 12%"}}>
            <div style={{margin: "6% 6% 12% 6%"}}>
              <video width="100%" controls>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"></source>
              </video>
            </div>
            <Row>
              <Col md="5">
                <div className="d-highlight d-font-bold d-text-56">
                  Introduction to Dineli
                </div>
                <div className="d-white d-font-book d-text-24">
                  For those just learning about Dineli, read this short 
                  introduction to the system. This provides a high-level 
                  overview of the Dineli system, and is a great way 
                  to get started.
                </div>
                <div style={{paddingTop: '12%'}} />
                <Button className="d-font-book d-text-24" style={{width: '100%', padding: '2% 0'}}>
                  READ MORE
                </Button>
              </Col>
              <Col md="2" style={{marginTop: 30}} />
              <Col md="5">
                <div className="d-highlight d-font-bold d-text-56">
                  Download Whitepaper
                </div>
                <div className="d-white d-font-book d-text-24">
                  The whitepaper describes the Dineli system. It provides 
                  an explanation for the need of tokenized real estate, as 
                  well as the specifics of how Dineli has been built.
                </div>
                <div style={{paddingTop: '12%'}} />
                <Button className="d-font-book d-text-24" style={{width: '100%', padding: '2% 0'}}>
                  DOWNLOAD WHITEPAPER
                </Button>
              </Col>
            </Row>
            <div className="d-highlight d-font-bold d-text-56" style={{paddingTop: '12%'}}>
              Our Documentation
            </div>
            <div className="d-white d-font-book d-text-24">
              Transparency is a key principle of the blockchain technology that enables real estate tokenization. Dineli values this principle, and strives 																						
              to make as much of our documentation available to our community as possible.
            </div>
            <Accordion style={{paddingTop: '6%'}}>
              {
                docs.map((item, i) => {
                  return <Card style={{border: '0px solid', backgroundColor: 'transparent', paddingBottom: 12}} key={i}>
                    <Accordion.Toggle as={Card.Header} eventKey={item.eventKey} className="d-content-highlight d-black d-font-bold d-text-24" style={{padding: '12px 36px'}}>
                      {item.label}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={item.eventKey}>
                      <Card.Body className="d-white d-font-book d-text-18" style={{padding: 24}}>
                        {item.content}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                })
              }
            </Accordion>
          </div>
        </Fade>
      </div>
    )
  }
}

export default Learn;
