const { good } = require("../models");
const db = require("../models");
const Users = db.user;
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.login = async (req, res, next) => {
  let { user, password } = req.body;
  
  let existingUser;
  try {
    existingUser = await Users.findOne({where: { user: user }});
    let comparepass = await bcrypt.compare(password, existingUser.password)
    if (!existingUser || !comparepass) {
      const error = Error("Wrong details please check at once");
      return next(error);
    }

     token = jwt.sign(
      { id: existingUser.id, user: existingUser.user },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );

    res
    .status(200)
    .json({
      success: true,
      data: {
        id: existingUser.id,
        user: existingUser.user,
        token: token,
      },
    });

  } catch {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
};

exports.signUp = async (req, res, next) => {
   let { name, user, password } = req.body;
   password = await bcrypt.hash(password, saltRounds);
  const newUser = {
    name,
    user,
    password,
  };
 
  try {
      let token;
      let data = await Users.create(newUser);
      token = jwt.sign(
         { userId: data.id, user: data.user },
         "secretkeyappearshere",
         { expiresIn: "1h" }
       );
       res
       .status(201)
       .json({
         success: true,
         data: { userId: newUser.id,
            user: newUser.user, token: token },
       });
  } catch (err){
      res.status(500).send({
         message:
            err.message || "Some error occurred."
      });
   }
}