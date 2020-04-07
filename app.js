const express = require("express")
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.static("public"))
const bodyParser = require('body-parser')
const exerciseRouter = require("./controllers/exercise")
const loginRouter = require("./controllers/login")
//for accessing the form data
const formidable = require('express-formidable');
const path = require("path")

app.get("/api", (req, res) => {
    res.json({msg: "Hello, World!"})
})
app.get("/hello", (req, res) => {
    console.log(`${__dirname}/index.html`)
    
    res.sendFile(path.join(__dirname + "/index.html"))
})
//controller middlewares
app.use(bodyParser.json())
app.use(formidable())
app.use("/api/exercise", exerciseRouter)
app.use("/api/login", loginRouter)




app.listen(3000, () => {
    console.log("listening on port 3000")
})