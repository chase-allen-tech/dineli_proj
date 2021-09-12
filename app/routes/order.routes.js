const {authJwt} = require('../middleware')
const controller = require('../controllers/order.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    )
    next()
  })

  app.post('/api/admin/order/update', [authJwt.verifyToken], controller.saveOrder)
  app.post('/api/admin/order', [authJwt.verifyToken], controller.createOrder)
  app.get('/api/order', controller.getOrders)
}