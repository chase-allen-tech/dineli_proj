import React, {Component} from "react";
import {Layout} from "element-react";
import {Table as TableBs} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai";

class Visits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table3: {
                data: [
                    {
                        url: {address: '/home', label: 'Dineli.com'},
                        referringURL: 'Direct traffic',
                        converted: <AiOutlineClose/>,
                        date:'May 22, 2021 3:02 pm'
                    },
                    {
                        url: {address: '/home', label: 'Dineli.com'},
                        referringURL: 'Direct traffic',
                        converted: <AiOutlineClose/>,
                        date:'May 22, 2021 3:02 pm'
                    },
                    {
                        url: {address: '/home', label: 'Dineli.com'},
                        referringURL: 'Direct traffic',
                        converted: <AiOutlineClose/>,
                        date:'May 22, 2021 3:02 pm'
                    },
                ]
            },
        }

    }

    render() {
        return <>
            <Layout.Row style={{border: "1px solid #03ffa4"}}>
                <Layout.Col className="d-font-bold d-text-36" span="24"
                            style={{background: "#03ffa4", padding: "15px 0 0px 20px"}}>
                    <div className="grid-content bg-purple-dark">Referral URL Visits</div>
                </Layout.Col>

                <div id="affiliate-dashboard-visits" style={{margin: "20px 0 0 0"}}>
                    <TableBs striped bordered hover>
                        <thead className="d-font-book d-black" style={{background: "#d3fdee"}}>
                        <tr>
                            <th>URL</th>
                            <th>Referral URL</th>
                            <th>Converted</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.table3.data.length === 0 ?
                                <tr>
                                    <td colSpan={5} className="d-font-book d-white">You have not made any referrals
                                        yet.
                                    </td>
                                </tr>
                                :
                                this.state.table3.data.map((e) =>
                                    <tr className="d-white d-font-book">
                                        <td><Link to={e.url.address}>{e.url.label}</Link></td>
                                        <td>{e.referringURL}</td>
                                        <td style={{color: "red"}}>{e.converted}</td>
                                        <td>{e.date}</td>
                                    </tr>
                                )
                        }
                        </tbody>
                    </TableBs>
                </div>
            </Layout.Row>
        </>
    }
}

export default Visits;