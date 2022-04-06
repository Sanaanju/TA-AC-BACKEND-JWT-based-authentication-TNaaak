var jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = {
    verifyToken: (req, res, next) => {
        var token = req.headers.authorization;
        try {
            if(token) {
                var payload = jwt.verify(token, process.env.SECRET);
                req.user = payload;
                next();
            }
            else {
                res.status(400).json({ error: "Token Required" });
            }
        } catch (error) {
            next(error);
        }
    }
}