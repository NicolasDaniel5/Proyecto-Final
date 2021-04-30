var express = require('express');
var router = express.Router();
const model = require('./../models/carrito');

const get = async(req,res) => {
    const id_usuario = req.session.idUser;
    const carrito = await model.get(id_usuario);
    var precioFinal = 0;
    carrito.forEach(item => {
        precioFinal += item.precio_final;
    });
    res.render('carrito',{carrito,precioFinal});
}

const borrar = async(req,res) => {
    const id = req.params.id;
    const borrado = await model.borrar(id);
    res.redirect('/carrito');
}

router.get('/',get);
router.get('/delete/:id',borrar);
module.exports = router;