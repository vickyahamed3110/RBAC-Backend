import express from "express";
import { db } from "../mongodb-connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const loginRouter = express.Router();
loginRouter.post("/", async (req, res) => {
    const userData = req.body;
    console.log("userinput",userData);
    const inputPassword = userData.password;
    const adminobj = await db.collection("Admin").findOne({email:userData.email});
    const userobj = await db.collection("User").findOne({email:userData.email})
   
    if (adminobj){
        bcrypt.compare(inputPassword, adminobj.password, async function(err, result){
            if (err){
              res.status(500).send({msg:"something went wrong"});  
            } else {
                if (result){
                    const admin_details = await db.collection("Admin").findOne({email:userData.email},{projection:{role:1, _id:0}})
                    console.log(admin_details)
                    var token = jwt.sign(admin_details, process.env.JWT_SECRET );
                    console.log(token)
                    res.send({login:"login Successfully", code:1, role:token});
                } else {
                    res.status(404).send({msg:"incorrect password", code:0});
                }
            } 
        }
    
    )
    }
    else if(userobj){
        bcrypt.compare(inputPassword, userobj.password, async function(err, result){
            if (err){
              res.status(500).send({msg:"something went wrong"});  
            } else {
                if (result){
                    const user_details = await db.collection("User").findOne({email:userData.email},{projection:{role:1, _id:0}})
                    console.log(user_details)
                    var token = jwt.sign(user_details, process.env.JWT_SECRET );
                    console.log(token)
                    res.send({login:"login Successfully", code:1, role:token});
                } else {
                    res.status(404).send({msg:"incorrect password", code:0});
                }
            } 
        }
    
    )
    } else {
        res.status(500).send({msg:"you are not user please register your account", code:0});
    }
})


export default loginRouter