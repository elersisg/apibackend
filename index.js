const express = require ('express')
const mongoose =  require("mongoose")
const bodyParser = require("body-parser")
const authRouter =  require ("./src/routes/auth.js")

const app = express()
const port = 3000
const db = "mongodb+srv://elersisg:<gabriel040805>@cluster0.i75o9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//Middleware 
app.use(express.json())
app.use(authRouter)

mongoose.connect(db).then(()=>{
    console.log("MongoDB Connected")
})
app.listen (port, () => console.log('Example app listening on port ${port}!'))

