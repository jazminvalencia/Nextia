module.exports = app => {
    const goods = require("../controllers/goods.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", goods.create);

    router.get("/", goods.findAll);

    router.put("/:id", goods.update);

    router.delete("/:id", goods.destroy);

    router.get("/multiId",goods.multiId);
  
    app.use('/api/goods', router);
  };
  