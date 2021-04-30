const pool = require("./../utils/bd");
const TABLA_USUARIOS = "usuario";


const get = async(habilitado) => {
    const query = "SELECT id,username, password, tipo_usuario FROM ?? WHERE habilitado = ?";
    const params = [TABLA_USUARIOS,habilitado]
    return await pool.query(query,params)
}
const single = async(id) =>{
    const query = "SELECT * FROM ?? WHERE id = ? AND habilitado = true";
    const params = [TABLA_USUARIOS,id];
    return await pool.query(query,params);

}
const convert = async(tipo_usuario,id) => {
    const query = "UPDATE ?? SET tipo_usuario = ? WHERE id = ?";
    const params = [TABLA_USUARIOS,tipo_usuario,id];
    return await pool.query(query,params);
}

const create = async(obj) => {
    const query = 'INSERT INTO ?? SET ?';
    const params = [TABLA_USUARIOS,obj];
    return await pool.query(query,params);
}
const update = async(id,obj) =>{
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [TABLA_USUARIOS,obj,id];
    return await pool.query(query,params);
}
const borrar = async(id) => {
    const query = "UPDATE ?? SET habilitado = false WHERE id = ?";
    const params = [TABLA_USUARIOS,id];
    return await pool.query(query,params);
}
const auth = async ({username,password}) => {
    const query = "SELECT id, tipo_usuario FROM ?? WHERE username = ? AND password";
    const params = [TABLA_USUARIOS,username,password];
    return await pool.query(query,params);
}


module.exports = {get,single,convert,create,update,borrar,auth}