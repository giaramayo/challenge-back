const clienteRepository = require('../data/cliente')

// export const getAll = async() => {

//     const clientes = await Cliente.findAll();

//     res.json({ clientes });
// }


module.exports = {  

    getAll: () => {
        return clienteRepository.getAll();
    },
    getApellidoNombre: (params) => {
        if( !param.apellido && !param.nombre ) {
            throw new Error('Se requiere apellido y nombre de cliente para poder realizar la consulta.');
        }
        return clienteRepository.getApellidoNombre(params.apellido, params.nombre);
    },
    getId: (params) => {
        if( !param.id ) {
            throw new Error('Se requiere un id de cliente para poder realizar la consulta.');
        }
        return clienteRepository.getId(params.id);
    },
    create : ( body ) => {
        //validar datos
        return clienteRepository.create(body);
    },

    deleteCliente : ( params ) => {
        if( !params.apellido && !params.nombre ) {
            throw new Error('Se requiere apellido y nombre de cliente para poder eliminar el cliente.');
        }
        return clienteRepository.deleteCliente(params.nombre, params.apellido);
    },
    deleteId :  (params) => {
        if( !params.id ) {
            throw new Error('Se requiere un id de cliente para poder eliminar el cliente.');
        }
        return clienteRepository.deleteId(params.id);
    },
    update : ( params, body ) => {
        //validar datos
        return clienteRepository.update(params.id, body);
    },
};