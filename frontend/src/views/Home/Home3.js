import React, {Component} from "react"
import Fade from "react-reveal/Fade"
import {Button, Carousel} from "react-bootstrap"
import {AiOutlineLeftCircle, AiOutlineRightCircle} from "react-icons/ai"
import {Layout} from "element-react"
import Product from "../Product"
import {actionPropertyList} from "../../redux/actions/property"
import {connect} from "react-redux"

const mapStateToProps = state => {
  const {propertyData} = state.property;
  return {
    propertyData
  }
}

const mapDispatchToProps = {
  actionPropertyList
}

const Home3 = connect(mapStateToProps, mapDispatchToProps)(class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      products3: [],
      home3CriticalWidth: 993,
      width: window.innerWidth,
    }
  }

  productGroup = [];

  handleResize = (windowSize, event) => {
    this.setState({width: window.innerWidth})
  }

  componentDidMount() {
    this.setState({width: window.innerWidth})

    this.props.actionPropertyList(21).then(() => {
      this.setState({products: this.props.propertyData})
    }).then(() => {
      let products = this.state.products ? this.state.products : []

      let repeat = (this.state.products && this.state.products.length > 0) ? ((3 - this.state.products.length % 3) % 3) : 0
      if (repeat === 1) {
        products = [...products, products[0]]
      } else if (repeat === 2) {
        products = [...products, products[0], products[0]]
      }

      var productGroup = []
      for (var i = 0; i < products.length; i++) {
        if (i % 3 === 0) {
          productGroup.push([]);
        }
        productGroup[productGroup.length - 1].push(products[i])
      }
      this.setState({products3: productGroup})
    })

    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {

    // console.log(this.state.products);

    let products = this.state.products;
    let width = this.state.width;
    let products3 = this.state.products3;

    return <Fade>
      <div className="img-box img-box-home3">
        <div style={{margin: "4% 12% 4% 12%"}}>
          <Fade bottom delay={200}>
            <div>
              <div className="d-content-center d-white d-font-black d-text-48">
                OUR CURATED PROPERTIES
              </div>
              <div className="d-content-center d-highlight d-font-book d-text-20">
                Start building your real estate investment portfolio Today <br/>
                generating both rent and capital appreciation
              </div>
              <Carousel
                prevIcon={<AiOutlineLeftCircle/>}
                nextIcon={<AiOutlineRightCircle/>}>
                {

                }
                {
                  (!products || products.length === 0) ? <div><h1>There is no house.</h1></div>
                    : width < this.state.home3CriticalWidth ?
                    products.map(product => (
                      <Carousel.Item key={product.id} interval={100000}>
                        <Layout.Row gutter="20">
                          <Layout.Col className='col-12'>
                              <div className="grid-content bg-purple">
                                <Product
                                  productData={product}
                                />
                              </div>
                          </Layout.Col>
                        </Layout.Row>
                      </Carousel.Item>
                    ))
                    :
                    products3.map((productGroup) => (
                      <Carousel.Item interval={100000}>
                        <Layout.Row gutter="20">
                          {
                            productGroup.map((product) => (
                              <Layout.Col md={8}>
                                <div className="grid-content bg-purple">
                                  <Product
                                    productData={product}
                                  />
                                </div>
                              </Layout.Col>
                            ))
                          }
                        </Layout.Row>
                      </Carousel.Item>
                    ))
                }
              </Carousel>

              <div className="d-content-center">
                <div className="d-white d-font-black d-text-36">
                  LOOKING FOR OUR SOLD PROPERTIES ?
                </div>
                <Button className="d-font-bold d-highlight-black-button d-text-24"
                  style={{margin: '0 24%'}}>
                  PREVIOUS PROPERTIES
                </Button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  }
})

export default Home3
