import express from 'express'
import { db } from '../mongodb-connection.js'
const rejectRouter = express.Router()
rejectRouter.put('/:email', async(req, res) => {
const {email} = req.params
await db.collection('User').updateOne({email:email}, {$set:{isAccepted:'rejected'}})
res.send({message:"User Rejected Successfully"})  
})

export default rejectRouter
