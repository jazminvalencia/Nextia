let csvToJson = require('convert-csv-to-json');
const db = require("../models");
const Good = db.good;
const User = db.user;
const bcrypt = require('bcrypt');
const saltRounds = 10;


let main = async () => {
    let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("data.csv");
    let user_id = null;
    let users = await User.findAll({});
    if (!users.length) {
        let password = await bcrypt.hash('123', saltRounds); 
        let data = await User.create({name: 'luis', user: 'jojo', password });
        user_id = data.id;
    } else {
        user_id = users[0].id
    }
   for(let i=0; i<json.length;i++) {
        let good = {id: json[i].id ,userId: user_id, article: json[i].articulo, description: json[i].descripcion};
        Good.create(good)
        .then(data => {
            
        }).catch(err => {
            console.log(err);
        });
    }
}

main();