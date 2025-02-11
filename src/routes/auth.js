const express = require("express");
const User = require("../models/user.js")
const bcrypt  = require ("bcryptjs")
const JWT = require("jsonwebtoken")

//Creamos el enrutador 

const authRouter = express.Router();


//Servicio para el registro de usuario 

authRouter.post('/api/signup', async (req, res) =>{
    try {
        //obtener los campos necesarios para crear un usuario 
        const {fullName,email,password} = req.body
        //Validamos si ese email ya esta en la base de datos 
        const existingEimail = await User.findOne({email})
        if(existingEimail){
            return res.status(400).json({msg: "Email already exist"})
        }else{
            //Crear y registrar el usuario en la BD 
            const salt = await bcrypt.genSalt()
            const hashedPassword =  await bcrypt.hash(password, salt)
            let user = new User ({fullName,email,password: hashedPassword})
            await user.save()
            res.json({user})
        }
    } catch (error) {
        res.status(500).json({error: error.message})
        console.log(error)
        
    }
})

//endpoint del login 

authRouter.post('/api/signin', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})
//tener en consideracion que el usuario exista, considerar el email, contrasena, que sea unico, 

module.exports = authRouter