const db = require('../models')
const sendEmail = require('./auth.controller').sendEmail;
const Property = db.property
const Token = db.token;

exports.getProperties = (req, res) => {
  const count = Number(req.query.count) ? Number(req.query.count) : 20

  Property.findAll({
    limit: count,
    order: ['id'],
  })
    .then(async result => {
      let payload = result.map(item => item.dataValues);
      let data = [];

      for (let item of payload) {
        let token = await Token.findOne({ where: { propertyId: item.id } });
        if (token) {
          token = token.dataValues;
          let tokenId = token.id;
          delete token.id;
          delete token.createdAt;
          delete token.updatedAt;
          data.push({ ...item, ...token, tokenId: tokenId });
        }
      }

      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
}

exports.getPropertyById = (req, res) => {
  const ID = req.query.ID
  let option = { id: ID }

  console.log('[getPropById]', option);

  Property.findOne({ where: option })
    .then(async result => {
      result = result.dataValues;

      let token = await Token.findOne({ where: { propertyId: result.id } });
      token = token.dataValues;


      if (token) {
        delete token.id;
        delete token.createdAt;
        delete token.updatedAt;

        let payload = { ...result, ...token };

        res.status(200).json(payload)
      } else {
        res.status(200).json(result);
      }

    })
    .catch(err => {
      // console.log(err.message)
      res.status(500).json({ message: err.message })
    })
}

exports.createProperty = (req, res) => {
  req.body.imageData = req.body.imageData.join(',') // converting imageData into String
  Property.create(req.body).then(property => {
    if (property) {
      res.status(200).send({
        message: 'House Property registration Success'
      })
      sendEmail(req.email, 'Property registered', `Propery created success`);
    } else {
      res.status(400).send({
        message: 'Please try again.'
      })
    }
  }).catch(err => {
    res.status(500).send({ message: 'Server error' })

  })
}

exports.updateProperty = (req, res) => {
  // console.log('update');
  if (req.body.imageData)
    req.body.imageData = req.body.imageData.join(',') // converting imageData into String
  Property.findOne({
    where: {
      id: req.body.id,
    }
  }).then(property => {
    // console.log('property', property)
    if (!property) {
      res.status(400).send({
        message: 'Please try again.'
      })
    }
    // property = { ...property, ...req.body.data };
    property.address1 = req.body.address1;
    property.address2 = req.body.address2;
    property.pos_latitude = req.body.pos_latitude;
    property.pos_longitude = req.body.pos_longitude;
    if (req.body.imageData) {
      property.imageData = property.imageData + ',' + req.body.imageData
    }
    property.rentStartsDate = req.body.rentStartsDate;
    property.monthlyRentPerToken = req.body.monthlyRentPerToken;
    property.tokenValue = req.body.tokenValue;
    property.generatedToken = req.body.generatedToken;
    property.propertyType = req.body.propertyType;
    property.neighborhood = req.body.neighborhood;
    property.squareFeet = req.body.squareFeet;
    property.lotSize = req.body.lotSize;
    property.bedroomOrBath = req.body.bedroomOrBath;
    property.constructionYear = req.body.constructionYear;
    property.currentStatusOfProperty = req.body.currentStatusOfProperty;
    property.section8 = req.body.section8;

    property.monthlyGrossRent = req.body.monthlyGrossRent;
    property.monthlyCosts = req.body.monthlyCosts;
    property.propertyManagementFee = req.body.propertyManagementFee;
    property.platformFee = req.body.platformFee;
    property.tax = req.body.tax;
    property.insuranceFee = req.body.insuranceFee;
    property.utility = req.body.utility;
    property.assetPrice = req.body.assetPrice;
    property.fee = req.body.fee;
    property.initMaintainanceReserve = req.body.initMaintainanceReserve;
    property.basic = req.body.basic;
    property.gold = req.body.gold;
    property.premium = req.body.premium;

    property.save()
    res.status(200).send({
      message: 'House Property update Success'
    })
    // sendEmail(req.email, 'Property updated', `Propery updated success`);
  }).catch(err => {
    console.log(err);
    res.status(500).send({ message: 'Server error' })

  })
}


// const house = new House(req.body)
// req.body.sellStatus = 'ready'

// house.save((err, house) => {
//     if (err) {
//         res.status(500).send({message: err})
//         return
//     }
//
//     Sell_status.find(
//         {
//             name: {$in: req.body.sellStatus}
//         }, (err, sellStatus) => {
//
//             if (err) {
//                 res.status(500).send({message: err})
//                 return
//             }
//
//             house.sell_status = sellStatus.map(e => e.id)
//             house.save(err => {
//                 if (err) {
//                     res.status(500).send({message: err})
//                     return
//                 }
//                 res.send({message: 'User was registered successfully!'})
//             })
//         }
//     );
// })