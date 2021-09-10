import React, {Component} from "react"
import {Layout} from "element-react"
import {Table as TableBs} from "react-bootstrap"

class Referrals extends Component {
    constructor(props) {
        super(props)
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
                    <div className="grid-content bg-purple-dark">Referrals</div>
                </Layout.Col>

                <div style={{width: "95%", padding: 30, margin: "5% 0 0 2.5% ", border: "1px solid #03ffa4"}}>
                    <span className="d-font-bold d-white">Notice</span><br/>
                    <span className="d-font-book d-white">The Reference Column has been updated.</span><br/>
                    <span className="d-font-book d-white">You can only attribute referrals to a specific customer if the
                        customer provides you with their Affiliate Customer ID, shown below in the 'Customer ID' column.
                    </span><br/>
                    <span className="d-font-book d-white">Customers can find this Affiliate Customer ID in the “Account Details”
                        section of their “My Account” area.
                    </span><br/>
                    <span className="d-font-book d-white">Please reach out to your affiliate customers independently if you
                        would like this information.
                    </span><br/>

                </div>

                <div id="affiliate-dashboard-referrals" style={{margin: "20px 0 0 0"}}>
                    <TableBs striped bordered hover>
                        <thead className="d-font-book d-black" style={{background: "#d3fdee"}}>
                        <tr>
                            <th>Customer ID</th>
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Date</th>
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

export default Referrals