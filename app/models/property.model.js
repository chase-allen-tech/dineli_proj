module.exports = (sequelize, Sequelize) => {
  const Property = sequelize.define('properties', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    address1: { type: Sequelize.STRING },
    address2: { type: Sequelize.STRING },
    pos_latitude: { type: Sequelize.FLOAT },
    pos_longitude: { type: Sequelize.FLOAT },
    imageData: { type: Sequelize.TEXT },  //  string to array

    rentStartsDate: { type: Sequelize.DATE },
    monthlyRentPerToken: { type: Sequelize.FLOAT },
    tokenValue: { type: Sequelize.FLOAT },
    generatedToken: { type: Sequelize.FLOAT },

    propertyType: { type: Sequelize.STRING },
    neighborhood: { type: Sequelize.STRING },
    squareFeet: { type: Sequelize.FLOAT },
    lotSize: { type: Sequelize.FLOAT },
    bedroomOrBath: { type: Sequelize.STRING },
    constructionYear: { type: Sequelize.FLOAT },
    currentStatusOfProperty: { type: Sequelize.STRING },
    section8: { type: Sequelize.STRING },

    monthlyGrossRent: { type: Sequelize.FLOAT },
    monthlyCosts: { type: Sequelize.FLOAT },
    propertyManagementFee: { type: Sequelize.FLOAT },
    platformFee: { type: Sequelize.FLOAT },
    tax: { type: Sequelize.FLOAT },
    insuranceFee: { type: Sequelize.FLOAT },
    utility: { type: Sequelize.STRING },   //---------------------------------7

    assetPrice: { type: Sequelize.FLOAT },
    fee: { type: Sequelize.FLOAT },
    initMaintainanceReserve: { type: Sequelize.FLOAT },   //--------------------3

    basic: {type:Sequelize.INTEGER},
    gold: {type:Sequelize.INTEGER},
    premium: {type:Sequelize.INTEGER},
  })
  return Property
}
