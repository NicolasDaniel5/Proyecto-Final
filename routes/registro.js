var express = require('express');
var router = express.Router();
const model = require('./../models/usuarios');
const sha1 = require('sha1');
const {send} = require('./../service/mail');
const {verifyRegis} = require('./../midlewares/users')


router.get('/', (req,res) => {
    res.render('registro');        

});



const create = async(req,res) => {
    req.body.password = sha1(req.body.password);
    const obj = req.body;
    const nuevoUsuario = await model.create(obj);
    res.redirect('/');
}
const getCreate = (req,res) => {
    res.render ('registro');
    
}

router.post('/create',verifyRegis,create);
router.get('/create',getCreate);

module.exports = router;


//method para form, POST para registrar usuario y action es para donde quiero mandarlo