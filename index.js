const express = require ('express')
const mongoose =  require("mongoose")
const bodyParser = require("body-parser")
const authRouter =  require ("./src/routes/auth.js")

const app = express()
const port = 3000
const db = // Colocar la cadena de conexión de la base de datos
//Middleware 
app.use(express.json())
app.use(authRouter)

mongoose.connect(db).then(()=>{
    console.log("MongoDB Connected")
})
app.listen (port, () => console.log('Example app listening on port ${port}!'))

