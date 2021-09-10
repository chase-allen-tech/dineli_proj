module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define('orders', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: { type: Sequelize.INTEGER },
      status: { type: Sequelize.INTEGER },
      totalPrice: { type: Sequelize.FLOAT },
      count: { type: Sequelize.INTEGER },
      paymentMethod: { type: Sequelize.INTEGER },
  })
  return Order
}
