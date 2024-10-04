const {Sequelize} = require('sequelize')
const config = require('./config.json')
const dotenv = require('dotenv')

dotenv.config()

const env = process.env.NODE_ENV || 'development'
const dbconfig = config[env]

if(!dbconfig){
    console.log(`No database configuration found for environment: ${env}`)
    process.exit(1)
}

const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
    host: dbconfig.host,
    dialect: dbconfig.dialect,
})

sequelize.authenticate()
    .then(() => console.log('Database connection established'))
    .catch(err => {
        console.error('Unable to connect to the database: ', err)
        process.exit(1)
    })

module.exports = sequelize
