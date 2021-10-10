import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import ExternalLinks from "../views/ExternalLinks"
import {Link} from "react-router-dom"

class TheFooter extends Component {

    render() {
        return (
            <div style={{margin: "3% 12% 3% 12%"}}>
                <div className="footer-deskContent" style={{margin: "6% 3% 6% 3%"}}>
                    <Row style={{width: '100%'}}>
                        <Col md="3">
                            <Link to={'/home'}><img className="img-mobile" src="imgs/logo.png" alt="Logo"/></Link>
                        </Col>
                        <Col md="7" style={{marginTop: 'auto', textAlign: 'right'}}>
                            <div style={{marginBottom: "20px"}}></div>
                            <div className={'footer-deskContent-link-left'}><ExternalLinks/></div>
                            <div style={{marginBottom: "20px"}}></div>
                        </Col>
                    </Row>
                </div>
                <div className="footer-phoneContent d-content-center" style={{margin: "6% 3% 6% 3%"}}>
                    <img className="img-mobile" src="imgs/logo.png" alt="Logo" style={{textAlign: "center"}}/>
                    <div style={{height: 24}}/>
                    <ExternalLinks/>
                </div>
                <div style={{margin: "6% 3% 6% 3%"}}>
                    <Row>
                        <Col md="6" style={{marginBottom: '1rem'}}>
                            <div className="d-white d-font-bold d-text-24">
                                <img style={{marginRight: "2%"}} className="img-mobile" src="imgs/footer/address.png"
                                     alt="Token"/>
                                <span style={{padding: 6}}/>
                                14935 Shady Bend Dr, Houston, TX 77070
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="d-white d-font-bold d-text-24">
                                <img className="img-mobile" src="imgs/footer/phone.png" alt="Token"/>
                                <span style={{padding: 6}}/>
                                0000000000000000
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="d-white d-font-book d-text-18" style={{textAlign: "justify"}}>
                    This website and its contents, and any information displayed or linked to on Dineli’s social media
                    sites, is not an offer or a solicitation to buy or sell securities, and does not constitute i
                    nvestment advice. Dineli is not liable for any investment decisions by its members or subscribers.
                    It is strongly recommended that any purchase or sale decision be discussed with a
                    financial advisor, or a broker-dealer, or a member of any financial regulatory bodies. Investors are
                    cautioned that they may lose all or a portion of their investment in this or any other
                    company.
                    <br/>
                    <br/>
                    This website and its contents, and any information displayed or linked to on Dineli’s social media
                    sites, may contain projections or other forward‐looking statements regarding future
                    events, targets, forecasts or expectations regarding the strategies described therein, and is only
                    current as of the date indicated. There is no assurance that such events or targets will
                    be achieved and you should not place undue reliance on such statements, as actual results could vary
                    substantially due to subsequent market events or other developments. Past
                    performance is not a guarantee of future performance. The information is as of the date presented
                    and Dineli’s does not undertake to advise you of any changes or provide any
                    updates to such information.
                </div>
            </div>
        )
    }
}

export default TheFooter