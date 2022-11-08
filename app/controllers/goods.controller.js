const db = require("../models");
const goods = db.goods;
const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {
  goods.findAll({}).then(data => {
      res.send(data);
   }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred."
      });
   });
};

