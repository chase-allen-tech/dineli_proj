import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import ImageLabel from './ImageLabel'
import ColorLine from './ColorLine'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import '../assets/Product.css'
import { Link } from "react-router-dom"
import TooltipIcon from "./Tooltip_i_icon"
import Timer from "./Timer"

class Product extends Component {

	constructor(props) {
		super(props)
		this.state = {
			tooltipOpen: false
		}
	}

	toggle = () => this.setState({ tooltipOpen: !this.state.tooltipOpen })

	render() {
		let img = `${this.props.productData.imageData[0]}`
		let address1 = this.props.productData.address1
		let address2 = this.props.productData.address2
		let minInvestment = Number(this.props.productData.tokenValue).toFixed(2).toLocaleString()
		let tokenPrice = Number(this.props.productData.tokenValue).toFixed(2).toLocaleString()
		let rentPerToken = Number(this.props.productData.monthlyRentPerToken * 12.0).toFixed(2).toLocaleString()
		let totalTokens = this.props.productData.generatedToken
		let invest = 79
		let tokensAvaliable = 1000
		let soldOut = false
		let totalPrice = this.props.productData.totalInvestment.toFixed(2).toLocaleString()
		let expectedROI = Number(this.props.productData.expectedYield).toFixed(2).toLocaleString()

		return (
			<>
				{!soldOut ? (<Link to={`/detail/${this.props.productData.id}`}>
					<div style={{ width: "100%", textAlign: "center", marginBottom: -32 }}><Timer /></div>
				</Link>) :
					(<div style={{ width: "100%", textAlign: "center", marginBottom: -32, opacity: 0 }}><Timer /></div>)
				}

				<div style={{
					width: '100%',
					borderRadius: 4,
					border: '2px solid',
					borderColor: '#03ffa4',
					marginTop: 30,
					marginBottom: 30
				}}>

					<div>
						<Link to={`/detail/${this.props.productData.id}`}>
							<img src={img} alt="" style={{ width: '100%' }} /></Link>
					</div>

					<div style={{
						backgroundColor: '#323a45',
						padding: '6px 24px',
						display: 'flex',
						alignItems: 'center'
					}}>
						<img src="imgs/home/3/address.png" alt="" />&nbsp;
						<span className="d-white d-font-book d-text-24">
							{address1 + ","}
						</span> &nbsp; &nbsp;
						<span className="d-highlight d-font-book d-text-24">
							{address2}
						</span>
					</div>
					<div style={{ display: 'flex' }}>
						<div className="col-7" style={{ padding: 12 }}>
							<ImageLabel
								img="imgs/home/3/minInvestment.png"
								font="bold"
								fontSize={18}
								padding={6}
								label="Minimum Investment:"
							/>
							<div className="d-highlight d-font-book d-text-30">
								{'$' + minInvestment}
							</div>
							<ColorLine />
							<ImageLabel
								img="imgs/home/3/totalPrice.png"
								font="bold"
								fontSize={18}
								padding={6}
								label="TOTAL PRICE"
							/>
							<div className="d-highlight d-font-book d-text-30">
								{'$' + totalPrice}
							</div>
							<ColorLine />
							<ImageLabel
								img="imgs/home/3/tokenPrice.png"
								font="bold"
								fontSize={18}
								padding={6}
								label="TOKEN PRICE"
							/>
							<div className="d-white d-font-book d-text-36">
								{'$' + tokenPrice}
							</div>
							<ColorLine />
							<ImageLabel
								img="imgs/home/3/rentPerToken.png"
								font="bold"
								fontSize={18}
								padding={6}
								label="RENT PER TOKEN"
							/>
							<div className="d-white d-font-book d-text-30">
								{'$' + rentPerToken + ' / Year'}
							</div>
						</div>
						<div className="col-5" style={{ backgroundColor: '#323a45', padding: 6, marginLeft: 'auto' }}>
							<ImageLabel
								img="imgs/home/3/expectedROI.png"
								font="bold"
								fontSize={18}
								padding={6}
								label="Expected Yield:"
							/>
							<div className="d-content-center d-highlight d-font-book d-text-30">
								{expectedROI + '%'}
								&nbsp; &nbsp;
								<TooltipIcon
									width={15}
									content={<><strong>Expected yield</strong> is expressed as the <a
										href="https://www.investopedia.com/terms/c/capitalizationrate.asp">Cap
										Rate</a> (capitalization rate), the ratio of net operating income to the current
										value or sale price of a property. It determines the potential return on an
										investment.</>}
									img={'imgs/home/3/i_icon.png'}
								/>
							</div>
							<div style={{ backgroundColor: 'white', borderRadius: 9999, margin: 12 }} className='product-circular-value'>
								<CircularProgressbarWithChildren value={invest} styles={{ width: "85%", height: "85%" }}>
									<div className="d-content-center d-black d-font-black d-text-32">
										<strong>{invest}</strong>%
									</div>
									<div className="d-content-center d-black d-font-bold d-text-10">
										Invest
									</div>
								</CircularProgressbarWithChildren>
							</div>
							{/*--------------------------------------------------------------*/}
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<div className='col-7 product-tokens'>
									<ImageLabel
										img="imgs/home/3/totalTokens.png"
										fontSize={14}
										padding={6}
										label="Total Tokens"
									/>
								</div>
								<div className="col-1 text-center">
									<div className="d-highlight d-font-book d-text-30" style={{ marginRight: 12 }}>|</div>
								</div>
								<div className="col-4">
									<div className="d-highlight d-font-book d-text-30">
										{totalTokens}
									</div>
								</div>
							</div>
							{/*--------------------------------------------------------------*/}
							<ColorLine color='#03ffa4' />
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<div className='col-7 product-tokens'>
									<ImageLabel
										className="col-md-6"
										img="imgs/home/3/tokensAvailable.png"
										fontSize={14}
										padding={6}
										label="Tokens Available"
									/>
								</div>
								<div className="col-1 text-center">
									<div className="d-highlight d-font-book d-text-30" style={{ marginRight: 12 }}>|</div>
								</div>
								<div className="col-4">
									<div className="col-md-6 d-white d-font-book d-text-30">
										{tokensAvaliable}
									</div>
								</div>
							</div>
							{/*--------------------------------------------------------------*/}
						</div>
					</div>
					{
						soldOut === true ?
							<Button className="d-font-black d-square-white d-text-30"
								style={{ width: '100%', height: 60 }} disabled>
								Sold Out
							</Button>
							:
							<Link to={`/detail/${this.props.productData.id}`}>
								<Button className="d-font-black d-square-black d-text-30" style={{ width: '100%', height: 60 }}>
									Start Now
								</Button>
							</Link>
					}
				</div>
			</>
		)
	}
}

export default Product
