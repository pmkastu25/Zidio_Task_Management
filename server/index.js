require("dotenv").config()

const express = require("express")
const cors = require("cors")
const { checkSchema } = require("express-validator")
const morgan = require('morgan')
const cron  = require('node-cron')
const db = require("./db/db.config")



const app = express()
db()



app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(express.static("public")) // public visible when in local file


//auth/user routes
const userRoutes = require('./app/routes/user.routes')
app.use("/api/auth", userRoutes);

//task routes



app.listen(process.env.PORT, () => {
    console.log("Server running on the PORT", process.env.PORT)
})