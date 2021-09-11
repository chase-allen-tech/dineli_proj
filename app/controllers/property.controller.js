const db = require('../models')
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

      for(let item of payload) {
        let token = await Token.findOne({ where: { propertyId: item.id}});
        if(token) {
          token = token.dataValues;
          delete token.id;
          delete token.createdAt;
          delete token.updatedAt;
          data.push({...item, ...token});
        }
      }
      
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
}

exports.getPropertyById = (req, res) => {
  const ID = req.query.ID
  let option = {id: ID}

  Property.findOne({where: option})
    .then(async result => {
        result = result.dataValues;

        let token = await Token.findOne({ where: { propertyId: result.id }});
        if(token) {
          delete token.id;
          delete token.createdAt;
          delete token.updatedAt;
  
          let payload = {...result, ...token.dataValues};
  
          res.status(200).json(payload)
        } else {
          res.status(200).json(result);
        }
        
    })
    .catch(err => {
      // console.log(err.message)
      res.status(500).json({message: err.message})
    })
}

exports.createProperty = (req, res) => {
  req.body.imageData = req.body.imageData.join(',') // converting imageData into String
  Property.create(req.body).then(property => {
    if (property) {
      res.status(200).send({
        message: 'House Property registration Success'
      })
    } else {
      res.status(400).send({
        message: 'Please try again.'
      })
    }
  }).catch(err => {
    res.status(500).send({message: 'Server error'})

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