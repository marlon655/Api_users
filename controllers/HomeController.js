class HomeController{

    async index(req, res){
        res.send("Minha ApiRest - Express");
    }

    async validate(req,res){
        // res.status(200);
        res.send("ok!");
    }

}

module.exports = new HomeController();