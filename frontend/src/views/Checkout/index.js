import React, { Component } from "react"
import { Button, Form, Input, Layout, Radio, Select, Checkbox, Notification } from "element-react"
import Fade from "react-reveal/Fade"
import { Table as TableBs } from 'react-bootstrap';
import { PayPalButton } from 'react-paypal-button-v2';
import { connect } from 'react-redux'

import { actionPropertyGet } from '../../redux/actions/property';
import { actionOrderCreate } from '../../redux/actions/order';

import CoinbaseCommerceButton from 'react-coinbase-commerce';
import { axiosPost } from "../../services/axios";
import HelloSign from 'hellosign-embedded';
import { getTotalWithFee } from "../../services/calc";


const CRYPTO_MODE = '1', PAYPAL_MODE = '2';

const mapStateToProps = state => {
	const { credentialData } = state.credential
	return {
		credentialData
	}
}

const mapDispatchToProps = { actionPropertyGet, actionOrderCreate }

const Checkout = connect(mapStateToProps, mapDispatchToProps)(class extends Component {
	// class Checkout extends Component {
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
				// walletAddress: [{ required: true, message: 'Please input wallet address', trigger: 'change' }],
				isAgree: [{ required: true, message: 'This field is required', trigger: 'change' }]
			},
			countryList: [],
			productItems: [],
			totalPrice: 0,
			coinbaseId: null,
			hellosignId: null
		};

		this.coinbaseRef = React.createRef();

		this.onPaypalSuccess.bind(this);
		this.onSaveOrder.bind(this);
	}

	componentDidMount() {
		// console.log('[checkout]', this.props.credentialData);
		// window.scrollTo(0, 0);

		// If there is not wallet address, show notification
		const user = JSON.parse(localStorage.getItem('user'));
		if (!user || !user.walletAddress) {
			Notification.error({
				title: 'Wallet Required',
				message: 'Please check wallet in account page!',
				type: 'Warning',
			});
		}

		const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

		if (!cartProducts || !cartProducts.length) return;

		let items = [];
		let total = 0;
		for (let product of cartProducts) {
			items.push({
				"identifier": product.address1,
				"subtotal": getTotalWithFee(product.tokenValue, Number(product.tokenQuantity)).toFixed(2)
			});
			total += getTotalWithFee(product.tokenValue, Number(product.tokenQuantity));
		}
		this.setState({ productItems: items, totalPrice: total });

		// Create coinbase checkout with api
		const body = {
			"name": "Token Purchase - " + (new Date()),
			"description": "Token purchase with coinbase",
			"local_price": {
				"amount": total,
				"currency": "USD"
			},
			"pricing_type": "fixed_price",
			"requested_info": ["email"]
		}

		fetch(process.env.REACT_APP_COINBASE_API_ENDPOINT + '/checkouts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-CC-Api-Key': this.props.credentialData[0]?.coinbaseApiKey,
				'X-CC-Version': '2018-03-22'
			},
			body: JSON.stringify(body)
		}).then(async res => {
			let result = await res.json();
			console.log('[cionbase data]', result);
			this.setState({ coinbaseId: result.data.id });
		}).catch(err => {
			console.log('[coinbase error]', err);
		});

		// Get country list
		fetch('https://restcountries.eu/rest/v2/').then(async res => {
			const resJson = await res.json();
			const countryList = resJson.map(item => item.name);
			this.setState({ countryList: countryList });

		}).catch(err => { console.log('[country err]', err) });
	}

	handleSubmit(e) {
		e.preventDefault()

		this.refs.form.validate((valid) => {
			// if (!valid) return;
			// this.props.actionAuthRegister(this.state.form);
			if (this.state.form.payCard === CRYPTO_MODE) {
				this.coinbaseRef.handleButtonClick();

			}
		})
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
		});
	}

	async onPaypalSuccess(details, data) {

		Notification.success({
			title: 'Payment Success by ' + details.payer.name.given_name,
			message: 'Order id: ' + data.orderID,
			type: 'success',
			duration: 5000
		});
		this.onSaveOrder('paypal');
	}

	onCryptoSuccess() {
		Notification.success({
			title: 'Payment Success',
			message: 'Crypto payment success',
			type: 'success',
			duration: 5000
		});
		this.onSaveOrder('coinbase');
	}

	onSaveOrder(paymentMethod) {
		console.log('[saving order...]');
		const user = JSON.parse(localStorage.getItem('user'));
		console.log(user, user.walletAddress);
		const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
		let totalCount = 0;
		let details = [];
		for (let item of cartProducts) {
			totalCount += parseFloat(item.tokenQuantity);
			details.push({
				tokenAddress: item.tokenAddress,
				tokenQuantity: item.tokenQuantity,
				toAddress: user.walletAddress
			})
		}

		const payload = {
			userId: user.id,
			status: 'pending',
			totalPrice: this.state.totalPrice,
			count: totalCount,
			paymentMethod: paymentMethod,
			details: JSON.stringify(details),
			signatureId: this.state.hellosignId
		}

		this.props.actionOrderCreate(payload);
		localStorage.removeItem("cartProducts");
		this.props.history.push('/marketplace');
	}

	async onHelloSign() {

		const hellosignClient = new HelloSign({ clientId: this.props.credentialData[0]?.hellosignClientId });
		const user = JSON.parse(localStorage.getItem('user'));

		// If there is no walletaddress, stop propogation
		if (!user || !user.walletAddress) {
			Notification.error({
				title: 'Wallet Required',
				message: 'Please add wallet in account page',
				type: 'Warning',
			});
			return;
		}

		axiosPost('/api/hellosign', {
			email: user.email,
			name: user.username,
			order: 1
		})
			.then(res => {
				console.log("[res]", res);
				if (res.data.success) {
					hellosignClient.open(res.data.signUrl);
					hellosignClient.once('sign', data => {
						console.log('[signed]', data.signatureId);

						this.setState({ hellosignId: data.signatureId });
					});
				}
			})
			.catch(err => {
				console.log(err);
			})
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
												{
													this.state.countryList.map((country, key) =>
														<Select.Option key={key} label={country} value={country} />
													)
												}
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

										{/* <Form.Item label="Wallet Address" prop="walletAddress" style={{ margin: 15 }}>
											<Input value={this.state.form.walletAddress} onChange={this.onChange.bind(this, 'walletAddress')} />
										</Form.Item> */}
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
								<div style={{ padding: 20 }}>
									<Button onClick={this.onHelloSign.bind(this)} type="success" className="d-font-bold d-text-28 w-100" style={{ background: "#03ffa4", color: "black", borderRadius: 10 }}>Hello Sign</Button>
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
														<td>$ {this.state.totalPrice.toFixed(2)}</td>
													</tr>

												</tbody>
											</TableBs>
										</Layout.Row>
									</div>
								</div>
							</Layout.Col>

							{
								// this.state.hellosignId &&
								<Layout.Col span={24} style={{ zIndex: 100 }}>
									<div className="grid-content"
										style={{ border: "2px solid #03ffa4", margin: 20, borderRadius: 10 }}>
										<div style={{ margin: "2%" }}>
											<Radio value="1" checked={this.state.form.payCard === CRYPTO_MODE} onChange={this.onChangePaycard.bind(this)} className="d-font-bold d-white d-text-28">&nbsp;&nbsp;PAY WITH CRYPTOCURRENCY</Radio>
											<div className='d-font-book d-text-28 d-highlight'>Pay with cryptocurrency. If you pay in USDC or DAI, you mush pay only on the ETHEREUM network!</div>
											{
												// this.state.form.payCard === CRYPTO_MODE && this.state.coinbaseId && this.state.hellosignId &&
												<div className="position-relative">
													<div className="position-absolute">
														<CoinbaseCommerceButton
															ref={elem => this.coinbaseRef = elem}
															checkoutId={this.state.coinbaseId}
															styled={false}
															onChargeSuccess={() => alert("success")}
															onChargeFailure={() => console.log("Failure")} />
													</div>
													<div className="position-absolute w-100" style={{ height: 50, backgroundColor: 'black' }}>

													</div>
												</div>
											}
										</div>
										<div style={{ margin: "2%" }}>
											<Radio value="2" checked={this.state.form.payCard === PAYPAL_MODE} onChange={this.onChangePaycard.bind(this)} className="d-font-bold d-white d-text-28">&nbsp; &nbsp;PAY WITH PAYPAL</Radio>
										</div>

										<div className="d-font-book d-text-30 d-white" style={{ margin: "2%" }}>
											<div>Your proposal data will be used to process your order, support your experience
												throughout this website, and for other purposes described in our &nbsp;</div>
											<button type="button" className="d-highlight">Privacy Policy</button>
										</div>
										<div className="d-flex">
											<Form.Item label="" prop="" className="ms-auto me-4">
												<Checkbox checked={this.state.form.isAgree} onChange={this.onChange.bind(this, 'isAgree')} label=" &nbsp; I HAVE READ AND AGREE TO THE WEBSITE TEAMS AND CONDITIONS" name="isAgree" className="d-font-bold d-white" style={{ fontSize: "2em" }} />
											</Form.Item>
										</div>
										<div className="block" style={{ marginTop: 30 }}>
											<div className="wrapper position-relative" style={{ textAlign: "right", margin: "3% 3% 3% 0" }}>
												<Button onClick={this.handleSubmit.bind(this)} type="success" className={`d-font-bold d-text-28 w-50 text-dark`} style={{ background: "#03ffa4", borderRadius: 10 }} disabled={!this.state.form.isAgree}>PLACE ORDER</Button>
												{
													this.state.form.payCard == PAYPAL_MODE && this.state.form.isAgree &&
													<div className="position-absolute top-0 end-0 w-50 opacity-0">
														<PayPalButton
															amount={this.state.totalPrice}
															onSuccess={(details, data) => { this.onPaypalSuccess(details, data) }}
															options={{
																clientId: this.props.credentialData[0]?.paypalAppClientId
															}}
														/>
													</div>
												}


											</div>
										</div>
									</div>
								</Layout.Col>
							}



						</Layout.Row>
					</Form>
				</Fade>
			</div>
		)
	}
})

export default Checkout