
import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { connect } from "react-redux";
import { actionPropertyList } from "../../redux/actions/property";
import { tokenInfo } from '../../services/crypto';
import { Input, Layout, Select, Checkbox } from "element-react"

const mapStateToProps = state => {
  const { propertyData } = state.property
  return {
    propertyData
  }
}

const mapDispatchToProps = {
  actionPropertyList
}

const getOrderItem = (property, tokenAmount, purchasePrice, salePrice, transactionHash) => {
  return {
    property: property,
    tokenAmount: tokenAmount,
    purchasePrice: purchasePrice,
    salePrice: salePrice,
    transactionHash: transactionHash
  }
}

const SellTokens = connect(mapStateToProps, mapDispatchToProps)(class extends Component {

  constructor(props) {
    super(props);

    this.state = {
      orderItems: [getOrderItem(null, 0, null, null, null)],
      subTotal: 0,
      realtFee: 0,
      processorFee: 0,
      totalSale: 0,
      isAgreed: false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.actionPropertyList();
  }

  onFormChange(index, key, value) {
    let orderItemsClone = [...this.state.orderItems];
    orderItemsClone[index][key] = value;
    this.setState({ orderItems: orderItemsClone });
  }

  render() {
    console.log(this.props.propertyData)
    return (
      <div>
        <Fade>
          <div className="img-box img-box-team">
            <Fade bottom delay={200}>
              <div style={{ margin: "10% 12% 10% 12%" }}>
                <div className="col-md-6">
                  <div className="d-highlight d-font-black d-text-82">
                    Sell Tokens
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
        <div style={{ margin: "6% 12% 2% 12%" }}>
          <div className="d-highlight d-font-black d-text-48">
            Tokens
            <span style={{ padding: '2%' }} />
            <img className="img-mobile" src="imgs/tokens/token.png" alt="Token" />
          </div>
          <div style={{ height: 24 }} />
          <div className="d-white d-font-book d-text-24">
            RealT will buy back your RealTokens! This service is limited to $2000 per week. <br />
            Token buyback requires RealT approval, and can take up to 10 business days. We appreciate your patience!
          </div>
        </div>
        <Fade>
          <div className="img-box img-box-token">
            <Fade bottom delay={200}>
              <div style={{ margin: "12% 16% 6% 16%" }}>
                <div className="d-white d-font-book d-text-36">
                  We Are Currently <br />
                  Buying Back Tokens from <br />
                  properties with these statuses:
                </div>
                <div className="row">
                  <div className="col-md-2" style={{ marginTop: 30 }}>
                    <Button className="d-font-black d-text-24" style={{ width: '100%' }}>SOLD OUT</Button>
                  </div>
                  <div className="col-md-1" />
                  <div className="col-md-4" style={{ marginTop: 30 }}>
                    <Button className="d-font-black d-text-24" style={{ width: '100%' }}>UNDER RENOVATION</Button>
                  </div>
                  <div className="col-md-1" />
                  <div className="col-md-4" style={{ marginTop: 30 }}>
                    <Button className="d-font-black d-text-24" style={{ width: '100%' }}>OFFERING CLOSED</Button>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
        <div style={{ margin: "6% 12% 2% 12%" }}>
          <div className="d-content-highlight d-black d-font-black d-text-36" style={{ padding: '20px 30px' }}>
            + Sell Tokens From Property
          </div>
          <div className="d-content-round-border" style={{ borderRadius: '0 0 8px 8px', padding: '5% 2%', marginBottom: 36 }}>
            {
              this.state.orderItems.map((orderItem, index) =>
                <div className="row">
                  <div className="col-md-6" style={{ marginBottom: 12 }}>
                    <div className="d-highlight d-font-bold d-text-24" style={{ marginBottom: 12 }}>
                      Property
                    </div>
                 
                    {/* <Form.Item label="Type" > */}
                      <Select className="w-100 d-font-bold d-text-18" placeholder="Select a property" value={orderItem.property} onChange={val => this.onFormChange.bind(this, 'property', val)}>
                        {
                          this.props.propertyData.map(item => <Select.Option value={item.id} label={`${item.address1} (${item.tokenSymbol})`}>{`${item.address1} (${item.tokenSymbol})`}</Select.Option>)
                        }
                      </Select>
                    {/* </Form.Item> */}
                  </div>
                  <div className="col-md-1" style={{ marginBottom: 12 }}>
                    <div className="d-highlight d-font-bold d-text-24" style={{ marginBottom: 12 }}>
                      Tokens
                    </div>
                    {/* <FormControl
                      className="d-font-bold d-text-18"
                      placeholder="0"
                    /> */}
                    <Input className="d-font-bold d-text-18" placeholder="0" type="number" step="any" />
                  </div>
                  <div className="col-md-2" style={{ marginBottom: 12 }}>
                    <div className="d-highlight d-font-bold d-text-24" style={{ marginBottom: 12 }}>
                      Price/Token
                    </div>
                    {/* <FormControl
                      className="d-font-bold d-text-18"
                      placeholder="$0.00"
                    /> */}
                    <Input className="d-font-bold d-text-18" placeholder="$0.00" type="number" step="any" />
                  </div>
                  <div className="col-md-3" style={{ marginBottom: 12 }}>
                    <div className="d-highlight d-font-bold d-text-24" style={{ marginBottom: 12 }}>
                      Sale Price
                    </div>
                    {/* <FormControl
                      className="d-font-bold d-text-18"
                      placeholder="$0.00"
                    /> */}
                    <Input className="d-font-bold d-text-18" placeholder="$0.00" type="number" step="any" />
                  </div>
                </div>
              )
            }

          </div>
          <div style={{ display: 'flex', textAlign: 'right', alignItems: 'center', marginBottom: 16, marginRight: '5%' }}>
            <div className="d-highlight d-font-bold d-text-24" style={{ marginLeft: 'auto', marginRight: 24 }}>
              SUBTOTAL
            </div>
            {/* <FormControl
              className="d-font-bold d-text-18"
              placeholder="$0.00"
              style={{ width: 128 }}
            /> */}
            <Input style={{width: 128}} />
          </div>
          <div style={{ display: 'flex', textAlign: 'right', alignItems: 'center', marginBottom: 16, marginRight: '5%' }}>
            <div className="d-highlight d-font-book d-text-18" style={{ marginLeft: 'auto', marginRight: 24 }}>
              REALT FEE (1.5%)
            </div>
            {/* <FormControl
              className="d-font-bold d-text-18"
              placeholder="$0.00"
              style={{ width: 128 }}
            /> */}
            <Input style={{width: 128}} />
          </div>
          <div style={{ display: 'flex', textAlign: 'right', alignItems: 'center', marginBottom: 36, marginRight: '5%' }}>
            <div className="d-highlight d-font-book d-text-18" style={{ marginLeft: 'auto', marginRight: 24 }}>
              PROCESSOR FEE (1.5%)
            </div>
            {/* <FormControl
              className="d-font-bold d-text-18"
              placeholder="$0.00"
              style={{ width: 128 }}
            /> */}
            <Input style={{width: 128}} />
          </div>
          <div style={{ textAlign: 'right', alignItems: 'center', marginBottom: 36, height: 10 }}>
            <div className="d-content-highlight" style={{ marginLeft: 'auto', width: '40%', minWidth: 250, height: '100%' }} />
          </div>
          <div style={{ display: 'flex', textAlign: 'right', alignItems: 'center', marginBottom: 48, marginRight: '5%' }}>
            <div className="d-highlight d-font-bold d-text-24" style={{ marginLeft: 'auto', marginRight: 24 }}>
              TOTAL SALE
            </div>
            {/* <FormControl
              className="d-font-bold d-text-18"
              placeholder="$0.00"
              style={{ width: 128 }}
            /> */}
            <Input style={{width: 128}} />
          </div>
          <div style={{ display: 'flex', marginBottom: 24, marginRight: '5%' }}>
            <Checkbox className="d-white d-font-book d-text-18 ms-auto">I verify that these values are correct.</Checkbox>
          </div>
          <div style={{ textAlign: 'right', marginBottom: 12 }}>
            <Button className="d-font-black d-text-24" style={{ width: '60%', maxWidth: 436, padding: '1% 0' }}>
              SELL TOKENS
            </Button>
          </div>
        </div>
      </div>
    )
  }
});

export default SellTokens;
