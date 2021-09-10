import React, {Component} from "react";
import {Layout} from "element-react";
import {AiFillDownCircle, AiFillUpCircle} from "react-icons/ai";

class LifetimeCustomers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
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

    handleCheck = () => {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        return <>
            <Layout.Row style={{border: "1px solid #03ffa4"}}>
                <Layout.Col className="d-font-bold d-text-36" span="24"
                            style={{background: "#03ffa4", padding: "15px 0 15px 20px"}}>
                    <div className="grid-content bg-purple-dark">Lifetime Customers</div>
                </Layout.Col>
                <div style={{margin: "90px 20px 10px 20px", border: "1px solid #03ffa4", padding: 20}}>
                    <div onClick={this.handleReferralLink} className="d-highlight d-text-28 d-font-bold"
                         style={{margin: "0.5% 0"}}>How Do Lifetime Customers Work? &nbsp;
                        {
                            this.state.referralLink ? <AiFillUpCircle/> : <AiFillDownCircle/>
                        }
                    </div>
                    {
                        this.state.referralLink && <>
                            <div>
                                <span className="d-font-book d-white">When someone follows your affiliate link and registers
                                    or makes a purchase in the same browser session, they become your Lifetime Customer.
                                </span><br/>
                                <span className="d-font-book d-white">That means that all their purchases after their initial
                                    referral also earn you commission. These purchases do not have to use your affiliate link —
                                    they are automatically counted as referrals to your affiliate account!</span><br/>
                                <span className="d-font-book d-white">Be aware: If you gain a Lifetime Customer during registration,
                                    they will only remain your Lifetime Customer if they make a purchase within the next 30 days. Similarly,
                                    if a Lifetime Customer makes no purchases on RealT.co for one year, they will cease to be your Lifetime Customer.
                                </span><br/>
                                <span className="d-font-book d-white">To keep your Lifetime Customers active, make sure they
                                    know about new RealT offerings!</span><br/>
                            </div>
                        </>
                    }
                </div>
                <div className="d-font-book d-white" style={{margin: "0px 20px 10px 20px"}}>You don't have any lifetime
                    customers yet.
                </div>
            </Layout.Row>
        </>
    }
}

export default LifetimeCustomers;