export const getFee = (amount, price) => {
	return parseFloat(amount) * parseFloat(price) * 0.1;
}

export const getTotalWithFee = (amount, price) => {
	return parseFloat(amount) * parseFloat(price) * 1.1;
}