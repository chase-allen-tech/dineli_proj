const db = require('../models')
const Site = db.site

exports.getSiteSetting = (req, res) => {
  Site.findAll({
    limit: 1,
  })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
}

exports.saveSiteSetting = (req, res) => {
  if (!req.body.id) {
    Site.create({
      title: req.body.title,
      description: req.body.description,
      keywords: req.body.keywords,
      telephone: req.body.telephone,
      address: req.body.address,
      language: req.body.language,
    }).then(site => {
      if (site) {
        res.status(200).send({
          message: 'Site setting created successfully',
        })
      } else {
        res.status(400).send({
          message: 'Please try again',
        })
      }
    }).catch(err => {
      res.status(500).send({message: 'Server error'})
    })
  } else {
    Site.findOne({
      where: {
        id: req.body.id,
      }
    }).then(site => {
      if (!site) {
        Site.create(req.body).then(site => {
          if (site) {
            res.status(200).send({
              message: 'Site setting created successfully',
            })
          } else {
            res.status(400).send({
              message: 'Please try again',
            })
          }
        }).catch(err => {
          res.status(500).send({message: 'Server error'})
        })
      } else {
        site.title = req.body.title
        site.description = req.body.description
        site.keywords = req.body.keywords
        site.address = req.body.address
        site.telephone = req.body.telephone
        site.language = req.body.language
        site.save()
        res.status(200).send({
          message: 'Site setting saved successfully',
        })
      }
    })
  }
}
