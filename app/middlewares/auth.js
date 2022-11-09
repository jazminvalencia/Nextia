const { SECRET } =  require('../env/config');
const jwt = require("jsonwebtoken");
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, SECRET, (err, currentUser) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.currentUser = currentUser;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = {authenticateJWT}