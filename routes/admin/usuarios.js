const express = require ('express');
const router = express.Router();
const model = require('../../models/usuarios');
const { route } = require('./productos');
const sha1 = require('sha1');

const get = async (req,res) => {
    const usuarios = await model.get(true);
    res.render('usuarios',{usuarios});

}
const convert = async(req,res) => {
    const id = req.params.id;
    const user = await model.single(id);
    var admin = 0;
    user.forEach(usuario => {
    if(usuario.tipo_usuario == 0){
        admin = 1;
    }
    });
    const convertir = await model.convert(admin,id);
    res.redirect('/admin/usuarios');

}
const single = async(req,res) => {
    const id = req.params.id;
    const usuario = await model.single(id);
    res.render('usuario',{usuario});
}
/*const create = async(req,res) => {
    req.body.password = sha1(req.body.password);
    const obj = req.body;
    const nuevoUsuario = await model.create(obj);
    res.redirect('/admin/usuarios');
}
const getCreate = (req,res) => {
    res.render ('registro');
    
}*/

const getUpdate = async(req,res) => {
    const id = req.params.id;
    const usuario = await model.single(id);
    res.render ('ModificarUsuario',{usuario});
}
const update = async(req,res) => {
    const id = req.params.id;
    const userModif = req.body;
    const modificar = await model.update(id,userModif);
    res.redirect('/admin/usuarios');
}
const borrar = async(req,res) => {
    const id = req.params.id;
    const borrado = await model.borrar(id);
    res.redirect('/admin/usuarios');

}


router.get('/',get)
router.get('/convert/:id', convert);
router.get('/single/:id', single);
/*router.post('/create',create);
router.get('/create',getCreate);*/
router.get('/update/:id', getUpdate);
router.post('/update/:id', update);
router.get('/delete/:id', borrar);

module.exports = router;