import React, {Component} from 'react'
import {Collapse} from 'react-bootstrap'
import {Layout} from 'element-react'
import 'font-awesome/css/font-awesome.min.css'
import TooltipIcon from '../Tooltip_i_icon'

export default class DetailTableRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    let texts = this.props.texts
    let textSize = this.props.textSize
    let colors = this.props.colors
    let underLineColor = this.props.underLineColor
    let underLineWidth = this.props.underLineWidth
    let has_i_icon = this.props.has_i_icon
    let collapseData = this.props.collapseData
    let colSpan = texts.length === 2? 'col-8': 'col-12'


    return (
      <>
        <tr style={{borderBottom: `${underLineWidth} solid ${underLineColor}`}}>
          <td>
            <div style={{
              // display: 'flex',
              fontSize: textSize,
              color: colors[0],
              alignItems: 'center'
            }}>
              <div className='row' style={{width: '100%'}}>
                <div className={`${colSpan} d-font-bold d-text-${textSize}`}>{texts[0]}
                    {
                      has_i_icon && (
                        <>
                          &nbsp;&nbsp;
                          <TooltipIcon
                            width={15}
                            content={
                              <>
                                <strong>Expected yield</strong> is expressed as the
                                <a href='https://www.investopedia.com/terms/c/capitalizationrate.asp'>
                                  CapRate
                                </a>
                                (capitalization rate), the ratio of net
                                operating
                                income to the
                                current
                                value or sale price of a property. It determines the
                                potential
                                return on
                                an
                                investment.
                              </>
                            }
                            img={'imgs/home/3/i_icon.png'}
                          />
                        </>
                      )
                    }
                    &nbsp;&nbsp;
                    {
                      collapseData && (
                        <>
                          {
                            !this.state.open ?
                              <>
                                <i
                                  className={'fa fa-caret-down'}
                                  onClick={() => this.setState({open: !this.state.open})}
                                  style={{color: '#03ffa4'}}>&nbsp;
                                </i>
                              </>
                              :
                              <>
                                <i className={'fa fa-caret-up'}
                                  onClick={() => this.setState({open: !this.state.open})}
                                  style={{color: '#156cab'}}>&nbsp;
                                </i>
                              </>
                          }
                        </>
                      )
                    }
                </div>
                {
                  texts.length === 2 &&
                  <div className='col-4'>
                    <span className={`d-font-bold d-text-${textSize}`} style={{
                      float: 'right',
                      fontSize: textSize,
                      color: colors[1],
                    }}>
                      {texts[1]}
                    </span>
                  </div>
                }

              </div>

              <div className='row'>
                {
                  collapseData && (
                    <>
                      <Collapse in={this.state.open}>
                        <div>
                          {
                            collapseData.map((row) => (
                              <Layout.Row>
                                <Layout.Col span='24'>
                                  <div className='grid-content bg-purple-dark'>
                                    <span className='d-font-book d-text-18 d-white'
                                      style={{float: 'left'}}>{row.text}
                                    </span>
                                    <span className='d-font-book d-text-18 d-white'
                                      style={{float: 'right'}}>
                                      {row.price}
                                    </span>
                                  </div>
                                </Layout.Col>
                              </Layout.Row>
                            ))
                          }
                        </div>
                      </Collapse>
                    </>
                  )
                }
              </div>
            </div>
          </td>
        </tr>
      </>
    )
  }
}