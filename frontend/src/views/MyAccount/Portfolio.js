import React, {Component} from 'react';
import {Button, Table as TableBs} from 'react-bootstrap';
import {Select, Layout} from "element-react";


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [{
                value: 'Option1',
                label: 'Deposit xDai'
            },
                {
                    value: 'Option1',
                    label: 'Deposit xDai'
                },
                {
                    value: 'Option1',
                    label: 'Deposit xDai'
                },
            ],
            value: ''
        }
    }

    render() {
        return (
            <>
                {/*==============================================================================*/}
                <Layout.Row style={{backgroundColor: '#03ffa4', padding: "3% 0 1% 2%"}}>
                    <Layout.Col span="6">
                        <div className="grid-content bg-purple">
                            <span className={'d-font-bold d-text-48'}>Rent</span>
                            <img className="img-mobile" src="imgs/account/orders/1.png" alt=""
                                 style={{marginLeft: 12}}/>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="18" style={{textAlign: "right"}}>
                        <div className="grid-content bg-purple-light">
                            <span className={'d-text-30 d-font-bold'}>Rent Payment Method</span>

                            {/*<img className="img-mobile" src="imgs/account/logo.png" alt=""*/}
                            {/*     style={{marginLeft: 'auto', float: "right", marginRight:30}}/>*/}
                            <Select className={'portfolio-select d-font-book d-text-18'} value={this.state.value}
                                    style={{width: "30%", margin: "1% 2% 1% 2%"}}>
                                {
                                    this.state.options.map((el, index) => {
                                        return <Select.Option key={index} label={el.label}
                                                              value={el.value}/>
                                    })
                                }
                            </Select>
                        </div>
                    </Layout.Col>
                </Layout.Row>
                <Layout.Row style={{backgroundColor: '#33454d'}}>
                    <Layout.Col span="22" offset={1} style={{margin: "2% 3% 3% 3%"}}>
                        <div className="grid-content">
                            <div className={'d-font-bold d-text-30 d-white'}>XDAI RENT DEPOSIT WALLET</div>
                            <div>
                                <span className={'d-font-book d-highlight d-text-24'}>0x9c23...E41B72</span>
                                <button className={'d-font-bold d-black d-text-30 d-content-highlight'}
                                        style={{padding: "4px 3%", borderRadius: 8, marginLeft: "18%"}}>Change wallet
                                </button>
                            </div>
                            <div className={'d-font-bold d-text-24 d-white'}>Rent will be deposited directly to this
                                wallet on the xDai network. RealT pays the fees for these transactions.
                            </div>
                        </div>
                    </Layout.Col>
                </Layout.Row>

                <div className="d-content-center" style={{marginTop: 36}}>
                    <Button className="d-font-strong d-text-18" style={{paddingLeft: 36, paddingRight: 36}}>
                        Claim rent on Ethereum
                    </Button>
                </div>
                {/*    ==========================================================================*/}
                <Layout.Row style={{backgroundColor: '#03ffa4', padding: "3% 0 1% 2%", marginTop: "3%"}}>
                    <Layout.Col span="8">
                        <div className="grid-content bg-purple">
                            <span className={'d-font-bold d-text-48'}>Asset By Sell</span>
                            <img className="img-mobile" src="imgs/account/orders/1.png" alt=""
                                 style={{marginLeft: 12}}/>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="16" style={{textAlign: "right"}}>
                        <div className="grid-content bg-purple-light">
                            <span className={'d-text-30 d-font-bold'}>Token Delivery Method</span>
                            <Select className={'portfolio-select d-font-book d-text-18'} value={this.state.value}
                                    style={{width: "30%", margin: "1% 2% 1% 2%"}}>
                                {
                                    this.state.options.map((el, index) => {
                                        return <Select.Option key={index} label={el.label}
                                                              value={el.value}/>
                                    })
                                }
                            </Select>
                        </div>
                    </Layout.Col>
                </Layout.Row>
                <Layout.Row style={{backgroundColor: '#33454d'}}>
                    <Layout.Col span="22" offset={1} style={{margin: "2% 3% 3% 3%"}}>
                        <div className="grid-content">
                            <div className={'d-font-bold d-text-30 d-white'} style={{textAlign: "justify"}}>
                                NOTE: Token balances held on the xDai network do not yet display in your Assets folder.
                                This feature will be available in the coming weeks. Please view your xDail token
                                balances in your wallet, or via Blockscout : Blockscout
                            </div>
                        </div>
                    </Layout.Col>
                </Layout.Row>
                {/*    ==========================================================================*/}
                <Layout.Row style={{backgroundColor: '#33454d', marginTop: "3%"}}>
                    <Layout.Col span="22" offset={1} style={{margin: "2% 3% 3% 3%"}}>
                        <div className="grid-content">
                            <div className={'d-font-bold d-text-30 d-white'}>XDAI RENT DEPOSIT WALLET</div>
                            <div>
                                <span className={'d-font-book d-white d-text-24'}>0x9c23...E41B72</span>
                                <button className={'d-font-bold d-black d-text-30 d-content-highlight'}
                                        style={{padding: "4px 3%", borderRadius: 8, marginLeft: "18%"}}>Change wallet
                                </button>
                            </div>
                            <div className={'d-font-bold d-text-24 d-white'}>Rent will be deposited directly to this
                                wallet on the xDai network. RealT pays the fees for these transactions.
                            </div>
                        </div>
                    </Layout.Col>
                </Layout.Row>
                {/*    ==========================================================================*/}
                <Layout.Row style={{backgroundColor: '#33454d', marginTop: "3%"}}>
                    <Layout.Col md="8">
                        <div className="grid-content bg-purple">
                            <img src={'imgs/marketplace.png'} alt='marketplace' style={{width: "100%"}}/>
                        </div>
                    </Layout.Col>
                    <Layout.Col md="16" style={{textAlign: "right"}}>
                        <Layout.Row style={{backgroundColor: '#03ffa4', padding: "3%", textAlign: "center"}}>
                            <Layout.Col span="24">
                                <div className="grid-content bg-purple">
                                    <span className={'d-font-bold d-text-36'}>5601 S Wood St, Chicago, IL 60636</span>
                                </div>
                            </Layout.Col>
                        </Layout.Row>
                        <Layout.Row style={{backgroundColor: '#33454d', textAlign: "left"}}>
                            <Layout.Col span="24">
                                <div className="grid-content bg-purple">
                                    <TableBs className={'portfolio-table d-font-book'}>
                                        <tbody>
                                        <tr className={'d-white'}>
                                            <td>Tokens Rent</td>
                                            <td>Total Price</td>
                                            <td>Value Held</td>
                                            <td>Fraction Held</td>
                                        </tr>
                                        <tr className={'d-highlight'}>
                                            <td>1$5.45 / per year</td>
                                            <td>$297,440</td>
                                            <td>$54.08</td>
                                            <td>0,02%</td>
                                        </tr>
                                        </tbody>
                                    </TableBs>
                                </div>
                            </Layout.Col>
                        </Layout.Row>
                    </Layout.Col>
                </Layout.Row>
                {/*============================================================================*/}
                <Layout.Row style={{backgroundColor: '#33454d', marginTop: "3%"}}>
                    <Layout.Col span="24">
                        <div className="grid-content">
                            <div className={'d-font-bold d-text-30 d-white text-center'}>
                                <Layout.Row>
                                    <Layout.Col md="12">
                                        <div className="grid-content" style={{padding: 10}}>
                                            <TableBs className={'portfolio-table d-font-book'}>
                                                <tbody style={{backgroundColor: '#03ffa4'}}>
                                                <tr style={{color: '#33454d'}}>
                                                    <td>Tokens issued</td>
                                                    <td>Price/Token</td>
                                                    <td>Rent Token</td>
                                                </tr>
                                                <tr className={'d-white'}>
                                                    <td>5500</td>
                                                    <td>$54.08</td>
                                                    <td>$5.45/year</td>
                                                </tr>
                                                </tbody>
                                            </TableBs>
                                        </div>
                                    </Layout.Col>
                                    <Layout.Col md="12">
                                        <div className="grid-content" style={{padding: 10}}>
                                            <TableBs className={'portfolio-table d-font-book'}>
                                                <tbody style={{backgroundColor: '#03ffa4'}}>
                                                <tr style={{color: '#33454d'}}>
                                                    <td>Gross Rent</td>
                                                    <td>Net Rent</td>
                                                    <td>Cap Rate</td>
                                                </tr>
                                                <tr className={'d-white'}>
                                                    <td>$52,200/year</td>
                                                    <td>$30,200/year</td>
                                                    <td>10.09%</td>
                                                </tr>
                                                </tbody>
                                            </TableBs>
                                        </div>
                                    </Layout.Col>
                                </Layout.Row>
                            </div>
                        </div>
                    </Layout.Col>
                </Layout.Row>

            </>
        )
    }
}

export default Portfolio;
