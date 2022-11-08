module.exports = app => {
    const auth = require("../controllers/auth.controller.js");
  
    var router = require("express").Router();
  
    //router.post("/logIn", auth.login);
  
    router.post("/signUp", auth.signUp);
  
    app.use('/api/auth', router);
  };
  