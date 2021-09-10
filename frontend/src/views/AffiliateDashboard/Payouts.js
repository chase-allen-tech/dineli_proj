import React, {Component} from "react";
import {Layout} from "element-react";
import {Table as TableBs} from "react-bootstrap";

class Payouts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table3: {
                data: []
            },
        }

    }

    render() {
        return <>
            <Layout.Row style={{border: "1px solid #03ffa4"}}>
                <Layout.Col className="d-font-bold d-text-36" span="24"
                            style={{background: "#03ffa4", padding: "15px 0 0px 20px"}}>
                    <div className="grid-content bg-purple-dark">Referral Payouts</div>
                </Layout.Col>

                <div style={{width: "95%", padding: 30, margin: "5% 0 0 2.5% ", border: "1px solid #03ffa4"}}>
                    <span className="d-font-bold d-white">Requesting a Payout</span><br/>
                    <span className="d-font-book d-white">To request a payout of your accumulated Affiliate earnings,
                        just email us at <a href="http://realt.co/">affiliates@realt.co</a>!
                    </span><br/>
                    <span className="d-font-book d-white">A RealT representative will respond shortly to finalize your request.
                    </span><br/>
                </div>

                <div id="affiliate-dashboard-payout" style={{margin: "20px 0 0 0"}}>
                    <TableBs striped bordered hover>
                        <thead className="d-font-book d-black" style={{background: "#d3fdee"}}>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Payout Method</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.table3.data.length === 0 &&
                            <tr><td colSpan={5} className="d-font-book d-white">You have not made any referrals
                                yet. </td></tr>
                        }
                        </tbody>
                    </TableBs>
                </div>
            </Layout.Row>
        </>
    }
}

export default Payouts;