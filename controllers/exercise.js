const exerciseRouter = require("express").Router()

//2. GET-parametrit ja lomakedata 
exerciseRouter.get("/", (req, res) => {
    if(req.query) {
        res.status(200).json(req.query)
    }
    
})
//3. POST-parametrit ja html-vastaus
exerciseRouter.post("/", (req, res) => {
    const fields = req.fields
    var liElements = ""
    for (field of Object.entries(fields)){
        liElements += `<li>${field[0]}: ${field[1]}</li>`
    }

    res.send(`<h1>Hello from Express!</h1>
    <h2>POST parameters</h2>
    <p>I received these parameters: </p>
    <ul>
     ${liElements}
    </ul> 
    `)
})


module.exports = exerciseRouter