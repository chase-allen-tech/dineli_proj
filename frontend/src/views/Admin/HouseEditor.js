import { Component } from "react"
import { Button, Form, Input, Layout, DatePicker } from "element-react"
import UploadImage from "./UploadImage"
import { connect } from "react-redux"
import { actionPropertyCreate } from "../../redux/actions/property"

const mapStateToProps = () => {
	return {}
}

const mapDispatchToProps = {
	actionPropertyCreate
}

const HouseEditor = connect(mapStateToProps, mapDispatchToProps)(class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAdmin: false,
			form: {
				address1: '',
				address2: '',
				pos_latitude: '', //-----------number
				pos_longitude: '', //-----------number
				imageData: [],

				rentStartsDate: '',     //-----------date
				yearlyRentPerToken: '', //-----------number
				tokenValue: '',         //-----------number
				generatedToken: '',     //-----------number

				propertyType: '',
				neighborhood: '',
				squareFeet: '',          //-----------number
				lotSize: '',             //-----------number
				bedroomOrBath: '',
				constructionYear: '',    //-----------number
				currentStatusOfProperty: '',
				section8: '',

				yearlyGrossRent: '',       //-----------number
				monthlyCosts: '',          //-----------number
				_propertyManagement: '',   //-----------number
				_platform: '',             //-----------number
				_propertyTaxes: '',        //-----------number
				_insurance: '',            //-----------number
				_utilities: '',

				_underlyingAssetPrice: '',      //-----------number
				_listingFee: '',                //-----------number
				_initialMaintenanceReserve: '', //-----------number

			},
			rules: {
				address1: [{ required: true, message: '', trigger: 'blur' }],
				address2: [{ required: true, message: '', trigger: 'blur' }],
				pos_latitude: [{ required: true, message: '', trigger: 'blur' }],
				pos_longitude: [{ required: true, message: '', trigger: 'blur' }],
				// imageData: [{required: true, message: '', trigger: 'blur'}],

				rentStartsDate: [{ type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }],
				yearlyRentPerToken: [{ required: true, message: '', trigger: 'blur' }],
				tokenValue: [{ required: true, message: '', trigger: 'blur' }],
				generatedToken: [{ required: true, message: '', trigger: 'blur' }],

				propertyType: [{ required: true, message: '', trigger: 'blur' }],
				neighborhood: [{ required: true, message: '', trigger: 'blur' }],
				squareFeet: [{ required: true, message: '', trigger: 'blur' }],
				lotSize: [{ required: true, message: '', trigger: 'blur' }],
				bedroomOrBath: [{ required: true, message: '', trigger: 'blur' }],
				constructionYear: [{ required: true, message: '', trigger: 'blur' }],
				currentStatusOfProperty: [{ required: true, message: '', trigger: 'blur' }],
				section8: [{ required: true, message: '', trigger: 'blur' }],

				yearlyGrossRent: [{ required: true, message: '', trigger: 'blur' }],
				monthlyCosts: [{ required: true, message: '', trigger: 'blur' }],
				_propertyManagement: [{ required: true, message: '', trigger: 'blur' }],
				_platform: [{ required: true, message: '', trigger: 'blur' }],
				_propertyTaxes: [{ required: true, message: '', trigger: 'blur' }],
				_insurance: [{ required: true, message: '', trigger: 'blur' }],
				_utilities: [{ required: true, message: '', trigger: 'blur' }],

				_underlyingAssetPrice: [{ required: true, message: '', trigger: 'blur' }],
				_listingFee: [{ required: true, message: '', trigger: 'blur' }],
				_initialMaintenanceReserve: [{ required: true, message: '', trigger: 'blur' }],

			}
		};
	}

	onChange(key, value) {
		this.setState({
			form: Object.assign({}, this.state.form, { [key]: value })
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		this.refs.form.validate((valid) => {
			if (valid) {
				if (this.state.form.imageData.length === 0) {
					alert('please select images to upload!')
					return false;
				}
				this.props.actionPropertyCreate(this.state.form);
			} else {
				console.log('error submit!!');
				return false;
			}
		});
	}

	changeImageData = (imagesData) => {
		this.setState((state) => {
			state.form.imageData = imagesData;
			return state;
		})
	}

	componentWillMount() {
		let user = JSON.parse(localStorage.getItem('user'));
		if (user && user.roles.includes('ADMIN')) {
			this.setState({ isAdmin: true })
		} else {
			this.props.history.push('/home')
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			this.state.isAdmin &&
			<div style={{ margin: "0% 10% 0% 10%" }}>
				<Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100"
					className="register-ruleForm d-font-bold"
					labelPosition={"top"}
					style={{ border: "2px solid #03ffa4", margin: 20, borderRadius: 10 }}>
					<Layout.Row style={{ fontSize: 25, margin: "-1px 0px 15px 0px" }}>
						<Layout.Col span="24">
							<div className="grid-content d-content-highlight"
								style={{ borderRadius: "10px 10px 1px 1px" }}>
								<div style={{ display: "inline", marginLeft: 10 }}>Property List</div>
								<div style={{ float: "right", display: "inline" }}>
									<img src="imgs/logo3.png" alt='logo' style={{ height: "35px", marginRight: 20 }} />
								</div>
							</div>
						</Layout.Col>
					</Layout.Row>
					{/*-----------------------------------------------------------------------------------------------*/}
					<h1 className='d-white d-font-bold d-text-60'>Property Highlights</h1>
					<Layout.Row>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="Address1" prop="address1" style={{ margin: 15 }}>
									<Input value={this.state.form.address1}
										onChange={this.onChange.bind(this, 'address1')} />
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple-light">
								<Form.Item label="Address2" prop="address2" style={{ margin: 15 }}>
									<Input value={this.state.form.address2}
										onChange={this.onChange.bind(this, 'address2')} />
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="pos_latitude" prop="pos_latitude" style={{ margin: 15 }}>
									<Input value={this.state.form.pos_latitude} type='number'
										onChange={this.onChange.bind(this, 'pos_latitude')} />
									<span className='d-highlight'>deg</span>
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple-light">
								<Form.Item label="pos_longitude" prop="pos_longitude" style={{ margin: 15 }}>
									<Input value={this.state.form.pos_longitude} type='number'
										onChange={this.onChange.bind(this, 'pos_longitude')} />
									<span className='d-highlight'>deg</span>
								</Form.Item>
							</div>
						</Layout.Col>
					</Layout.Row>
					{/*-----------------------------------------------------------------------------------------------*/}
					<Layout.Row>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="Rent Starts from" prop="rentStartsDate"
									style={{ margin: 15, width: "200%" }}>
									<DatePicker
										value={this.state.form.rentStartsDate}
										placeholder="Pick a date"
										onChange={this.onChange.bind(this, 'rentStartsDate')}
									/>
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple-light">
								<Form.Item label="Yearly Rent Per Token" prop="yearlyRentPerToken" style={{ margin: 15 }}>
									<Input value={this.state.form.yearlyRentPerToken} type='number'
										onChange={this.onChange.bind(this, 'yearlyRentPerToken')} />
									<span className='d-highlight'>$/year</span>
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="Token Value" prop="tokenValue" style={{ margin: 15 }}>
									<Input value={this.state.form.tokenValue} type='number'
										onChange={this.onChange.bind(this, 'tokenValue')} />
									<span className='d-highlight'>$</span>
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="Generated Token" prop="generatedToken" style={{ margin: 15 }}>
									<Input value={this.state.form.generatedToken} type='number'
										onChange={this.onChange.bind(this, 'generatedToken')} />
								</Form.Item>
							</div>
						</Layout.Col>
					</Layout.Row>
					{/*-----------------------------------------------------------------------------------------------*/}
					<h1 className='d-white d-font-bold d-text-60'>&nbsp;</h1>
					<Layout.Row>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="Property Type" prop="propertyType" style={{ margin: 15 }}>
									<Input value={this.state.form.propertyType}
										onChange={this.onChange.bind(this, 'propertyType')} />
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="Neighborhood" prop="neighborhood" style={{ margin: 15 }}>
									<Input value={this.state.form.neighborhood}
										onChange={this.onChange.bind(this, 'neighborhood')} />
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="Square Feet" prop="squareFeet" style={{ margin: 15 }}>
									<Input value={this.state.form.squareFeet} type='number'
										onChange={this.onChange.bind(this, 'squareFeet')} />
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="Lot Size" prop="lotSize" style={{ margin: 15 }}>
									<Input value={this.state.form.lotSize} type='number'
										onChange={this.onChange.bind(this, 'lotSize')} />
								</Form.Item>
							</div>
						</Layout.Col>
					</Layout.Row>
					{/*-----------------------------------------------------------------------------------------------*/}
					<Layout.Row>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="Bedroom/Bath" prop="bedroomOrBath" style={{ margin: 15 }}>
									<Input value={this.state.form.bedroomOrBath}
										onChange={this.onChange.bind(this, 'bedroomOrBath')} />
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="Construction Year" prop="constructionYear" style={{ margin: 15 }}>
									<Input value={this.state.form.constructionYear} type='number'
										onChange={this.onChange.bind(this, 'constructionYear')} />
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="Current Status of Property" prop="currentStatusOfProperty"
									style={{ margin: 15 }}>
									<Input value={this.state.form.currentStatusOfProperty}
										onChange={this.onChange.bind(this, 'currentStatusOfProperty')} />
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="Section 8" prop="section8" style={{ margin: 15 }}>
									<Input value={this.state.form.section8}
										onChange={this.onChange.bind(this, 'section8')} />
								</Form.Item>
							</div>
						</Layout.Col>
					</Layout.Row>
					{/*-----------------------------------------------------------------------------------------------*/}
					<h1 className='d-white d-font-bold d-text-60'>Financials</h1>
					<Layout.Row>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="Yearly Gross Rent" prop="yearlyGrossRent" style={{ margin: 15 }}>
									<Input value={this.state.form.yearlyGrossRent} type='number'
										onChange={this.onChange.bind(this, 'yearlyGrossRent')} />
									<span className='d-highlight'>$</span>
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="monthlyCosts" prop="monthlyCosts" style={{ margin: 15 }}>
									<Input value={this.state.form.monthlyCosts} type='number'
										onChange={this.onChange.bind(this, 'monthlyCosts')} />
									<span className='d-highlight'>$</span>
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="_propertyManagement" prop="_propertyManagement" style={{ margin: 15 }}>
									<Input value={this.state.form._propertyManagement} type='number'
										onChange={this.onChange.bind(this, '_propertyManagement')} />
									<span className='d-highlight'>$</span>
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="_platform" prop="_platform" style={{ margin: 15 }}>
									<Input value={this.state.form._platform} type='number'
										onChange={this.onChange.bind(this, '_platform')} />
									<span className='d-highlight'>$</span>
								</Form.Item>
							</div>
						</Layout.Col>
					</Layout.Row>
					{/*-----------------------------------------------------------------------------------------------*/}
					<Layout.Row>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="_propertyTaxes" prop="_propertyTaxes" style={{ margin: 15 }}>
									<Input value={this.state.form._propertyTaxes} type='number'
										onChange={this.onChange.bind(this, '_propertyTaxes')} />
									<span className='d-highlight'>$</span>
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="_insurance" prop="_insurance" style={{ margin: 15 }}>
									<Input value={this.state.form._insurance} type='number'
										onChange={this.onChange.bind(this, '_insurance')} />
									<span className='d-highlight'>$</span>
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="_utilities" prop="_utilities" style={{ margin: 15 }}>
									<Input value={this.state.form._utilities}
										onChange={this.onChange.bind(this, '_utilities')} />
								</Form.Item>
							</div>
						</Layout.Col>
					</Layout.Row>
					{/*-----------------------------------------------------------------------------------------------*/}
					<Layout.Row>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="_underlyingAssetPrice" prop="_underlyingAssetPrice"
									style={{ margin: 15 }}>
									<Input value={this.state.form._underlyingAssetPrice} type='number'
										onChange={this.onChange.bind(this, '_underlyingAssetPrice')} />
									<span className='d-highlight'>$</span>
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="_listingFee" prop="_listingFee" style={{ margin: 15 }}>
									<Input value={this.state.form._listingFee} type='number'
										onChange={this.onChange.bind(this, '_listingFee')} />
									<span className='d-highlight'>$</span>
								</Form.Item>
							</div>
						</Layout.Col>
						<Layout.Col span="6">
							<div className="grid-content bg-purple">
								<Form.Item label="_initialMaintenanceReserve" prop="_initialMaintenanceReserve"
									style={{ margin: 15 }}>
									<Input value={this.state.form._initialMaintenanceReserve} type='number'
										onChange={this.onChange.bind(this, '_initialMaintenanceReserve')} />
									<span className='d-highlight'>$</span>
								</Form.Item>
							</div>
						</Layout.Col>
					</Layout.Row>
					{/*---------------------------------Image Upload--------------------------------------------------*/}
					<div style={{ margin: "1% 5%" }}>
						<UploadImage changeImageData={this.changeImageData} />
					</div>
					{/*-----------------------------------------------------------------------------------------------*/}

					<Form.Item style={{ textAlign: "center" }}>
						<Button type="success" onClick={this.handleSubmit.bind(this)}>Submit</Button>
					</Form.Item>
				</Form>
			</div>
		)
	}
})

export default HouseEditor;