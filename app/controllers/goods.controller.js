const db = require("../models");
const Goods = db.good;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
   const good = {
      article: req.body.article,
      description: req.body.description,
      userId: req.body.userId
   };
 
   try{
      let data = await Goods.create(good);
      res.send(data);
   } catch (err){
      res.status(500).send({
         message:
            err.message || "Some error occurred while creating the good."
       });
   }
 };


exports.findAll = async (req, res) => {
   try {
      let data = await Goods.findAll({});
      res.send(data);
   } catch(err) {
      res.status(500).send({
         message:
           err.message || "Some error occurred."
       });
   }
};



