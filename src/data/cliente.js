const { where } = require('sequelize');
const db = require('../../models');

async function getAll() {
    try {
        const result = await db.Clientes.findAll();
        return { result, status: true };
    } catch (error) {
        return { msg: error, status: false };
    }
}

async function getApellidoNombre(apellido, nombre) {
    try {
        const result = await db.Clientes.findAll({
            where: {
                apellido,
                nombre
            }
        });
        return { result, status: true };
    } catch (error) {
        return { msg: error, status: false };
    }
}

async function getId(id) {
    try {
        const result = await db.Clientes.findAll({
            where: {
                id
            }
        });
        return { result, status: true };
    } catch (error) {
        return { msg: error, status: false };
    }
}

async function create(body) {  // OBTENER ANTECEDENTE POR ID
    let nombre = body.nombre;
    let apellido = body.apellido;
    let fecha_nacimiento = body.fecha_nacimiento;
    let domicilio = body.domicilio;
    let telefono = body.telefono;
    let email = body.email;

    try {
        const result = await db.Clientes.create({ nombre, apellido, fecha_nacimiento, domicilio, telefono, email });
        return { msg: "Se creo con exito el Clientes", status: true, result };
    } catch (error) {
        return { msg: error, status: false };
    }
}

async function deleteCliente(nombre, apellido) {  // OBTENER ANTECEDENTE POR ID
    try {
        const result = await db.Clientes.destroy({ where: { apellido, nombre } });
        return { status: true, result };
    } catch (error) {
        return { msg: error, status: false };
    }
}


async function deleteId(id) {  // OBTENER ANTECEDENTE POR ID
    try {
        const result = await db.Clientes.destroy({ where: { id } });
        return { status: true, result };
    } catch (error) {
        return { msg: error, status: false };
    }
}

async function update(id, body) {  // OBTENER ANTECEDENTE POR ID
    let nombre = body.nombre;
    let apellido = body.apellido;
    let fecha_nacimiento = body.fecha_nacimiento;
    let domicilio = body.domicilio;
    let telefono = body.telefono;
    let email = body.email;

    try {
        const result = await db.Clientes.update({ nombre, apellido, fecha_nacimiento, domicilio, telefono, email }, {where: {id}});
        return { msg: "Se actualizo con exito el Clientes", status: true, result };
    } catch (error) {
        return { msg: error, status: false };
    }
}

module.exports = {
    getAll,
    getApellidoNombre,
    getId,
    create,
    deleteCliente,
    deleteId,
    update
}