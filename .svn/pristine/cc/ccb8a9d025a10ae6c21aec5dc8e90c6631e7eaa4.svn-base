import React, {Component} from 'react'
import {Button, Input, Layout, Select} from "element-react"
import {Table as TableBs} from 'react-bootstrap'


import './Calculator.css'

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            key: "dashboard",
            options: [{
                value: 'Option1',
                label: 'Calculate total capital'
            },
                {
                    value: 'Option1',
                    label: 'Calculate total capital'
                },
                {
                    value: 'Option1',
                    label: 'Calculate total capital'
                },
            ],
            options1: [{
                value: 'Option1',
                label: 'chaque mois'
            },
                {
                    value: 'Option1',
                    label: 'chaque mois'
                },
                {
                    value: 'Option1',
                    label: 'chaque mois'
                },
            ],
            value: ''
        })
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(key) {
        this.setState({
            key: key
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (<>
                <div className="img-box img-box-calculator">
                    <div className="d-white d-font-black d-text-90" style={{marginBottom: "25%"}}>
                    </div>
                </div>
                <Layout.Row>
                    <Layout.Col span="24">
                        <div className="grid-content bg-purple-dark">
                            <div className="d-white d-font-black d-text-90 text-center" style={{marginTop: "2%"}}>
                                Savings calculator
                            </div>
                        </div>
                    </Layout.Col>
                </Layout.Row>

                <div style={{margin: "6% 15% 0% 15%"}}>
                    <TableBs striped bordered hovers className={'calculator-table d-font-book'}>
                        <thead style={{backgroundColor: "#03ffa4", margin: "5% 2% 0% 5%"}}>
                        <tr>
                            <th colSpan={2}><img src='imgs/calculator/calculator.png' alt='calculator'
                                                 style={{marginLeft: "1%"}}/>
                                <Select className={'d-font-book d-text-18'} value={this.state.value}
                                        style={{width: "85%", margin: "1% 0% 1% 2%"}}>
                                    {
                                        this.state.options.map(el => {
                                            return <Select.Option key={el.value} label={el.label}
                                                                  value={el.value}/>
                                        })
                                    }
                                </Select>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style={{
                                backgroundColor: "RGB(51, 69, 77)",
                                textAlign: "right",
                                paddingTop: "2%",
                                width: "50%"
                            }} className={'d-white'}>Starting placement:
                            </td>
                            <td style={{width: "50%"}}>
                                <Input style={{width: "50%"}}/>
                                <span className="icon-euro d-highlight d-font-book"> €</span></td>
                        </tr>

                        <tr>
                            <td style={{
                                backgroundColor: "RGB(51, 69, 77)",
                                textAlign: "right",
                                paddingTop: "2%"
                            }} className={'d-white'}>Periodic savings:
                            </td>
                            <td>
                                <Input style={{width: "50%"}}/><span
                                className="icon-euro d-highlight d-font-book"> €
                                        <Select className={'d-font-book'} value={this.state.value}
                                                style={{width: "40%"}}>
                                                {
                                                    this.state.options1.map(el => {
                                                        return <Select.Option key={el.value} label={el.label}
                                                                              value={el.value}/>
                                                    })
                                                }
                                        </Select>
                                    </span>
                            </td>
                        </tr>

                        {/*-------------------------------------------------*/}
                        <tr>
                            <td style={{
                                backgroundColor: "RGB(51, 69, 77)",
                                textAlign: "right",
                                paddingTop: "2%"
                            }} className={'d-white'}>Duration of placement:
                            </td>
                            <td>
                                <Input style={{width: "50%"}}/><span
                                className="icon-euro d-highlight d-font-book"> années</span>
                            </td>
                        </tr>
                        {/*    -------------------------------*/}


                        {/*-------------------------------------------------*/}
                        <tr>
                            <td style={{
                                backgroundColor: "RGB(51, 69, 77)",
                                textAlign: "right",
                                paddingTop: "2%"
                            }} className={'d-white'}>Expected annual rate of return:
                            </td>
                            <td>
                                <Input style={{width: "50%"}}/><span
                                className="icon-euro d-highlight d-font-book"> %</span>
                            </td>
                        </tr>
                        {/*    -------------------------------*/}


                        {/*-------------------------------------------------*/}
                        <tr>
                            <td style={{
                                backgroundColor: "RGB(51, 69, 77)",
                                textAlign: "right",
                                paddingTop: "2%"
                            }} className={'d-white'}>Total capital:
                            </td>
                            <td>
                                <Input style={{width: "50%"}}/><span
                                className="icon-euro d-highlight d-font-book"> €</span>
                            </td>
                        </tr>
                        {/*    -------------------------------*/}


                        {/*-------------------------------------------------*/}
                        <tr>
                            <td colSpan={2} className={'text-center'}>
                                <Button className={'d-font-book d-content-highlight d-black'}
                                        style={{marginLeft: "6%", color: '#000000'}}
                                        type="success">Calculate</Button>
                                <Button className={'d-font-book d-white'}
                                        style={{backgroundColor: "RGB(51, 69, 77)"}} type="success">New
                                    Calculation</Button>
                            </td>
                        </tr>
                        {/*    -------------------------------*/}
                        <tr style={{borderColor: "black"}}>
                            .
                        </tr>
                        {/*-------------------------------------------------*/}
                        <tr style={{borderColor: "black"}}>
                            <td colSpan={2}>
                            <span
                                className="d-highlight d-font-bold d-text-48">Three possible options</span>

                                <span className={'d-white d-font-book'}>
                                            <br/>You can<br/>
                                            <br/>
                                            calculate the capital at term that you will have at the end of your savings
                                            plan (click on “calculate total capital”.<br/>
                                            But if you know how much capital you will need in X years, you can, knowing
                                            how much you can save per month<br/>
                                            or year,<br/>
                                            <br/>
                                            calculate the initial capital you need, (click on "calculate the
                                            initial<br/>
                                            payment" or, knowing how much you can<br/>
                                            save today,<br/>
                                            <br/>
                                            calculate the amount of periodic savings you can build.<br/>
                                            <br/></span>
                                <span className={'d-highlight d-font-book text-decoration-underline'}>The main savings products [complete file]<br/></span>

                            </td>
                        </tr>
                        {/*    -------------------------------*/}
                        </tbody>
                    </TableBs>
                </div>
                {/*======================================================*/}
            </>
        )
    }
}

export default Calculator;
