import React, { Component } from 'react'
import { Button, Carousel, Dropdown } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { Layout } from 'element-react'
import { Link } from "react-router-dom"
import Timer from "../Timer"
import Product from "../Product"
import { connect } from "react-redux"
import { actionPropertyList } from "../../redux/actions/property"

const mapStateToProps = state => {
  const { propertyData } = state.property
  return {
    propertyData
  }
}

const mapDispatchToProps = {
  actionPropertyList
}

const Marketplace = connect(mapStateToProps, mapDispatchToProps)(class extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef()

    this.state = {
      houseImageHeight: 0,
      marketCriticalWidth: 993,
      width: window.innerWidth,
      products: [],
    }
  }

  handleResize = (windowSize, event) => {
    this.setState({ width: window.innerWidth });
    if (window.innerWidth > this.state.marketCriticalWidth)
      this.setState({ houseImageHeight: this.myRef.current.offsetHeight })
  }


  componentDidMount() {

    window.scrollTo(0, 0)
    let compensation = 0
    this.setState({ width: window.innerWidth })
    window.addEventListener('resize', this.handleResize)
    this.props.actionPropertyList(20).then(() => {
      console.log('[res]', this.props.propertyData);

      this.setState({ products: this.props.propertyData })
      if (window.innerWidth > this.state.marketCriticalWidth) {
        let temp = (this.myRef.current && this.myRef.current.offsetHeight) ? this.myRef.current.offsetHeight : 0;
        this.setState({ houseImageHeight: temp + compensation })
      }
    })


  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }


  render() {
    let products = this.state.products
    let houseImageHeight = this.state.houseImageHeight
    let marketCriticalWidth = this.state.marketCriticalWidth
    let width = this.state.width

    return (
      <div style={{ margin: "6% 12% 2% 12%" }}>
        <Fade>
          <div>
            <div className="d-highlight d-font-black d-text-90" style={{ marginBottom: 12 }}>
              Our Listings
            </div>
            <div className="d-white d-font-bold d-text-24" style={{ marginBottom: 24 }}>
              Become the landlord of the future
            </div>
            <div className="d-white d-font-book d-text-18" style={{ marginBottom: 48 }}>
              For the first time, investors around the globe can buy into the US real estate market
              through fully-compliant,
              fractional, tokenized ownership. Powered by blockchain.
            </div>
            <div className="d-content-center" style={{ marginBottom: 60 }}>
              <div className="d-highlight d-font-bold d-text-24"
                style={{ width: 'fit-content', display: 'inline-block' }}>
                LOOKING FOR OUR OLDER OFFERINGS?
                <div>
                  <Button className="d-font-bold d-highlight-black-button d-text-24"
                    style={{ width: '100%' }}>
                    PREVIOUS PROPERTIES
                  </Button>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="d-white d-font-bold d-text-18" style={{ marginRight: 'auto' }}>
                Showing all 10 results
              </div>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="d-font-bold d-text-18"
                  style={{ borderRadius: 8 }}>
                  Default Sorting
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Sort by 1</Dropdown.Item>
                  <Dropdown.Item>Sort by 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div style={{ marginBottom: 84 }} />
        </Fade>

        {/*=================================================================================================*/}
        {width < marketCriticalWidth ?
          products && products.length > 0 && products.map((product) => (
            <div className={'marketplace-desktop'} style={{ marginTop: 30 }} key={product.id}>
              {!product.soldOut && <>
                <div style={{ width: "100%", textAlign: "center", marginTop: -20 }}><Timer /></div>
              </>}
              <Layout.Row>
                <Layout.Col span="24">
                  <div className="grid-content bg-purple">
                    <Carousel indicators={true}>
                      {product.imageData.map((img) => (
                        <Carousel.Item interval={5000} key={img}>
                          <Link to={`/detail/${product.id}`}>
                            <img id={'house-image-ref'} width={"100%"}
                              style={{
                                border: "1px solid #03ffa4",
                                borderRight: "0 solid #03ffa4",
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                              }}
                              src={`${process.env.REACT_APP_API_ENDPOINT}/public/${img}`} alt=""
                            />
                          </Link>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </Layout.Col>
                <Product productData={product} />
              </Layout.Row>
            </div>
          ))
          :
          products && products.length > 0 && products.map((product) => (
            <div className={'marketplace-desktop'} style={{ marginTop: 30 }}>

              <Layout.Row>
                <Layout.Col span="16">
                  {!product.soldOut && <>
                    <div style={{ width: "100%", textAlign: "center" }}><Timer /></div>
                  </>}
                  <div className="grid-content bg-purple">
                    <Carousel>
                      {product.imageData.map((img) => (
                        <Carousel.Item interval={5000}>
                          <Link to={`/detail/${product.id}`}>
                            <img id={'house-image-ref'} width={"100%"}
                              style={{
                                border: "1px solid #03ffa4",
                                borderRight: "0 solid #03ffa4",
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                              }}
                              // height={houseImageHeight}
                              height="380"
                              className="marketplace-img"
                              src={`${process.env.REACT_APP_API_ENDPOINT}/public/${img}`} alt=""
                            />
                          </Link>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </Layout.Col>
                <Layout.Col span="8">
                  <div className="grid-content bg-purple-light" ref={this.myRef}>
                    <Product
                      productData={product} />
                  </div>
                </Layout.Col>
              </Layout.Row>
            </div>
          ))}
        {/*=================================================================================================*/}
      </div>
    )
  }
})

export default Marketplace
