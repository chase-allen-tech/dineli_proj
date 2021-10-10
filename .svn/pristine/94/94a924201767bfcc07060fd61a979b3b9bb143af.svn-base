module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define('orders', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: { type: Sequelize.INTEGER },
      status: { type: Sequelize.STRING },
      totalPrice: { type: Sequelize.FLOAT },
      count: { type: Sequelize.INTEGER },
      paymentMethod: { type: Sequelize.STRING },
      details: { type: Sequelize.STRING },
      signatureId: { type: Sequelize.STRING }
  })
  return Order
}
