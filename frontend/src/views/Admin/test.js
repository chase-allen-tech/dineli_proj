
const House = mongoose.model(
    "House",
    new mongoose.Schema({

        address1: String,
        address2: String,
        pos_latitude: Number,
        pos_longitude: Number,
        imageData: Array,        //---------------------------------- 5

        rentStartsDate: Date,
        yearlyRentPerToken: Number,
        tokenValue: Number,
        generatedToken: Number,    //---------------------------------4

        propertyType: String,
        neighborhood: String,
        squareFeet: Number,
        lotSize: Number,
        bedroomOrBath: String,
        constructionYear: Number,
        currentStatusOfProperty: String,
        section8: String,          //---------------------------------8

        yearlyGrossRent: Number,
        monthlyCosts: Number,
        _propertyManagement: Number,
        _platform: Number,
        _propertyTaxes: Number,
        _insurance: Number,
        _utilities: String,       //---------------------------------7

        _underlyingAssetPrice: Number,
        _listingFee: Number,
        _initialMaintenanceReserve: Number,     //--------------------3

        updatedDate: Date,          //---------------------------------1

    })
);


result[i].monthlyGrossRent = result[i].yearlyGrossRent / 12;
result[i].monthlyNetRent = result[i].yearlyGrossRent / 12 - result[i].monthlyCosts;
result[i].yearlyNetRent = (result[i].yearlyGrossRent / 12 - result[i].monthlyCosts) * 12;
result[i].totalInvestment = result[i].generatedToken * result[i].tokenValue;
result[i].expectedYield = (result[i].yearlyGrossRent / 12 - result[i].monthlyCosts) * 12
    / (result[i].generatedToken * result[i].tokenValue);



.toLocaleString('en-US', {style: 'currency',currency: 'USD',})

.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")




var productGroup = [];
products = [1,2,3,4,5,6,7,8]
while (products.length > 0) {
        // let temp = products.splice(0, 3);
        // console.log(temp)
        productGroup = [...productGroup, products.splice(0, 3)]
        // products = temp;
}