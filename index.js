const express = require ('express')
const mongoose =  require("mongoose")
const bodyParser = require("body-parser")
const authRouter =  require ("./src/routes/auth.js")
require('dotenv').config(); 

const authRouter = require('./routes/auth')
const bannerRouter = require('./routes/banner')
const categoryRouter = require('./routes/category')
const subCategoryRouter = require("./routes/sub_category")
const productRouter = require('./routes/product')
const productReviewRouter = require('./routes/product_review')

const app = express()
const port = 3000
const db = process.env.DATABASE_URL;

//Middleware 
app.use(express.json())
app.use(authRouter)

app.use(authRouter)
app.use(bannerRouter)
app.use(categoryRouter)
app.use(subCategoryRouter)
app.use(productRouter)
app.use(productReviewRouter)

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(db)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ Error connecting to MongoDB:', err    
  )
);

app.listen (port, () => console.log(`Example app listening on port ${port}!`))

