const pool = require("./../utils/bd");
const TABLA_PRODUCTOS = "productos"
const T_PRODUCTOS_IMAGENES =  "productos_imagenes";


const get = async () => {
    const query = "SELECT p.*, p_i.uid FROM ?? AS p JOIN ?? AS p_i ON p.id = p_i.id_producto WHERE habilitado = true";
    const params = [TABLA_PRODUCTOS,T_PRODUCTOS_IMAGENES];
    return await pool.query(query,params);
}
const single = async (id) => {
    const query = "SELECT p.*, p_i.uid FROM ?? AS p JOIN ?? AS p_i ON p_i.id_producto = p.id WHERE p.id = ? AND habilitado = true"
    const params = [TABLA_PRODUCTOS,T_PRODUCTOS_IMAGENES, id];
    return await pool.query(query,params);
}
const create = async(obj) => {
    const query = "INSERT INTO ?? SET ?"
    const params = [TABLA_PRODUCTOS,obj];
    return await pool.query(query,params);
}
const update = async(id,obj) =>{
    const query = 'UPDATE ??  SET ? WHERE id = ?';
    const params = [TABLA_PRODUCTOS,obj,id];
    return await pool.query(query,params);
    
}
const borrar = async(id) =>{
    const query = 'UPDATE ?? SET habilitado = false WHERE id = ?';
    const params = [TABLA_PRODUCTOS, id];
    return await pool.query(query,params);
}
const createImg = async (obj) => {
    const query = "INSERT INTO ?? SET ?"
    const params = [T_PRODUCTOS_IMAGENES,obj];
    return await pool.query(query,params);
}

module.exports = {get,single,create,createImg,update,borrar}