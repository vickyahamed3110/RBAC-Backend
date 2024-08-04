import express from "express"
import { db } from "../mongodb-connection.js";
const roleRouter = express.Router()
roleRouter.put("/", async(req, res)=> {
    const userData = req.body;
    console.log(userData)
    await db.collection("User").updateOne({email:userData.useremail},{$set:{isForm:true}})
    res.send({msg:"role change successfully"})
})


export default roleRouter