import express from "express";
import { db } from "../mongodb-connection.js";

const getAdminRouter = express.Router()
getAdminRouter.get("/", async(req, res) => {
    const adminobj = await db.collection("Admin").find({}).toArray()
    res.send(adminobj)
})

export default getAdminRouter