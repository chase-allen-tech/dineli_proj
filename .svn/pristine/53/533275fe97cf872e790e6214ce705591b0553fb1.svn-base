import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {Layout} from 'element-react';
import Login from "../Login";
import Register from "../Register";
import {connect} from "react-redux";

const mapStateToProps = state => {
    const {logged} = state;
    return {
        logged
    }
}

const Affiliate = connect(mapStateToProps)(class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // logged: props.logged,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div style={{margin: "4% 12% 4% 12%"}}>
                <Row>
                    <Col sm="6">
                        <Fade bottom delay={200}>
                            <div>
                                <div className="d-white d-font-bold d-text-24">
                                    INTRODUCING THE DINELI
                                    <br/>
                                    AFFILIATE PROGRAM!
                                </div>
                                <div className="d-highlight d-font-black d-text-header">
                                    Become a Real Estate Agent
                                </div>
                                <div className="d-white d-font-book d-text-18">
                                    When you invest in a Dineli property token, you are starting a
                                    tokenized real estate portfolio, the easiest way to invest in
                                    ownership of property in the United States. You also gain access
                                    to our Dineli Affiliate Program!
                                </div>
                                <div style={{height: 24}}/>
                                <div className="d-highlight d-font-bold d-text-30">
                                    Dineli Affiliate Program
                                </div>
                                <div className="d-white d-font-bold d-text-18">
                                    Investors in any Dineli property on the market get special perks:
                                    2% cashback on all RealTokens sold
                                    VIP access to events and special promotions
                                    Early notification of new property listings
                                </div>
                                <div style={{height: 48}}/>
                                <div className="d-white d-font-book d-text-18">
                                    Anyone who owns just one RealToken is invited to join the
                                    Affiliate Program. Begin your real estate investment portfolio,
                                    and start earning rental payments and referral rewards to
                                    your wallet on a daily basis.
                                </div>
                                <div style={{height: 24}}/>
                                <div className="d-highlight d-font-bold d-text-20">
                                    Join the first generation of tokenized real estate
                                    professionals today!
                                </div>
                            </div>
                        </Fade>
                    </Col>
                    <Col sm="6" style={{marginTop: 30}}>
                        <Zoom delay={600}>
                            <div>
                                <img width="100%"
                                     src={!this.props.logged ? `imgs/affiliate/affiliate.jpg` : `imgs/marketplace.png`}
                                     alt="Affiliate"/>
                                <div className="d-content-highlight d-content-center d-black d-font-black d-text-60"
                                     style={{padding: "3%"}}>
                                    {
                                        !this.props.logged ? `Become an Affiliate!` : `Congratulations!`
                                    }
                                </div>
                                {
                                    !this.props.logged ?
                                        <div className="d-white d-font-book d-text-20">
                                            Join the new generation of digital real estate agents and grow your income
                                            stream with Dineli referrals.To get started, just sign in or register below!
                                        </div>
                                        : <>
                                            <div className="d-white d-font-book d-text-20">
                                                You are now a RealT Affiliate!<br/>
                                                You're ready to start earning referral rewards.<br/>
                                                Head to your Affiliate Dashboard to get set up!
                                            </div>
                                            <button className={'d-black d-font-bold d-text-24 d-content-highlight'}
                                                    style={{
                                                        border: "solid 1px #03ffa4",
                                                        borderRadius: 4,
                                                        textAlign: "center",
                                                        margin: "10% 0% 0% 25%",
                                                        padding: "1%"
                                                    }}>AFFILIATE DASHBOARD
                                            </button>
                                        </>
                                }

                            </div>
                        </Zoom>
                    </Col>
                </Row>
                {
                    !this.props.logged && <Fade bottom delay={200}>
                        <Layout.Row>
                            <Layout.Col sm="24" md={12}>
                                <div className="grid-content">
                                    <Login/>
                                </div>
                            </Layout.Col>
                            <Layout.Col sm="24" md={12}>
                                <div className="grid-content">
                                    <Register/>
                                </div>
                            </Layout.Col>
                        </Layout.Row>
                    </Fade>
                }

            </div>
        )
    }
})

export default Affiliate;
