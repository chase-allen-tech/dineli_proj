const {authJwt} = require('../middleware')
const controller = require('../controllers/property.controller')
const path = require('path')
const fs = require('fs')
const multer = require('multer')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    )
    next()
  })

  app.post('/api/admin/image/upload', [authJwt.verifyToken, authJwt.isAdmin], function (req, res) {
    console.log('[uploading image]');
    var rootPath = __dirname.slice(0, -11)
    var file = JSON.parse(JSON.stringify(req.files))
    // console.log('[file]', file);
    const time = new Date().valueOf()
    var file_name = rootPath + '/public/' + (time + '_' + file.img.name)
    //if you want just the buffer format you can use it
    var buffer = new Buffer.from(file.img.data.data)

    /*await*/
    fs.writeFile(file_name, buffer, async (err) => {
      console.log('Successfully Written to File.')
      fs.unlink(rootPath + '/public/images' + file_name, () => {
      })
      res.send({imgPath: time + '_' + file.img.name})
    })
  })

  app.post('/api/admin/property', [authJwt.verifyToken, authJwt.isAdmin], controller.createProperty)
  app.get('/api/property', controller.getProperties)
  app.get('/api/property/id', controller.getPropertyById)
}