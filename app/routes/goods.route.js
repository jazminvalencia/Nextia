module.exports = app => {
    const goods = require("../controllers/goods.controller.js");
  
    var router = require("express").Router();
  
    router.get("/", goods.findAll);
  
    app.use('/api/goods', router);
  };
  