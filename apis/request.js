import express from 'express'
import { db } from '../mongodb-connection.js'
const request = express.Router() 
request.get('/', async(req, res) => {
    const data = await db.collection('User').find({isAccepted:'requested'}).toArray()
    res.send(data)
})

export default request;