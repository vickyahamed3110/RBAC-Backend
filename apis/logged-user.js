import express from 'express'
import { db } from '../mongodb-connection.js'
const loggedRouter = express.Router()
loggedRouter.get('/:email', async (req, res) => {
    const {email} = req.params
   const data = await db.collection('User').findOne({email:email})
    res.send(data)
})

export default loggedRouter;