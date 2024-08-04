// import express from "express";
// import { db } from "../mongodb-connection.js";
// import { mailOptions, transporter } from "../mail-utils.js";
// const route = express.Router();
// forgetPasswordRouter.post("/", async (req,res) => {
// const userData = req.body;
// console.log(userData)
// console.log(userData.email)
// const adminobj = await db.collection("Admin").findOne({email:userData.email})
// const userobj = await db.collection("User").findOne({email:userData.email})
// if(adminobj){
//   const createotp = await db.collection("Admin").updateOne({email:userData.email},{$set:{otp:Math.floor(100000 + Math.random() * 900000)}})
//   const getotp = await db.collection("Admin").findOne({email:userData.email})
//   console.log(getotp)
//   console.log(getotp.otp)
//   res.send({msg:"forget password api works sucessfully"})
// } else {
//   res.status(500).send({msg:"something went wrong"})
// }
// })
// route.post('/text-mail', (req, res) => {
//   const {to, subject, text } = req.body;
//   const mailData = {
//       from: 'vignesh.bl90@gmail.com',
//       to: to,
//       subject: subject,
//       text: text,
//       html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
//   };

//   transporter.sendMail(mailData, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       res.status(200).send({ message: "Mail send", message_id: info.messageId });
//   });
// });


// export default fo
