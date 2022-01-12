
const authRoutes = require('express').Router();
const User = require('../model/User')
// const Joi = require('joi');
authRoutes.post('/register', (req, res) => {
  res.send('register');
})
//validation
// const Schemaa=Joi.object({
//   name:Joi
//   .string()
//   .required(),
//   email:Joi
//   .string()
//   .lowercase()
//   .min(3)
//   .required()
//   .email(),
//   password:Joi
//   .string()
//   .min(5)
//   .required()
// })
authRoutes.post('/getRegistered', async(req, res) => {
  
  try {
    // const validation =await Joi.validateAsync(req?.body,Schemaa)
    // console.log(validation,Schemaa);
  if (req.body?.name || req.body?.email || req.body?.password) {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    user.save((err, data) => {
      console.log('error', err);
      console.log("data", data);
    })
    res.send(user)
    console.log("users", user);
    console.log("name", req.body?.name);
    console.log("email", req.body?.email);
    console.log("password", req.body?.password);
  }
  else {
    console.log("error");
  }

  } catch (err) {
    console.log('not working');
  }

})


module.exports = authRoutes;