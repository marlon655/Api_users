var jwt = require("jsonwebtoken");
var secret = "qwe123";

module.exports = function(req, res, next){
    const authToken = req.headers['authorization']

    if(authToken != undefined){
        const bearer =  authToken.split(' ');
        var token = bearer[1];

        try {
            var decoded = jwt.verify(token,secret);  

            // console.log(decoded.role);
            if(decoded.role == 1){
                next();
            }else{
                res.status(403);
                res.send("Você não é administrador!");
                return;
            }
        } catch (error) {
            res.status(403);
            res.send("Você não está autenticado!");
            return;
        }
    }else{
        res.status(403);
        res.send("Você não está autenticado!");
        return;
    }
}