const joi = require('@hapi/joi');


const schemas = {
    auth: joi.object().keys({
        username: joi.string().required(),
        password: joi.string().min(3).max(10).required(),

    })
}

const schemas2 = {
    auth: joi.object().keys({
        nombre: joi.string().required(),
        apellido: joi.string().required(),
        mail: joi.string().required(),
        username: joi.string().required(),
        password: joi.string().min(3).max(10).required(),
    })
}

module.exports = {schemas,schemas2}