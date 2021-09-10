module.exports = (sequelize, Sequelize) => {
  const Site = sequelize.define('sites', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    keywords: { type: Sequelize.STRING },
    address: { type: Sequelize.STRING },
    telephone: { type: Sequelize.STRING },
    language: { type: Sequelize.STRING },
  })
  return Site
}
