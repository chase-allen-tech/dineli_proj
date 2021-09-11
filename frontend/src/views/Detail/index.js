import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom'
import { Layout } from 'element-react'
import { Fade } from 'react-reveal'
import { Accordion, Card, Table as TableBs } from 'react-bootstrap'
import dateFormat from 'dateformat'
import './detail.css'
import DetailTableRow from './DetailTableRow'
import SimpleMap from '../../GoogleMaps/SimpleMap'
import MyCarousel from '../MyCarousel'
import { connect } from 'react-redux'
import { actionPropertyGet } from '../../redux/actions/property'
import { Link } from 'react-router-dom'
import { currentStatusOptions, section8Options, typeOptions, utilityOptions } from '../../config/constants'

const docs = [
  { label: 'Property Detail', content: 'Hello! I\'m the body', eventKey: '0' },
  { label: 'Market Evaluation Details', content: 'Hello! I\'m the body', eventKey: '1' },
  { label: 'Longterm Asset Management', content: 'Hello! I\'m the body', eventKey: '3' },
]

const mapStateToProps = state => {
  const { currentHouse } = state.property
  return {
    currentHouse
  }
}

const mapDispatchToProps = {actionPropertyGet}

const Detail = connect(mapStateToProps, mapDispatchToProps)(class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {},
    }
  }

  componentDidMount() {
    let productID = this.props.match.params.productID ? this.props.match.params.productID : ''
    window.scrollTo(0, 0);

    this.props.actionPropertyGet(productID).then(() => {
      console.log('[curr]', this.props.currentHouse);
      this.setState({product: this.props.currentHouse})
    })
  }

  render() {
    let product = this.state.product
    console.log('[p]', product)
    let address1 = product.address1
    let address2 = product.address2
    let pos_latitude = product.pos_latitude
    let pos_longitude = product.pos_longitude

    let imageData = product.imageData

    let rentStartsDate = dateFormat(product.rentStartsDate, 'dd.mm.yyyy')
    let yearlyRentPerToken = Number(product.monthlyRentPerToken * 12).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    let tokenValue = Number(product.tokenValue).toLocaleString('en-US', {style: 'currency', currency: 'USD',})
    let generatedToken = Number(product.generatedToken).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

    let propertyType = typeOptions.find(t => t.key === product.propertyType)?.label;
    let neighborhood = product.neighborhood
    let squareFeet = Number(product.squareFeet).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    let lotSize = Number(product.lotSize).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    let bedroomOrBath = product.bedroomOrBath
    let constructionYear = product.constructionYear
    let currentStatusOfProperty = currentStatusOptions.find(t => t.key === product.currentStatusOfProperty)?.label;
    let section8 = section8Options.find(item => item.key === product.section8)?.label;

    let yearlyGrossRent = Number(product.monthlyGrossRent * 12).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    let monthlyCosts = Number(product.monthlyCosts).toLocaleString('en-US', {style: 'currency', currency: 'USD',})
    let propertyManagementFee = Number(product.propertyManagementFee).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    let platformFee = Number(product.platformFee).toLocaleString('en-US', {style: 'currency', currency: 'USD',})
    let tax = Number(product.tax).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    let insuranceFee = Number(product.insuranceFee).toLocaleString('en-US', {style: 'currency', currency: 'USD',})
    let utility = utilityOptions.find(item => item.key === product.utility)?.label;

    let assetPrice = Number(product.assetPrice).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    let fee = Number(product.fee).toLocaleString('en-US', {style: 'currency', currency: 'USD',})
    let initMaintainanceReserve = Number(product.initMaintainanceReserve).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })

    let monthlyGrossRent = Number(product.monthlyGrossRent).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    let monthlyNetRent = Number(product.monthlyNetRent).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    let yearlyNetRent = Number(product.yearlyNetRent).toLocaleString('en-US', {style: 'currency', currency: 'USD',})
    let totalInvestment = Number(product.totalInvestment).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    let expectedYield = Number(product.expectedYield).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

    return <>
      <div style={{margin: '2% 9% 2% 9%'}}>
        <div style={{marginBottom: 100}}>
          <div style={{marginBottom: '20px'}} className={'d-font-bold d-text-48'}>
            &nbsp;&nbsp;&nbsp;<img src={'imgs/footer/address.png'} alt='address'/>&nbsp;&nbsp;
            <span className={'d-white'}>{address1}, </span>
            <span className={'d-highlight'}>{address2}</span>
            &nbsp;&nbsp;<span className={'d-white'} style={{float: 'right'}}>EtherScanID</span>
            <img width={25} src={'imgs/detail/EtherscanID.png'} alt='Etherscan' style={{float: 'right'}}/>
          </div>
          <MyCarousel
            hasThumbnails={true}
            images={imageData}
          />
        </div>

        <div>
          <Fade bottom delay={800}>
            <TableBs borderless>
              <tbody className={'d-font-bold'}>
                <tr>
                  <td style={{width: '50%', backgroundColor: 'RGB(3, 255, 164)'}}
                    className={'text-center'}>
                    <span className={'d-text-36'}>
                      <img src={'imgs/detail/totalInvestment.png'} alt='total investment' width={20}/>&nbsp;
                      Total Investment:
                    </span><br/>
                    <span className={'d-text-60'}>{totalInvestment}</span>
                  </td>
                  <td style={{backgroundColor: 'RGB(255, 255, 255'}} className={'text-center'}>
                    <img src={'imgs/detail/tokenPrice1.png'} alt='token price' width={20}/>&nbsp;&nbsp;
                    <span className={'d-text-36'}>
                      TOKEN PRICE:
                    </span><br/>
                    <span className={'d-text-60 d-highlight'}>{tokenValue}</span>
                  </td>
                </tr>
                <tr>
                  <td style={{backgroundColor: 'RGB(50, 58, 69)'}} className={'text-center'}>
                    <img src={'imgs/detail/totalToken.png'} alt='total token' width={30}/>&nbsp;&nbsp;
                    <span className={'d-text-36 d-white'}>Total TOKEN:</span><br/>
                    <span className={'d-text-60 d-highlight'}>{generatedToken}</span>
                  </td>
                  <td style={{backgroundColor: 'RGB(201, 202, 210)'}} className={'text-center'}>
                    <img src={'imgs/detail/tokenAvailable.png'} alt='token available' width={30}/>&nbsp;
                    <span className={'d-text-36'}>TOKEN Available:</span><br/>
                    <span className={'d-text-60 d-white'}>{generatedToken}</span>
                  </td>
                </tr>
              </tbody>
            </TableBs>
          </Fade>
        </div>

        <div className={'text-center'}>
          <div style={{marginTop: 30, width: '60%'}}>
          </div>
        </div>

        <Layout.Row gutter='20'>
          <Layout.Col md='5'>
              <div className='grid-content bg-purple'>.</div>
          </Layout.Col>
          <Layout.Col md='14'>
            <div className='grid-content bg-purple'>
              <Fade bottom delay={800}>
                <TableBs borderless>
                  <tbody className={'d-font-bold'}>
                    <tr>
                      <td className={'text-center gradient-bg'}>
                        <Link to={'/cart/' + product.id}>
                          <button className='d-text-60 d-black gradient-bg'
                            style={{width: '100%', border: 'none'}}>PURCHASE TOKEN
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td style={{backgroundColor: '#ffffff'}} className={'text-center'}>
                        <span className={'d-text-60 d-black'}>Purchase limit</span>
                      </td>
                    </tr>
                  </tbody>
                </TableBs>
              </Fade>
            </div>
          </Layout.Col>
          <Layout.Col md='5'>
            <div className='grid-content bg-purple'>.</div>
          </Layout.Col>
        </Layout.Row>
        <Layout.Row gutter='60'>
          <Layout.Col md='12'>
            <div className='grid-content bg-purple'
              style={{
                  padding: '0 5% 0 5%',
                  borderRadius: 10,
                  border: '1px solid #03ffa4',
                  marginBottom: 100
              }}>
              <TableBs borderless>
                <tbody style={{padding: '0px 2% 0 2%'}}>
                  <DetailTableRow texts={['Property Highlights']}
                    textSize={48}
                    colors={['#ffffff']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                  />
                  <DetailTableRow texts={['Expected Yield', `${expectedYield}%`]}
                    textSize={36}
                    colors={['#03ffa4', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    has_i_icon={true}
                  />
                  <DetailTableRow texts={['Rent Starts from', `${rentStartsDate}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                    has_i_icon={true}
                  />

                  <DetailTableRow texts={['Yearly Rent Per Token', `${yearlyRentPerToken}/ year`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />

                  <DetailTableRow texts={['Token Value', `${tokenValue}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />

                  <DetailTableRow texts={['Generated Token', `${generatedToken}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />

                  <DetailTableRow texts={['.']}
                    colors={['#000000']}
                    underLineColor={'#000000'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />

                  <DetailTableRow texts={['Property Type', `${propertyType}`]}
                    colors={['#03ffa4', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />

                  <DetailTableRow texts={['Neighborhood', `${neighborhood}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />

                  <DetailTableRow texts={['Square Feet', `${squareFeet}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />


                  <DetailTableRow texts={['Lot Size', `${lotSize}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />


                  <DetailTableRow texts={['Bedroom/Bath', `${bedroomOrBath}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />


                  <DetailTableRow texts={['Construction Year', `${constructionYear}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />


                  <DetailTableRow texts={['Current Status of Property', `${currentStatusOfProperty}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                    has_i_icon={true}
                  />


                  <DetailTableRow texts={['Section 8', `${section8}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                    has_i_icon={true}
                  />


                  <DetailTableRow texts={['.']}
                    colors={['#000000']}
                    underLineColor={'#000000'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />


                  <DetailTableRow
                    texts={['All details displayer here are best estimates based on current market']}
                    colors={['#ffffff']}
                    underLineColor={'#000000'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />

                  <DetailTableRow texts={['conditions, and may change in future.']}
                    colors={['#ffffff']}
                    underLineColor={'#000000'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />

                  <DetailTableRow texts={['.']}
                    colors={['#000000']}
                    underLineColor={'#000000'}
                    underLineWidth={'1px'}
                    textSize={24}
                  />

                  <DetailTableRow
                    texts={['Such type of investments are highly risky which may result in partial or']}
                    colors={['#ffffff']}
                    underLineColor={'#000000'}
                    underLineWidth={'1px'}
                    textSize={24}
                  />

                  <DetailTableRow texts={['total loss of your investment']}
                    colors={['#ffffff']}
                    underLineColor={'#000000'}
                    underLineWidth={'1px'}
                    textSize={24}
                  />
                </tbody>
              </TableBs>
            </div>
          </Layout.Col>

          <Layout.Col md='12'>
            <div className='grid-content bg-purple'
              style={{
                padding: '0 5% 0 5%',
                borderRadius: 10,
                border: '1px solid #03ffa4',
                marginBottom: 100
              }}>
              <TableBs borderless>
                <tbody style={{padding: '0px 2% 0px 2%'}}>
                  <DetailTableRow texts={['Financials']}
                    textSize={48}
                    colors={['#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                  />
                  {/*-------------------normal----------------------------*/}
                  <DetailTableRow texts={['Yearly Gross Rent', `${yearlyGrossRent}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />

                  <DetailTableRow texts={['Monthly Gross Rent', `${monthlyGrossRent}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />

                  <DetailTableRow texts={['Monthly Costs', `${monthlyCosts}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                    collapseData={[
                      {
                        text: 'Property Management (7.00%)',
                        price: `${propertyManagementFee}`
                      },
                      {text: 'RealT Platform (2.00%)', price: `${platformFee}`},
                      {text: 'Property Taxes', price: `${tax}`},
                      {text: 'Insurance', price: `${insuranceFee}`},
                      {text: 'Utilities', price: `${utility}`},
                    ]}
                  />


                  <DetailTableRow texts={['Monthly Net Rent', `${monthlyNetRent}`]}
                    colors={['#ffffff', '#03ffa4']}
                    underLineColor={'RGB(50, 58, 69)'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />

                  <DetailTableRow texts={['.']}
                    colors={['#000000']}
                    underLineColor={'#03ffa4'}
                    underLineWidth={'2px'}
                    textSize={36}
                  />

                  <DetailTableRow texts={['.']}
                    colors={['#000000']}
                    underLineColor={'#000000'}
                    underLineWidth={'2px'}
                    textSize={36}
                  />


                  <DetailTableRow texts={['Yearly Net Rent', `${yearlyNetRent}`]}
                    colors={['#03ffa4', '#03ffa4']}
                    underLineColor={'#000000'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />

                  <DetailTableRow texts={['Total Investment', `${totalInvestment}`]}
                    colors={['#03ffa4', '#03ffa4']}
                    underLineColor={'#000000'}
                    underLineWidth={'1px'}
                    textSize={36}
                    collapseData={[
                      {text: 'Underlying Asset Price', price: `${assetPrice}`},
                      {text: 'RealT Listing Fee (10%)', price: `${fee}`},
                      {
                        text: 'Initial Maintenance Reserve',
                        price: `${initMaintainanceReserve}`
                      },
                    ]}
                  />

                  <DetailTableRow texts={['Expected Yield', `${expectedYield}%`]}
                    colors={['#03ffa4', '#03ffa4']}
                    underLineColor={'#000000'}
                    underLineWidth={'1px'}
                    textSize={36}
                  />


                  <DetailTableRow texts={['.']}
                    colors={['#000000']}
                    underLineColor={'#000000'}
                    underLineWidth={'2px'}
                    textSize={36}
                  />
                </tbody>
              </TableBs>
            </div>
          </Layout.Col>

          <Layout.Col md='12'>
            <div className='grid-content bg-purple'
              style={{
                padding: '0 5% 0 5%',
                borderRadius: 10,
                border: '1px solid #03ffa4',
                marginBottom: 100
              }}>
              <TableBs borderless>
                <tbody style={{padding: '0px 2% 0px 2%'}}>
                  <DetailTableRow texts={['Property Reserve Accumulation']}
                    textSize={48}
                    colors={['#ffffff']}
                    underLineColor={'#000000'}
                    underLineWidth={'1px'}
                  />
                  <DetailTableRow texts={['Compound']}
                    textSize={48}
                    colors={['#03ffa4']}
                    underLineColor={'#000000'}
                    underLineWidth={'1px'}
                  />
                </tbody>
              </TableBs>
            </div>
          </Layout.Col>
        </Layout.Row>
        <Zoom delay={300}>
          <div style={{marginTop: '40px', width: '100%', height: 600}}>
            <SimpleMap lat={pos_latitude} long={pos_longitude}>Google Map</SimpleMap>
          </div>
        </Zoom>

        <Accordion style={{paddingTop: '6%'}}>
          {
            docs.map((item, i) => {
              return (
                <Card style={{
                  border: '0px solid',
                  backgroundColor: 'transparent',
                  paddingBottom: 12,
                  borderRadius: 10
                }} key={i}>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey={item.eventKey}
                    className='d-content-highlight d-black d-font-bold d-text-24'
                    style={{padding: '12px 36px'}}
                  >
                    {item.label}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={item.eventKey}>
                    <Card.Body className='d-white d-font-book d-text-18' style={{padding: 24}}>
                      {item.content}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            })
          }
        </Accordion>
      </div>
    </>
  }
})

export default Detail