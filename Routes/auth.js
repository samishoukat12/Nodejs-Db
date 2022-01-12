
const authRoutes = require('express').Router();
const User = require('../model/User')

authRoutes.post('/register', (req, res) => {
  res.send('register');
})

authRoutes.post('/getRegistered', async (req, res) => {

  try {

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

  } catch (error) {
    console.log('not working');
  }

})


module.exports = authRoutes;