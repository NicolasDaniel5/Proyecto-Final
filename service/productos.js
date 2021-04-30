const {create,createImg} = require('./../models/productos');
const {imgFile} = require('./../utils/fileHandler');

const createProducto = async(body,file) => {
    try{
        const {insertId: id_producto} = await create(body);
        const uid = imgFile(file);
        const obj = {id_producto, uid};
        const {insertId : idFile} = await createImg(obj);
        return idFile;
    }
    catch(e){
        console.error(e);
    }
}

module.exports = {createProducto};