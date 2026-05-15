import express from 'express'
import db from './src/config/db.js'
import userRoutes from './src/routers/user.routes.js'

const app = express()

app.use(express.json())

app.use('/users', userRoutes)

app.listen(3000, ()=>{
    console.log("Running...http://localhost:3000/")
})
