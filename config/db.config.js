const config = require('./config')
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  define: {
    freezeTableName: true,
    timestamps: true,
  },
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize
db.sequelize
  .authenticate()
  .then((res) => {
    console.log("db connected", res);
  })
  .catch((err) => {

  });

db.employee = require("../model/employee.model.js")(sequelize, Sequelize);


db.sequelize.sync({ alter: true });

module.exports = db;