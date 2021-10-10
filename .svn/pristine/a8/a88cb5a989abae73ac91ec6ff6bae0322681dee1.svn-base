import React, {Component} from "react";
import {Layout, Input, Button} from 'element-react';
import {AiFillUpCircle, AiFillDownCircle} from "react-icons/ai";

class AffiliateURLs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageURL: 'https://realt.co/',
            referralURL: 'https://realt.co/ref/Facilitator/',
            referralLink: false,
            generateReferralURL: false,
        }
    }

    handleReferralLink = () => {
        this.setState({
            referralLink: !this.state.referralLink
        })

    }

    handleGenerateURL = () => {
        this.setState({
            generateReferralURL: true
        })
    }

    render() {
        return <>
            <Layout.Row style={{border: "1px solid #03ffa4"}}>
                <Layout.Col className="d-font-bold d-text-36" span="24"
                            style={{background: "#03ffa4", padding: "15px 0 15px 20px"}}>
                    <div className="grid-content bg-purple-dark">Affiliate URLs</div>
                </Layout.Col>
                <div style={{margin: "90px 20px 20px 20px"}}>
                    <span className="d-font-book d-white">Your affiliate username is: </span>
                    <span className="d-font-bold d-highlight">Facilitator</span>
                </div>
                <div style={{margin: "0px 20px 10px 20px"}}>
                    <span className="d-font-book d-white">Your referral URL is: </span>
                    <span className="d-font-bold d-highlight">https://realt.co/ref/Facilitator/</span>
                </div>

                <div style={{margin: "0px 20px 10px 20px", border: "1px solid #03ffa4", padding: 20}}>
                    <div onClick={this.handleReferralLink} className="d-highlight d-text-28 d-font-bold"
                         style={{margin: "0.5% 0"}}>How Do Referral Links Work? &nbsp;
                        {
                            this.state.referralLink ? <AiFillUpCircle/> : <AiFillDownCircle/>
                        }
                    </div>
                    {
                        this.state.referralLink && <>
                            <div>
                                    <span className="d-font-book d-white">When you share an affiliate link to RealT, we track the
                                    visit and purchases of any user who clicks that link.</span>
                            </div>
                            <div className="d-white">
                                <span>If that user buys in the same browser session after following your link, they are counted as
                                    your referral, and you earn a </span><span
                                className="d-font-bold">2% commission </span><span>on their purchases... and all their purchases going forward!
                                </span>
                            </div>
                            <div>
                                <span className="d-font-book d-white">(For more information about how long you earn commission on a referred user's purchases, please see Lifetime Customers.)</span>
                            </div>
                            <div className="d-white">
                                <span>The links above point to our homepage, but you can also create links to any page on RealT.co in</span><span
                                className="d-font-bold">one of two ways: </span>
                            </div>
                            <ul className="d-white">
                                <li>Copy the RealT URL you want to link to, and simply replace <span
                                    className="d-font-bold">realt.co</span> with the new URL
                                    in your affiliate link. Make sure to keep the <span
                                        className="d-font-bold">/ref/etc</span> part — that's how we know the
                                    referral is yours!
                                </li>
                                <li>Copy the RealT URL you want to link to into our Referral URL Generator below, select
                                    a Campaign if you want to track that link's performance separately, and click
                                    'Generate URL'. If you want to use a Custom Slug, just replace your username in the
                                    URL with your Custom Slug.
                                </li>
                            </ul>
                            <div>
                                <span
                                    className="d-font-book d-white">(For more about Custom Slugs, check out Settings.)</span>
                            </div>
                            <div>
                                <span className="d-font-book d-white">And if you're linking from your own website and don't
                                    want to bother with affiliate links at all, you should check out Direct Links!
                                </span>
                            </div>
                        </>
                    }
                </div>

                <div style={{margin: "0px 20px 10px 20px"}}>
                    <span className="d-font-bold d-highlight">Referral URL Generator</span>
                </div>

                <div style={{margin: "0px 20px 10px 20px"}}>
                    <span className="d-font-bold d-white">Enter any URL from this website in the form below to generate a referral link!                    </span>
                </div>

                <Layout.Row style={{margin: "0px 20px 10px 20px"}}>
                    <Layout.Col span="12">
                        <div className="grid-content">
                            <div className="d-font-book d-white d-text-24">Page URL</div>
                            <Input value={this.state.pageURL} style={{width: "95%"}}/>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="12">
                        <div className="grid-content">
                            <div className="d-font-book d-white d-text-24">Campaign Name (optional)</div>
                            <Input style={{width: "95%"}}/>
                        </div>
                    </Layout.Col>
                </Layout.Row>

                {this.state.generateReferralURL && <Layout.Row style={{margin: "0px 20px 10px 20px"}}>
                    <Layout.Col span="12">
                        <div className="grid-content">
                            <div className="d-font-book d-white d-text-24">Referral URL</div>
                            <Input type="text" value={this.state.referralURL} style={{width: "95%"}} onChange={(e)=>(e)}/>
                            <div className="d-font-book d-white d-text-20">(now copy this referral link and share it
                                anywhere)
                            </div>
                        </div>
                    </Layout.Col>
                </Layout.Row>}

                <Layout.Row>
                    <Layout.Col span="24" style={{textAlign: "center", marginBottom: 30}}>
                        <div className="grid-content">
                            <Button style={{background: "#03ffa4", color: "black"}} className="d-font-bold"
                                    type="success" onClick={this.handleGenerateURL}>GENERATE URL</Button>
                        </div>
                    </Layout.Col>
                </Layout.Row>

            </Layout.Row>
        </>
    }
}

export default AffiliateURLs;