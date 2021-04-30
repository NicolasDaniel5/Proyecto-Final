const express = require ('express');
const router = express.Router();
const model = require('../models/usuarios');
const { route } = require('./admin/productos');
const sha1 = require('sha1');
const {verifyLogin} = require('./../midlewares/users')

const get = (req,res) => {
    res.render('login');

}
const login = async (req,res) => {
        try{
        req.body.password = sha1(req.body["password"]);
        var obj = req.body;
        var result = await model.auth(obj);
        console.log(result);
        if(result.length === 0){
            res.render('login',{message: "Usuario o contraseña incorrecta"});
        }

        const [{id,tipo_usuario}] = result;
        console.log(id,tipo_usuario);
        req.session.idUser = id;
        req.session.admin = tipo_usuario;
        if(req.session.admin == 1){
            res.redirect('/admin/usuarios');
        }else{
            res.redirect('/');
            }
    }
    catch(e){
        console.log(e);
    }
}

router.get('/',get);
router.post('/',verifyLogin,login);

module.exports = router;