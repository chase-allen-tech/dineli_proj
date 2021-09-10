
import React, { Component } from 'react';
import { Button, Row, Col, FormControl, Form } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

class SellTokens extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Fade>
          <div className="img-box img-box-team">
            <Fade bottom delay={200}>
              <div style={{margin: "10% 12% 10% 12%"}}>
                <div className="col-md-6">
                  <div className="d-highlight d-font-black d-text-82">
                    Sell Tokens
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
        <div style={{margin: "6% 12% 2% 12%"}}>
          <div className="d-highlight d-font-black d-text-48">
            Tokens
            <span style={{padding: '2%'}} />
            <img className="img-mobile" src="imgs/tokens/token.png" alt="Token" />
          </div>
          <div style={{height: 24}} />
          <div className="d-white d-font-book d-text-24">
            RealT will buy back your RealTokens! This service is limited to $2000 per week. <br/>
            Token buyback requires RealT approval, and can take up to 10 business days. We appreciate your patience!
          </div>
        </div>
        <Fade>
          <div className="img-box img-box-token">
            <Fade bottom delay={200}>
              <div style={{margin: "12% 16% 6% 16%"}}>
                <div className="d-white d-font-book d-text-36">
                  We Are Currently <br/>
                  Buying Back Tokens from <br/>
                  properties with these statuses:
                </div>
                <Row>
                  <Col md="2" style={{marginTop: 30}}>
                    <Button className="d-font-black d-text-24" style={{width: '100%'}}>SOLD OUT</Button>
                  </Col>
                  <Col md="1" />
                  <Col md="4" style={{marginTop: 30}}>
                    <Button className="d-font-black d-text-24" style={{width: '100%'}}>UNDER RENOVATION</Button>
                  </Col>
                  <Col md="1" />
                  <Col md="4" style={{marginTop: 30}}>
                    <Button className="d-font-black d-text-24" style={{width: '100%'}}>OFFERING CLOSED</Button>
                  </Col>
                </Row>
              </div>
            </Fade>
          </div>
        </Fade>
        <div style={{margin: "6% 12% 2% 12%"}}>
          <div className="d-content-highlight d-black d-font-black d-text-36" style={{padding: '20px 30px'}}>
            + Sell Tokens From Property
          </div>
          <div className="d-content-round-border" style={{borderRadius: '0 0 8px 8px', padding: '5% 2%', marginBottom: 36}}>
            <Row>
              <Col md="6" style={{marginBottom: 12}}>
                <div className="d-highlight d-font-bold d-text-24" style={{marginBottom: 12}}>
                  Property
                </div>
                <FormControl
                  className="d-font-bold d-text-18"
                  placeholder="Select a property"
                />
              </Col>
              <Col md="1" style={{marginBottom: 12}}>
                <div className="d-highlight d-font-bold d-text-24" style={{marginBottom: 12}}>
                  Tokens
                </div>
                <FormControl
                  className="d-font-bold d-text-18"
                  placeholder="0"
                />
              </Col>
              <Col md="2" style={{marginBottom: 12}}>
                <div className="d-highlight d-font-bold d-text-24" style={{marginBottom: 12}}>
                  Price/Token
                </div>
                <FormControl
                  className="d-font-bold d-text-18"
                  placeholder="$0.00"
                />
              </Col>
              <Col md="3" style={{marginBottom: 12}}>
                <div className="d-highlight d-font-bold d-text-24" style={{marginBottom: 12}}>
                  Sale Price
                </div>
                <FormControl
                  className="d-font-bold d-text-18"
                  placeholder="$0.00"
                />
              </Col>
            </Row>
          </div>
          <div style={{display: 'flex', textAlign: 'right', alignItems: 'center', marginBottom: 16, marginRight: '5%'}}>
            <div className="d-highlight d-font-bold d-text-24" style={{marginLeft: 'auto', marginRight: 24}}>
              SUBTOTAL
            </div>
            <FormControl
              className="d-font-bold d-text-18"
              placeholder="$0.00"
              style={{width: 128}}
            />
          </div>
          <div style={{display: 'flex', textAlign: 'right', alignItems: 'center', marginBottom: 16, marginRight: '5%'}}>
            <div className="d-highlight d-font-book d-text-18" style={{marginLeft: 'auto', marginRight: 24}}>
              REALT FEE (1.5%)
            </div>
            <FormControl
              className="d-font-bold d-text-18"
              placeholder="$0.00"
              style={{width: 128}}
            />
          </div>
          <div style={{display: 'flex', textAlign: 'right', alignItems: 'center', marginBottom: 36, marginRight: '5%'}}>
            <div className="d-highlight d-font-book d-text-18" style={{marginLeft: 'auto', marginRight: 24}}>
              PROCESSOR FEE (1.5%)
            </div>
            <FormControl
              className="d-font-bold d-text-18"
              placeholder="$0.00"
              style={{width: 128}}
            />
          </div>
          <div style={{textAlign: 'right', alignItems: 'center', marginBottom: 36, height: 10}}>
            <div className="d-content-highlight" style={{marginLeft: 'auto', width: '40%', minWidth: 250, height: '100%'}} />
          </div>
          <div style={{display: 'flex', textAlign: 'right', alignItems: 'center', marginBottom: 48, marginRight: '5%'}}>
            <div className="d-highlight d-font-bold d-text-24" style={{marginLeft: 'auto', marginRight: 24}}>
              TOTAL SALE
            </div>
            <FormControl
              className="d-font-bold d-text-18"
              placeholder="$0.00"
              style={{width: 128}}
            />
          </div>
          <div style={{display: 'flex', marginBottom: 24, marginRight: '5%'}}>
            <Form.Check className="d-white d-font-book d-text-18" type="checkbox" label="I verify that these values are correct." style={{marginLeft: 'auto'}} />
          </div>
          <div style={{textAlign: 'right', marginBottom: 12}}>
            <Button className="d-font-black d-text-24" style={{width: '60%', maxWidth: 436, padding: '1% 0'}}>
              SELL TOKENS
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default SellTokens;
