const Admin = require('../models/Admin');

class SiteController{
    index(req, res, next) {
        Admin.find({})
            .then(admin=>res.json(admin))
            .catch(next);
    }
}
module.exports= new SiteController();