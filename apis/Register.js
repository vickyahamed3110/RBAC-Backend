import express from "express";
import { db } from "../mongodb-connection.js";
import bcrypt from "bcrypt";

const registerRouter = express.Router()
registerRouter.post ("/", async (req,res) => {
    const userData = req.body
    console.log(userData.role);
    const role = userData.role;
        if (role === "Admin"){
            bcrypt.hash(userData.password, 10,  async function(err, hash) {
                if (err){
                    res.status(500).send({msg:"something error in your password"});
                } else {
                    await db.collection("Admin").insertOne({...userData, password:hash, date:Math.floor(1 + Math.random() * 10)})
                    res.send({msg:"Admin created sucessfully", code:0});
                }
            });
            
        } else if (role === "User") {
            bcrypt.hash(userData.password, 10,  async function(err, hash) {
                if (err){
                    res.status(500).send({msg:"something error in your password"});
                } else {
                    await db.collection("User").insertOne({...userData, password:hash, date:Math.floor(1 + Math.random() * 10),
                        jobrole:"unassigned", isForm:false
                    })
                    res.send({msg:"User created sucessfully", code:0});
                }
            });
             } 
        else {
            res.status(403).send({msg:"email already existed", code:1});
        }
    })

export default registerRouter;