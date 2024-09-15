import express from "express";
import { db } from "../mongodb-connection.js";

const getUserRouter = express.Router()
getUserRouter.get("/", async(req, res) => {
    const userobj = await db.collection("User").find({}).toArray()
    res.send(userobj)
})

getUserRouter.delete("/:email", async(req, res) => {
    const userData = req.params;
    await db.collection("User").deleteOne({email:userData.email})
    res.send({msg:"Deleted successfully"})
})

getUserRouter.put("/", async(req, res)=> {
    const userData = req.body;
    await db.collection("User").updateOne({email:userData.email},{$set:{jobrole:userData.role, isForm:false}})
    res.send({msg:"Update successfully"})
})

export default getUserRouter