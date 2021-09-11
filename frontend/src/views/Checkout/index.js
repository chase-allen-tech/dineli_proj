import React, { Component } from "react"
import { Button, Form, Input, Layout, Radio, Select, Checkbox, Notification } from "element-react"
import Fade from "react-reveal/Fade"
import { Link } from "react-router-dom";
import { Table as TableBs } from 'react-bootstrap';
import { PayPalButton } from 'react-paypal-button-v2';
import { balanceAvailable, transferToken } from "../../services/crypto";

import CoinbaseCommerceButton from 'react-coinbase-commerce';
// import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';

const CRYPTO_MODE = '1', PAYPAL_MODE = '2';

class Checkout extends Component {
	constructor(props) {
		super(props)

		this.state = {
			form: {
				firstname: '',
				lastname: '',
				email: '',
				phone: '',
				country: '',
				street: '',
				city: '',
				postCode: '',

				isGift: '',
				description: '',

				payCard: CRYPTO_MODE,
				cardNumber: '',
				expiration: '',
				securityCode: '',
				isAgree: '',

				walletAddress: '',
			},
			rules: {
				firstname: [{ required: true, message: 'Please input first name', trigger: 'blur' }],
				lastname: [{ required: true, message: 'Please input last name', trigger: 'blur' }],
				email: [
					{ required: true, message: 'Please input email', trigger: 'blur' },
					{ type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
				],
				phone: [{ required: true, message: 'Please input phone', trigger: 'blur' }],
				country: [{ required: true, message: 'Please input country', trigger: 'blur' }],
				street: [{ required: true, message: 'Please input street', trigger: 'blur' }],
				city: [{ required: true, message: 'Please input Town/City', trigger: 'change' }],
				walletAddress: [{ required: true, message: 'Please input wallet address', trigger: 'change' }],
			},
			productItems: [],
			totalPrice: 0
		};

		this.onPaypalSuccess.bind(this);
	}

	componentWillReceiveProps() {
		console.log(this.state);
	}

	componentDidMount() {
		const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

		let items = [];
		let total = 0;
		for (let product of cartProducts) {
			items.push({
				"identifier": product.address1,
				"subtotal": product.tokenValue * Number(product.tokenQuantity)
			});
			total += Number(product.tokenValue * Number(product.tokenQuantity));
		}
		this.setState({ productItems: items, totalPrice: total });

		window.scrollTo(0, 0);
	}

	handleSubmit(e) {
		e.preventDefault()

		this.refs.form.validate((valid) => {
			// if (!valid) return;
			// this.props.actionAuthRegister(this.state.form);
			if (this.state.form.payCard === PAYPAL_MODE) {
				alert('paypal mode');
			}
		})
	}

	handlePaypalPayment() {

	}

	handleReset(e) {
		e.preventDefault();

		this.refs.form.resetFields()
	}

	onChange(key, value) {
		this.setState({
			form: Object.assign({}, this.state.form, { [key]: value })
		})

	}

	onChangePaycard(value) {
		this.setState({
			form: Object.assign({}, this.state.form, { payCard: value })
		})
	}

	// async balanceAvailCheck(tokenAddress, tokenQuantity) {
	// 	let avail = await balanceAvailable(process.env.REACT_APP_MY_ACCOUNT, tokenAddress, tokenQuantity);
	// 	console.log(avail);
	// 	if (!avail) {
	// 		Notification.error({
	// 			title: 'Failed',
	// 			message: 'Balance is outof shortage!',
	// 			type: 'Warning',
	// 		});
	// 		return false;
	// 	}
	// 	return true;
	// }

	async onPaypalSuccess(details, data) {

		Notification.success({
			title: 'Payment Success by ' + details.payer.name.given_name,
			message: 'Order id: ' + data.orderID,
			type: 'success',
			duration: 5000
		});


		// // Now transfer Token
		// const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

		// // Available check
		// for (let item of cartProducts) {
		// 	if (!await this.balanceAvailCheck(item.tokenAddress, item.tokenQuantity)) return;
		// }

		// // Pay crypto
		// for (let item of cartProducts) {
		// 	let transferResult = await transferToken(process.env.REACT_APP_MY_ACCOUNT, this.state.form.walletAddress, item.tokenAddress, item.tokenQuantity, 42);
		// 	console.log(process.env.REACT_APP_MY_ACCOUNT, this.state.form.walletAddress, item.tokenAddress, item.tokenQuantity, 42);
		// 	console.log('[resu]', transferResult);
		// 	if (transferResult.success) {
		// 		Notification.success({ title: 'Token transfer success:', message: 'Hash: ' + transferResult.data.transactionHash, type: 'success', duration: 5000 });
		// 	} else {
		// 		Notification.error({ title: 'Failed', message: 'Token transfer failed!', type: 'Warning', });
		// 	}
		// }

	}


	render() {
		return (
			<div style={{ margin: "4% 12% 4% 12%" }}>

				<Fade bottom delay={200}>

					<Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" labelPosition={"top"} >

						<Layout.Row>
							<Layout.Col sm="24" md={12}>
								<div className="grid-content">
									<div className="register-ruleForm d-font-bold" style={{ border: "2px solid #03ffa4", margin: 20, borderRadius: 10 }}>
										<Layout.Row style={{ fontSize: 25, margin: "-1px 0px 15px 0px" }}>
											<Layout.Col span="24">
												<div className="grid-content d-content-highlight" style={{ borderRadius: "10px 10px 1px 1px" }}>
													<div className='d-font-bold d-black' style={{ display: "inline", marginLeft: 10 }}>Billing Details</div>
												</div>
											</Layout.Col>
										</Layout.Row>

										<Layout.Row>
											<Layout.Col span="12">
												<div className="grid-content bg-purple">
													<Form.Item label="FIRST NAME" prop="firstname" style={{ margin: 15 }}>
														<Input value={this.state.form.firstname} onChange={this.onChange.bind(this, 'firstname')} />
													</Form.Item>
												</div>
											</Layout.Col>
											<Layout.Col span="12">
												<div className="grid-content bg-purple-light">
													<Form.Item label="LAST NAME" prop="lastname" style={{ margin: 15 }}>
														<Input value={this.state.form.lastname} onChange={this.onChange.bind(this, 'lastname')} />
													</Form.Item></div>
											</Layout.Col>
										</Layout.Row>
										<Form.Item label="EMAIL ADDRESS" prop="email" style={{ margin: 15 }}>
											<Input value={this.state.form.email} onChange={this.onChange.bind(this, 'email')} />
										</Form.Item>
										<Form.Item label="PHONE" prop="phone" style={{ margin: 15 }}>
											<Input value={this.state.form.phone} onChange={this.onChange.bind(this, 'phone')} />
										</Form.Item>
										<Form.Item label="Country" prop="country" style={{ margin: 15 }}>
											<Select value={this.state.form.country} placeholder="country name" onChange={this.onChange.bind(this, 'country')} style={{ width: "100%" }}>
												<Select.Option label="Pakistan" value="Pakistan" />
												<Select.Option label="United State" value="United State" />
											</Select>
										</Form.Item>
										<Form.Item label="STREET ADDRESS" prop="street" style={{ margin: 15 }}>
											<Input value={this.state.form.street} onChange={this.onChange.bind(this, 'street')} />
										</Form.Item>

										<Form.Item label="TOWN/CITY" prop="city" style={{ margin: 15 }}>
											<Input value={this.state.form.city} onChange={this.onChange.bind(this, 'city')} />
										</Form.Item>

										<Form.Item label="POST CODE/ZIP" prop="postCode" style={{ margin: 15 }}>
											<Input value={this.state.form.postCode} onChange={this.onChange.bind(this, 'postCode')} />
										</Form.Item>

										<Form.Item label="Wallet Address" prop="walletAddress" style={{ margin: 15 }}>
											<Input value={this.state.form.walletAddress} onChange={this.onChange.bind(this, 'walletAddress')} />
										</Form.Item>
									</div>

								</div>
							</Layout.Col>

							<Layout.Col sm="24" md={12}>
								<div className="grid-content">
									<div className="register-ruleForm d-font-bold" style={{ border: "2px solid #03ffa4", margin: 20, borderRadius: 10 }}>

										<Layout.Row style={{ fontSize: 25, margin: "-1px 0px 15px 0px" }}>
											<Layout.Col span="24">
												<div className="grid-content d-content-highlight" style={{ borderRadius: "10px 10px 1px 1px" }}>
													<div className='d-font-bold d-black' style={{ display: "inline", marginLeft: 10 }}>Additional Information</div>
												</div>
											</Layout.Col>
											<Layout.Col span="24">
												<div className="grid-content" style={{ borderRadius: "10px 10px 1px 1px", marginLeft: 20, marginTop: 20 }}>
													<div>
														<Checkbox.Group value={this.state.form.isGift} onChange={this.onChange.bind(this, 'isGift')}>
															<Checkbox label=" &nbsp; THIS ORDER IS A GIFT" name="isGift" />
														</Checkbox.Group>
													</div>
												</div>
											</Layout.Col>

											<Layout.Col span="24">
												<div className="grid-content" style={{ borderRadius: "10px 10px 1px 1px" }}>
													<div className='d-font-bold d-white d-text-14' style={{ display: "inline", marginLeft: 20 }}>ORDER NOTES (OPTIONAL)</div>
												</div>
											</Layout.Col>

											<Layout.Col span="24">
												<div className="grid-content" style={{ borderRadius: "10px 10px 1px 1px" }}>
													<Input type="textarea" value={this.state.form.description} onChange={this.onChange.bind(this, 'description')} style={{ width: "95%", margin: "0px 20px 0px 20px" }} />
												</div>
											</Layout.Col>
										</Layout.Row>
									</div>
								</div>
							</Layout.Col>

							<Layout.Col span={24}>
								<div className="grid-content">
									<div className="register-ruleForm d-font-bold" style={{ border: "2px solid #03ffa4", margin: 20, borderRadius: 10 }}>

										<Layout.Row style={{ fontSize: 25, margin: "-1px 0px 15px 0px" }}>
											<Layout.Col span="24">
												<div className="grid-content d-content-highlight" style={{ borderRadius: "10px 10px 1px 1px" }}>
													<div className='d-font-bold d-black' style={{ display: "inline", marginLeft: 10 }}>YOUR ORDER</div>
												</div>
											</Layout.Col>
											<TableBs striped hover variant="dark" style={{ margin: 0, fontSize: 15 }} className="text-center">
												<thead>
													<tr>
														<th className="bg-secondary">#</th>
														<th className="bg-secondary" style={{ minWidth: 130 }}>Product</th>
														<th className="bg-secondary" style={{ minWidth: 130 }}>Sub Total</th>
													</tr>
												</thead>
												<tbody>
													{
														this.state.productItems.map((item, key) =>
															<tr key={key}>
																<td>{key + 1}</td>
																<td>{item.identifier}</td>
																<td>{item.subtotal}</td>
															</tr>
														)
													}
													<tr>
														<td></td>
														<td>TOTAL</td>
														<td>${this.state.totalPrice}</td>
													</tr>

												</tbody>
											</TableBs>
										</Layout.Row>
									</div>
								</div>
							</Layout.Col>

							<Layout.Col span={24}>
								<div className="grid-content"
									style={{ border: "2px solid #03ffa4", margin: 20, borderRadius: 10 }}>
									<div style={{ margin: "2%" }}>
										<Radio value="1" checked={this.state.form.payCard === CRYPTO_MODE} onChange={this.onChangePaycard.bind(this)} className="d-font-bold d-white d-text-28">&nbsp;&nbsp;PAY WITH CRYPTOCURRENCY</Radio>
										<div className='d-font-book d-text-28 d-highlight'>Pay with cryptocurrency. If you pay in USDC or DAI, you mush pay only on the ETHEREUM network!</div>
									</div>
									<div style={{ margin: "2%" }}>
										<Radio value="2" checked={this.state.form.payCard === PAYPAL_MODE} onChange={this.onChangePaycard.bind(this)} className="d-font-bold d-white d-text-28">&nbsp; &nbsp;PAY WITH PAYPAL</Radio>
									</div>

									{
										this.state.form.payCard === CRYPTO_MODE &&
										<div>
											<CoinbaseCommerceButton checkoutId={"1b39d435-143a-4daf-93ec-18e7652c1ef2"} />
										</div>
									}

									{
										this.state.form.payCard == PAYPAL_MODE &&
										<div className="d-flex justify-content-center">
											<div className="w-100" style={{ maxWidth: 400 }}>
												<PayPalButton
													amount={this.state.totalPrice}
													onSuccess={(details, data) => { this.onPaypalSuccess(details, data) }}
													options={{
														clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID1
													}}
												/>
											</div>
										</div>
									}

									{/* <div className="register-ruleForm d-font-bold"
										style={{ border: "2px solid #03ffa4", margin: 20, borderRadius: 10 }}>

										<Layout.Row style={{ fontSize: 25, margin: "-1px 0px 15px 0px" }}>
											<Layout.Col span="24">
												<div className="grid-content d-content-highlight" style={{ borderRadius: "10px 10px 1px 1px" }}>
													<div className='d-font-bold d-black d-text-28' style={{ display: "inline", marginLeft: 10 }}>Pay securely using your credit card!</div>
												</div>
											</Layout.Col>
										</Layout.Row>

										<Form.Item label="CARD NUMBER" prop="cardNumber" style={{ margin: 15 }}>
											<Input value={this.state.form.cardNumber} type={'password'} onChange={this.onChange.bind(this, 'cardNumber')} />
										</Form.Item>

										<Layout.Row>
											<Layout.Col span="12">
												<div className="grid-content bg-purple">
													<Form.Item label="EXPIRATION (MM/YY)" prop="mmyy" style={{ margin: 15 }}>
														<Input value={this.state.form.mmyy} placeholder={'MM/YY'} onChange={this.onChange.bind(this, 'mmyy')} />
													</Form.Item>
												</div>
											</Layout.Col>
											<Layout.Col span="12">
												<div className="grid-content bg-purple-light">
													<Form.Item label="CARD SECURITY CODE" prop="csc" style={{ margin: 15 }}>
														<Input value={this.state.form.csc} placeholder={'CSC'} onChange={this.onChange.bind(this, 'csc')} />
													</Form.Item>
												</div>
											</Layout.Col>
										</Layout.Row>
									</div> */}
									<div className="d-font-book d-text-30 d-white" style={{ margin: "2%" }}>
										<div>Your proposal data will be used to process your order, support your experience
									throughout this website, and for other purposes described in our &nbsp;</div>
										<button type="button" className="d-highlight">Privacy Policy</button>
									</div>
									<div style={{ textAlign: "right", marginRight: "3%" }}>
										<Checkbox.Group value={this.state.form.isAgree} onChange={this.onChange.bind(this, 'isAgree')}>
											<Checkbox label=" &nbsp; I HAVE READ AND AGREE TO THE WEBSITE TEAMS AND CONDITIONS" name="isAgree" className="d-font-bold d-white" style={{ fontSize: "2em" }} />
										</Checkbox.Group>
									</div>
									<div className="block" style={{ marginTop: 30 }}>
										<div className="wrapper" style={{ textAlign: "right", margin: "3% 3% 3% 0" }}>
											<Button onClick={this.handleSubmit.bind(this)} type="success" className="d-font-bold d-text-28" style={{ width: "50%", background: "#03ffa4", color: "black", borderRadius: 10 }}>PLACE ORDER</Button>
										</div>
									</div>
								</div>
							</Layout.Col>

						</Layout.Row>
					</Form>
				</Fade>
			</div>
		)
	}
}

export default Checkout