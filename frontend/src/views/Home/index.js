import React, {Component} from 'react'
import {Button, Row, Col, Form} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import {Layout} from "element-react"
import ImageLabel from '../ImageLabel'
import BecomeInvestor from './BecomeInvestor'
import './home.css'
import Home3 from "./Home3"


class Home extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  renderHome1() {
    return <Fade>
      <div className="img-box img-box-home1">
        <Row style={{margin: "4% 12% 0% 12%"}}>
          <Col md="6" style={{marginBottom: 20}}>
            <Fade bottom delay={200}>
                <div className="d-white d-font-black d-text-90">
                  Fractional and <br/>
                  frictionless real <br/>
                  estate investing
                </div>
                <div style={{height: 30}}/>
                <div className="d-highlight d-font-black d-text-48">
                  OWNERSHIP REINVENTED
                </div>
                <div style={{height: 5}}/>
                <div className="d-white d-font-book d-text-24">
                  For the first time, investors around the globe can buy into the US
                  real estate market through fully-compliant, fractional,
                  tokenized ownership. Powered by blockchain.
                </div>
            </Fade>
          </Col>
          <Col md="6" style={{paddingLeft: '20%', marginTop: 'auto'}}>
            <Fade bottom delay={600}>
              <div className="d-white d-font-black d-text-36" style={{width: 'fit-content'}}>
                EXPECTED ROI
                <div className="d-content-center d-white d-font-black d-text-18">
                  (rental income)
                </div>
              </div>

              <div className="d-white d-font-black d-text-90">
                Up to 12%
              </div>
            </Fade>
          </Col>
        </Row>

        <div style={{margin: "3px 12% 0% 13%", paddingBottom: "8%"}}>
          <div>
            <Button className="d-font-black d-text-24">GET STARTED</Button>
          </div>
          <div style={{height: 48}}/>
          <div className="d-white d-font-black d-text-30">
            AS SEEN ON
          </div>
          <img src="imgs/home/1/1.png" alt="" style={{width: '103%'}}/>
        </div>
      </div>
    </Fade>
  }

  renderHome2() {
    return <Fade>
      <div className="img-box img-box-home2">
        <div style={{margin: "8% 12% 2% 12%"}}>
          <Fade bottom delay={200}>
            <div>
              <div className="d-white d-font-black d-text-56 col-md-8">
                Dineli is the easiest and most
                transparent way to invest
                in income generating Real Estate
                in US Market
              </div>
              <div style={{margin: "2% 1%"}}>
                <ImageLabel
                  img="imgs/home/2/check.png"
                  padding={12}
                  fontSize={24}
                  label="Start earning a second income today"
                />
                <ImageLabel
                  img="imgs/home/2/check.png"
                  padding={12}
                  fontSize={24}
                  label="Buy Real estate hassle-free"
                />
                <ImageLabel
                  img="imgs/home/2/check.png"
                  padding={12}
                  fontSize={24}
                  label="Invest in under 3 minutes"
                />
                <ImageLabel
                  img="imgs/home/2/check.png"
                  padding={12}
                  fontSize={24}
                  label="100% Legal and compliant"
                />
                <ImageLabel
                  img="imgs/home/2/check.png"
                  padding={12}
                  fontSize={24}
                  label="The new way to get a diversified Portfolio"
                />
                <ImageLabel
                  img="imgs/home/2/check.png"
                  padding={12}
                  fontSize={24}
                  label="Real estate NOW liquid. Resell it anytime"
                />
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <ImageLabel
                  img="imgs/logo2.png"
                  padding={24}
                  fontSize={18}
                  label="is regulated by the US Financial Service Authority "
                />
              </div>
              <Row>
                <Layout.Row gutter={30}>
                  <Layout.Col span="12">
                    <div className="grid-content bg-purple" style={{textAlign: "right"}}>
                      <Button
                        className="d-font-black d-back-highlight-button d-text-18 home2-btn">
                        GET STARTED
                      </Button>
                    </div>
                  </Layout.Col>

                    <Layout.Col span="12">
                      <div className="grid-content bg-purple" style={{textAlign: "left"}}>
                        <Button className="d-font-black d-none-white-button d-text-18 home2-btn">
                          <img src="imgs/home/2/movie.png" alt="Movie" style={{paddingRight: 8}}/>
                            HOW IT WORKS
                        </Button>
                      </div>
                    </Layout.Col>
                </Layout.Row>
              </Row>
              <div style={{height: 24}}/>
              <div style={{display: 'flex', alignItems: 'flex-end', marginLeft: 12}}>
                <img src="imgs/home/2/rocket.png" alt="" style={{paddingRight: 4}}/>
                <div className="d-white d-font-book d-text-18" style={{textDecoration: 'underline'}}>
                  Find out why now is a great time to buy US Real Estate
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  }

  renderHome4() {
    return <Fade>
      <div className="img-box img-box-home4">
        <div style={{margin: "4% 10% 6% 10%"}}>
          <Fade bottom delay={200}>
            <div className="d-content-center">
              <div className="d-white d-font-black d-text-48">
                WHAT DO WE DO AT DINELI
              </div>
              <div style={{height: 24}}/>
              <img src="imgs/home/4/1.png" alt="BecomeInvestor"
                style={{width: '100%', padding: '0% 28%'}}/>
              <div style={{height: 48}}/>
              <div className="d-black d-font-book d-text-24">
                We sell Real Estate properties through fractional ownership using blockchain technology.
                Each Real Estate Property offered to investors on Dineli is owned by a Limited Liability
                Corporation (LLC) which is fractionated and Tokenized.
                The DineliTokens created for each property are then made available for purchase on
                Dineli platform.
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  }

  renderHome5() {
    return <Fade>
      <div className="img-box img-box-home5">
        <div style={{margin: "8% 16% 8% 16%"}}>
          <Fade bottom delay={200}>
            <div className="d-content-center d-highlight d-font-black d-text-85">
              Become investor
            </div>
            <div className="d-content-center d-white d-font-book d-text-20">
              It’s never been easier to invest in residential real estate
            </div>
            <div style={{padding: '4%'}}/>
            <Row>
              <Col className="home5-col">
                <BecomeInvestor
                  img="imgs/home/5/1.png"
                  title="Create An Account"
                  description="Sign up for free to access property details and get a personalized dashboard"
                  delay={200}
                />
              </Col>
              <Col className="home5-col">
                <BecomeInvestor
                  img="imgs/home/5/2.png"
                  title="Start Investing"
                  description="Browse available properties and make an investment"
                  delay={200}
                />
              </Col>
              <Col className="home5-col">
                <BecomeInvestor
                  img="imgs/home/5/3.png"
                  title="Earn Income"
                  description="Receive your periodic distributions when rent is paid"
                  delay={200}
                />
              </Col>
              <Col className="home5-col">
                <BecomeInvestor
                  img="imgs/home/5/4.png"
                  title="Enjoy Your Returns"
                  description="Re-invest to multiply your returns or withdrow to enjoy your cash!"
                  delay={200}
                />
              </Col>
            </Row>
          </Fade>
        </div>
      </div>
    </Fade>
  }

  renderHome6() {
    return <Fade>
      <div className="img-box img-box-home6">
        <div className="home6-margin">
          <Fade bottom delay={200}>
            <div style={{height: 48}}/>
            <div className="d-content-center">
              <div className="d-content-center d-white d-font-black d-text-48">
                HOW DOES IT WORK?
              </div>
              <div style={{height: 48}}/>
              <img src="imgs/home/6/1.png" alt="" style={{width: '100%'}}/>
              <div>
                <Button className="d-font-bold d-highlight-black-button d-text-18 home6-btn"
                  style={{width: 228, height: 48}}>
                  SIGN up free
                </Button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  }

  renderHome7() {
    return <Fade>
      <div className="img-box img-box-home7">
        <div style={{margin: "5% 12% 5% 12%"}}>
          <Fade bottom delay={200}>
            <div>
              <div className="d-content-center d-white d-font-bold d-text-60">
                Interested in Updates?
              </div>
              <div className="d-content-center d-highlight d-font-bold d-text-30">
                The Dineli Newsletter
              </div>
              <div className="d-content-center d-white d-font-bold d-text-18">
                Fractional, liquid real estate investing.
              </div>
              <div style={{height: 24}}/>
              <Form style={{margin: "0 12% 0 12%"}}>
                <Form.Group as={Row} style={{alignItems: 'center'}}>
                  <Form.Label column sm={6} style={{marginTop: 24}}>
                    <div className="d-content-center d-white d-font-black d-text-48">
                      Stay in Touch With Us.
                    </div>
                  </Form.Label>
                  <Col sm={3} style={{marginTop: 24}}>
                    <Form.Control type="email" placeholder="Email Address" style={{height: 60}}/>
                  </Col>
                  <Col sm={3} style={{marginTop: 24}}>
                    <Button className="d-font-black d-back-highlight-button d-text-18"
                      style={{height: 60, width: '100%', minWidth: 160}}>Newsletter SIGN
                      UP
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  }

  renderHome8() {
    return <Fade>
      <div className="img-box img-box-home8">
        <Row style={{margin: "10% 12% 10% 12%"}}>
          <Col md="6">
            <Fade bottom delay={200}>
              <div className="d-white d-font-black d-text-60">
                Why invest in real estate
              </div>
              <div className="d-black d-font-book d-text-24">
                It's an asset class that offers steady income and low volatility
              </div>
              <div style={{height: 24}}/>
              <div className="d-white d-font-bold d-text-28">
                Best Performing Asset Class through Time
              </div>
              <div className="d-black d-font-book d-text-24">
                Real Estate has historically been the number 1 investment for wealth creation
              </div>
              <div style={{height: 24}}/>
              <div className="d-white d-font-bold d-text-28">
                Passive Income
              </div>
              <div className="d-black d-font-book d-text-24">
                Real Estate generates a recurring income stream from renting out the
                property
              </div>
              <div style={{height: 24}}/>
              <div className="d-white d-font-bold d-text-28">
                Stability
              </div>
              <div className="d-black d-font-book d-text-24">
                Real Estate prices tend to be less volatile than stocks and
                other financial assets over the long run
              </div>
              <div style={{height: 24}}/>
              <div className="d-white d-font-bold d-text-28">
                Residential
              </div>
              <div className="d-black d-font-book d-text-24">
                Covid-19 has made housing more relevant than ever before
              </div>
              <div style={{height: 24}}/>
              <Button className="d-font-black d-black-white-button btn-start-now">START NOW</Button>
            </Fade>
          </Col>
        </Row>
      </div>
    </Fade>
  }

  renderHome9() {
    return <Fade>
      <div className="img-box img-box-home9">
        <div style={{margin: "10% 20% 10% 20%"}}>
          <Fade bottom delay={200}>
            <div className="d-content-center d-white d-font-black d-text-72">
              NEED HELP GETTING STARTED?
            </div>
            <div className="d-content-center d-white d-font-book d-text-20">
              Talk to one of our team members and start building your portfolio
            </div>
            <div style={{height: 24}}/>
            <div className="d-content-center">
              <Button className="d-black-highlight-button d-text-24" style={{height: 60}}>SCHEDULE A
                CALL</Button>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  }

  render() {
    return (
      <div>
        {this.renderHome1()}
        {this.renderHome2()}
        {<Home3/>}
        {this.renderHome4()}
        {this.renderHome5()}
        {this.renderHome6()}
        {this.renderHome7()}
        {this.renderHome8()}
        {this.renderHome9()}
      </div>
    )
  }
}

export default Home