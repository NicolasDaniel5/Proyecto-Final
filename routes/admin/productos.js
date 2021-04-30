var express = require('express');
var router = express.Router();
const multer = require('multer');
const config = {dest: `./public/tmp`};
const upload = multer(config);
const model = require('./../../models/productos');
const service = require('./../../service/productos');
const {add} = require('./../../models/carrito');



const all = async (req,res) => {
    const productos = await model.get();
    res.render('productos',{productos});
}

const single = async(req,res) => {
    const id = req.params.id;
    const producto = await model.single(id);
    res.render('producto',{producto});
}
const create = async(req,res) => {
    const idFile = await service.createProducto(req.body,req.file);
    res.redirect('/admin/productos/list');
}
const getCreate = (req,res) => {
    res.render('AgregarProducto');
}
const getUpdate = async(req,res) => {
    const id = req.params.id;
    const producto = await model.single(id);
    res.render('ModificarProducto',{producto});
}
const update = async (req,res) => {
    const id = req.params.id;
    const empModif = req.body;
    console.log(empModif);
    const modificar = await model.update(id,empModif);
    res.redirect('/admin/productos/list');
}
const list = async (req,res) => {
    if(req.session.admin == 0){
        res.redirect('/login')
    }
    const productos = await model.get();
    res.render('listaProduc',{productos});
}
const borrar = async(req,res) => {
    const id = req.params.id;
    const borrado = await model.borrar(id);
    res.redirect('/admin/productos/list');
}
const comprar = async(req,res) => {
    const id_usuario = req.session.idUser;
    const id = req.params.id;
    const producto = await model.single(id);
    console.log(producto[0].nombre);
    console.log(producto[0].precio);
    const cantidad = req.body.cantidad;
    const obj = {
        id_usuario: id_usuario,
        nombre_producto: producto[0].nombre,
        precio: producto[0].precio,
        cantidad: cantidad,
        precio_final: producto[0].precio * cantidad,
    }
    var agregar = await add(obj);
    console.log(agregar);
    res.redirect('/carrito');
}


router.get('/', all); 
router.get('/single/:id', single);
router.post('/single/:id',comprar)
router.post('/create',upload.single("imagen"),create);
router.get('/create',getCreate);
router.get('/list',list);
router.get('/update/:id',getUpdate)
router.post('/update/:id',update);
router.get('/delete/:id',borrar);


module.exports = router;