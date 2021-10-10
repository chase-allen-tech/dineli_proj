import React, {Component} from "react"
import {Layout} from "element-react"
import {Table as TableBs} from 'react-bootstrap'

class Statistics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            table1: {
                data: [
                    {unpaidReferrals: '0', paidReferrals: '0', visits: '3', conversionRate: '0%'},
                ]
            },
            table2: {
                data: [
                    {unpaidEarnings: '$0.00', paidEarnings: '$0.00', conversionRate: '2%'},
                ]
            },
            table3: {
                data: []
            },
        }
    }

    render() {
        return <>
            <Layout.Row style={{border: "1px solid #03ffa4"}}>
                <Layout.Col className="d-font-bold d-text-36" span="24"
                            style={{background: "#03ffa4", padding: "15px 0 15px 20px"}}>
                    <div className="grid-content bg-purple-dark">Statistics</div>
                </Layout.Col>
                <div>
                    <TableBs striped bordered hover className="affiliate-statistics-table1">
                        <thead className="d-font-book d-black" style={{background: "#d3fdee"}}>
                        <tr>
                            <th>Unpaid Referrals</th>
                            <th>Paid Referrals</th>
                            <th>Visits</th>
                            <th>Conversion Rate</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.table1.data.length === 0 ?
                                <tr>
                                    <td colSpan={5} className="d-font-book d-white">You have not made any referrals
                                        yet.
                                    </td>
                                </tr>
                                :
                                this.state.table1.data.map((e) =>
                                    <tr className="d-white d-font-book">
                                        <td className="d-font-bold d-white">{e.unpaidReferrals}</td>
                                        <td className="d-font-bold d-white">{e.paidReferrals}</td>
                                        <td className="d-font-bold d-white">{e.visits}</td>
                                        <td className="d-font-bold d-white">{e.conversionRate}</td>
                                    </tr>
                                )
                        }
                        </tbody>
                    </TableBs>
                </div>
            </Layout.Row>
            <div style={{margin: "30px 0 30px 0"}}>
                <TableBs striped bordered hover className="affiliate-statistics-table1">
                    <thead className="d-font-book d-black" style={{background: "#d3fdee"}}>
                    <tr>
                        <th>Unpaid Earnings</th>
                        <th>Paid Earnings</th>
                        <th>Commission Rate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.table2.data.length === 0 ?
                            <tr>
                                <td colSpan={5} className="d-font-book d-white">You have not made any referrals
                                    yet.
                                </td>
                            </tr>
                            :
                            this.state.table2.data.map((e) =>
                                <tr className="d-white d-font-book">
                                    <td className="d-font-bold d-white">{e.unpaidEarnings}</td>
                                    <td className="d-font-bold d-white">{e.paidEarnings}</td>
                                    <td className="d-font-bold d-white">{e.conversionRate}</td>
                                </tr>
                            )
                    }
                    </tbody>
                </TableBs>
            </div>
            <div style={{margin: "30px 0 30px 0"}}>
                <TableBs striped bordered hover>
                    <thead className="d-font-book d-black" style={{background: "#d3fdee"}}>
                    <tr>
                        <th>Campaign</th>
                        <th>Visits</th>
                        <th>Unique Links</th>
                        <th>Converted</th>
                        <th>Conversion Rate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.table3.data.length === 0 &&
                        <tr>
                            <td colSpan={5} className="d-font-book d-white">You have not made any referrals
                                yet.
                            </td>
                        </tr>
                    }
                    </tbody>
                </TableBs>
            </div>

        </>
    }
}

export default Statistics