const clienteService = require('../services/cliente.service');


const getAll =  async ( req, res ) => {  //OBTENER TODOS LOS PACIENTES
    try {
        const result = await clienteService.getAll();
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ error });
    }
}

const getApellidoNombre  =  async ( req, res ) => {  //OBTENER TODOS LOS PACIENTES
    try {
        const result = await clienteService.getApellidoNombre(req.params);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ error });
    }
}

const getId  =  async ( req, res ) => {  //OBTENER TODOS LOS PACIENTES
    try {
        const result = await clienteService.getId(req.params);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ error });
    }
}

const create =  async ( req, res ) => { 
    try {
        const result = await clienteService.create(req.body);
        res.status(200).send({result});
    } catch (error) {
        res.status(400).send({ error });
    }
}

const deleteCliente =  async ( req, res ) => { 
    try {
        const result = await clienteService.deleteCliente(req.params);
        res.status(200).send({result});
    } catch (error) {
        res.status(400).send({ error });
    }
}

const deleteId =  async ( req, res ) => { 
    try {
        const result = await clienteService.deleteId(req.params);
        res.status(200).send({result});
    } catch (error) {
        res.status(400).send({ error });
    }
}

const update =  async (  req, res ) => { 
    try {
        const result = await clienteService.update(req.params, req.body);
        res.status(200).send({result});
    } catch (error) {
        res.status(400).send({ error });
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