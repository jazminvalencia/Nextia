const { PORT,NODE_ENV } =  require('./app/env/config');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { authenticateJWT } = require("./app/middlewares/auth")
console.log(NODE_ENV);
var path = require('path');
global.appRoot = path.resolve(__dirname);

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/dist'));

app.use('/static', express.static('public'));

const db = require("./app/models");
const { Console } = require('console');

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
require("./app/routes/auth.route")(app);
app.use(authenticateJWT);
require("./app/routes/goods.route")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
