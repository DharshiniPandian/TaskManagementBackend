const express = require('express')
const dotenv = require('dotenv')
const sequelize = require('./config/db')
const cors = require('cors')

dotenv.config()

const app = express()

const PORT = process.env.PORT || 8081;

app.use(express.json())

app.use(cors({
    origin: ["http://localhost:5173"],
    allowedHeaders: ['Content-Type'],
    methods: ["POST", "GET", "PUT", "OPTIONS"],
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('request received')
})


app.listen(PORT, () => {
    console.log("server is listening")
})
