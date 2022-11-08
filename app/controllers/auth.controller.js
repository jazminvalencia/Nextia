const { good } = require("../models");
const db = require("../models");
const Users = db.user;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");

// Handling post request

exports.login = async (req, res, next) => {
  let { user, password } = req.body;
 
  let existingUser;
  try {
    existingUser = await Users.findOne({where: { user: user }});

    console.log(existingUser.id,'fghjs');
    if (!existingUser || existingUser.password != password) {
      const error = Error("Wrong details please check at once");
      return next(error);
    }

     //Creating jwt token
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
   const { name, user, password } = req.body;
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