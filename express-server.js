import express from "express";
import connectToDb from "./mongodb-connection.js";
import cors from "cors";
import registerRouter from "./apis/Register.js";
import loginRouter from "./apis/login.js";
import getUserRouter from "./apis/user.js";
import getAdminRouter from "./apis/admin.js";
import jwt from "jsonwebtoken";
import roleRouter from "./apis/role.js";
const server = express();
server.use(cors());
server.use(express.json());
await connectToDb();
const auth_api = (req, res, next) => {
try {
    let token = req.headers["authorization"]
    jwt.verify(token, process.env.JWT_SECRET)
    next()
} catch (error) {
    res.status(403).send({msg:"Unauthorized"})
}
}
server.use("/register", registerRouter);
server.use("/login", loginRouter);
server.use("/users", auth_api, getUserRouter);
server.use("/admin", auth_api, getAdminRouter);
server.use("/change-form", auth_api, roleRouter);
const port = 8000;
server.listen(port, () => {
    console.log("our port is running sucessful", port);
})
