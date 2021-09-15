const db = require('../models')
const Credential = db.credential

exports.getCredentials = (req, res) => {
  const count = Number(req.query.count) ? Number(req.query.count) : 20
  Credential.findAll({
    limit: count,
    order: ['createdAt'],
  })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
}

exports.saveCredential = (req, res) => {
  Credential.findOne({
    where: {
      id: req.body.id,
    }
  }).then(credential => {
    if (!credential) {
      res.status(400).send({
        message: 'Credential not found',
      })
    }
    credential.blockchainId = req.body.blockchainId;
    credential.infuraProjectEndpoint = req.body.infuraProjectEndpoint;
    credential.walletPublicKey = req.body.walletPublicKey;
    credential.walletPrivateKey = req.body.walletPrivateKey;
    credential.paypalAppClientId = req.body.paypalAppClientId;
    credential.coinbaseApiKey = req.body.coinbaseApiKey;
    credential.hellosignApiKey = req.body.hellosignApiKey;
    credential.hellosignClientId = req.body.hellosignClientId;
    credential.save()
    res.status(200).send({
      message: 'Credential approved successfully',
    })
  })
}
