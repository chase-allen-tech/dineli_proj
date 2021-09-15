module.exports = (sequelize, Sequelize) => {
  const Credential = sequelize.define('credentials', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      blockchainId: { type: Sequelize.INTEGER },
      infuraProjectEndpoint: { type: Sequelize.STRING },
      walletPublicKey: { type: Sequelize.STRING },
      walletPrivateKey: { type: Sequelize.STRING },
      paypalAppClientId: { type: Sequelize.STRING },
      coinbaseApiKey: { type: Sequelize.STRING },
      hellosignApiKey: { type: Sequelize.STRING },
      hellosignClientId: { type: Sequelize.STRING },
  })
  return Credential
}
