const loginRouter = require("express").Router()

loginRouter.post("/", (req, res) => {
    console.log(req.fields)
    const { user, pwd } = req.fields
    if(!user || !pwd ){
        res.status(400).send("username or password missing")
    } else if ( user === "mark" && pwd === "giraffe") {
        res.status(200).send("welcome")
    } else {
        res.status(403).send("access denied")
    }


    console.log(fields)
})

module.exports = loginRouter