import React, { useEffect, useState } from "react";
import { Layout, Icon, Notification } from 'element-react';
import { Link, useHistory, useParams } from "react-router-dom";
import { Table as TableBs } from 'react-bootstrap';
import './Cart.css';
import { Button, Input } from "element-react";
import { useDispatch, useSelector } from "react-redux";
import { actionPropertyGet } from "../../redux/actions/property";
import { actionUserOrderGet } from "../../redux/actions/order";
import { getFee, getTotalWithFee } from "../../services/calc";

const TYPES = ['', 'basic', 'gold', 'premium'];

const Cart = props => {

	const [learnMore, setLearnMore] = useState(true);
	const history = useHistory();
	const { productID } = useParams();
	const dispatch = useDispatch();
	const product = useSelector(state => state.property.currentHouse);
	const user = useSelector(state => state.auth.user);
	const userOrder = useSelector(state => state.order.userOrder);
	// console.log('product', product);
	// console.log('user', user);
	const [products, setProducts] = useState([]);
	const [quantityValues, setQuantityValues] = useState({});

	useEffect(() => {
		const user = localStorage.getItem('user');
		if (!user) {
			localStorage.removeItem('cartProducts');
			history.goBack();
		}
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		// console.log('user', user);
		dispatch(actionPropertyGet(productID));
		dispatch(actionUserOrderGet(user.id));
	}, [productID]);

	useEffect(() => {
		let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
		cartProducts = cartProducts && cartProducts.length ? cartProducts : [];

		if (productID === 'null') {
			setProducts(cartProducts);
		} else {
			if (!product || Object.keys(product).length === 0) return;

			if (!cartProducts.find(p => p.id === product.id)) {
				cartProducts.push(product);
			}
			setProducts(cartProducts);
			if (cartProducts.length > 0) localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
		}

		console.log(cartProducts);

		// Set quantity state
		let quantityArray = {}
		for (let product of cartProducts) {
			quantityArray[product.id.toString()] = product.tokenQuantity ? Number(product.tokenQuantity) : 0;
		}
		setQuantityValues(quantityArray);


	}, [product]);

	const handleLearnMore = () => {
		setLearnMore(!learnMore);
	}

	const onInputChange = (key, val) => {
		let quantityClone = Object.assign({}, quantityValues);
		quantityClone[key] = val;
		setQuantityValues(quantityClone);

		let productsClone = [...products];
		let ind = productsClone.findIndex(product => product.id === Number(key));
		productsClone[ind].tokenQuantity = val;
		localStorage.setItem('cartProducts', JSON.stringify(productsClone));

	}

	const onItemRemove = (productId) => {
		console.log('[enter]', productId);
		let storageItems = JSON.parse(localStorage.getItem('cartProducts'));
		const productIndex = storageItems.findIndex(item => item.id === productId);
		console.log(storageItems, productIndex);
		storageItems.splice(productIndex, 1);
		console.log(storageItems);
		localStorage.setItem('cartProducts', JSON.stringify(storageItems));
		setProducts(storageItems);

		let quantityClone = quantityValues;
		delete quantityClone[productId.toString()];
		setQuantityValues(quantityClone);

		// history.push('/cart/null');
	}

	const onProceed = () => {
		// console.log('user', user);
		// console.log('userOrder', userOrder);
		// console.log('cartproducts', products);
		// console.log('quantityValues', quantityValues);
		let tokenCount = 0;
		let userType = TYPES[user.type || 0];
		console.log(user.type);
		if (products.length && userType) {
			for (let i = 0; i < products.length; i++) {
				tokenCount = 0;
				if (userOrder.length > 0) {
					for (let j = 0; j < userOrder.length; j++) {
						if (products[i].tokenAddress === userOrder[j].details[0].tokenAddress) {
							tokenCount += Number(userOrder[j].details[0].tokenQuantity);
						}
					}
				}
				// console.log('total',tokenCount + Number(quantityValues[products[i].id]));
				if(tokenCount + Number(quantityValues[products[i].id]) > products[i][userType]){
					Notification.error({
						title: 'Proceed to checkout failed',
						message: `You can buy up to ${products[i][userType]} ${products[i].tokenSymbol} Token`,
						type: 'Warning',
					})
					return;
				}
			}
		}
		history.push('/checkout');
	}

	return (
		<div style={{ margin: "3% 12%", border: "none", }}>
			<Layout.Row>
				<Layout.Col span="24">
					<div className="grid-content">
						<div className="block">
							<span className="wrapper">
								<Link to='/marketplace'>
									<Button type="success" className="d-font-bold d-text-28"
										style={{ background: "#03ffa4", color: "black", borderRadius: 10 }}>CONTINUE SHOPPING</Button>
								</Link>
							</span>
						</div>
					</div>
				</Layout.Col>
			</Layout.Row>

			<TableBs striped hover variant="dark" style={{ margin: 0 }} className="text-center mt-4">
				<thead>
					<tr>
						<th className="bg-secondary"></th>
						<th className="bg-secondary">Asset</th>
						<th className="bg-secondary" style={{ minWidth: 100 }}>Asset Price</th>
						<th className="bg-secondary" style={{ minWidth: 100 }}>Total Fees</th>
						<th className="bg-secondary" style={{ minWidth: 100 }}>Purchase Price</th>
						<th className="bg-secondary" style={{ minWidth: 200 }}>Quantity</th>
						<th className="bg-secondary" style={{ minWidth: 110 }}>Subtotal</th>
					</tr>
				</thead>
				<tbody>
					{
						products.map((item, key) =>
							<tr key={key}>
								<td>
									<div onClick={() => onItemRemove(item.id)} >
										<Icon className="product-cart-delete" name="circle-cross" style={{ color: "white", cursor: "pointer" }} />
									</div>
								</td>
								<td>
									<img src={`${process.env.REACT_APP_API_ENDPOINT}/public/${item.imageData[0]}`} alt="img" width="100" />
								</td>
								<td>${item?.assetPrice}</td>
								<td>${getFee(item?.tokenValue, quantityValues[item.id.toString()]).toFixed(2)}</td>
								<td>${item?.tokenValue.toFixed(2)}</td>
								<td><Input type="number" value={quantityValues[item.id.toString()]} onChange={val => onInputChange(item.id.toString(), val)} /></td>
								<td>${getTotalWithFee(item?.tokenValue, quantityValues[item.id.toString()]).toFixed(2)}</td>
							</tr>
						)
					}

				</tbody>
			</TableBs>

			<Layout.Row>
				<Layout.Col span="24" style={{ marginTop: 30, textAlign: "right" }}>
					<div className="grid-content">
						<div className="block">
							<span className="wrapper">
								{/* <Button type="success" className="d-font-bold d-text-28" style={{ background: "#03ffa4", color: "black", borderRadius: 10 }}>UPDATE CART</Button> */}
							</span>
						</div>

					</div>
				</Layout.Col>
			</Layout.Row>

			<Layout.Row>
				<Layout.Col md="14" style={{ marginTop: 20 }}>
					<div className="grid-content">
					</div>
				</Layout.Col>

				<Layout.Col md="10" style={{ marginTop: 20 }}>
					<div className="grid-content">
						<div className="block">
							<label className="d-font-bold d-text-48 d-white">Cart Totals</label>
						</div>
						<Layout.Row style={{ marginTop: 30 }}>
							<Layout.Col span="12">
								<div className="grid-content d-font-bold d-text-28 d-white">Total</div>
							</Layout.Col>
							<Layout.Col span="12">
								<div className="grid-content d-font-bold d-text-28 d-white"
									style={{ textAlign: "right" }}>
									${products.reduce((a, b) => a + getTotalWithFee(b?.tokenValue, quantityValues[b.id.toString()]), 0)}
								</div>
							</Layout.Col>
						</Layout.Row>
						<div className="block" style={{ marginTop: 30 }}>
							<span className="wrapper">
								{/* <Link to={'/checkout'}> */}
								<Button type="success" className="d-font-bold d-text-28"
									style={{
										width: "100%",
										background: "#03ffa4",
										color: "black",
										borderRadius: 10
									}}
									onClick={onProceed}
								>PROCEED TO CHECKOUT
								</Button>
								{/* </Link> */}
							</span>
						</div>
						<div style={{ border: "1px solid #03ffa4", marginTop: 20 }}>
							<div className="block" style={{ textAlign: "center", margin: 10 }}>
								<label className="d-font-bold d-text-24 d-white">IS THIS ORDER A GIFT?</label>
							</div>
							<div className="block" style={{ textAlign: "center" }}>
								<label onClick={handleLearnMore} className="d-font-bold d-text-24 d-white"
									style={{ textDecoration: "underline" }}>Learn More </label>
							</div>
							{learnMore &&
								<div className="block" style={{ textAlign: "justify", margin: 20 }}>
									<p className="d-font-book d-text-20 d-white">To make your order a gift, just
										check 'This order is a gift' at checkout, then enter the recipient's name,
										email, and your preferred delivery date. We'll email you a printable certificate
										to give in person, and we'll email that certificate to the gift recipient on the
										delivery date, too. </p>

									<p className="d-font-book d-text-20 d-white">The recipient can follow a simple link or QR code to register and complete ID
										verification, including registering an Ethereum wallet. When they're done, we'll
										dispense their gift tokens!</p>

									<p className="d-font-book d-text-20 d-white"><strong>Note:</strong> Tokens may not yet be gifted to minors.</p>

									<p className="d-font-book d-text-20 d-white"><strong>Important: </strong>Gift recipients who are U.S. citizens or residents
										must be verified as Accredited Investors before we can dispense their gifts.
									</p>
								</div>}
						</div>
					</div>
				</Layout.Col>
			</Layout.Row>

		</div>
	)
}

export default Cart;