const { good } = require("../models");
const db = require("../models");
const Goods = db.good;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
   const good = {
      article: req.body.article,
      description: req.body.description,
      userId: req.currentUser.id
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

exports.update = async (req, res) => {
   const id = req.params.id;
   const good = {
      article: req.body.article,
      description: req.body.description,
      userId: req.body.userId
   }
   
   try{
      let data = await Goods.update(good, {where: { id: id }});
      if (data == 1) {
         res.send({
           message: "Tutorial was updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
         });
       }
      res.send(data);
   } catch (err) {
      console.log(err);
      res.status(500).send({
         message:
         err.message || "Error updating Tutorial with id=" + id
       });
   }
};

exports.destroy = async (req, res) =>{
   const id = req.params.id;
   try{
      let data = await Goods.destroy({where: { id: id }});
      res.send(data);
   } catch (err) {
      res.status(500).send({
         message:
         err.message || "Error updating Tutorial with id=" + id
       });
   }
}

exports.multiId = async (req, res) => {
   const id = req.body.goodsIds;
   
   try {
      let data = await Goods.findAll({where: {id: id}});
      res.send(data);
   } catch(err) {
      res.status(500).send({
         message:
           err.message || "Some error occurred."
       });
   }
};

