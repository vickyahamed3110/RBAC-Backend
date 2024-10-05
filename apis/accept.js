import express from 'express'
import { db } from '../mongodb-connection.js'
const acceptRouter = express.Router()
acceptRouter.put('/:email', async(req, res) => {
const {email} = req.params
await db.collection('User').updateOne({email:email}, {$set:{isAccepted:'accepted'}}) 
res.send({message:"User accepted Successfully"}) 
})

export default acceptRouter
