const {schemas} = require ('../schemas/Users');
const {schemas2} = require ('../schemas/Users');

const verifyLogin = (req, res, next) => {
    const {error, value} = schemas.auth.validate(req.body);
    error ? res.status(422).json({error : error.details[0].message}) : next();
}

const verifyRegis = (req,res,next) => {
    const {error,value} = schemas2.auth.validate(req.body);
    error ? res.status(422).json({error: error.details[0].message}) : next();
}

module.exports = {verifyLogin,verifyRegis};