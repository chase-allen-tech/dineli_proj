import React, {Component} from "react";
import './index.css'
import AffiliateURLs from "./AffiliateURLs";
import Statistics from "./Statistics";
import Referrals from "./Referrals";
import Payouts from "./Payouts"
import Visits from "./Visits"
import Settings from "./Settings"
import LifetimeCustomers from "./LifetimeCustomers"
import DirectLinks from "./DirectLinks"

const affiliateMenu = [
    'Affiliate URLs',
    'Statistics',
    'Referrals',
    'Payouts',
    'Visits',
    'Settings',
    'Lifetime Customers',
    'Direct Links',
]

const compMap = [
    <AffiliateURLs/>, <Statistics/>, <Referrals/>, <Payouts/>, <Visits/>, <Settings/>, <LifetimeCustomers/>,
    <DirectLinks/>
]

class AffiliateDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabNum: 0,
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleTabNum = (e) => {
        this.setState({
            tabNum: e.target.accessKey
        })
    }

    render() {

        return (<div style={{margin: "10% 12% 10% 12%"}}>
                <div id='affiliate-menu'>
                    {
                        affiliateMenu.map((e, idx) => {
                            let activeClass = Number(this.state.tabNum) === idx ? 'active' : '';
                            return <div className={`d-text-28 d-font-bold ${activeClass}`} key={idx}
                                        onClick={this.handleTabNum}>{e}</div>
                        })
                    }
                </div>
                <div style={{marginTop: 50}}>
                    {
                        affiliateMenu.map((e, idx) => (
                            (Number(this.state.tabNum) === idx) && compMap[idx]
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default AffiliateDashboard;