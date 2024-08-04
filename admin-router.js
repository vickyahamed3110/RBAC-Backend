import express from "express";
const adminRouter = express.Router();
adminRouter.get("/admin", (req, res) => {
    res.send("data get sucessfully");

})

export default adminRouter;